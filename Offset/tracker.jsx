/* tracker.jsx — My Tracker tab: wallet summary + per-card detail blocks */

/* ---------- recurring statement credit (progress bar + logging) ---------- */
function RecurringCredit({ card, credit, usage, onLog, onRemoveEntry }) {
  const cu = getCreditUsage(usage, card.id, credit.id);
  const entries = cu.entries || [];
  const used = entries.reduce((s, e) => s + (e.amount || 0), 0);
  const pct = Math.min(100, credit.value ? (used / credit.value) * 100 : 0);
  const full = used >= credit.value && credit.value > 0;
  const [amt, setAmt] = useState("");

  const submit = () => {
    const n = parseFloat(amt);
    if (!isFinite(n) || n <= 0) return;
    onLog(card.id, credit.id, Math.round(n * 100) / 100);
    setAmt("");
  };

  return (
    <div className="credit">
      <div className="credit-top">
        <div className="info">
          <div className="credit-name">
            {credit.name}
            <span className="tag-val">{money(credit.value)}</span>
            <span className="tag-freq">{freqLabel(credit.frequency)}</span>
          </div>
          <div className="credit-desc">{credit.description}</div>
        </div>
      </div>

      <div className="progress-wrap">
        <div className="progress-meta">
          <span className="used"><b>{money(used)}</b> of {money(credit.value)} used {cycleWord(credit.frequency)}</span>
          <span className={"pct" + (full ? " full" : "")}>{full ? "Maxed" : Math.round(pct) + "%"}</span>
        </div>
        <div className="bar"><div className={"fill" + (full ? " full" : "")} style={{ width: pct + "%" }}></div></div>
      </div>

      <div className="log-row">
        <div className="field-mini">
          <span className="pfx">$</span>
          <input
            type="number" min="0" step="0.01" value={amt}
            placeholder="Log usage…"
            onChange={(e) => setAmt(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
          />
        </div>
        <button className="log-btn" onClick={submit} disabled={!amt || parseFloat(amt) <= 0}>Log</button>
      </div>

      {entries.length > 0 && (
        <div className="entries">
          {entries.map((e) => (
            <div className="entry" key={e.id}>
              <div className="entry-grp">
                <span className="ea">{money(e.amount)}</span>
                <span className="ed">{e.date}</span>
              </div>
              <button className="ex" title="Remove entry" onClick={() => onRemoveEntry(card.id, credit.id, e.id)}>
                <I.x />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- one-time statement credit (checkbox) ---------- */
function OneTimeCredit({ card, credit, usage, onToggle }) {
  const cu = getCreditUsage(usage, card.id, credit.id);
  const on = !!cu.received;
  return (
    <div className="credit">
      <div className="credit-top">
        <div className="info">
          <div className="credit-name">
            {credit.name}
            <span className="tag-val">{money(credit.value)}</span>
            <span className="tag-freq">{freqLabel(credit.frequency)}</span>
          </div>
          <div className="credit-desc">{credit.description}</div>
        </div>
      </div>
      <div className="check-row">
        <button className={"checkbox" + (on ? " on" : "")} onClick={() => onToggle(card.id, credit.id)}>
          <span className="box"><I.check /></span>
          {on ? "Received / used" : "Not used yet"}
        </button>
      </div>
    </div>
  );
}

/* ---------- perk row ---------- */
function PerkRow({ card, perk, usage, onSetPerk }) {
  const stored = getPerkValue(usage, card.id, perk.id);
  const [val, setVal] = useState(stored ? String(stored) : "");

  useEffect(() => { setVal(stored ? String(stored) : ""); }, [stored]);

  const commit = (raw) => {
    const n = parseFloat(raw);
    onSetPerk(card.id, perk.id, isFinite(n) && n > 0 ? Math.round(n) : 0);
  };

  return (
    <div className="perk">
      <div className="info">
        <div className="pname">
          {perk.name}
          <span className="tag-est">{perk.estimatedValue ? "~" + money(perk.estimatedValue) + "/yr" : "your value"}</span>
        </div>
        <div className="pdesc">{perk.description}</div>
      </div>
      <div className="input-grp">
        <div className="lab">Worth to you</div>
        <div className="perk-input">
          <span className="pfx">$</span>
          <input
            className={parseFloat(val) > 0 ? "has-val" : ""}
            type="number" min="0" step="1" value={val}
            placeholder="0"
            onChange={(e) => setVal(e.target.value)}
            onBlur={(e) => commit(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") e.target.blur(); }}
          />
        </div>
      </div>
    </div>
  );
}

/* ---------- earning & rewards (interactive) ---------- */
function CurrencyWorth({ card, usage, onSetPointValue }) {
  const pv = getPointValue(usage, card);
  const [v, setV] = useState(String(pv));
  useEffect(() => { setV(String(pv)); }, [pv]);
  const commit = (raw) => {
    const n = parseFloat(raw);
    onSetPointValue(card.id, isFinite(n) && n > 0 ? n : card.pointValueCents);
  };
  return (
    <div className="currency-worth">
      <div className="cw-info">
        <div className="cw-name">{card.rewardsCurrency}</div>
        <div className="cw-sub">How much you value each point</div>
      </div>
      <div className="cw-input">
        <input type="number" min="0" step="0.05" value={v}
          onChange={(e) => setV(e.target.value)}
          onBlur={(e) => commit(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") e.target.blur(); }} />
        <span className="cw-unit">¢</span>
      </div>
    </div>
  );
}

function EarnRateRow({ card, rate, usage, onSetSpend }) {
  const key = rateKey(rate);
  const sp = getSpend(usage, card.id, key);
  const [amt, setAmt] = useState(sp.amount ? String(sp.amount) : "");
  useEffect(() => { setAmt(sp.amount ? String(sp.amount) : ""); }, [sp.amount]);
  const period = sp.period || "monthly";
  const pr = parseRate(rate.rate);
  const earned = rateEarned(card, usage, rate);
  const commit = (raw, per) => {
    const n = parseFloat(raw);
    onSetSpend(card.id, key, isFinite(n) && n > 0 ? n : 0, per);
  };
  return (
    <div className={"earn-row" + (earned.cash > 0 ? " active" : "")}>
      <div className="erate">{rate.rate}</div>
      <div className="earn-cat">
        <div className="cat">{rate.category}</div>
        <div className="det">{rate.detail}</div>
      </div>
      <div className="earn-ctrl">
        <div className="spend-field">
          <span className="pfx">$</span>
          <input type="number" min="0" step="50" value={amt} placeholder="0"
            onChange={(e) => setAmt(e.target.value)}
            onBlur={(e) => commit(e.target.value, period)}
            onKeyDown={(e) => { if (e.key === "Enter") e.target.blur(); }} />
          <div className="period-toggle">
            <button className={period === "monthly" ? "on" : ""} onClick={() => commit(amt, "monthly")}>Mo</button>
            <button className={period === "yearly" ? "on" : ""} onClick={() => commit(amt, "yearly")}>Yr</button>
          </div>
        </div>
        <div className="earned">
          <div className={"earned-cash" + (earned.cash > 0 ? " on" : "")}>{earned.cash > 0 ? money(earned.cash) : "—"}</div>
          {pr.type === "points" && earned.points > 0 && (
            <div className="earned-pts">{Math.round(earned.points).toLocaleString()} pts</div>
          )}
        </div>
      </div>
    </div>
  );
}

function EarningSection({ card, usage, handlers }) {
  const total = rewardsForCard(card, usage);
  const points = isPointsCard(card);
  return (
    <div className="section">
      <SectionHead title="Earning & rewards" hint="Enter your spend to see what you'd earn each year" />
      {points && <CurrencyWorth card={card} usage={usage} onSetPointValue={handlers.setPointValue} />}
      <div className="earn-list">
        {card.earningRates.map((r, i) => (
          <EarnRateRow key={i} card={card} rate={r} usage={usage} onSetSpend={handlers.setSpend} />
        ))}
      </div>
      <div className="earn-total">
        <span className="et-k">Estimated rewards value</span>
        <span className="et-v">{money(total)}<span className="et-yr">/yr</span></span>
      </div>
    </div>
  );
}

function ProtectionsList({ protections }) {
  return (
    <div className="prot-list">
      {protections.map((p, i) => (
        <div className="prot" key={i}>
          <div className="dot"><I.shield /></div>
          <div>
            <div className="pn">{p.name}</div>
            <div className="pd">{p.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionHead({ title, hint }) {
  return (
    <div className="sec-head">
      <div className="sec-title">{title}</div>
      {hint && <div className="sec-hint">{hint}</div>}
    </div>
  );
}

/* ---------- per-card detail block ---------- */
function CardDetail({ card, usage, open, onToggleOpen, handlers }) {
  const e = cardEconomics(card, usage);
  const recurring = card.statementCredits.filter((c) => c.frequency !== "one-time");
  const oneTime = card.statementCredits.filter((c) => c.frequency === "one-time");

  const netCls = (v) => (v >= 0 ? "good" : "warn");

  return (
    <div className="detail">
      <div className="detail-head" onClick={onToggleOpen}>
        <div className="swatch" style={{ background: card.color }}></div>
        <div className="meta">
          <div className="nm">{card.name}</div>
          <div className="sub">{card.issuer} · {card.network}{card.annualFee > 0 ? " · " + money(card.annualFee) + "/yr" : " · No annual fee"}</div>
        </div>
        <div className="head-net">
          <div className={"hn-v " + netCls(e.netAnnual)}>{signed(e.netAnnual)}</div>
          <div className="hn-k">net annual value</div>
        </div>
        <button className="remove-btn" onClick={(ev) => { ev.stopPropagation(); handlers.removeCard(card.id); }}>Remove</button>
        <I.chevron className={"chevron" + (open ? " open" : "")} />
      </div>

      {open && (
        <div className="detail-body collapse">
          {card.note && (
            <div className="callout">
              <I.warn />
              <p>{card.note}</p>
            </div>
          )}

          <div className="mini">
            <div className="cell"><div className="k">Annual fee</div><div className="v">{card.annualFee === 0 ? "$0" : money(card.annualFee)}</div></div>
            <div className="cell"><div className="k">Rewards value</div><div className="v good">{money(e.rewardsValue)}</div></div>
            <div className="cell"><div className="k">Credits captured</div><div className="v good">{money(e.creditsCaptured)}</div></div>
            <div className="cell"><div className="k">Perk value</div><div className="v good">{money(e.perkValue)}</div></div>
            <div className="cell"><div className="k">Net annual value</div><div className={"v " + netCls(e.netAnnual)}>{signed(e.netAnnual)}</div></div>
          </div>

          {card.statementCredits.length > 0 && (
            <div className="section">
              <SectionHead title="Statement credits" hint="Track how much you've used each cycle" />
              {recurring.map((c) => (
                <RecurringCredit key={c.id} card={card} credit={c} usage={usage}
                  onLog={handlers.logCredit} onRemoveEntry={handlers.removeEntry} />
              ))}
              {oneTime.map((c) => (
                <OneTimeCredit key={c.id} card={card} credit={c} usage={usage}
                  onToggle={handlers.toggleReceived} />
              ))}
            </div>
          )}

          {card.perks.length > 0 && (
            <div className="section">
              <SectionHead title="Memberships & perks" hint="Enter the value these are worth to you" />
              {card.perks.map((p) => (
                <PerkRow key={p.id} card={card} perk={p} usage={usage} onSetPerk={handlers.setPerk} />
              ))}
            </div>
          )}

          {card.earningRates.length > 0 && (
            <EarningSection card={card} usage={usage} handlers={handlers} />
          )}

          {card.protections.length > 0 && (
            <div className="section">
              <SectionHead title="Travel & purchase protections" hint="Confirm exact terms in your Guide to Benefits" />
              <ProtectionsList protections={card.protections} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ---------- tracker tab ---------- */
function TrackerTab({ cards, owned, usage, handlers, openMap, onToggleOpen, onGoBrowse }) {
  if (owned.length === 0) {
    return (
      <div className="empty">
        <div className="ico"><I.wallet width="24" height="24" /></div>
        <h3>Your wallet is empty</h3>
        <p>Add the cards you carry and start tracking how much of each benefit you actually use — to see your true net cost.</p>
        <button className="cta" onClick={onGoBrowse}>Browse cards to add</button>
      </div>
    );
  }

  const ownedCards = owned.map((id) => cards.find((c) => c.id === id)).filter(Boolean);
  const t = walletTotals(cards, owned, usage);

  return (
    <div>
      <div className="summary-grid">
        <div className="stat"><div className="k">Cards in wallet</div><div className="v">{ownedCards.length}</div></div>
        <div className="stat"><div className="k">Total annual fees</div><div className="v">{money(t.fees)}</div></div>
        <div className="stat"><div className="k">Rewards earned</div><div className="v good">{money(t.rewards)}</div></div>
        <div className="stat"><div className="k">Credits captured</div><div className="v good">{money(t.credits)}</div></div>
        <div className="stat"><div className="k">Perk value (yours)</div><div className="v good">{money(t.perks)}</div></div>
        <div className="stat feature">
          <div className="k">Net annual value</div>
          <div className={"v " + (t.net >= 0 ? "good" : "warn")}>{signed(t.net)}</div>
          <div className="sub">{t.net >= 0 ? "You're ahead across your wallet" : "Still underwater — add spend & log usage"}</div>
        </div>
      </div>

      {ownedCards.map((card) => (
        <CardDetail
          key={card.id}
          card={card}
          usage={usage}
          open={openMap[card.id] !== false}
          onToggleOpen={() => onToggleOpen(card.id)}
          handlers={handlers}
        />
      ))}
    </div>
  );
}

Object.assign(window, { TrackerTab, CardDetail });
