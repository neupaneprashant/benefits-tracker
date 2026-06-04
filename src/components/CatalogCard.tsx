import type { Card } from "../types";
import { cardCounts, money } from "../lib/storage";

export function CatalogCard({
  card,
  owned,
  onAdd,
  onRemove,
}: {
  card: Card;
  owned: boolean;
  onAdd: (id: string) => void;
  onRemove: (id: string) => void;
}) {
  const counts = cardCounts(card);

  return (
    <div className="tile">
      {card.imageUrl ? (
        <div className="card-art has-img">
          <img src={card.imageUrl} alt={card.name} className="real-card-img" />
        </div>
      ) : (
        <div className="card-art" style={{ background: card.color }}>
          <div className="chip"></div>
          <div className="issuer">{card.issuer}</div>
          <div className="cname">{card.name}</div>
          <span className="net">{card.network}</span>
        </div>
      )}
      <div className="tile-body">
        <div className="rewards">{card.rewardsSummary}</div>
        <div className="fee-row">
          <span className="lbl">Annual fee</span>
          <span className={"val" + (card.annualFee === 0 ? " free" : "")}>
            {card.annualFee === 0 ? "No fee" : money(card.annualFee)}
          </span>
        </div>

        {/* Display categories pill badges */}
        <div className="chips">
          {card.categories.map((cat) => (
            <span key={cat} className="chip-pill category-badge">{cat}</span>
          ))}
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
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              In your wallet
            </span>
          </button>
        ) : (
          <button className="add-btn" onClick={() => onAdd(card.id)}>
            + Add to my cards
          </button>
        )}
      </div>
    </div>
  );
}
