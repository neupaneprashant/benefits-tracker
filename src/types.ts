export type CreditFrequency =
  | "monthly"
  | "quarterly"
  | "semiannual"
  | "annual"
  | "one-time";

export type BenefitCategory =
  | "Travel"
  | "Dining"
  | "Streaming"
  | "Shopping"
  | "Lifestyle"
  | "Transit"
  | "Wellness"
  | "Statement Credit"
  | "Lounge"
  | "Welcome"
  | "Entertainment"
  | "Other";

export type CardCategory =
  | "Travel"
  | "Lifestyle"
  | "Regular"
  | "Business"
  | "Cash Back"
  | "No Annual Fee"
  | "Premium";

export interface StatementCredit {
  id: string;
  name: string;
  description: string;
  value: number;
  frequency: CreditFrequency;
  category: BenefitCategory | string;
}

export interface Perk {
  id: string;
  name: string;
  description: string;
  estimatedValue?: number | null;
}

export interface EarningRate {
  rate: string; // e.g. "5x", "3%"
  category: string;
  detail: string;
}

export interface Protection {
  name: string;
  description: string;
}

export interface Card {
  id: string;
  name: string;
  issuer: string;
  network: "Visa" | "Mastercard" | "Amex" | "Discover";
  annualFee: number;
  color: string;
  rewardsSummary: string;
  rewardsCurrency: string; // e.g. "Summit Rewards points" or "Cash back"
  pointValueCents: number; // e.g. 1.5 or 1.0
  note?: string | null;
  statementCredits: StatementCredit[];
  perks: Perk[];
  earningRates: EarningRate[];
  protections: Protection[];
  categories: CardCategory[];
  imageUrl?: string;
}

/* ---------- Nest Usage Logs State Tree ---------- */

export interface LogEntry {
  id: string;
  amount: number;
  date: string;
}

export interface CreditUsage {
  entries: LogEntry[];
  received?: boolean;
}

export interface SpendAllocation {
  amount: number;
  period: "monthly" | "yearly";
}

export interface CardUsageState {
  credits: Record<string, CreditUsage>;
  perks: Record<string, number>;
  spend: Record<string, SpendAllocation>;
  pointValue?: number;
}

export interface AppState {
  owned: string[];
  usage: Record<string, CardUsageState>;
}
