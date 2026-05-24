import type { CreditFrequency } from "../types";

/** Returns the current period key for a given benefit frequency. */
export function currentPeriod(freq: CreditFrequency, now = new Date()): string {
  const y = now.getFullYear();
  const m = now.getMonth(); // 0-11
  switch (freq) {
    case "monthly":
      return `${y}-${String(m + 1).padStart(2, "0")}`;
    case "quarterly":
      return `${y}-Q${Math.floor(m / 3) + 1}`;
    case "semiannual":
      return `${y}-H${m < 6 ? 1 : 2}`;
    case "annual":
    case "one-time":
      return `${y}`;
  }
}

/** Human-readable label describing when a benefit resets. */
export function resetLabel(freq: CreditFrequency): string {
  switch (freq) {
    case "monthly":
      return "Resets monthly";
    case "quarterly":
      return "Resets quarterly";
    case "semiannual":
      return "Resets twice a year";
    case "annual":
      return "Resets annually";
    case "one-time":
      return "One-time benefit";
  }
}

export function frequencyLabel(freq: CreditFrequency): string {
  return {
    monthly: "Monthly",
    quarterly: "Quarterly",
    semiannual: "Semi-annual",
    annual: "Annual",
    "one-time": "One-time",
  }[freq];
}
