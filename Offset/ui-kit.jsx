/* ui-kit.jsx — shared helpers, economic math, icons, small components.
   Exported to window for the other babel scripts to use. */

const { useState, useRef, useEffect } = React;

/* ---------- money formatting ---------- */
function money(n) {
  const v = Math.round(n || 0);
  return "$" + Math.abs(v).toLocaleString("en-US");
}
function signed(n) {
  const v = Math.round(n || 0);
  if (v >= 0) return "+$" + v.toLocaleString("en-US");
  return "\u2212$" + Math.abs(v).toLocaleString("en-US");
}
function freqLabel(f) {
  return { monthly: "Monthly", quarterly: "Quarterly", semiannual: "Semiannual", annual: "Annual", "one-time": "One-time" }[f] || f;
}
function cycleWord(f) {
  return { monthly: "this month", quarterly: "this quarter", semiannual: "this period", annual: "this year" }[f] || "this cycle";
}

/* ---------- usage accessors (safe defaults) ---------- */
function getCardUsage(usage, cardId) {
  return (usage && usage[cardId]) || { credits: {}, perks: {}, spend: {} };
}
function getCreditUsage(usage, cardId, creditId) {
  const u = getCardUsage(usage, cardId);
  return (u.credits && u.credits[creditId]) || { entries: [], received: false };
}
function getPerkValue(usage, cardId, perkId) {
  const u = getCardUsage(usage, cardId);
  const v = u.perks && u.perks[perkId];
  return typeof v === "number" ? v : 0;
}

/* ---------- earning / spend ---------- */
function parseRate(str) {
  const s = String(str).trim();
  if (s.indexOf("%") !== -1) return { type: "cash", mult: (parseFloat(s) || 0) / 100, label: s };
  return { type: "points", mult: parseFloat(s) || 0, label: s };
}
function rateKey(rate) {
  return rate.category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
function isPointsCard(card) {
  return card.earningRates.some((r) => parseRate(r.rate).type === "points");
}
function getSpend(usage, cardId, key) {
  const u = getCardUsage(usage, cardId);
  const s = u.spend && u.spend[key];
  return s ? { amount: s.amount || 0, period: s.period || "monthly" } : { amount: 0, period: "monthly" };
}
function annualizeSpend(s) {
  return s.period === "yearly" ? (s.amount || 0) : (s.amount || 0) * 12;
}
function getPointValue(usage, card) {
  const u = getCardUsage(usage, card.id);
  return typeof u.pointValue === "number" ? u.pointValue : card.pointValueCents;
}
function rateEarned(card, usage, rate) {
  const sp = getSpend(usage, card.id, rateKey(rate));
  const annual = annualizeSpend(sp);
  if (annual <= 0) return { cash: 0, points: 0, annual: 0 };
  const pr = parseRate(rate.rate);
  if (pr.type === "points") {
    const points = annual * pr.mult;
    return { cash: points * (getPointValue(usage, card) / 100), points: points, annual: annual };
  }
  return { cash: annual * pr.mult, points: 0, annual: annual };
}
function rewardsForCard(card, usage) {
  return card.earningRates.reduce((s, r) => s + rateEarned(card, usage, r).cash, 0);
}

/* per-recurring-credit captured (sum of logged entries) */
function creditCaptured(card, usage, credit) {
  const cu = getCreditUsage(usage, card.id, credit.id);
  if (credit.frequency === "one-time") return cu.received ? credit.value : 0;
  return (cu.entries || []).reduce((s, e) => s + (e.amount || 0), 0);
}

/* ---------- full card economics ---------- */
function cardEconomics(card, usage) {
  let creditsCaptured = 0;
  card.statementCredits.forEach((c) => { creditsCaptured += creditCaptured(card, usage, c); });
  let perkValue = 0;
  card.perks.forEach((p) => { perkValue += getPerkValue(usage, card.id, p.id); });
  const rewardsValue = rewardsForCard(card, usage);
  return {
    annualFee: card.annualFee,
    rewardsValue,
    creditsCaptured,
    perkValue,
    netAfterCredits: creditsCaptured - card.annualFee,
    netAnnual: rewardsValue + creditsCaptured + perkValue - card.annualFee,
  };
}

function walletTotals(cards, owned, usage) {
  let fees = 0, credits = 0, perks = 0, rewards = 0;
  owned.forEach((id) => {
    const card = cards.find((c) => c.id === id);
    if (!card) return;
    const e = cardEconomics(card, usage);
    fees += e.annualFee; credits += e.creditsCaptured; perks += e.perkValue; rewards += e.rewardsValue;
  });
  return { fees, credits, perks, rewards, net: rewards + credits + perks - fees };
}

/* counts shown as pills on tiles */
function cardCounts(card) {
  return {
    credits: card.statementCredits.length,
    perks: card.perks.length,
    rates: card.earningRates.length,
    protections: card.protections.length,
  };
}

/* ---------- icons ---------- */
const I = {
  search: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/></svg>),
  check: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 6 9 17l-5-5"/></svg>),
  warn: (p) => (<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>),
  shield: (p) => (<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>),
  card: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="2" y="5" width="20" height="14" rx="2.5"/><path d="M2 10h20"/></svg>),
  wallet: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v2"/><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a1 1 0 0 0-1-1H5a2 2 0 0 1-2-2Z"/><circle cx="16.5" cy="13" r="1.2" fill="currentColor" stroke="none"/></svg>),
  chevron: (p) => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m6 9 6 6 6-6"/></svg>),
  x: (p) => (<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" {...p}><path d="M18 6 6 18M6 6l12 12"/></svg>),
};

/* network wordmark in card-art corner */
function NetworkMark({ network }) {
  return <span className="net">{network}</span>;
}

Object.assign(window, {
  money, signed, freqLabel, cycleWord,
  getCardUsage, getCreditUsage, getPerkValue,
  parseRate, rateKey, isPointsCard, getSpend, annualizeSpend, getPointValue, rateEarned, rewardsForCard,
  creditCaptured, cardEconomics, walletTotals, cardCounts,
  I, NetworkMark,
});
