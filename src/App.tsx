import { useMemo, useState } from "react";
import "./index.css";
import { CARDS } from "./data/cards";
import {
  useAppState,
  money,
  signed,
  walletTotals
} from "./lib/storage";
import { CatalogCard } from "./components/CatalogCard";
import { CardDetail } from "./components/CardDetail";

type Tab = "tracker" | "browse";
type SortOption = "name-asc" | "fee-desc" | "fee-asc" | "benefits-desc";
type FilterCategory = "All" | "Travel" | "Lifestyle" | "Regular" | "Business" | "Cash Back" | "Premium" | "Annual Fee" | "No Annual Fee";

const FILTER_CATEGORIES: FilterCategory[] = [
  "All",
  "Travel",
  "Lifestyle",
  "Regular",
  "Business",
  "Cash Back",
  "Premium",
  "Annual Fee",
  "No Annual Fee"
];

const I = {
  card: (p?: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="5" width="20" height="14" rx="2.5" />
      <path d="M2 10h20" />
    </svg>
  ),
  search: (p?: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" />
    </svg>
  ),
  wallet: (p?: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v2" />
      <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a1 1 0 0 0-1-1H5a2 2 0 0 1-2-2Z" />
      <circle cx="16.5" cy="13" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),
  settings: (p?: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )
};

export default function App() {
  const { state, handlers, resetAll } = useAppState();
  const [tab, setTab] = useState<Tab>("tracker");
  const [query, setQuery] = useState("");
  const [selectedIssuer, setSelectedIssuer] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("All");
  const [sortBy, setSortBy] = useState<SortOption>("fee-desc");
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});

  /* --- Tweaks State --- */
  const [accent, setAccent] = useState("#3a468f");
  const [density, setDensity] = useState<"comfortable" | "compact">("comfortable");
  const [radius, setRadius] = useState(16);
  const [isTweakOpen, setIsTweakOpen] = useState(false);

  const owned = state.owned;
  const ownedSet = useMemo(() => new Set(owned), [owned]);

  // Extract unique issuers dynamically
  const issuers = useMemo(
    () => ["all", ...Array.from(new Set(CARDS.map((c) => c.issuer))).sort()],
    []
  );

  const toggleOpen = (id: string) => {
    setOpenMap((prev) => ({
      ...prev,
      [id]: prev[id] === false ? true : false
    }));
  };

  // Filter & Sort Catalog Card List
  const filteredAndSorted = useMemo(() => {
    const ql = query.trim().toLowerCase();

    const filtered = CARDS.filter((c) => {
      // Issuer dropdown filter
      if (selectedIssuer !== "all" && c.issuer !== selectedIssuer) return false;

      // Category chip filter (static & dynamic criteria)
      if (selectedCategory !== "All") {
        if (selectedCategory === "No Annual Fee") {
          if (c.annualFee !== 0) return false;
        } else if (selectedCategory === "Annual Fee") {
          if (c.annualFee === 0) return false;
        } else if (selectedCategory === "Cash Back") {
          if (!c.categories.includes("Cash Back")) return false;
        } else if (selectedCategory === "Premium") {
          if (!c.categories.includes("Premium")) return false;
        } else {
          // Standard categories matching
          if (!c.categories.includes(selectedCategory as any)) return false;
        }
      }

      // Query keyword filter
      if (!ql) return true;
      return (
        c.name.toLowerCase().includes(ql) ||
        c.issuer.toLowerCase().includes(ql) ||
        c.rewardsSummary.toLowerCase().includes(ql) ||
        c.network.toLowerCase().includes(ql)
      );
    });

    // Sort options
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return `${a.issuer} ${a.name}`.localeCompare(`${b.issuer} ${b.name}`);
        case "fee-desc":
          return b.annualFee - a.annualFee;
        case "fee-asc":
          return a.annualFee - b.annualFee;
        case "benefits-desc":
          const countA = a.statementCredits.length + a.perks.length;
          const countB = b.statementCredits.length + b.perks.length;
          return countB - countA;
        default:
          return 0;
      }
    });
  }, [query, selectedIssuer, selectedCategory, sortBy]);

  // Wallet economic summary totals
  const totals = useMemo(() => {
    return walletTotals(CARDS, owned, state.usage);
  }, [owned, state.usage]);

  const ownedCards = useMemo(() => {
    return owned.map((id) => CARDS.find((c) => c.id === id)).filter(Boolean) as typeof CARDS;
  }, [owned]);

  return (
    <div id="app" data-density={density} style={{ "--accent": accent, "--radius": radius + "px" } as React.CSSProperties}>
      <div className="wrap">
        
        {/* Header Appbar */}
        <div className="appbar">
          <div className="brand">
            <div className="brand-mark">
              <I.card style={{ stroke: "#ffffff", width: 23, height: 23 }} />
            </div>
            <div>
              <h1>Benefits Tracker</h1>
              <p>See the true net cost of your premium U.S. credit cards after the credits you actually capture.</p>
            </div>
          </div>
          {owned.length > 0 && (
            <button className="reset-btn" onClick={resetAll}>
              Reset data
            </button>
          )}
        </div>

        {/* Navigation Tabs */}
        <div className="tabs">
          <button className={"tab" + (tab === "tracker" ? " active" : "")} onClick={() => setTab("tracker")}>
            My Tracker <span className="count">{owned.length}</span>
          </button>
          <button className={"tab" + (tab === "browse" ? " active" : "")} onClick={() => setTab("browse")}>
            Browse Cards
          </button>
        </div>

        {tab === "tracker" ? (
          /* --- TRACKER BLOCK --- */
          owned.length === 0 ? (
            <div className="empty">
              <div className="ico">
                <I.wallet style={{ width: 24, height: 24 }} />
              </div>
              <h3>Your wallet is empty</h3>
              <p>Add the credit cards you carry and start tracking how much of each statement benefit you actually capture to visualize your net value.</p>
              <button className="cta" onClick={() => setTab("browse")}>
                Browse cards to add
              </button>
            </div>
          ) : (
            <div>
              {/* Aggregated Dashboard Wallet Metrics */}
              <div className="summary-grid">
                <div className="stat">
                  <div className="k">Cards in wallet</div>
                  <div className="v">{ownedCards.length}</div>
                </div>
                <div className="stat">
                  <div className="k">Total annual fees</div>
                  <div className="v">{money(totals.fees)}</div>
                </div>
                <div className="stat">
                  <div className="k">Rewards earned</div>
                  <div className="v good">{money(totals.rewards)}</div>
                </div>
                <div className="stat">
                  <div className="k">Credits captured</div>
                  <div className="v good">{money(totals.credits)}</div>
                </div>
                <div className="stat">
                  <div className="k">Perk value (yours)</div>
                  <div className="v good">{money(totals.perks)}</div>
                </div>
                <div className="stat feature">
                  <div className="k">Net annual value</div>
                  <div className={"v " + (totals.net >= 0 ? "good" : "warn")}>{signed(totals.net)}</div>
                  <div className="sub">{totals.net >= 0 ? "You're ahead across your wallet" : "Underwater — log more spend & usage"}</div>
                </div>
              </div>

              {/* Individual Wallet Card Detail Blocks */}
              {ownedCards.map((card) => (
                <CardDetail
                  key={card.id}
                  card={card}
                  usage={state.usage}
                  open={openMap[card.id] !== false}
                  onToggleOpen={() => toggleOpen(card.id)}
                  handlers={handlers}
                />
              ))}
            </div>
          )
        ) : (
          /* --- BROWSE BLOCK --- */
          <div>
            {/* Search Toolbar */}
            <div className="toolbar">
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", width: "100%" }}>
                <div className="field search">
                  <I.search />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search card name, issuer, rewards..."
                  />
                </div>
                <div className="field">
                  <select className="dropdown" value={selectedIssuer} onChange={(e) => setSelectedIssuer(e.target.value)}>
                    <option value="all">All issuers</option>
                    {issuers.filter(is => is !== "all").map((is) => (
                      <option key={is} value={is}>{is}</option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <select className="dropdown" value={sortBy} onChange={(e) => setSortBy(e.target.value as SortOption)}>
                    <option value="fee-desc">Fee: High to Low</option>
                    <option value="fee-asc">Fee: Low to High</option>
                    <option value="name-asc">Name: A to Z</option>
                    <option value="benefits-desc">Most Benefits First</option>
                  </select>
                </div>
              </div>

              {/* Categories Filter Chip Bar */}
              <div className="category-chips-bar">
                {FILTER_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    className={`category-chip-btn ${selectedCategory === cat ? "active" : ""}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid List rendering */}
            {filteredAndSorted.length === 0 ? (
              <div className="empty">
                <div className="ico"><I.search style={{ width: 22, height: 22 }} /></div>
                <h3>No cards match your search</h3>
                <p>Try clearing your keyword search or category filters to see more cards.</p>
              </div>
            ) : (
              <div className="card-grid">
                {filteredAndSorted.map((card) => (
                  <CatalogCard
                    key={card.id}
                    card={card}
                    owned={ownedSet.has(card.id)}
                    onAdd={handlers.addCard}
                    onRemove={handlers.removeCard}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* --- IN-APP FLOATING TWEAKS WIDGET --- */}
      <button
        style={{
          position: "fixed",
          right: 20,
          bottom: 20,
          zIndex: 999999,
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "var(--ink)",
          color: "#ffffff",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "var(--shadow-lg)",
          cursor: "pointer",
          transition: "transform 0.2s ease"
        }}
        onClick={() => setIsTweakOpen(!isTweakOpen)}
        onMouseEnter={(e) => e.currentTarget.style.transform = "rotate(30deg)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "rotate(0deg)"}
        title="Customize Theme"
      >
        <I.settings style={{ width: 22, height: 22 }} />
      </button>

      {isTweakOpen && (
        <div
          style={{
            position: "fixed",
            right: 20,
            bottom: 80,
            zIndex: 999998,
            width: 280,
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(12px)",
            borderRadius: 14,
            border: "1px solid var(--border-strong)",
            boxShadow: "var(--shadow-lg)",
            padding: 18,
            fontFamily: "var(--font)",
            animation: "fadeIn 0.2s ease"
          }}
        >
          <div style={{ display: "flex", justifyContent: "between", alignItems: "center", marginBottom: 12 }}>
            <span style={{ fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--ink)" }}>
              Customize Theme
            </span>
            <button
              onClick={() => setIsTweakOpen(false)}
              style={{ border: "none", background: "none", fontSize: 13, color: "var(--faint)", cursor: "pointer", float: "right" }}
            >
              ✕
            </button>
          </div>

          {/* Accent Color picker */}
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 11.5, fontWeight: 600, color: "var(--muted)", display: "block", marginBottom: 6 }}>
              Accent Color
            </label>
            <div style={{ display: "flex", gap: 6 }}>
              {["#3a468f", "#1f6f54", "#a9512f", "#6f4a86", "#3f4654"].map((col) => (
                <button
                  key={col}
                  onClick={() => setAccent(col)}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    backgroundColor: col,
                    border: accent === col ? "2px solid var(--ink)" : "1px solid rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    boxShadow: "var(--shadow-sm)"
                  }}
                />
              ))}
            </div>
          </div>

          {/* Density Selector */}
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 11.5, fontWeight: 600, color: "var(--muted)", display: "block", marginBottom: 6 }}>
              Layout Density
            </label>
            <div style={{ display: "flex", gap: 6, background: "var(--subtle)", padding: 3, borderRadius: 8 }}>
              {(["comfortable", "compact"] as const).map((den) => (
                <button
                  key={den}
                  onClick={() => setDensity(den)}
                  style={{
                    flex: 1,
                    border: "none",
                    background: density === den ? "var(--surface)" : "none",
                    borderRadius: 6,
                    padding: "5px 0",
                    fontSize: 11,
                    fontWeight: 700,
                    color: density === den ? "var(--ink)" : "var(--muted)",
                    cursor: "pointer",
                    boxShadow: density === den ? "var(--shadow-sm)" : "none"
                  }}
                >
                  {den === "comfortable" ? "Comfort" : "Compact"}
                </button>
              ))}
            </div>
          </div>

          {/* Corner Radius Slider */}
          <div>
            <label style={{ fontSize: 11.5, fontWeight: 600, color: "var(--muted)", display: "block", marginBottom: 6 }}>
              Corner Radius: <span style={{ float: "right", color: "var(--ink)", fontWeight: 800 }}>{radius}px</span>
            </label>
            <input
              type="range"
              min={6}
              max={22}
              value={radius}
              onChange={(e) => setRadius(parseInt(e.target.value))}
              style={{
                width: "100%",
                accentColor: accent,
                cursor: "pointer"
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* Tag chips filtering configured */

/* Earning and fee aggregation bound to dashboard cards */

/* Dynamic details panel mounting added */
