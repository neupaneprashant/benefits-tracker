/* app.jsx — root: state, persistence, tabs, handlers, tweaks */

const STORAGE_KEY = "ccbt:v2";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      return { owned: Array.isArray(p.owned) ? p.owned : [], usage: p.usage || {} };
    }
  } catch (e) {}
  /* first-run seed so the tracker isn't empty on first look */
  return {
    owned: ["summit-reserve", "cobalt-everyday"],
    usage: {
      "summit-reserve": {
        credits: {
          "sr-c1": { entries: [{ id: "seed1", amount: 300, date: "Mar 12" }] },
          "sr-c2": { entries: [{ id: "seed2", amount: 25, date: "May 3" }, { id: "seed3", amount: 18, date: "May 22" }] },
          "sr-c3": { received: true },
          "sr-c4": { received: true },
        },
        perks: { "sr-p1": 469, "sr-p2": 90 },
        spend: {
          "dining": { amount: 350, period: "monthly" },
          "flights": { amount: 3200, period: "yearly" },
          "other-travel": { amount: 250, period: "monthly" },
          "everything-else": { amount: 1200, period: "monthly" },
        },
      },
      "cobalt-everyday": {
        credits: { "ce-c1": { entries: [{ id: "seed4", amount: 50, date: "Feb 8" }] }, "ce-c2": { received: false } },
        perks: { "ce-p1": 120 },
        spend: {
          "dining": { amount: 320, period: "monthly" },
          "streaming": { amount: 45, period: "monthly" },
          "everything-else": { amount: 900, period: "monthly" },
        },
      },
    },
  };
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#3a468f",
  "density": "comfortable",
  "radius": 16
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const initial = React.useMemo(loadState, []);
  const [tab, setTab] = useState("tracker");
  const [owned, setOwned] = useState(initial.owned);
  const [usage, setUsage] = useState(initial.usage);
  const [openMap, setOpenMap] = useState({});

  const cards = window.SAMPLE_CARDS;
  const ownedSet = new Set(owned);

  /* persist */
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ owned, usage })); } catch (e) {}
  }, [owned, usage]);

  const today = () => new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const uid = () => Math.random().toString(36).slice(2, 9);

  /* immutable usage helpers */
  function mutateCard(cardId, fn) {
    setUsage((prev) => {
      const next = { ...prev };
      const cu = next[cardId]
        ? { ...next[cardId], credits: { ...next[cardId].credits }, perks: { ...next[cardId].perks }, spend: { ...(next[cardId].spend || {}) } }
        : { credits: {}, perks: {}, spend: {} };
      fn(cu);
      next[cardId] = cu;
      return next;
    });
  }

  const handlers = {
    addCard: (id) => setOwned((o) => (o.includes(id) ? o : [...o, id])),
    removeCard: (id) => {
      if (!confirm("Remove this card from your wallet? Your logged usage for it will be cleared.")) return;
      setOwned((o) => o.filter((x) => x !== id));
      setUsage((u) => { const n = { ...u }; delete n[id]; return n; });
    },
    logCredit: (cardId, creditId, amount) => mutateCard(cardId, (cu) => {
      const cur = cu.credits[creditId] || { entries: [] };
      cu.credits[creditId] = { ...cur, entries: [...(cur.entries || []), { id: uid(), amount, date: today() }] };
    }),
    removeEntry: (cardId, creditId, entryId) => mutateCard(cardId, (cu) => {
      const cur = cu.credits[creditId] || { entries: [] };
      cu.credits[creditId] = { ...cur, entries: (cur.entries || []).filter((e) => e.id !== entryId) };
    }),
    toggleReceived: (cardId, creditId) => mutateCard(cardId, (cu) => {
      const cur = cu.credits[creditId] || {};
      cu.credits[creditId] = { ...cur, received: !cur.received };
    }),
    setPerk: (cardId, perkId, value) => mutateCard(cardId, (cu) => { cu.perks[perkId] = value; }),
    setSpend: (cardId, key, amount, period) => mutateCard(cardId, (cu) => { cu.spend[key] = { amount: amount, period: period }; }),
    setPointValue: (cardId, cents) => mutateCard(cardId, (cu) => { cu.pointValue = cents; }),
  };

  const toggleOpen = (id) => setOpenMap((m) => ({ ...m, [id]: m[id] === false ? true : false }));

  const resetData = () => {
    if (!confirm("Reset all data? This clears your wallet and every logged benefit.")) return;
    setOwned([]); setUsage({}); setOpenMap({}); setTab("tracker");
  };

  const goBrowse = () => setTab("browse");

  return (
    <div id="app" data-density={t.density} style={{ "--accent": t.accent, "--radius": t.radius + "px" }}>
      <div className="wrap">
        <div className="appbar">
          <div className="brand">
            <div className="brand-mark">
              <I.card stroke="#fff" />
            </div>
            <div>
              <h1>Benefits Tracker</h1>
              <p>See the true net cost of your cards after the credits you actually use.</p>
            </div>
          </div>
          {owned.length > 0 && (
            <button className="reset-btn" onClick={resetData}>Reset data</button>
          )}
        </div>

        <div className="tabs">
          <button className={"tab" + (tab === "tracker" ? " active" : "")} onClick={() => setTab("tracker")}>
            My Tracker <span className="count">{owned.length}</span>
          </button>
          <button className={"tab" + (tab === "browse" ? " active" : "")} onClick={() => setTab("browse")}>
            Browse Cards
          </button>
        </div>

        {tab === "tracker" ? (
          <TrackerTab
            cards={cards} owned={owned} usage={usage} handlers={handlers}
            openMap={openMap} onToggleOpen={toggleOpen} onGoBrowse={goBrowse}
          />
        ) : (
          <BrowseTab cards={cards} ownedSet={ownedSet} onAdd={handlers.addCard} onRemove={handlers.removeCard} />
        )}
      </div>

      <TweaksPanel>
        <TweakSection label="Appearance" />
        <TweakColor label="Accent" value={t.accent}
          options={["#3a468f", "#1f6f54", "#a9512f", "#6f4a86", "#3f4654"]}
          onChange={(v) => setTweak("accent", v)} />
        <TweakRadio label="Density" value={t.density}
          options={["comfortable", "compact"]}
          onChange={(v) => setTweak("density", v)} />
        <TweakSlider label="Corner radius" value={t.radius} min={6} max={20} step={1} unit="px"
          onChange={(v) => setTweak("radius", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
