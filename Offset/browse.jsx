/* browse.jsx — Browse Cards tab + card tiles */

function CardTile({ card, owned, onAdd, onRemove }) {
  const counts = cardCounts(card);
  return (
    <div className="tile">
      <div className="card-art" style={{ background: card.color }}>
        <div className="chip"></div>
        <div className="issuer">{card.issuer}</div>
        <div className="cname">{card.name}</div>
        <NetworkMark network={card.network} />
      </div>
      <div className="tile-body">
        <div className="rewards">{card.rewardsSummary}</div>
        <div className="fee-row">
          <span className="lbl">Annual fee</span>
          <span className={"val" + (card.annualFee === 0 ? " free" : "")}>
            {card.annualFee === 0 ? "No fee" : money(card.annualFee)}
          </span>
        </div>
        <div className="chips">
          <span className="chip-pill"><b>{counts.credits}</b> credits</span>
          <span className="chip-pill"><b>{counts.perks}</b> perks</span>
          <span className="chip-pill"><b>{counts.rates}</b> earn rates</span>
          <span className="chip-pill"><b>{counts.protections}</b> protections</span>
        </div>
        {owned ? (
          <button className="add-btn owned" onClick={() => onRemove(card.id)}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
              <I.check width="14" height="14" /> In your wallet
            </span>
          </button>
        ) : (
          <button className="add-btn" onClick={() => onAdd(card.id)}>+ Add to my cards</button>
        )}
      </div>
    </div>
  );
}

function BrowseTab({ cards, ownedSet, onAdd, onRemove }) {
  const [q, setQ] = useState("");
  const [issuer, setIssuer] = useState("all");

  const ql = q.trim().toLowerCase();
  const filtered = cards.filter((c) => {
    if (issuer !== "all" && c.issuer !== issuer) return false;
    if (!ql) return true;
    return (
      c.name.toLowerCase().includes(ql) ||
      c.issuer.toLowerCase().includes(ql) ||
      c.rewardsSummary.toLowerCase().includes(ql) ||
      c.network.toLowerCase().includes(ql)
    );
  });

  return (
    <div>
      <div className="toolbar">
        <div className="field search">
          <I.search />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search cards, issuers, rewards…"
          />
        </div>
        <div className="field">
          <select className="dropdown" value={issuer} onChange={(e) => setIssuer(e.target.value)}>
            <option value="all">All issuers</option>
            {window.ISSUERS.map((is) => (<option key={is} value={is}>{is}</option>))}
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="empty">
          <div className="ico"><I.search width="22" height="22" /></div>
          <h3>No cards match your search</h3>
          <p>Try a different keyword or clear the issuer filter to see the full catalog.</p>
        </div>
      ) : (
        <div className="card-grid">
          {filtered.map((c) => (
            <CardTile
              key={c.id}
              card={c}
              owned={ownedSet.has(c.id)}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}
    </div>
  );
}

Object.assign(window, { CardTile, BrowseTab });
