import type { Card, Protection, EarningRate } from "../types";

// Reusable standard protections lists to keep file size compact yet high-fidelity.
const STANDARD_PROTECTIONS: Protection[] = [
  { name: "Zero Liability Protection", description: "You are not held responsible for unauthorized transactions." },
  { name: "Fraud Monitoring", description: "24/7 account monitoring for suspicious activity." },
  { name: "Purchase Security", description: "Coverage against damage or theft for eligible items (varies by network)." }
];

const PREFERRED_PROTECTIONS: Protection[] = [
  ...STANDARD_PROTECTIONS,
  { name: "Auto Rental Collision Damage Waiver", description: "Secondary coverage when renting a vehicle." },
  { name: "Extended Warranty Protection", description: "Adds up to an additional year to eligible warranties." },
  { name: "Trip Delay / Lost Luggage Coverage", description: "Reimbursement for delays or damaged luggage." }
];

const CHASE_ULTIMATE_PROTECTIONS: Protection[] = [
  { name: "Trip Cancellation / Interruption", description: "Up to $10,000 per person / $20,000 per trip for covered reasons." },
  { name: "Trip Delay Reimbursement", description: "Delays of 12+ hours or overnight: up to $500 per ticket." },
  { name: "Auto Rental CDW (PRIMARY)", description: "Primary coverage: decline rental agency collision insurance." },
  { name: "Purchase Protection", description: "Up to $10,000 per claim ($50,000/yr) against damage/theft for 120 days." },
  { name: "Extended Warranty Protection", description: "Adds 1 year to eligible warranties under 3 years." },
  { name: "No Foreign Transaction Fees", description: "Save on exchange fees abroad." }
];

const AMEX_PREMIUM_PROTECTIONS: Protection[] = [
  { name: "Trip Cancellation / Interruption Insurance", description: "Up to $10,000 per trip / $20,000 per year." },
  { name: "Trip Delay Insurance", description: "Delays 6+ hours: up to $500 per trip (up to 2 times per 12 months)." },
  { name: "Purchase Protection", description: "Up to $10,000 per item ($50,000/yr) against damage/theft for 90 days." },
  { name: "Extended Warranty", description: "Adds up to 1 extra year on eligible warranties." },
  { name: "Cell Phone Protection", description: "Up to $800 per claim with $50 deductible (max 2 claims/yr)." },
  { name: "No Foreign Transaction Fees", description: "Save on exchange fees abroad." }
];

const DISCOVER_STANDARD_PROTECTIONS: Protection[] = [
  ...STANDARD_PROTECTIONS,
  { name: "Identity Theft Alerts", description: "Monitors dark web and alerts you of potential compromises." },
  { name: "All-in-One Fraud Protection", description: "Never pay for unauthorized transactions." }
];

// Helper to quickly generate a standard No Annual Fee cash back rate structure
const flatCashBackRate = (rate: string = "2%"): EarningRate[] => [
  { category: "All purchases", detail: "Flat-rate cash back on everyday spend", rate },
];

export const CARDS: Card[] = [
  // ================= CHASE =================
  {
    id: "chase-sapphire-preferred",
    name: "Sapphire Preferred®",
    issuer: "Chase",
    network: "Visa",
    annualFee: 95,
    color: "#0a2540",
    rewardsSummary: "5x Chase Travel, 3x dining, gas, Airbnb & streaming, $100 hotel credit",
    rewardsCurrency: "Chase Ultimate Rewards® points",
    pointValueCents: 1.5,
    categories: ["Travel", "Premium"],
    referralUrl: "https://www.referyourchasecard.com/19x/2YO7VAY7D2",
    statementCredits: [
      { id: "hotel", name: "$100 Annual Chase Travel Hotel Credit", description: "Applied to hotel bookings through Chase Travel℠.", value: 100, frequency: "annual", category: "Travel" },
      { id: "global-entry", name: "Global Entry / PreCheck / NEXUS Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel", cycleYears: 4 }
    ],
    perks: [
      { id: "dashpass", name: "DoorDash DashPass", description: "Complimentary DashPass membership (activate by adding card).", estimatedValue: 120 },
      { id: "transfer", name: "Point Transfer partners", description: "Transfer Chase Ultimate Rewards® to premium airline & hotel partners (Hyatt at 4:3, United at 1:1).", estimatedValue: 120 },
      { id: "apple-tv", name: "Apple TV+ (1 Year)", description: "Complimentary one-year Apple TV subscription when activated.", estimatedValue: 120 }
    ],
    earningRates: [
      { category: "Travel via Chase Travel℠", detail: "Flights, hotels, rentals", rate: "5x" },
      { category: "Dining", detail: "Restaurants, takeout, delivery", rate: "3x" },
      { category: "Gas & EV Charging", detail: "At domestic and international stations", rate: "3x" },
      { category: "Vacation Homes", detail: "Includes Airbnb, Vrbo, etc.", rate: "3x" },
      { category: "Select Streaming", detail: "Popular streaming services", rate: "3x" },
      { category: "Online Groceries", detail: "Excludes Target/Walmart", rate: "3x" },
      { category: "Other Travel", detail: "Flights/hotels direct", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: CHASE_ULTIMATE_PROTECTIONS
  },
  {
    id: "chase-sapphire-reserve",
    name: "Sapphire Reserve®",
    issuer: "Chase",
    network: "Visa",
    annualFee: 795,
    color: "#001e3d",
    rewardsSummary: "8x Chase Travel, 4x flights & hotels, 3x dining, lounge access, $2,700+ in credits",
    rewardsCurrency: "Chase Ultimate Rewards® points",
    pointValueCents: 1.5,
    categories: ["Travel", "Premium", "Lifestyle"],
    statementCredits: [
      { id: "travel", name: "$300 Annual Travel Credit", description: "Auto-applies to travel purchases (flights, trains, hotels, parking).", value: 300, frequency: "annual", category: "Travel" },
      { id: "doordash", name: "$15 Monthly DoorDash Credit", description: "In-app credit on any order type (up from $5 on Oct 1, 2026), plus two $10 monthly non-restaurant promos.", value: 15, frequency: "monthly", category: "Dining" },
      { id: "dining", name: "Sapphire Reserve Exclusive Tables Credit", description: "$150 in Jan–Jun and $150 in Jul–Dec at Exclusive Tables restaurants via OpenTable.", value: 150, frequency: "semiannual", category: "Dining" },
      { id: "stubhub", name: "StubHub / viagogo Credit", description: "$150 in Jan–Jun and $150 in Jul–Dec (activation req.).", value: 150, frequency: "semiannual", category: "Entertainment" },
      { id: "lyft", name: "Lyft Credit", description: "Up to $10/mo in-app ride credit through Sept 2027.", value: 10, frequency: "monthly", category: "Transit" },
      { id: "peloton", name: "Peloton Membership Credit", description: "Up to $10/mo on Peloton memberships (activation req.).", value: 10, frequency: "monthly", category: "Wellness" },
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel", cycleYears: 4 },
      { id: "edit-hotel", name: "$500 Annual 'The Edit' Hotel Credit", description: "Up to $250 in Jan–Jun and $250 in Jul–Dec on prepaid 2+ night stays at The Edit by Chase Travel hotels.", value: 250, frequency: "semiannual", category: "Travel" },
      { id: "select-hotel", name: "$250 Select Hotel Credit (2026)", description: "One-time annual credit for prepaid Chase Travel bookings at participating hotel brands (IHG, Montage, Pendry, etc.).", value: 250, frequency: "one-time", category: "Travel" }
    ],
    perks: [
      { id: "priority-pass", name: "Priority Pass Select", description: "Unlimited airport lounge access for cardmember + 2 guests.", estimatedValue: 429 },
      { id: "dashpass", name: "DoorDash DashPass", description: "Complimentary DashPass membership.", estimatedValue: 120 },
      { id: "chase-lounges", name: "Chase Sapphire Lounges", description: "Access to Chase's new premium airport lounges.", estimatedValue: 100 },
      { id: "apple", name: "Apple TV & Apple Music", description: "Complimentary subscriptions (activate by June 22, 2027).", estimatedValue: 250 },
      { id: "ihg-platinum", name: "IHG One Rewards Platinum Elite", description: "Complimentary status through 2027.", estimatedValue: null },
      { id: "spend-75k", name: "$75,000 Spend Benefits", description: "$500 Southwest credit, A-List status, IHG Diamond and $250 at The Shops at Chase.", estimatedValue: null }
    ],
    earningRates: [
      { category: "Chase Travel℠", detail: "All Chase Travel purchases, after the $300 travel credit", rate: "8x" },
      { category: "Flights & Hotels Direct", detail: "Booked directly, after the $300 travel credit", rate: "4x" },
      { category: "Dining", detail: "Dining out, takeout and delivery", rate: "3x" },
      { category: "Lyft", detail: "Through Sept 2027", rate: "5x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: CHASE_ULTIMATE_PROTECTIONS
  },
  {
    id: "chase-freedom-unlimited",
    name: "Freedom Unlimited®",
    issuer: "Chase",
    network: "Visa",
    annualFee: 0,
    color: "#0a56a6",
    rewardsSummary: "3% dining & drugstores, flat 1.5% on everything else",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "partner-benefits", name: "Chase Partner Benefits", description: "Includes DoorDash benefits and 5% on Lyft rides.", estimatedValue: 30 }
    ],
    earningRates: [
      { category: "Travel via Chase Travel℠", detail: "Flights, hotels, rentals", rate: "5%" },
      { category: "Dining", detail: "Restaurants & eligible delivery", rate: "3%" },
      { category: "Drugstores", detail: "Prescriptions & convenience items", rate: "3%" },
      { category: "Everything Else", detail: "Unlimited flat cash back", rate: "1.5%" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "chase-freedom-flex",
    name: "Freedom Flex®",
    issuer: "Chase",
    network: "Mastercard",
    annualFee: 0,
    color: "#2a75d3",
    rewardsSummary: "5% back in rotating quarterly categories, 3% dining",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "mastercard-world", name: "Mastercard World Elite Perks", description: "Includes cell phone protection and Lyft credits.", estimatedValue: 60 },
      { id: "no-fx", name: "No Foreign Transaction Fees", description: "The 3% fee was removed in 2026.", estimatedValue: 20 }
    ],
    earningRates: [
      { category: "Rotating Categories", detail: "5% on quarterly categories (up to $1,500 spend per quarter)", rate: "5%" },
      { category: "Travel via Chase Travel℠", detail: "Flights, hotels, rentals", rate: "5%" },
      { category: "Dining", detail: "Restaurants & eligible delivery", rate: "3%" },
      { category: "Drugstores", detail: "Prescriptions & convenience items", rate: "3%" },
      { category: "Everything Else", detail: "All other spend", rate: "1%" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "chase-slate-edge",
    name: "Chase Slate®",
    issuer: "Chase",
    network: "Visa",
    annualFee: 0,
    color: "#3f5a7a",
    rewardsSummary: "0% intro APR for 21 months on purchases & balance transfers",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "intro-apr", name: "21-Month 0% Intro APR", description: "On purchases and balance transfers (5% or $5 transfer fee). Replaced the Slate Edge in Jan 2026.", estimatedValue: null }
    ],
    earningRates: [
      { category: "No rewards program", detail: "Designed entirely for credit building and balance transfers", rate: "0%" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "amazon-prime-visa",
    name: "Amazon Prime Visa",
    issuer: "Chase",
    network: "Visa",
    annualFee: 0,
    color: "#1e2f3d",
    rewardsSummary: "5% cash back at Amazon & Whole Foods Market",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Cash Back", "No Annual Fee", "Lifestyle"],
    statementCredits: [],
    perks: [
      { id: "amazon-no-fee", name: "No Foreign Transaction Fees", description: "Ideal for international Amazon purchases or travel.", estimatedValue: 30 }
    ],
    earningRates: [
      { category: "Amazon & Whole Foods", detail: "Requires active Amazon Prime membership", rate: "5%" },
      { category: "Chase Travel℠", detail: "Bookings made through Chase portal", rate: "5%" },
      { category: "Gas, Restaurants, Transit", detail: "Local transport and dining out", rate: "2%" },
      { category: "Everything Else", detail: "All other purchases", rate: "1%" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "amazon-visa",
    name: "Amazon Visa",
    issuer: "Chase",
    network: "Visa",
    annualFee: 0,
    color: "#4e6a82",
    rewardsSummary: "3% cash back at Amazon & Whole Foods Market",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [],
    earningRates: [
      { category: "Amazon & Whole Foods", detail: "No Prime membership required", rate: "3%" },
      { category: "Gas, Restaurants, Transit", detail: "Local transport and dining out", rate: "2%" },
      { category: "Everything Else", detail: "All other purchases", rate: "1%" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "southwest-plus",
    name: "Southwest Rapid Rewards Plus",
    issuer: "Chase",
    network: "Visa",
    annualFee: 99,
    color: "#304269",
    rewardsSummary: "Free checked bag, 3,000 anniversary points, 10% off flights",
    rewardsCurrency: "Southwest Rapid Rewards points",
    pointValueCents: 1.4,
    categories: ["Travel"],
    statementCredits: [],
    perks: [
      { id: "anniversary-miles", name: "Anniversary Bonus Points", description: "3,000 Rapid Rewards points added to your account annually.", estimatedValue: 42 },
      { id: "checked-bag", name: "First Checked Bag Free", description: "For you and up to 8 others on the same reservation.", estimatedValue: 140 },
      { id: "flight-discount", name: "10% Off Southwest Flights", description: "Discount on Southwest fares (excludes Basic fares).", estimatedValue: 40 },
      { id: "seat-boarding", name: "Seat Selection & Group 5 Boarding", description: "Standard seat within 48 hours of departure when available, plus Group 5 boarding.", estimatedValue: 30 },
      { id: "cp-boost", name: "10,000 Companion Pass Points", description: "Boost toward Companion Pass each calendar year (Companion Pass rules change Jan 1, 2027).", estimatedValue: null }
    ],
    earningRates: [
      { category: "Southwest Purchases", detail: "Flights and inflight purchases", rate: "2x" },
      { category: "Gas & Grocery Stores", detail: "On the first $5,000 per year", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "southwest-premier",
    name: "Southwest Rapid Rewards Premier",
    issuer: "Chase",
    network: "Visa",
    annualFee: 149,
    color: "#1c2e4a",
    rewardsSummary: "Free checked bag, 6,000 anniversary points, 15% off flights",
    rewardsCurrency: "Southwest Rapid Rewards points",
    pointValueCents: 1.4,
    categories: ["Travel"],
    statementCredits: [],
    perks: [
      { id: "anniversary-miles", name: "Anniversary Bonus Points", description: "6,000 Rapid Rewards points added to your account annually.", estimatedValue: 84 },
      { id: "checked-bag", name: "First Checked Bag Free", description: "For you and up to 8 others on the same reservation.", estimatedValue: 140 },
      { id: "flight-discount", name: "15% Off Southwest Flights", description: "Discount on Southwest fares (excludes Basic fares).", estimatedValue: 60 },
      { id: "tqp", name: "Tier Qualifying Points", description: "1,500 TQPs for every $10,000 spent.", estimatedValue: null },
      { id: "no-fx", name: "No Foreign Transaction Fees", description: "0% FX fees internationally.", estimatedValue: 20 }
    ],
    earningRates: [
      { category: "Southwest Purchases", detail: "Flights and inflight purchases", rate: "3x" },
      { category: "Grocery & Restaurants", detail: "On the first $8,000 per year", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "southwest-priority",
    name: "Southwest Rapid Rewards Priority",
    issuer: "Chase",
    network: "Visa",
    annualFee: 229,
    color: "#0f172a",
    rewardsSummary: "7,500 anniversary points, Extra Legroom upgrades, 4x Southwest",
    rewardsCurrency: "Southwest Rapid Rewards points",
    pointValueCents: 1.4,
    categories: ["Travel", "Premium"],
    statementCredits: [],
    perks: [
      { id: "anniversary-miles", name: "Anniversary Bonus Points", description: "7,500 Rapid Rewards points added to your account annually.", estimatedValue: 105 },
      { id: "checked-bag", name: "First Checked Bag Free", description: "For you and up to 8 others on the same reservation.", estimatedValue: 140 },
      { id: "seats", name: "Preferred Seats & Extra Legroom Upgrades", description: "Standard or Preferred seat at booking, plus unlimited Extra Legroom upgrades within 48 hours when available.", estimatedValue: 150 },
      { id: "tqp", name: "Tier Qualifying Points", description: "2,500 TQPs for every $5,000 spent.", estimatedValue: null },
      { id: "inflight", name: "25% Back Inflight", description: "25% back on inflight purchases.", estimatedValue: 10 }
    ],
    earningRates: [
      { category: "Southwest Purchases", detail: "Flights and inflight purchases", rate: "4x" },
      { category: "Gas & Restaurants", detail: "No annual cap", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: CHASE_ULTIMATE_PROTECTIONS
  },
  {
    id: "united-explorer",
    name: "United Explorer",
    issuer: "Chase",
    network: "Visa",
    annualFee: 150,
    color: "#083c6b",
    rewardsSummary: "Free checked bag, 2 United Club passes, up to $430 in partner credits",
    rewardsCurrency: "United MileagePlus® miles",
    pointValueCents: 1.3,
    categories: ["Travel"],
    statementCredits: [
      { id: "united-hotels", name: "United Hotels Credit", description: "Two $50 credits per year on prepaid United Hotels stays.", value: 50, frequency: "semiannual", category: "Travel" },
      { id: "rideshare", name: "Rideshare Credit", description: "$5/mo on eligible rideshare (enrollment req.).", value: 5, frequency: "monthly", category: "Transit" },
      { id: "instacart", name: "Instacart Credit", description: "$10/mo on Instacart, through Dec 31, 2027.", value: 10, frequency: "monthly", category: "Shopping" },
      { id: "avis-budget", name: "Avis / Budget TravelBank Cash", description: "Two $25 TravelBank cash credits per year for Avis or Budget rentals.", value: 25, frequency: "semiannual", category: "Travel" },
      { id: "jsx", name: "JSX Credit", description: "Up to $100 per year on JSX bookings.", value: 100, frequency: "annual", category: "Travel" },
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel", cycleYears: 4 }
    ],
    perks: [
      { id: "checked-bag", name: "First Checked Bag Free", description: "For you and a companion on the same reservation.", estimatedValue: 140 },
      { id: "united-passes", name: "2 United Club One-Time Passes", description: "Annual lounge passes; cardmember must be present.", estimatedValue: 118 },
      { id: "spend-bonus", name: "Spend Bonuses", description: "$100 TravelBank cash at $10,000/yr and a 10,000-mile award discount at $20,000/yr.", estimatedValue: null },
      { id: "priority-boarding", name: "Priority Boarding", description: "Board before standard economy.", estimatedValue: 30 }
    ],
    earningRates: [
      { category: "United Hotels (prepaid)", detail: "Booked via United Hotels", rate: "5x" },
      { category: "United Purchases", detail: "Flights, wifi, inflight purchases", rate: "2x" },
      { category: "Dining", detail: "Restaurants & eligible delivery", rate: "2x" },
      { category: "Hotel Stays", detail: "Booked directly with hotels", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: CHASE_ULTIMATE_PROTECTIONS
  },
  {
    id: "united-quest",
    name: "United Quest",
    issuer: "Chase",
    network: "Visa",
    annualFee: 350,
    color: "#002b5c",
    rewardsSummary: "$200 United TravelBank cash, 2 free checked bags, award discounts",
    rewardsCurrency: "United MileagePlus® miles",
    pointValueCents: 1.3,
    categories: ["Travel", "Premium"],
    statementCredits: [
      { id: "travelbank", name: "$200 United TravelBank Cash", description: "Deposited each card anniversary.", value: 200, frequency: "annual", category: "Travel" },
      { id: "renowned-hotels", name: "Renowned Hotels Credit", description: "Up to $150 per year on prepaid Renowned Hotels and Resorts stays.", value: 150, frequency: "annual", category: "Travel" },
      { id: "rideshare", name: "Rideshare Credit", description: "$8/mo on eligible rideshare ($12 in December; enrollment req.).", value: 8, frequency: "monthly", category: "Transit" },
      { id: "instacart", name: "Instacart Credit", description: "$15/mo on Instacart ($10 + $5), through Dec 31, 2027.", value: 15, frequency: "monthly", category: "Shopping" },
      { id: "avis-budget", name: "Avis / Budget TravelBank Cash", description: "Two $40 TravelBank cash credits per year for Avis or Budget rentals.", value: 40, frequency: "semiannual", category: "Travel" },
      { id: "jsx", name: "JSX Credit", description: "Up to $150 per year on JSX bookings.", value: 150, frequency: "annual", category: "Travel" },
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel", cycleYears: 4 }
    ],
    perks: [
      { id: "checked-bags", name: "Two Checked Bags Free", description: "For primary cardmember and one companion.", estimatedValue: 280 },
      { id: "award-discount", name: "10,000-Mile Award Discount", description: "Each anniversary, plus another 10,000 miles at $20,000 annual spend.", estimatedValue: 130 },
      { id: "pqp", name: "Premier Qualifying Points", description: "1 PQP per $20 spent (up to 18,000/yr) plus 1,000 PQPs annually.", estimatedValue: null }
    ],
    earningRates: [
      { category: "Renowned Hotels (prepaid)", detail: "Booked via United", rate: "5x" },
      { category: "United Purchases", detail: "Flights, tickets, packages", rate: "3x" },
      { category: "Other travel", detail: "Flights, hotels, rentals, transit", rate: "2x" },
      { category: "Dining", detail: "Restaurants & eligible delivery", rate: "2x" },
      { category: "Streaming Services", detail: "Popular subscriptions", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: CHASE_ULTIMATE_PROTECTIONS
  },
  {
    id: "united-club-infinite",
    name: "United Club Card",
    issuer: "Chase",
    network: "Visa",
    annualFee: 695,
    color: "#031d3d",
    rewardsSummary: "United Club membership, 4x United purchases, up to $890 in partner credits",
    rewardsCurrency: "United MileagePlus® miles",
    pointValueCents: 1.3,
    categories: ["Travel", "Premium", "Lifestyle"],
    note: "Formerly the United Club Infinite Card.",
    statementCredits: [
      { id: "renowned-hotels", name: "Renowned Hotels Credit", description: "Up to $200 per year on prepaid Renowned Hotels and Resorts stays.", value: 200, frequency: "annual", category: "Travel" },
      { id: "rideshare", name: "Rideshare Credit", description: "$12/mo on eligible rideshare ($18 in December; enrollment req.).", value: 12, frequency: "monthly", category: "Transit" },
      { id: "instacart", name: "Instacart Credit", description: "$20/mo on Instacart (two $10 credits), through Dec 31, 2027.", value: 20, frequency: "monthly", category: "Shopping" },
      { id: "avis-budget", name: "Avis / Budget TravelBank Cash", description: "Two $50 TravelBank cash credits per year for Avis or Budget rentals.", value: 50, frequency: "semiannual", category: "Travel" },
      { id: "jsx", name: "JSX Credit", description: "Up to $200 per year on JSX bookings.", value: 200, frequency: "annual", category: "Travel" },
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel", cycleYears: 4 }
    ],
    perks: [
      { id: "united-club-membership", name: "United Club Membership", description: "Full access to United Clubs and participating Star Alliance lounges; All Access at Premier Gold or $50,000/yr spend.", estimatedValue: 650 },
      { id: "checked-bags", name: "Two Checked Bags Free", description: "For primary cardmember and one companion.", estimatedValue: 280 },
      { id: "award-discount", name: "Award Discounts", description: "10,000-mile award discount at $20,000 annual spend, up to twice a year.", estimatedValue: null },
      { id: "premier-access", name: "United Premier Access", description: "Priority check-in, security screening, and boarding.", estimatedValue: 150 }
    ],
    earningRates: [
      { category: "Renowned Hotels (prepaid)", detail: "Booked via United", rate: "5x" },
      { category: "United Purchases", detail: "Flights, tickets, packages", rate: "4x" },
      { category: "Other travel", detail: "Flights, hotels, rentals, transit", rate: "2x" },
      { category: "Dining", detail: "Restaurants & eligible delivery", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: CHASE_ULTIMATE_PROTECTIONS
  },
  {
    id: "world-of-hyatt",
    name: "World of Hyatt",
    issuer: "Chase",
    network: "Visa",
    annualFee: 95,
    color: "#0d507a",
    rewardsSummary: "Free anniversary night certificate, Discoverist status",
    rewardsCurrency: "World of Hyatt points",
    pointValueCents: 1.8,
    categories: ["Travel"],
    statementCredits: [],
    perks: [
      { id: "free-night", name: "Anniversary Free Night Certificate", description: "Valid at any Category 1-4 Hyatt hotel.", estimatedValue: 200 },
      { id: "hyatt-status", name: "Discoverist Elite Status", description: "Late checkout, preferred rooms, bonus points.", estimatedValue: 50 },
      { id: "qualifying-nights", name: "5 Elite Qualifying Nights", description: "Each year, plus 2 more for every $5,000 spent.", estimatedValue: 100 },
      { id: "second-night", name: "Second Free Night at $15k", description: "Another Category 1-4 free night after $15,000 in calendar-year spend.", estimatedValue: null }
    ],
    earningRates: [
      { category: "Hyatt Purchases", detail: "Spent at eligible Hyatt properties", rate: "9x" },
      { category: "Dining, Gas, Flights", detail: "Popular everyday categories", rate: "2x" },
      { category: "Gym & Fitness", detail: "Memberships & equipment", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "marriott-boundless",
    name: "Marriott Bonvoy Boundless",
    issuer: "Chase",
    network: "Visa",
    annualFee: 95,
    color: "#1a1a1a",
    rewardsSummary: "Free anniversary night certificate, Silver Elite status",
    rewardsCurrency: "Marriott Bonvoy® points",
    pointValueCents: 0.8,
    categories: ["Travel"],
    statementCredits: [
      { id: "airline-credit", name: "Airline Credit", description: "$50 twice a year after $500 in eligible airline purchases, through June 30, 2027.", value: 50, frequency: "semiannual", category: "Travel" }
    ],
    perks: [
      { id: "free-night", name: "Annual Free Night Award", description: "Valued up to 35,000 Bonvoy points.", estimatedValue: 200 },
      { id: "marriott-status", name: "Silver Elite Status", description: "Late checkout, 10% points bonus on stays.", estimatedValue: 30 },
      { id: "elite-nights", name: "15 Elite Night Credits", description: "Each year, plus 1 per $5,000 spent; Gold status at $35,000 spend.", estimatedValue: 150 }
    ],
    earningRates: [
      { category: "Marriott Hotels", detail: "Card earning; up to 17x total with membership and Silver Elite bonus", rate: "6x" },
      { category: "Groceries, Gas, Dining", detail: "Up to $6,000 spend combined annually", rate: "3x" },
      { category: "Everything Else", detail: "All other spend", rate: "2x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },

  // ================= AMERICAN EXPRESS =================
  {
    id: "amex-gold",
    name: "American Express Gold Card",
    issuer: "American Express",
    network: "Amex",
    annualFee: 325,
    color: "#b08940",
    rewardsSummary: "4x dining & U.S. supermarkets, premium lifestyle credits",
    rewardsCurrency: "Membership Rewards® points",
    pointValueCents: 1.5,
    categories: ["Lifestyle", "Cash Back", "Travel", "Premium"],
    statementCredits: [
      { id: "dining", name: "Dining Credit", description: "$10/mo at Grubhub, The Cheesecake Factory, Five Guys, Buffalo Wild Wings and Wonder (enrollment req.).", value: 10, frequency: "monthly", category: "Dining" },
      { id: "uber", name: "Uber Cash", description: "$10/mo for Uber rides or Uber Eats in the U.S.", value: 10, frequency: "monthly", category: "Transit" },
      { id: "dunkin", name: "Dunkin' Credit", description: "$7/mo Dunkin' credit (enrollment req.).", value: 7, frequency: "monthly", category: "Dining" },
      { id: "resy", name: "Resy Credit", description: "$50 in H1, $50 in H2 at Resy restaurants (enrollment req.).", value: 50, frequency: "semiannual", category: "Dining" }
    ],
    perks: [
      { id: "transfer", name: "Membership Rewards Transfers", description: "1:1 transfers to airline/hotel partners (Delta, British Airways).", estimatedValue: 200 },
      { id: "hotel-collection", name: "The Hotel Collection", description: "$100 experience credit on eligible 2+ night hotel stays.", estimatedValue: 50 },
      { id: "hertz", name: "Hertz Five Star Status", description: "Complimentary Hertz Five Star status (enrollment req.).", estimatedValue: null }
    ],
    earningRates: [
      { category: "Prepaid Hotels", detail: "Booked via Amex Travel", rate: "5x" },
      { category: "Dining", detail: "Worldwide restaurants & eligible delivery", rate: "4x" },
      { category: "U.S. Supermarkets", detail: "Up to $25,000 spend per year, then 1x", rate: "4x" },
      { category: "Flights", detail: "Booked directly or via Amex Travel", rate: "3x" },
      { category: "Everything Else", detail: "All other purchases", rate: "1x" }
    ],
    protections: AMEX_PREMIUM_PROTECTIONS
  },
  {
    id: "amex-platinum",
    name: "American Express Platinum Card",
    issuer: "American Express",
    network: "Amex",
    annualFee: 895,
    color: "#4e555e",
    rewardsSummary: "5x flights & prepaid hotels, quarterly Resy and Lululemon credits, lounge access",
    rewardsCurrency: "Membership Rewards® points",
    pointValueCents: 1.5,
    categories: ["Travel", "Premium", "Lifestyle"],
    statementCredits: [
      { id: "uber", name: "Uber Cash", description: "$15/mo in Jan-Nov, $35 in Dec for U.S. rides or Uber Eats.", value: 15, frequency: "monthly", category: "Transit" },
      { id: "digital", name: "$25 Monthly Digital Entertainment Credit", description: "Applied to Disney Bundle, Hulu, Peacock, WSJ, NYT, Paramount+, YouTube Premium (enrollment req.).", value: 25, frequency: "monthly", category: "Streaming" },
      { id: "walmart", name: "Walmart+ Credit", description: "Full statement credit for monthly Walmart+ membership.", value: 12.95, frequency: "monthly", category: "Lifestyle" },
      { id: "equinox", name: "Equinox Credit", description: "$25/mo Equinox membership credit (enrollment req.).", value: 25, frequency: "monthly", category: "Wellness" },
      { id: "airline", name: "Airline Fee Credit", description: "Up to $200 in incidental fees with one selected airline.", value: 200, frequency: "annual", category: "Travel" },
      { id: "hotel", name: "$600 Lodging Credit (FHR / THC / Airbnb Luxe)", description: "Up to $300 semi-annually on prepaid Amex Travel stays; 2-night minimum on all bookings from Jan 1, 2027.", value: 300, frequency: "semiannual", category: "Travel" },
      { id: "uber-one", name: "Uber One Credit", description: "Up to $120 per year for an auto-renewing Uber One membership.", value: 120, frequency: "annual", category: "Transit" },
      { id: "clear", name: "CLEAR+ Credit", description: "Up to $219 per calendar year for CLEAR+.", value: 219, frequency: "annual", category: "Travel" },
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel", cycleYears: 4 },
      { id: "resy-dining", name: "Resy Dining Credit", description: "$100 per quarter at Resy restaurants (enrollment req.).", value: 100, frequency: "quarterly", category: "Dining" },
      { id: "lululemon", name: "Lululemon Credit", description: "$75 per quarter for U.S. purchases at Lululemon (enrollment req.).", value: 75, frequency: "quarterly", category: "Shopping" },
      { id: "oura-ring", name: "Oura Ring Credit", description: "$200 annual statement credit for Oura Ring (enrollment req.).", value: 200, frequency: "annual", category: "Wellness" }
    ],
    perks: [
      { id: "centurion-lounge", name: "Amex Centurion Lounges", description: "Centurion & Escape lounge access (within 5 hours of departure same day, guests travel same flight).", estimatedValue: 350 },
      { id: "priority-pass", name: "Priority Pass Select", description: "Unlimited airport lounge access (excludes restaurants).", estimatedValue: 250 },
      { id: "delta-skyclub", name: "Delta Sky Club Access", description: "Access when flying Delta flights same day (subject to 2026 limits).", estimatedValue: 150 },
      { id: "hotel-statuses", name: "Hilton & Marriott Gold Statuses", description: "Complimentary mid-tier elite status in both programs.", estimatedValue: 100 },
      { id: "signature-support", name: "Signature Support for Amex", description: "Replaced Uber VIP status: premium support line and assistance.", estimatedValue: 30 }
    ],
    earningRates: [
      { category: "Flights", detail: "Booked direct or via Amex Travel (up to $500,000/yr)", rate: "5x" },
      { category: "Prepaid Hotels & Airbnb", detail: "Booked through Amex Travel", rate: "5x" },
      { category: "Everything Else", detail: "All other purchases", rate: "1x" }
    ],
    protections: AMEX_PREMIUM_PROTECTIONS
  },
  {
    id: "amex-blue-cash-preferred",
    name: "Blue Cash Preferred®",
    issuer: "American Express",
    network: "Amex",
    annualFee: 95,
    color: "#0b467e",
    rewardsSummary: "6% cash back at U.S. supermarkets & streaming, 3% gas",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back"],
    statementCredits: [
      { id: "disney", name: "Disney Streaming Credit", description: "Up to $10/mo on Disney+, Hulu or ESPN subscriptions (enrollment req.).", value: 10, frequency: "monthly", category: "Streaming" }
    ],
    perks: [],
    earningRates: [
      { category: "U.S. Supermarkets", detail: "Up to $6,000 spend per year, then 1%", rate: "6%" },
      { category: "Select U.S. Streaming", detail: "Direct streaming services", rate: "6%" },
      { category: "U.S. Gas Stations", detail: "Fill-ups at domestic stations", rate: "3%" },
      { category: "Transit", detail: "Includes tolls, trains, rideshare", rate: "3%" },
      { category: "Everything Else", detail: "All other spend", rate: "1%" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "amex-blue-cash-everyday",
    name: "Blue Cash Everyday®",
    issuer: "American Express",
    network: "Amex",
    annualFee: 0,
    color: "#2a73a3",
    rewardsSummary: "3% cash back at U.S. supermarkets, online retail & gas",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [
      { id: "disney", name: "Disney Streaming Credit", description: "Up to $7/mo on Disney+, Hulu or ESPN subscriptions (enrollment req.).", value: 7, frequency: "monthly", category: "Streaming" },
      { id: "home-chef", name: "Home Chef Credit", description: "$15/mo statement credit on Home Chef meal kits (enrollment req.).", value: 15, frequency: "monthly", category: "Lifestyle" }
    ],
    perks: [],
    earningRates: [
      { category: "U.S. Supermarkets", detail: "Up to $6,000 spend per year, then 1%", rate: "3%" },
      { category: "U.S. Online Retail", detail: "Up to $6,000 spend per year, then 1%", rate: "3%" },
      { category: "U.S. Gas Stations", detail: "Up to $6,000 spend per year, then 1%", rate: "3%" },
      { category: "Everything Else", detail: "All other spend", rate: "1%" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "amex-green",
    name: "Amex Classic Green Card",
    issuer: "American Express",
    network: "Amex",
    annualFee: 150,
    color: "#2a6f51",
    rewardsSummary: "3x travel, transit & dining, CLEAR+ credit",
    note: "Renamed Classic Green in Aug 2026 and closed to new applicants since July 2026; a redesign is expected.",
    rewardsCurrency: "Membership Rewards® points",
    pointValueCents: 1.5,
    categories: ["Travel", "Lifestyle"],
    statementCredits: [
      { id: "clear", name: "CLEAR+ Credit", description: "Up to $219 per year for CLEAR+ (enrollment req.).", value: 219, frequency: "annual", category: "Travel" }
    ],
    perks: [
      { id: "transfer", name: "Membership Rewards Transfers", description: "1:1 point transfers to top partners.", estimatedValue: 80 }
    ],
    earningRates: [
      { category: "Travel", detail: "Flights, hotels, rentals, tours", rate: "3x" },
      { category: "Transit", detail: "Tolls, trains, subways, rideshare", rate: "3x" },
      { category: "Dining", detail: "Restaurants worldwide", rate: "3x" },
      { category: "Everything Else", detail: "All other purchases", rate: "1x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "amex-cash-magnet",
    name: "Cash Magnet® Card",
    issuer: "American Express",
    network: "Amex",
    annualFee: 0,
    color: "#5c6b73",
    rewardsSummary: "Flat 1.5% unlimited cash back, 0% intro APR offer",
    note: "Closed to new applicants since Sept 25, 2024; existing cardholders keep their benefits.",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [],
    earningRates: flatCashBackRate("1.5%"),
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "amex-everyday",
    name: "Amex EveryDay® Card",
    issuer: "American Express",
    network: "Amex",
    annualFee: 0,
    color: "#4e7d96",
    rewardsSummary: "2x points at U.S. supermarkets, 20% bonus points",
    note: "Closed to new applicants since Sept 25, 2024; existing cardholders keep their benefits.",
    rewardsCurrency: "Membership Rewards® points",
    pointValueCents: 1.5,
    categories: ["Regular", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "points-bonus", name: "20% Transaction Bonus", description: "Use your card 20+ times in a billing cycle to get 20% more points.", estimatedValue: 30 }
    ],
    earningRates: [
      { category: "U.S. Supermarkets", detail: "Up to $6,000 spend per year, then 1x", rate: "2x" },
      { category: "Amex Travel", detail: "Bookings through portal", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "amex-everyday-preferred",
    name: "Amex EveryDay® Preferred",
    issuer: "American Express",
    network: "Amex",
    annualFee: 95,
    color: "#1b4461",
    rewardsSummary: "3x points at supermarkets, 50% bonus points",
    note: "Closed to new applicants since Sept 25, 2024; existing cardholders keep their benefits.",
    rewardsCurrency: "Membership Rewards® points",
    pointValueCents: 1.5,
    categories: ["Regular"],
    statementCredits: [],
    perks: [
      { id: "points-bonus", name: "50% Transaction Bonus", description: "Use your card 30+ times in a billing cycle to get 50% more points.", estimatedValue: 80 }
    ],
    earningRates: [
      { category: "U.S. Supermarkets", detail: "Up to $6,000 spend per year, then 1x", rate: "3x" },
      { category: "U.S. Gas Stations", detail: "Fill-ups at gas stations", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "amex-hilton-honors",
    name: "Hilton Honors Amex",
    issuer: "American Express",
    network: "Amex",
    annualFee: 0,
    color: "#0a2240",
    rewardsSummary: "7x points at Hilton properties, Silver Status",
    rewardsCurrency: "Hilton Honors points",
    pointValueCents: 0.5,
    categories: ["Travel", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "hilton-status", name: "Hilton Honors Silver Status", description: "Complimentary Silver status; Gold after $20,000 in calendar-year spend.", estimatedValue: 20 },
      { id: "no-fx", name: "No Foreign Transaction Fees", description: "0% FX fees internationally.", estimatedValue: 20 }
    ],
    earningRates: [
      { category: "Hilton Properties", detail: "Stays within the Hilton portfolio", rate: "7x" },
      { category: "Dining, Gas, Supermarkets", detail: "Includes U.S. locations", rate: "5x" },
      { category: "Everything Else", detail: "All other spend", rate: "3x" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "amex-hilton-surpass",
    name: "Hilton Honors Surpass®",
    issuer: "American Express",
    network: "Amex",
    annualFee: 150,
    color: "#003b6e",
    rewardsSummary: "12x points at Hilton, Gold Status, $200 Hilton credit",
    rewardsCurrency: "Hilton Honors points",
    pointValueCents: 0.5,
    categories: ["Travel", "Premium"],
    statementCredits: [
      { id: "hilton-credit", name: "$200 Hilton Quarter Credit", description: "$50 per quarter applied to Hilton property spend.", value: 50, frequency: "quarterly", category: "Travel" }
    ],
    perks: [
      { id: "hilton-gold", name: "Hilton Honors Gold Status", description: "Complimentary breakfast or food/beverage credit at Hilton hotels.", estimatedValue: 150 },
      { id: "free-night", name: "Free Night Reward Capability", description: "Earn a Free Night Award after spending $15,000 in a calendar year; Diamond status at $40,000.", estimatedValue: 50 }
    ],
    earningRates: [
      { category: "Hilton Properties", detail: "Stays within the Hilton portfolio", rate: "12x" },
      { category: "Dining, Gas, Supermarkets", detail: "Includes U.S. locations", rate: "6x" },
      { category: "U.S. Online Retail", detail: "Online purchases from U.S. merchants", rate: "4x" },
      { category: "Everything Else", detail: "All other spend", rate: "3x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "delta-gold",
    name: "Delta SkyMiles Gold",
    issuer: "American Express",
    network: "Amex",
    annualFee: 150,
    color: "#1e3a5f",
    rewardsSummary: "First checked bag free, rideshare & Delta Stays credits, $200 flight credit at $10k spend",
    rewardsCurrency: "Delta SkyMiles®",
    pointValueCents: 1.2,
    categories: ["Travel"],
    statementCredits: [
      { id: "rideshare", name: "Rideshare Credit", description: "$10/mo on eligible rideshare, starting after the first renewal (enrollment req.).", value: 10, frequency: "monthly", category: "Transit" },
      { id: "stay", name: "$100 Delta Stays Credit", description: "Annual credit on prepaid Delta Stays hotel bookings.", value: 100, frequency: "annual", category: "Travel" }
    ],
    perks: [
      { id: "checked-bag", name: "Free Checked Bag", description: "Free bag for you and up to 8 companions on your reservation.", estimatedValue: 120 },
      { id: "main-cabin-boarding", name: "Main Cabin 1 Boarding", description: "Board early and secure overhead bin space.", estimatedValue: 40 }
    ],
    earningRates: [
      { category: "Delta Purchases", detail: "Flights, tickets, packages", rate: "2x" },
      { category: "Dining", detail: "Restaurants worldwide", rate: "2x" },
      { category: "U.S. Supermarkets", detail: "Domestic supermarkets", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "delta-platinum",
    name: "Delta SkyMiles Platinum",
    issuer: "American Express",
    network: "Amex",
    annualFee: 350,
    color: "#0f233c",
    rewardsSummary: "Annual Companion Certificate, free checked bag, lounge access",
    rewardsCurrency: "Delta SkyMiles®",
    pointValueCents: 1.2,
    categories: ["Travel", "Premium"],
    statementCredits: [
      { id: "resy", name: "Delta Resy Credit", description: "$10/mo statement credit at Resy restaurants (enrollment req.).", value: 10, frequency: "monthly", category: "Dining" },
      { id: "rideshare", name: "$10 Rideshare Credit", description: "$10/mo statement credit on Lyft, Uber, etc. (enrollment req.).", value: 10, frequency: "monthly", category: "Transit" },
      { id: "stay", name: "$150 Delta Vacations Stays Credit", description: "Annual statement credit for hotel packages.", value: 150, frequency: "annual", category: "Travel" },
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel", cycleYears: 4 }
    ],
    perks: [
      { id: "companion-cert", name: "Annual Companion Certificate", description: "Domestic Main Cabin round-trip companion ticket (taxes apply).", estimatedValue: 300 },
      { id: "checked-bag", name: "Free Checked Bag", description: "Free bag for primary member + companions.", estimatedValue: 120 }
    ],
    earningRates: [
      { category: "Delta Purchases", detail: "Direct Delta bookings", rate: "3x" },
      { category: "Hotels", detail: "Direct hotel bookings", rate: "3x" },
      { category: "Dining", detail: "Restaurants worldwide", rate: "2x" },
      { category: "U.S. Supermarkets", detail: "Domestic supermarkets", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: AMEX_PREMIUM_PROTECTIONS
  },
  {
    id: "delta-reserve",
    name: "Delta SkyMiles Reserve",
    issuer: "American Express",
    network: "Amex",
    annualFee: 650,
    color: "#081423",
    rewardsSummary: "Delta Sky Club access, Companion Certificate, status boost",
    rewardsCurrency: "Delta SkyMiles®",
    pointValueCents: 1.2,
    categories: ["Travel", "Premium", "Lifestyle"],
    statementCredits: [
      { id: "resy", name: "Delta Resy Credit", description: "$20/mo statement credit at Resy restaurants (enrollment req.).", value: 20, frequency: "monthly", category: "Dining" },
      { id: "rideshare", name: "$10 Rideshare Credit", description: "$10/mo statement credit on Lyft, Uber, etc. (enrollment req.).", value: 10, frequency: "monthly", category: "Transit" },
      { id: "stay", name: "$200 Delta Vacations Stays Credit", description: "Annual statement credit for hotel packages.", value: 200, frequency: "annual", category: "Travel" }
    ],
    perks: [
      { id: "companion-cert-first", name: "Annual Companion Certificate", description: "First Class, Comfort+, or Main Cabin domestic round-trip ticket.", estimatedValue: 500 },
      { id: "skyclub", name: "Delta Sky Club Access", description: "15 visits per Medallion Year when flying Delta; unlimited after $75,000 in calendar-year spend.", estimatedValue: 400 },
      { id: "checked-bag", name: "Free Checked Bag", description: "Free bag for primary member + companions.", estimatedValue: 120 }
    ],
    earningRates: [
      { category: "Delta Purchases", detail: "Direct Delta bookings", rate: "3x" },
      { category: "Everything Else", detail: "All other purchases", rate: "1x" }
    ],
    protections: AMEX_PREMIUM_PROTECTIONS
  },
  {
    id: "marriott-brilliant",
    name: "Marriott Bonvoy Brilliant®",
    issuer: "American Express",
    network: "Amex",
    annualFee: 650,
    color: "#111111",
    rewardsSummary: "Marriott Platinum Elite Status, $300 Dining Credit, Free Night",
    rewardsCurrency: "Marriott Bonvoy® points",
    pointValueCents: 0.8,
    categories: ["Travel", "Premium", "Lifestyle"],
    statementCredits: [
      { id: "dining", name: "$300 Dining Credit", description: "$25/mo statement credit at restaurants worldwide.", value: 25, frequency: "monthly", category: "Dining" },
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel", cycleYears: 4 }
    ],
    perks: [
      { id: "marriott-platinum", name: "Platinum Elite Status", description: "Complimentary Platinum status: lounge access, free breakfast, room upgrades.", estimatedValue: 400 },
      { id: "free-night-85k", name: "Annual Free Night Award (85K)", description: "Valid at hotels up to 85,000 points per night.", estimatedValue: 350 },
      { id: "elite-nights-25", name: "25 Elite Night Credits", description: "Boost toward Titanium status annually.", estimatedValue: 250 },
      { id: "earned-choice", name: "Earned Choice Award", description: "Pick an upgrade, free night or other award after $60,000 in calendar-year spend.", estimatedValue: null }
    ],
    earningRates: [
      { category: "Marriott Hotels", detail: "Spent at participating Bonvoy properties", rate: "6x" },
      { category: "Flights", detail: "Booked direct with airlines", rate: "3x" },
      { category: "Dining", detail: "Restaurants worldwide", rate: "3x" },
      { category: "Everything Else", detail: "All other spend", rate: "2x" }
    ],
    protections: AMEX_PREMIUM_PROTECTIONS
  },
  {
    id: "marriott-bevy",
    name: "Marriott Bonvoy Bevy®",
    issuer: "American Express",
    network: "Amex",
    annualFee: 250,
    color: "#2a2a2a",
    rewardsSummary: "Gold Elite status, 1,000 bonus points per stay",
    rewardsCurrency: "Marriott Bonvoy® points",
    pointValueCents: 0.8,
    categories: ["Travel", "Premium"],
    statementCredits: [],
    perks: [
      { id: "marriott-gold", name: "Marriott Gold Elite Status", description: "Complimentary Gold status.", estimatedValue: 100 },
      { id: "stay-bonus", name: "1,000 Points stay bonus", description: "Earn 1,000 bonus points per stay at Marriott properties.", estimatedValue: 50 },
      { id: "elite-nights-15", name: "15 Elite Night Credits", description: "Annual boost toward higher Bonvoy tiers.", estimatedValue: 150 }
    ],
    earningRates: [
      { category: "Marriott Hotels", detail: "Spent at participating Bonvoy properties", rate: "6x" },
      { category: "U.S. Supermarkets & Dining", detail: "Up to $15,000 combined per year, then 2x", rate: "4x" },
      { category: "Everything Else", detail: "All other spend", rate: "2x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },

  // ================= CAPITAL ONE =================
  {
    id: "capital-one-venture-x",
    name: "Venture X",
    issuer: "Capital One",
    network: "Visa",
    annualFee: 395,
    color: "#1c2c44",

    rewardsSummary: "Flat 2x miles, $300 travel credit, anniversary miles, lounge access",
    rewardsCurrency: "Capital One Miles",
    pointValueCents: 1.0,
    categories: ["Travel", "Premium"],
    statementCredits: [
      { id: "travel", name: "$300 Annual Travel Credit", description: "Applied to bookings made via Capital One Travel.", value: 300, frequency: "annual", category: "Travel" },
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel", cycleYears: 4 }
    ],
    perks: [
      { id: "anniversary-miles", name: "10,000 Anniversary Miles", description: "Awarded annually starting on your first anniversary.", estimatedValue: 100 },
      { id: "priority-pass", name: "Priority Pass Select", description: "Complimentary lounge access for primary member; guests $35/visit. Authorized users need a $125/yr add-on for their own access (since Feb 1, 2026).", estimatedValue: 200 },
      { id: "cap1-lounge", name: "Capital One Lounges", description: "Primary member access; guests $45 per adult ($25 per child) unless you spend $75,000 in a calendar year.", estimatedValue: 100 }
    ],
    earningRates: [
      { category: "Hotels & Cars via Portal", detail: "Booked through Capital One Travel", rate: "10x" },
      { category: "Flights via Portal", detail: "Booked through Capital One Travel", rate: "5x" },
      { category: "Everything Else", detail: "Unlimited flat-rate miles", rate: "2x" }
    ],
    protections: CHASE_ULTIMATE_PROTECTIONS
  },
  {
    id: "capital-one-venture",
    name: "Venture Rewards",
    issuer: "Capital One",
    network: "Visa",
    annualFee: 95,
    color: "#354e6b",
    rewardsSummary: "Flat 2x miles, 5x portal hotels & cars, Global Entry credit",
    rewardsCurrency: "Capital One Miles",
    pointValueCents: 1.0,
    categories: ["Travel"],
    statementCredits: [
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel", cycleYears: 4 }
    ],
    perks: [
      { id: "hertz", name: "Hertz Five Star Status", description: "Complimentary status (enrollment req.). Lounge passes ended in 2025.", estimatedValue: null },
      { id: "lifestyle", name: "$50 Lifestyle Collection Credit", description: "Experience credit on Lifestyle Collection stays via Capital One Travel.", estimatedValue: 25 },
      { id: "no-fx", name: "No Foreign Transaction Fees", description: "0% FX fees internationally.", estimatedValue: 20 }
    ],
    earningRates: [
      { category: "Hotels, Vacation Rentals & Cars via Portal", detail: "Booked through Capital One Travel", rate: "5x" },
      { category: "Everything Else", detail: "Unlimited flat-rate miles", rate: "2x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "capital-one-ventureone",
    name: "VentureOne",
    issuer: "Capital One",
    network: "Mastercard",
    annualFee: 0,
    color: "#546e7a",
    rewardsSummary: "Flat 1.25x miles, no annual fee, no foreign transaction fees",
    rewardsCurrency: "Capital One Miles",
    pointValueCents: 1.0,
    categories: ["Travel", "No Annual Fee"],
    statementCredits: [],
    perks: [],
    earningRates: [
      { category: "Hotels & Cars via Portal", detail: "Booked through Capital One Travel", rate: "5x" },
      { category: "Everything Else", detail: "Unlimited flat-rate miles", rate: "1.25x" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "capital-one-quicksilver",
    name: "Quicksilver",
    issuer: "Capital One",
    network: "Visa",
    annualFee: 0,
    color: "#78909c",
    rewardsSummary: "Flat 1.5% unlimited cash back, no annual fee",
    note: "Some accounts moved to the Discover network in May 2026 and now earn 3% at grocery stores and gas stations; others stay on Mastercard at a flat 1.5%.",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [],
    earningRates: flatCashBackRate("1.5%"),
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "capital-one-savor",
    name: "Savor Rewards",
    issuer: "Capital One",
    network: "Mastercard",
    annualFee: 0,
    color: "#801d23",
    rewardsSummary: "3% dining, entertainment, streaming, groceries",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee", "Lifestyle"],
    statementCredits: [],
    perks: [
      { id: "uber-one", name: "Uber One Membership capability", description: "Complimentary membership when enrolled (seasonal).", estimatedValue: 50 }
    ],
    earningRates: [
      { category: "Dining", detail: "Restaurants & eligible delivery", rate: "3%" },
      { category: "Entertainment", detail: "Concerts, movie tickets, sporting events", rate: "3%" },
      { category: "Select U.S. Streaming", detail: "Select digital subscriptions", rate: "3%" },
      { category: "Groceries", detail: "Supermarkets (excl. Walmart/Target)", rate: "3%" },
      { category: "Capital One Entertainment", detail: "Tickets bought through Capital One Entertainment", rate: "8%" },
      { category: "Capital One Travel", detail: "Hotels, vacation rentals and rental cars", rate: "5%" },
      { category: "Everything Else", detail: "All other spend", rate: "1%" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "capital-one-platinum",
    name: "Capital One Platinum",
    issuer: "Capital One",
    network: "Mastercard",
    annualFee: 0,
    color: "#90a4ae",
    rewardsSummary: "Designed for building credit, no annual fee",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "No Annual Fee"],
    statementCredits: [],
    perks: [],
    earningRates: [
      { category: "No rewards program", detail: "Ideal for credit building & secure payments", rate: "0%" }
    ],
    protections: STANDARD_PROTECTIONS
  },

  {
    id: "capital-one-spark-cash-plus",
    name: "Spark Cash Plus",
    issuer: "Capital One",
    network: "Visa",
    annualFee: 150,
    color: "#222c37",
    rewardsSummary: "Flat 2% business cash back, $200 annual fee refund eligibility",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Business", "Cash Back"],
    statementCredits: [
      { id: "fee-refund", name: "Annual Fee Refund", description: "Refunded $150 after spending $150,000 in a year.", value: 150, frequency: "annual", category: "Statement Credit" }
    ],
    perks: [
      { id: "business-tools", name: "Business Reporting Tools", description: "Detailed accounting and expense tracking integrations.", estimatedValue: 50 }
    ],
    earningRates: flatCashBackRate("2%"),
    protections: CHASE_ULTIMATE_PROTECTIONS
  },
  {
    id: "capital-one-spark-miles",
    name: "Spark Miles",
    issuer: "Capital One",
    network: "Visa",
    annualFee: 95,
    color: "#37474f",
    rewardsSummary: "Flat 2x business miles, 5x portal hotels & cars, Global Entry credit",
    rewardsCurrency: "Capital One Miles",
    pointValueCents: 1.0,
    categories: ["Business", "Travel"],
    statementCredits: [
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel", cycleYears: 4 }
    ],
    perks: [
      { id: "no-fx", name: "No Foreign Transaction Fees", description: "0% FX fees internationally. Lounge passes ended in 2025.", estimatedValue: 20 }
    ],
    earningRates: [
      { category: "Hotels & Cars via Portal", detail: "Booked through Capital One Travel", rate: "5x" },
      { category: "Everything Else", detail: "Unlimited flat-rate business miles", rate: "2x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "capital-one-quicksilverone",
    name: "QuicksilverOne",
    issuer: "Capital One",
    network: "Mastercard",
    annualFee: 39,
    color: "#b0bec5",
    rewardsSummary: "Flat 1.5% cash back, designed to build credit",
    note: "Some accounts moved to the Discover network in May 2026 and now earn 3% at grocery stores and gas stations; others stay on Mastercard at a flat 1.5%.",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back"],
    statementCredits: [],
    perks: [],
    earningRates: flatCashBackRate("1.5%"),
    protections: STANDARD_PROTECTIONS
  },

  // ================= CITI =================
  {
    id: "citi-double-cash",
    name: "Citi Double Cash®",
    issuer: "Citi",
    network: "Mastercard",
    annualFee: 0,
    color: "#0047ba",
    rewardsSummary: "Flat 2% back (1% buy, 1% pay) + 5% on Citi Travel bookings",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "thankyou-points", name: "Convert to ThankYou Points", description: "Can combine rewards into Citi ThankYou program.", estimatedValue: 20 }
    ],
    earningRates: [
      { category: "Citi Travel℠ bookings", detail: "Hotels, rental cars, and attractions booked via portal", rate: "5%" },
      { category: "All other purchases", detail: "1% when you buy, 1% when you pay", rate: "2%" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "citi-custom-cash",
    name: "Citi Custom Cash®",
    issuer: "Citi",
    network: "Mastercard",
    annualFee: 0,
    color: "#0a2240",
    rewardsSummary: "5% back on your top spend category each month",
    note: "Closed to new applicants since May 28, 2026; existing cardholders keep their benefits.",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [],
    earningRates: [
      { category: "Top Spend Category", detail: "5% back automatically on highest eligible category (up to $500 spend/mo)", rate: "5%" },
      { category: "Everything Else", detail: "All other purchases", rate: "1%" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "citi-strata-premier",
    name: "Citi Strata Premier℠",
    issuer: "Citi",
    network: "Mastercard",
    annualFee: 95,
    color: "#2f3f50",
    rewardsSummary: "3x travel, dining, supermarkets, gas stations",
    rewardsCurrency: "Citi ThankYou Points",
    pointValueCents: 1.5,
    categories: ["Travel"],
    statementCredits: [
      { id: "hotel-credit", name: "$100 Annual Hotel Credit", description: "$100 off single hotel stay of $500+ booked via CitiTravel.com.", value: 100, frequency: "annual", category: "Travel" }
    ],
    perks: [
      { id: "thankyou-partners", name: "ThankYou Transfer Partners", description: "Transfer points to airlines and Choice Privileges.", estimatedValue: 120 }
    ],
    earningRates: [
      { category: "Citi Travel Bookings", detail: "10x on hotels, rental cars booked via portal", rate: "10x" },
      { category: "Supermarkets", detail: "Supermarkets & grocery stores", rate: "3x" },
      { category: "Dining", detail: "Restaurants & eligible delivery", rate: "3x" },
      { category: "Gas Stations & EV Charging", detail: "Fill-ups and charging costs", rate: "3x" },
      { category: "Air Travel & Hotels", detail: "Booked directly with airlines/hotels", rate: "3x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "citi-simplicity",
    name: "Citi Simplicity®",
    issuer: "Citi",
    network: "Mastercard",
    annualFee: 0,
    color: "#4e7da6",
    rewardsSummary: "No late fees, no penalty rate, long balance transfer offer",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "fee-immunity", name: "Late Fee Immunity", description: "Never charged late fees.", estimatedValue: 30 }
    ],
    earningRates: [
      { category: "No rewards program", detail: "Focuses strictly on balance transfer features", rate: "0%" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "citi-diamond-preferred",
    name: "Citi Diamond Preferred®",
    issuer: "Citi",
    network: "Mastercard",
    annualFee: 0,
    color: "#37474f",
    rewardsSummary: "Premium balance transfer period, low intro APR",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "No Annual Fee"],
    statementCredits: [],
    perks: [],
    earningRates: [
      { category: "No rewards program", detail: "Best in class balance transfer length", rate: "0%" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "costco-anywhere",
    name: "Costco Anywhere Visa®",
    issuer: "Citi",
    network: "Visa",
    annualFee: 0,
    color: "#d32f2f",
    rewardsSummary: "5% gas at Costco, 4% other gas & EV, 3% restaurants & travel",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Cash Back", "No Annual Fee", "Lifestyle"],
    statementCredits: [],
    perks: [
      { id: "costco-membership", name: "Requires Costco Membership", description: "Must possess active Costco membership to hold.", estimatedValue: 60 }
    ],
    earningRates: [
      { category: "Gas at Costco", detail: "Shares the $7,000 yearly gas cap, then 1%", rate: "5%" },
      { category: "Other Gas & EV Charging", detail: "Up to $7,000 spend annually (combined), then 1%", rate: "4%" },
      { category: "Restaurants & Travel", detail: "Worldwide dining and travel", rate: "3%" },
      { category: "Costco Purchases", detail: "Costco warehouses and costco.com", rate: "2%" },
      { category: "Everything Else", detail: "All other spend", rate: "1%" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "citi-rewards-plus",
    name: "Citi Strata℠",
    issuer: "Citi",
    network: "Mastercard",
    annualFee: 0,
    color: "#4f7292",
    rewardsSummary: "3x supermarkets, gas, transit & a category you pick, 2x dining",
    note: "Replaced the Citi Rewards+® card for new applicants.",
    rewardsCurrency: "Citi ThankYou Points",
    pointValueCents: 1.0,
    categories: ["Regular", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "self-select", name: "Self-Select 3x Category", description: "Pick one bonus category each quarter.", estimatedValue: null }
    ],
    earningRates: [
      { category: "Citi Travel", detail: "Hotels, car rentals and attractions", rate: "5x" },
      { category: "Supermarkets, Gas & EV, Select Transit", detail: "Plus one self-selected category", rate: "3x" },
      { category: "Dining", detail: "Restaurants", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "citi-strata-elite",
    name: "Citi Strata Elite℠",
    issuer: "Citi",
    network: "Mastercard",
    annualFee: 595,
    color: "#1c2833",
    rewardsSummary: "12x Citi Travel hotels, 6x Citi Nights dining, $700 in credits, Priority Pass",
    rewardsCurrency: "Citi ThankYou Points",
    pointValueCents: 1.5,
    categories: ["Travel", "Premium"],
    statementCredits: [
      { id: "hotel-credit", name: "$300 Annual Hotel Benefit", description: "$300 off a hotel stay of 2+ nights booked through Citi Travel.", value: 300, frequency: "annual", category: "Travel" },
      { id: "splurge-credit", name: "$200 Annual Splurge Credit", description: "Up to $200 per year at up to 2 of: 1stDibs, American Airlines, Best Buy, Future, Live Nation (enrollment req.).", value: 200, frequency: "annual", category: "Shopping" },
      { id: "blacklane-credit", name: "Blacklane Credit", description: "Up to $100 in Jan–Jun and $100 in Jul–Dec on Blacklane chauffeur services.", value: 100, frequency: "semiannual", category: "Travel" },
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel", cycleYears: 4 }
    ],
    perks: [
      { id: "lounge-access", name: "Priority Pass Select Lounge Access", description: "Unlimited visits plus 2 guests; authorized users included (no restaurants).", estimatedValue: 300 },
      { id: "admirals-passes", name: "4 Admirals Club Passes", description: "Four day passes per calendar year when flying oneworld.", estimatedValue: 200 }
    ],
    earningRates: [
      { category: "Citi Travel Hotels, Cars & Attractions", detail: "Booked via CitiTravel.com", rate: "12x" },
      { category: "Citi Travel Air", detail: "Booked via CitiTravel.com", rate: "6x" },
      { category: "Citi Nights Dining", detail: "Fri & Sat, 6 p.m.–6 a.m. ET (3x other times)", rate: "6x" },
      { category: "Dining", detail: "All other times", rate: "3x" },
      { category: "Everything Else", detail: "All other spend", rate: "1.5x" }
    ],
    protections: CHASE_ULTIMATE_PROTECTIONS
  },
  {
    id: "att-points-plus",
    name: "AT&T Points Plus®",
    issuer: "Citi",
    network: "Mastercard",
    annualFee: 0,
    color: "#00a8e0",
    rewardsSummary: "Up to $240/yr in spend credits, AT&T bill discounts, 3x gas",
    rewardsCurrency: "Citi ThankYou Points",
    pointValueCents: 1.0,
    categories: ["Cash Back", "No Annual Fee", "Lifestyle"],
    statementCredits: [
      { id: "att-credit", name: "$20 Statement Credit", description: "$20 each billing cycle you spend $1,000+ (up to $240/yr).", value: 20, frequency: "monthly", category: "Statement Credit" }
    ],
    perks: [
      { id: "att-discount", name: "AT&T Bill Discounts", description: "$10/mo per wireless line and $10/mo on internet with AutoPay & paperless billing.", estimatedValue: 120 },
      { id: "no-fx", name: "No Foreign Transaction Fees", description: "Added April 2026.", estimatedValue: 20 }
    ],
    earningRates: [
      { category: "Gas & EV Charging", detail: "Broad domestic charging/gas", rate: "3x" },
      { category: "AT&T Purchases", detail: "Products, services and bill pay", rate: "2x" },
      { category: "Supermarkets", detail: "Grocery stores", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "aa-platinum-select",
    name: "American Airlines AAdvantage® Platinum Select®",
    issuer: "Citi",
    network: "Mastercard",
    annualFee: 99,
    color: "#3f51b5",
    rewardsSummary: "Free checked bag on AA, $125 AA flight discount eligibility",
    rewardsCurrency: "American Airlines AAdvantage® miles",
    pointValueCents: 1.4,
    categories: ["Travel"],
    statementCredits: [
      { id: "aa-discount", name: "$125 AA Flight Discount", description: "Spend $20,000 on purchases in a year to receive discount.", value: 125, frequency: "annual", category: "Travel" }
    ],
    perks: [
      { id: "checked-bag", name: "First Checked Bag Free", description: "For you and up to 4 companions on AA domestic flights.", estimatedValue: 120 },
      { id: "priority-boarding", name: "Preferred Boarding", description: "Group 5 boarding on AA flights.", estimatedValue: 30 },
      { id: "inflight", name: "25% Back Inflight", description: "25% back on inflight food and beverage.", estimatedValue: 10 },
      { id: "loyalty-points", name: "Loyalty Points", description: "1 Loyalty Point per $1 spent toward AAdvantage status.", estimatedValue: null }
    ],
    earningRates: [
      { category: "AA Purchases", detail: "Flights and AA services", rate: "2x" },
      { category: "Dining", detail: "Worldwide dining", rate: "2x" },
      { category: "Gas Stations", detail: "Everyday fill-ups", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },

  // ================= BANK OF AMERICA =================
  {
    id: "bofa-customized-cash",
    name: "Customized Cash Rewards",
    issuer: "Bank of America",
    network: "Visa",
    annualFee: 0,
    color: "#d32f2f",
    rewardsSummary: "3% back on choice category, BofA Rewards 10-75% boost",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "pref-rewards", name: "BofA Rewards Boost", description: "10% boost with any BofA checking account, up to 75% with $1M+ in assets (replaced Preferred Rewards May 27, 2026).", estimatedValue: 150 }
    ],
    earningRates: [
      { category: "Choice Category", detail: "3% on category of your choice (gas, online shopping, dining, travel, drugstores, home improvements - up to $2,500/quarter combined with groceries)", rate: "3%" },
      { category: "Groceries & Wholesale Clubs", detail: "Supermarkets and Costco/Sam's (up to $2,500/quarter combined)", rate: "2%" },
      { category: "Everything Else", detail: "All other spend", rate: "1%" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "bofa-unlimited-cash",
    name: "Unlimited Cash Rewards",
    issuer: "Bank of America",
    network: "Visa",
    annualFee: 0,
    color: "#b0bec5",
    rewardsSummary: "Flat 1.5% unlimited cash back, BofA Rewards boost eligible",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "pref-rewards-flat", name: "BofA Rewards Boost", description: "1.65% with any BofA checking account, 2.25% at $100k, up to 2.62% at $1M+ in assets.", estimatedValue: 180 }
    ],
    earningRates: flatCashBackRate("1.5%"),
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "bofa-travel-rewards",
    name: "Travel Rewards",
    issuer: "Bank of America",
    network: "Visa",
    annualFee: 0,
    color: "#0d47a1",
    rewardsSummary: "Flat 1.5x points on all purchases, no foreign transaction fees",
    rewardsCurrency: "Bank of America Travel points",
    pointValueCents: 1.0,
    categories: ["Travel", "No Annual Fee"],
    statementCredits: [],
    perks: [],
    earningRates: [
      { category: "All purchases", detail: "Earn unlimited flat points towards travel/dining statement credits", rate: "1.5x" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "bofa-premium-rewards",
    name: "Premium Rewards",
    issuer: "Bank of America",
    network: "Visa",
    annualFee: 95,
    color: "#263238",
    rewardsSummary: "2x travel & dining, 1.5x other spend, $100 airline credit",
    rewardsCurrency: "Bank of America Travel points",
    pointValueCents: 1.0,
    categories: ["Travel"],
    statementCredits: [
      { id: "airline-incidental", name: "$100 Annual Airline Incidental Credit", description: "Statement credit for fees like baggage, lounge, seat selection.", value: 100, frequency: "annual", category: "Travel" },
      { id: "tsa-credit", name: "TSA PreCheck / Global Entry", description: "Application fee credit once every 4 years.", value: 100, frequency: "one-time", category: "Travel", cycleYears: 4 }
    ],
    perks: [
      { id: "pref-rewards-premium", name: "BofA Rewards Boost", description: "10% to 75% more points by BofA Rewards tier (75% now needs $1M+ in assets).", estimatedValue: 200 }
    ],
    earningRates: [
      { category: "Travel & Dining", detail: "Unlimited points", rate: "2x" },
      { category: "Everything Else", detail: "Unlimited flat other points", rate: "1.5x" }
    ],
    protections: CHASE_ULTIMATE_PROTECTIONS
  },
  {
    id: "bofa-premium-elite",
    name: "Premium Rewards Elite",
    issuer: "Bank of America",
    network: "Visa",
    annualFee: 550,
    color: "#1a252c",
    rewardsSummary: "Priority Pass, $450 in credits, 2x travel & dining",
    rewardsCurrency: "Bank of America Travel points",
    pointValueCents: 1.0,
    categories: ["Travel", "Premium", "Lifestyle"],
    statementCredits: [
      { id: "travel-credits", name: "$300 Annual Airline & Incidentals Credit", description: "Statement credit for airline incidentals.", value: 300, frequency: "annual", category: "Travel" },
      { id: "lifestyle-credit", name: "$150 Lifestyle Credit", description: "For rideshare, food delivery, streaming, transit.", value: 150, frequency: "annual", category: "Lifestyle" },
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel", cycleYears: 4 }
    ],
    perks: [
      { id: "priority-pass-elite", name: "Priority Pass Select", description: "Unlimited lounge visits with guest allowances.", estimatedValue: 350 },
      { id: "point-boost-portal", name: "20% Discount via Travel Portal", description: "Save 20% on flights booked with points through portal.", estimatedValue: 100 }
    ],
    earningRates: [
      { category: "Travel & Dining", detail: "Up to 3.5x with the top BofA Rewards tier", rate: "2x" },
      { category: "Everything Else", detail: "Up to 2.62x with the top BofA Rewards tier", rate: "1.5x" }
    ],
    protections: CHASE_ULTIMATE_PROTECTIONS
  },
  {
    id: "bofa-bankamericard",
    name: "BankAmericard®",
    issuer: "Bank of America",
    network: "Mastercard",
    annualFee: 0,
    color: "#546e7a",
    rewardsSummary: "Designed for balance transfers with a long intro APR offer",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "No Annual Fee"],
    statementCredits: [],
    perks: [],
    earningRates: [
      { category: "No rewards program", detail: "Ideal for balance transfers & fee savings", rate: "0%" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "bofa-komen",
    name: "Susan G. Komen Customized Cash Rewards",
    issuer: "Bank of America",
    network: "Visa",
    annualFee: 0,
    color: "#e91e63",
    rewardsSummary: "3% back choice category, supports breast cancer research",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "foundation-donations", name: "Direct Foundation Donation", description: "Bank of America donates to Susan G. Komen program at no cost to you.", estimatedValue: 20 }
    ],
    earningRates: [
      { category: "Choice Category", detail: "3% back in selected categories (gas, online shopping, etc.)", rate: "3%" },
      { category: "Groceries & Wholesale Clubs", detail: "Supermarkets and clubs", rate: "2%" },
      { category: "Everything Else", detail: "All other spend", rate: "1%" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "bofa-mlb",
    name: "MLB Customized Cash Rewards",
    issuer: "Bank of America",
    network: "Visa",
    annualFee: 0,
    color: "#0d2240",
    rewardsSummary: "3% choice category with customized MLB team card art",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee", "Lifestyle"],
    statementCredits: [],
    perks: [],
    earningRates: [
      { category: "Choice Category", detail: "3% back in selected categories (gas, online shopping, etc.)", rate: "3%" },
      { category: "Groceries & Wholesale Clubs", detail: "Supermarkets and clubs", rate: "2%" },
      { category: "Everything Else", detail: "All other spend", rate: "1%" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "alaska-airlines",
    name: "Atmos™ Rewards Ascent Visa Signature®",
    issuer: "Bank of America",
    network: "Visa",
    annualFee: 95,
    color: "#00426a",
    rewardsSummary: "$99 Companion Fare, free checked bag, 3x on Alaska & Hawaiian",
    rewardsCurrency: "Atmos™ Rewards points",
    pointValueCents: 1.5,
    categories: ["Travel"],
    note: "Formerly the Alaska Airlines Visa Signature® card.",
    statementCredits: [],
    perks: [
      { id: "companion-fare", name: "$99 Companion Fare", description: "Each anniversary after $6,000 in prior-year spend ($99 fare + taxes from $23).", estimatedValue: 200 },
      { id: "checked-bag", name: "Free Checked Bag", description: "For you and up to 6 companions on your reservation.", estimatedValue: 120 },
      { id: "lounge-discount", name: "$100 Off Alaska Lounge+", description: "Discount on an annual Alaska Lounge+ membership.", estimatedValue: null },
      { id: "inflight", name: "20% Back Inflight", description: "20% back on inflight purchases, plus preferred boarding.", estimatedValue: 10 }
    ],
    earningRates: [
      { category: "Alaska & Hawaiian Purchases", detail: "Flights, inflight purchases", rate: "3x" },
      { category: "Gas, EV Charging, Transit", detail: "Plus cable, ride-hailing and select streaming", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "bofa-unlimited-secured",
    name: "Unlimited Cash Rewards Secured",
    issuer: "Bank of America",
    network: "Visa",
    annualFee: 0,
    color: "#78909c",
    rewardsSummary: "Earn 1.5% back while building credit with a security deposit",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [],
    earningRates: flatCashBackRate("1.5%"),
    protections: STANDARD_PROTECTIONS
  },

  // ================= DISCOVER =================
  {
    id: "discover-it-cashback",
    name: "Discover it® Cash Back",
    issuer: "Discover",
    network: "Discover",
    annualFee: 0,
    color: "#ff6600",
    rewardsSummary: "5% rotating categories, Unlimited Cashback Match in first year",
    note: "Discover is now part of Capital One; accounts move to the Capital One app in waves from July 27, 2026 and keep their rewards.",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "first-year-match", name: "Cashback Match™", description: "Discover matches all cash back earned in first year automatically.", estimatedValue: 150 }
    ],
    earningRates: [
      { category: "Rotating Categories", detail: "Up to $1,500 per quarter when activated (Q4 2026: entertainment, restaurants, utilities)", rate: "5%" },
      { category: "Capital One Travel & Entertainment", detail: "Hotels, rental cars, activities and tickets", rate: "5%" },
      { category: "Everything Else", detail: "All other spend", rate: "1%" }
    ],
    protections: DISCOVER_STANDARD_PROTECTIONS
  },
  {
    id: "discover-it-chrome",
    name: "Discover it® Chrome",
    issuer: "Discover",
    network: "Discover",
    annualFee: 0,
    color: "#006699",
    rewardsSummary: "2% gas & dining, Cashback Match in first year",
    note: "Discover is now part of Capital One; accounts move to the Capital One app in waves from July 27, 2026 and keep their rewards.",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "first-year-match-chrome", name: "Cashback Match™", description: "Discover matches all cash back earned in first year automatically.", estimatedValue: 100 }
    ],
    earningRates: [
      { category: "Gas & Dining", detail: "Up to $1,000 spend combined per quarter, then 1%", rate: "2%" },
      { category: "Everything Else", detail: "All other spend", rate: "1%" }
    ],
    protections: DISCOVER_STANDARD_PROTECTIONS
  },
  {
    id: "discover-it-student-cashback",
    name: "Discover it® Student Cash Back",
    issuer: "Discover",
    network: "Discover",
    annualFee: 0,
    color: "#7cb342",
    rewardsSummary: "5% rotating categories, tailored for college students",
    note: "Discover is now part of Capital One; accounts move to the Capital One app in waves from July 27, 2026 and keep their rewards.",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "student-match", name: "Cashback Match™", description: "First year cashback match.", estimatedValue: 120 }
    ],
    earningRates: [
      { category: "Rotating Categories", detail: "5% on quarterly categories up to $1,500 spend per quarter", rate: "5%" },
      { category: "Everything Else", detail: "All other spend", rate: "1%" }
    ],
    protections: DISCOVER_STANDARD_PROTECTIONS
  },
  {
    id: "discover-it-student-chrome",
    name: "Discover it® Student Chrome",
    issuer: "Discover",
    network: "Discover",
    annualFee: 0,
    color: "#00838f",
    rewardsSummary: "2% gas & dining, no late fee on first payment",
    note: "Discover is now part of Capital One; accounts move to the Capital One app in waves from July 27, 2026 and keep their rewards.",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [],
    earningRates: [
      { category: "Gas & Dining", detail: "Up to $1,000 spend combined per quarter, then 1%", rate: "2%" },
      { category: "Everything Else", detail: "All other spend", rate: "1%" }
    ],
    protections: DISCOVER_STANDARD_PROTECTIONS
  },
  {
    id: "discover-it-secured",
    name: "Discover it® Secured",
    issuer: "Discover",
    network: "Discover",
    annualFee: 0,
    color: "#cfd8dc",
    rewardsSummary: "5% rotating categories while building credit, deposit from $49",
    note: "Revamped for new cardholders in 2026 (managed by Capital One). Original cardholders keep 2% gas & dining.",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [],
    earningRates: [
      { category: "Rotating Categories", detail: "Up to $1,500 per quarter when activated", rate: "5%" },
      { category: "Capital One Travel & Entertainment", detail: "Hotels, rental cars, activities and tickets", rate: "5%" },
      { category: "Everything Else", detail: "All other spend", rate: "1%" }
    ],
    protections: DISCOVER_STANDARD_PROTECTIONS
  },
  {
    id: "discover-it-miles",
    name: "Discover it® Miles",
    issuer: "Discover",
    network: "Discover",
    annualFee: 0,
    color: "#546e7a",
    rewardsSummary: "Flat 1.5x miles, first year Miles Match, no foreign fees",
    rewardsCurrency: "Discover Miles",
    pointValueCents: 1.0,
    categories: ["Travel", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "miles-match", name: "Miles Match™", description: "Double all miles earned in first year automatically.", estimatedValue: 150 }
    ],
    note: "Accounts are moving to the Capital One app and website in waves from July 27, 2026; rewards stay the same.",
    earningRates: [
      { category: "Capital One Travel", detail: "Hotels, vacation rentals and rental cars (after migration)", rate: "5x" },
      { category: "All purchases", detail: "Earn flat miles redeemable for travel statement credits", rate: "1.5x" }
    ],
    protections: DISCOVER_STANDARD_PROTECTIONS
  },
  {
    id: "nhl-discover",
    name: "NHL Discover Card",
    issuer: "Discover",
    network: "Discover",
    annualFee: 0,
    color: "#212121",
    rewardsSummary: "5% rotating categories with custom NHL team card art",
    note: "Discover is now part of Capital One; accounts move to the Capital One app in waves from July 27, 2026 and keep their rewards.",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee", "Lifestyle"],
    statementCredits: [],
    perks: [
      { id: "nhl-discount", name: "10% off NHL Shop", description: "Receive 10% off NHLShop.com purchases.", estimatedValue: 20 }
    ],
    earningRates: [
      { category: "Rotating Categories", detail: "5% on quarterly categories up to $1,500 spend per quarter", rate: "5%" },
      { category: "Everything Else", detail: "All other spend", rate: "1%" }
    ],
    protections: DISCOVER_STANDARD_PROTECTIONS
  },
  {
    id: "discover-more",
    name: "Discover More Card",
    issuer: "Discover",
    network: "Discover",
    annualFee: 0,
    color: "#e65100",
    rewardsSummary: "Legacy Discover rewards product, solid fraud protection",
    note: "Legacy card not offered to new applicants; accounts are moving to Capital One.",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "No Annual Fee"],
    statementCredits: [],
    perks: [],
    earningRates: [
      { category: "All purchases", detail: "Standard legacy rewards yield", rate: "1%" }
    ],
    protections: DISCOVER_STANDARD_PROTECTIONS
  },

  // ================= WELLS FARGO =================
  {
    id: "wf-active-cash",
    name: "Active Cash®",
    issuer: "Wells Fargo",
    network: "Visa",
    annualFee: 0,
    color: "#d81e05",
    rewardsSummary: "Flat 2% cash rewards on purchases, no annual fee",
    rewardsCurrency: "Cash rewards",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "cell-protection", name: "Cell Phone Protection", description: "Up to $600 against damage or theft ($25 deductible).", estimatedValue: 80 }
    ],
    earningRates: flatCashBackRate("2%"),
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "wf-autograph",
    name: "Autograph®",
    issuer: "Wells Fargo",
    network: "Visa",
    annualFee: 0,
    color: "#a88523",
    rewardsSummary: "3x points on travel, dining, transit, gas, streaming",
    rewardsCurrency: "Wells Fargo Rewards points",
    pointValueCents: 1.0,
    categories: ["Travel", "Lifestyle", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "cell-protection", name: "Cell Phone Protection", description: "Up to $600 against damage or theft ($25 deductible).", estimatedValue: 80 },
      { id: "transfers", name: "Travel Transfer Partners", description: "Transfer points 1:1 to airline partners like British Airways, Air France/KLM and JetBlue.", estimatedValue: null },
      { id: "no-fx", name: "No Foreign Transaction Fees", description: "0% FX fees internationally.", estimatedValue: 20 }
    ],
    earningRates: [
      { category: "Dining", detail: "Restaurants & eligible delivery", rate: "3x" },
      { category: "Travel", detail: "Flights, hotels, rentals", rate: "3x" },
      { category: "Transit", detail: "Tolls, trains, subways, rideshare", rate: "3x" },
      { category: "Gas & EV Charging", detail: "Fuel and charging networks", rate: "3x" },
      { category: "Popular Streaming", detail: "Digital subscriptions", rate: "3x" },
      { category: "Phone Plans", detail: "Cell phone service provider bill", rate: "3x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "wf-autograph-journey",
    name: "Autograph Journey℠",
    issuer: "Wells Fargo",
    network: "Visa",
    annualFee: 95,
    color: "#6d5218",
    rewardsSummary: "5x hotels, 4x airlines, $50 airline credit, transfer partners",
    rewardsCurrency: "Wells Fargo Rewards points",
    pointValueCents: 1.0,
    categories: ["Travel"],
    statementCredits: [
      { id: "airline-credit", name: "$50 Annual Airline Credit", description: "Statement credit after a $50+ airline purchase each year.", value: 50, frequency: "annual", category: "Travel" }
    ],
    perks: [
      { id: "transfer-partners", name: "Wells Fargo Points Transfer", description: "Transfer to travel partners (Air France, Choice).", estimatedValue: 100 },
      { id: "cell-protection", name: "Cell Phone Protection", description: "Up to $1,000 per claim ($25 deductible).", estimatedValue: 100 }
    ],
    earningRates: [
      { category: "Hotels", detail: "Booked directly with hotels", rate: "5x" },
      { category: "Airlines", detail: "Booked directly with airlines", rate: "4x" },
      { category: "Other Travel", detail: "Car rentals, cruises, etc.", rate: "3x" },
      { category: "Dining", detail: "Restaurants worldwide", rate: "3x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: CHASE_ULTIMATE_PROTECTIONS
  },
  {
    id: "wf-reflect",
    name: "Reflect®",
    issuer: "Wells Fargo",
    network: "Visa",
    annualFee: 0,
    color: "#5c6b73",
    rewardsSummary: "Best-in-class introductory APR period on purchases & transfers",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "cell-protection-reflect", name: "Cell Phone Protection", description: "Up to $600 cell phone protection.", estimatedValue: 80 },
      { id: "intro-apr", name: "21-Month 0% Intro APR", description: "On purchases and qualifying balance transfers (5% transfer fee, min $5).", estimatedValue: null }
    ],
    earningRates: [
      { category: "No rewards program", detail: "Strictly optimized for balance transfers and APR protection", rate: "0%" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "wf-choice",
    name: "Choice Privileges® Select",
    issuer: "Wells Fargo",
    network: "Mastercard",
    annualFee: 95,
    color: "#2a75d3",
    rewardsSummary: "30,000 anniversary points, Platinum status, 10x at Choice Hotels",
    rewardsCurrency: "Choice Privileges® points",
    pointValueCents: 0.8,
    categories: ["Travel"],
    statementCredits: [
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel", cycleYears: 4 }
    ],
    perks: [
      { id: "anniversary-choice", name: "30,000 Anniversary Choice Points", description: "Awarded each account anniversary.", estimatedValue: 180 },
      { id: "choice-platinum", name: "Choice Privileges Platinum Status", description: "Complimentary Platinum status plus 20 elite night credits per year.", estimatedValue: 60 },
      { id: "cell-protection", name: "Cell Phone Protection", description: "Up to $800 per claim ($25 deductible).", estimatedValue: 80 }
    ],
    earningRates: [
      { category: "Choice Purchases", detail: "Paid stays at Choice Hotels properties", rate: "10x" },
      { category: "Gas, Groceries, Home Improvement, Phone Plans", detail: "Everyday spending categories", rate: "5x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "bilt-blue",
    name: "Bilt Blue Card",
    issuer: "Column N.A.",
    network: "Mastercard",
    annualFee: 0,
    color: "#1f3a8a",
    rewardsSummary: "Points on rent & mortgage, 4% Bilt Cash, 1x everyday",
    rewardsCurrency: "Bilt Points",
    pointValueCents: 1.5,
    categories: ["Travel", "Regular", "No Annual Fee"],
    note: "Bilt Card 2.0, issued by Column N.A. and serviced by Cardless since Feb 2026. Only one Bilt card per person.",
    statementCredits: [
      { id: "welcome-bilt-cash", name: "$100 Welcome Bilt Cash", description: "Bilt Cash on approval.", value: 100, frequency: "one-time", category: "Welcome" }
    ],
    perks: [
      { id: "bilt-cash", name: "4% Bilt Cash", description: "On everyday spend; use for rent points ($30 per 1,000 points) or Bilt perks. Only $100 rolls over each year.", estimatedValue: null },
      { id: "bilt-transfers", name: "Bilt Transfer Partners", description: "1:1 to United, Alaska, Aeroplan, JetBlue, Hilton and more; Hyatt moves to 4:3 on Jan 1, 2027.", estimatedValue: 150 },
      { id: "no-fx", name: "No Foreign Transaction Fees", description: "0% FX fees internationally.", estimatedValue: 20 }
    ],
    earningRates: [
      { category: "Rent & Mortgage", detail: "No fee; scales with non-housing spend (100% of rent = 1.25x), or unlock up to 1x with Bilt Cash", rate: "1.25x" },
      { category: "Bilt Travel Hotels", detail: "Booked via Bilt Travel", rate: "3x" },
      { category: "Bilt Travel Flights", detail: "Booked via Bilt Travel", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: [
      { name: "Cell Phone Protection", description: "Up to $800 per claim ($50 deductible) when you pay your bill with the card." },
      { name: "Auto Rental Coverage", description: "Secondary in the U.S., primary abroad." },
      { name: "Purchase Assurance", description: "Covers eligible purchases against damage or theft." }
    ]
  },
  {
    id: "bilt-obsidian",
    name: "Bilt Obsidian Card",
    issuer: "Column N.A.",
    network: "Mastercard",
    annualFee: 95,
    color: "#111827",
    rewardsSummary: "3x dining or groceries, 2x travel, points on rent, $100 hotel credit",
    rewardsCurrency: "Bilt Points",
    pointValueCents: 1.5,
    categories: ["Travel", "Lifestyle"],
    note: "Bilt Card 2.0, issued by Column N.A. and serviced by Cardless since Feb 2026. Only one Bilt card per person.",
    statementCredits: [
      { id: "hotel", name: "Bilt Travel Hotel Credit", description: "Two $50 credits per year on 2+ night Bilt Travel stays.", value: 50, frequency: "semiannual", category: "Travel" },
      { id: "welcome-bilt-cash", name: "$200 Welcome Bilt Cash", description: "Bilt Cash on approval.", value: 200, frequency: "one-time", category: "Welcome" }
    ],
    perks: [
      { id: "bilt-cash", name: "4% Bilt Cash", description: "On everyday spend; use for rent points, the Points Accelerator, or Bilt perks. Only $100 rolls over each year.", estimatedValue: null },
      { id: "accelerator", name: "Points Accelerator", description: "$200 Bilt Cash buys an extra 1x on the next $5,000 of spend, up to 5 times a year.", estimatedValue: null },
      { id: "bilt-transfers", name: "Bilt Transfer Partners", description: "1:1 to United, Alaska, Aeroplan, JetBlue, Hilton and more; Hyatt moves to 4:3 on Jan 1, 2027.", estimatedValue: 150 }
    ],
    earningRates: [
      { category: "Dining or Groceries", detail: "Your pick, changeable yearly; groceries capped at $25,000/yr", rate: "3x" },
      { category: "Rent & Mortgage", detail: "No fee; scales with non-housing spend (100% of rent = 1.25x), or unlock up to 1x with Bilt Cash", rate: "1.25x" },
      { category: "Bilt Travel Hotels", detail: "Booked via Bilt Travel", rate: "4x" },
      { category: "Travel", detail: "Flights via Bilt Travel earn 3x", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: [
      { name: "Cell Phone Protection", description: "Up to $800 per claim ($50 deductible) when you pay your bill with the card." },
      { name: "Trip Delay", description: "Up to $300 for delays over 6 hours." },
      { name: "Trip Cancellation / Interruption", description: "Up to $2,000 per trip, $5,000 per year." },
      { name: "Auto Rental Coverage", description: "Secondary in the U.S., primary abroad." },
      { name: "Lost Luggage, Purchase Assurance & Extended Warranty", description: "Covers checked bags and eligible purchases." },
      { name: "No Foreign Transaction Fees", description: "Save on exchange fees abroad." }
    ]
  },
  {
    id: "bilt-palladium",
    name: "Bilt Palladium Card",
    issuer: "Column N.A.",
    network: "Mastercard",
    annualFee: 495,
    color: "#3a3d42",
    rewardsSummary: "2x everything, points on rent, $400 hotel credit, Priority Pass",
    rewardsCurrency: "Bilt Points",
    pointValueCents: 1.5,
    categories: ["Travel", "Premium"],
    note: "Bilt Card 2.0, issued by Column N.A. and serviced by Cardless since Feb 2026. Only one Bilt card per person.",
    statementCredits: [
      { id: "hotel", name: "Bilt Travel Hotel Credit", description: "Two $200 credits per year on 2+ night Bilt Travel stays.", value: 200, frequency: "semiannual", category: "Travel" },
      { id: "annual-bilt-cash", name: "$200 Annual Bilt Cash", description: "Posted each year, including the first.", value: 200, frequency: "annual", category: "Statement Credit" },
      { id: "welcome-bilt-cash", name: "$300 Welcome Bilt Cash", description: "Bilt Cash on approval.", value: 300, frequency: "one-time", category: "Welcome" }
    ],
    perks: [
      { id: "priority-pass", name: "Priority Pass Select", description: "Lounge access with 2 guests per visit (no restaurants), also for authorized users.", estimatedValue: 469 },
      { id: "welcome-bonus", name: "Welcome Bonus + Gold Status", description: "50,000 points and Bilt Gold status after $4,000 in everyday spend in 90 days.", estimatedValue: 750 },
      { id: "accelerator", name: "Points Accelerator", description: "$200 Bilt Cash buys an extra 1x on the next $5,000 of spend, up to 5 times a year.", estimatedValue: null },
      { id: "bilt-transfers", name: "Bilt Transfer Partners", description: "1:1 to United, Alaska, Aeroplan, JetBlue, Hilton and more; Hyatt moves to 4:3 on Jan 1, 2027.", estimatedValue: 150 }
    ],
    earningRates: [
      { category: "Bilt Travel Hotels", detail: "Booked via Bilt Travel", rate: "4x" },
      { category: "Bilt Travel Flights", detail: "Booked via Bilt Travel", rate: "3x" },
      { category: "Everything Else", detail: "All non-housing spend, plus 4% Bilt Cash", rate: "2x" },
      { category: "Rent & Mortgage", detail: "No fee; scales with non-housing spend (100% of rent = 1.25x), or unlock up to 1x with Bilt Cash", rate: "1.25x" },
    ],
    protections: [
      { name: "Cell Phone Protection", description: "Up to $800 per claim ($50 deductible) when you pay your bill with the card." },
      { name: "Trip Delay & Cancellation", description: "Trip delay up to $300 after 6 hours; cancellation/interruption up to $2,000 per trip." },
      { name: "Baggage Delay & Lost Luggage", description: "Baggage delay up to $250 (2 claims/yr); lost luggage up to $1,500." },
      { name: "Auto Rental Coverage", description: "Secondary in the U.S., primary abroad." },
      { name: "Purchase Assurance, Extended Warranty & Price Drop", description: "Covers eligible purchases." },
      { name: "No Foreign Transaction Fees", description: "Save on exchange fees abroad." }
    ]
  },
  {
    id: "wf-attune",
    name: "Attune℠ Card",
    issuer: "Wells Fargo",
    network: "Visa",
    annualFee: 0,
    color: "#2a7051",
    rewardsSummary: "4% cash back on wellness, recreation, pets, streaming, transit & EV",
    note: "Closed to new applicants since June 15, 2026; existing cardholders keep their rewards.",
    rewardsCurrency: "Cash rewards",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee", "Lifestyle"],
    statementCredits: [],
    perks: [],
    earningRates: [
      { category: "Self-Care & Recreation", detail: "Gyms, spas, salons, sporting events, theme parks, golf", rate: "4%" },
      { category: "Pets, Hobbies & Entertainment", detail: "Pet care, gardening, movies, music, books, streaming", rate: "4%" },
      { category: "Transit & EV Charging", detail: "Public transit, rideshare, EV charging", rate: "4%" },
      { category: "Everything Else", detail: "All other spend", rate: "1%" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "wf-signify-cash",
    name: "Signify Business Cash®",
    issuer: "Wells Fargo",
    network: "Visa",
    annualFee: 0,
    color: "#2c3e50",
    rewardsSummary: "Flat 2% business cash rewards, no annual fee",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Business", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [],
    earningRates: flatCashBackRate("2%"),
    protections: PREFERRED_PROTECTIONS
  },

  // ================= U.S. BANK =================
  {
    id: "usbank-altitude-go",
    name: "Altitude® Go",
    issuer: "U.S. Bank",
    network: "Visa",
    annualFee: 0,
    color: "#d32f2f",
    rewardsSummary: "4x dining & takeout, $15 streaming credit",
    rewardsCurrency: "Altitude Rewards points",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee", "Lifestyle"],
    statementCredits: [
      { id: "streaming-credit", name: "$15 Streaming Credit", description: "Annual credit when charging select streaming services to the card.", value: 15, frequency: "annual", category: "Streaming" }
    ],
    perks: [],
    earningRates: [
      { category: "Dining & Delivery", detail: "Restaurants, bars, takeout (up to $2,000 per quarter)", rate: "4x" },
      { category: "Groceries", detail: "Supermarkets", rate: "2x" },
      { category: "Gas & EV Charging", detail: "Everyday fill-ups", rate: "2x" },
      { category: "Streaming Services", detail: "Digital subscriptions", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "usbank-altitude-connect",
    name: "Altitude® Connect",
    issuer: "U.S. Bank",
    network: "Visa",
    annualFee: 0,
    color: "#1e3d59",
    rewardsSummary: "4x travel & gas, Priority Pass lounge visits, TSA credit",
    rewardsCurrency: "Altitude Rewards points",
    pointValueCents: 1.0,
    categories: ["Travel", "No Annual Fee"],
    statementCredits: [
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 100, frequency: "one-time", category: "Travel", cycleYears: 4 }
    ],
    perks: [
      { id: "lounge-visits", name: "4 Priority Pass lounge visits/yr", description: "Four complimentary airport lounge visits.", estimatedValue: 120 }
    ],
    earningRates: [
      { category: "Travel via Portal", detail: "Hotels & car rentals", rate: "5x" },
      { category: "Other Travel", detail: "Flights, hotel direct, transit", rate: "4x" },
      { category: "Gas & EV Charging", detail: "First $1,000 per quarter", rate: "4x" },
      { category: "Groceries & Dining", detail: "Everyday food purchases", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "usbank-shopper-cash",
    name: "Shopper Cash Rewards®",
    issuer: "U.S. Bank",
    network: "Visa",
    annualFee: 95,
    color: "#801e1d",
    rewardsSummary: "6% cash back at two selected retailers, 3% choice category",
    note: "Closed to new applicants since June 2026; existing cardholders keep their rewards.",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back"],
    statementCredits: [],
    perks: [],
    earningRates: [
      { category: "Selected Retailers", detail: "6% back at 2 retailers (Amazon, Walmart, Target, Best Buy, etc. up to $1,500/quarter)", rate: "6%" },
      { category: "Choice Category", detail: "3% in one of wholesale clubs, gas & EV, or bills (up to $1,500/quarter)", rate: "3%" },
      { category: "Prepaid Hotels & Cars", detail: "Booked through the Rewards Center", rate: "5.5%" },
      { category: "Everything Else", detail: "All other spend", rate: "1.5%" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "usbank-cash-plus",
    name: "Cash+® Visa",
    issuer: "U.S. Bank",
    network: "Visa",
    annualFee: 0,
    color: "#2a5c91",
    rewardsSummary: "5% cash back on two selected categories, 2% everyday category",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [],
    earningRates: [
      { category: "Selected Categories", detail: "5% back on 2 categories of your choice (home utilities, department stores, cell phone, up to $2,000/quarter)", rate: "5%" },
      { category: "Everyday Category", detail: "2% back on 1 category of choice (gas, groceries, dining)", rate: "2%" },
      { category: "Everything Else", detail: "All other spend", rate: "1%" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "usbank-triple-cash",
    name: "Triple Cash Rewards",
    issuer: "U.S. Bank",
    network: "Mastercard",
    annualFee: 0,
    color: "#263238",
    rewardsSummary: "Flat business rewards, $100 software statement credit",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Business", "Cash Back", "No Annual Fee"],
    statementCredits: [
      { id: "software-credit", name: "$100 Software Statement Credit", description: "Annual credit for recurring software subscriptions (QuickBooks, FreshBooks).", value: 100, frequency: "annual", category: "Statement Credit" }
    ],
    perks: [],
    earningRates: [
      { category: "Prepaid Hotels & Cars", detail: "Booked through the Travel Center", rate: "5%" },
      { category: "Gas, EV Charging, Dining", detail: "Broad transport & food categories", rate: "3%" },
      { category: "Office Supplies & Cell Phone", detail: "Essential utility fees", rate: "3%" },
      { category: "Everything Else", detail: "All other business spend", rate: "1%" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "usbank-smartly",
    name: "Smartly™ Visa",
    issuer: "U.S. Bank",
    network: "Visa",
    annualFee: 0,
    color: "#2e3b4e",
    rewardsSummary: "Up to 4% cash back flat based on Smartly deposits",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "smartly-boost", name: "Smartly Balance Boost", description: "2.5%, 3% or up to 4% with qualifying U.S. Bank balances ($100k in checking for 4%); boost applies to the first $10,000 per billing cycle.", estimatedValue: 150 }
    ],
    earningRates: flatCashBackRate("2%"),
    protections: STANDARD_PROTECTIONS
  },

  // ================= BARCLAYS =================
  {
    id: "barclays-jetblue-plus",
    name: "JetBlue Plus Card",
    issuer: "Barclays",
    network: "Mastercard",
    annualFee: 99,
    color: "#022a59",
    rewardsSummary: "5,000 anniversary points, free checked bag, 6x on JetBlue",
    rewardsCurrency: "JetBlue TrueBlue points",
    pointValueCents: 1.3,
    categories: ["Travel"],
    statementCredits: [
      { id: "jb-vacations", name: "$100 JetBlue Vacations Credit", description: "Annual statement credit on eligible booking package.", value: 100, frequency: "annual", category: "Travel" }
    ],
    perks: [
      { id: "anniversary-miles", name: "5,000 Anniversary Points", description: "Bonus points awarded annually.", estimatedValue: 65 },
      { id: "checked-bag", name: "First Checked Bag Free", description: "Save up to $140 round-trip for you and up to 3 companions.", estimatedValue: 140 },
      { id: "award-rebate", name: "10% Award Points Back", description: "10% of points back on JetBlue award redemptions, plus 50% off inflight food and drinks.", estimatedValue: 30 }
    ],
    earningRates: [
      { category: "JetBlue Purchases", detail: "Flights and holiday booking packages", rate: "6x" },
      { category: "Restaurants & Supermarkets", detail: "Everyday dining and grocery", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "barclays-jetblue",
    name: "JetBlue Card",
    issuer: "Barclays",
    network: "Mastercard",
    annualFee: 0,
    color: "#006aa6",
    rewardsSummary: "3x on JetBlue, no annual fee, no foreign transaction fees",
    rewardsCurrency: "JetBlue TrueBlue points",
    pointValueCents: 1.3,
    categories: ["Travel", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "award-rebate", name: "10% Award Points Back", description: "10% of points back on JetBlue award redemptions, plus 50% off inflight food and drinks.", estimatedValue: 20 }
    ],
    earningRates: [
      { category: "JetBlue Purchases", detail: "Direct JetBlue flights", rate: "3x" },
      { category: "Restaurants & Supermarkets", detail: "Everyday dining and grocery", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "barclays-hawaiian",
    name: "Hawaiian Airlines World Elite Mastercard",
    issuer: "Barclays",
    network: "Mastercard",
    annualFee: 99,
    color: "#9c1f60",
    rewardsSummary: "Earns Atmos™ Rewards, 2 free checked bags, $100 companion discount",
    rewardsCurrency: "Atmos™ Rewards points",
    pointValueCents: 1.5,
    categories: ["Travel"],
    note: "Barclays no longer lists this card on its own site; new applications go through Bank of Hawaii. HawaiianMiles merged into Atmos Rewards in Oct 2025.",
    statementCredits: [],
    perks: [
      { id: "companion-discount", name: "Annual $100 Companion Discount", description: "After each account anniversary, plus a one-time 50% off companion fare.", estimatedValue: 100 },
      { id: "checked-bag", name: "Two Checked Bags Free", description: "For the primary cardholder on eligible Hawaiian and Alaska flights.", estimatedValue: 120 },
      { id: "no-fx", name: "No Foreign Transaction Fees", description: "0% FX fees internationally.", estimatedValue: 20 }
    ],
    earningRates: [
      { category: "Hawaiian & Alaska Purchases", detail: "Eligible airline purchases", rate: "3x" },
      { category: "Gas, Dining, Groceries", detail: "Everyday spending categories", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "barclays-wyndham-plus",
    name: "Wyndham Rewards Earner Plus",
    issuer: "Barclays",
    network: "Visa",
    annualFee: 95,
    color: "#0a2240",
    rewardsSummary: "15,000 anniversary points, Diamond then Platinum status, 4x everyday & travel",
    note: "Refreshed June 17, 2026 for new cardholders ($75 → $95). Existing cardholders keep their old terms.",
    rewardsCurrency: "Wyndham Rewards points",
    pointValueCents: 0.9,
    categories: ["Travel"],
    statementCredits: [],
    perks: [
      { id: "anniversary-wyndham", name: "15,000 Anniversary Points", description: "Awarded each account anniversary.", estimatedValue: 150 },
      { id: "free-night", name: "Free Night After 5 Nights", description: "A free night (up to 15,000 points) after five nights.", estimatedValue: 100 },
      { id: "wyndham-platinum", name: "Wyndham Diamond, Then Platinum", description: "Diamond status for the first year, then Platinum; plus National Emerald Club Executive.", estimatedValue: 80 }
    ],
    earningRates: [
      { category: "Wyndham Properties", detail: "Stays within the Wyndham portfolio", rate: "6x" },
      { category: "Dining, Groceries & Travel", detail: "Includes gas, EV charging, airfare, rental cars, rideshare, tolls and trains", rate: "4x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "barclays-frontier",
    name: "Frontier Airlines World Mastercard",
    issuer: "Barclays",
    network: "Mastercard",
    annualFee: 99,
    color: "#2a7051",
    rewardsSummary: "Annual flight voucher eligibility, family pool points",
    rewardsCurrency: "Frontier Miles",
    pointValueCents: 0.8,
    categories: ["Travel"],
    statementCredits: [
      { id: "flight-voucher", name: "$100 Frontier Flight Voucher", description: "After $2,500 in purchases in a card year; use within 180 days.", value: 100, frequency: "annual", category: "Travel" }
    ],
    perks: [
      { id: "family-pooling", name: "Family Points Pooling", description: "Share miles with family members at no fee.", estimatedValue: 30 },
      { id: "checked-bags", name: "Two Free Checked Bags", description: "For the primary cardholder on Frontier-operated flights.", estimatedValue: 140 },
      { id: "no-award-fees", name: "No Award Redemption Fees", description: "Waives close-in award booking fees; 1 elite qualifying point per $1 spent.", estimatedValue: 30 }
    ],
    earningRates: [
      { category: "Frontier Purchases", detail: "Direct frontier flights and services", rate: "5x" },
      { category: "Dining", detail: "Dining categories", rate: "3x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },

  // ================= SYNCHRONY =================
  {
    id: "synchrony-paypal",
    name: "PayPal Cashback Mastercard",
    issuer: "Synchrony",
    network: "Mastercard",
    annualFee: 0,
    color: "#003087",
    rewardsSummary: "3% back on PayPal purchases, flat 1.5% elsewhere",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [],
    earningRates: [
      { category: "PayPal Transactions", detail: "Checkout online using PayPal", rate: "3%" },
      { category: "Everything Else", detail: "All other Mastercard purchases", rate: "1.5%" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "synchrony-verizon",
    name: "Verizon Visa Card",
    issuer: "Synchrony",
    network: "Visa",
    annualFee: 0,
    color: "#ff0000",
    rewardsSummary: "4% groceries, gas & EV, dining and Verizon purchases",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Cash Back", "No Annual Fee", "Lifestyle"],
    statementCredits: [],
    perks: [
      { id: "verizon-bill", name: "Verizon AutoPay discount compatibility", description: "Allows $10/mo savings on Verizon plan.", estimatedValue: 120 },
      { id: "travelpass", name: "2 TravelPass Days", description: "Two free TravelPass days per year; no foreign transaction fees.", estimatedValue: 24 }
    ],
    earningRates: [
      { category: "Groceries, Gas & EV Charging", detail: "Paid in Verizon Dollars", rate: "4%" },
      { category: "Dining", detail: "Including takeout and delivery", rate: "4%" },
      { category: "Verizon Purchases", detail: "Devices and accessories (not bill payments)", rate: "4%" },
      { category: "Everything Else", detail: "All other spend", rate: "1%" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "synchrony-sams",
    name: "Sam’s Club Mastercard",
    issuer: "Synchrony",
    network: "Mastercard",
    annualFee: 0,
    color: "#0064a3",
    rewardsSummary: "5% cash back on gas & EV charging, 3% dining",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Cash Back", "No Annual Fee", "Lifestyle"],
    statementCredits: [],
    perks: [
      { id: "sams-membership", name: "Requires Sam's Club Membership", description: "Must possess active Sam's Club membership.", estimatedValue: 50 }
    ],
    earningRates: [
      { category: "Gas & EV Charging", detail: "Up to $6,000 spend annually, then 1%", rate: "5%" },
      { category: "Dining", detail: "Restaurants, takeout and bars", rate: "3%" },
      { category: "Sam's Club Purchases", detail: "Plus members (up to 5% total in-club with Plus rewards); Club members earn 1%", rate: "3%" },
      { category: "Everything Else", detail: "All other spend", rate: "1%" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "synchrony-venmo",
    name: "Venmo Credit Card",
    issuer: "Synchrony",
    network: "Visa",
    annualFee: 0,
    color: "#008cff",
    rewardsSummary: "3% dining & entertainment (4% when split), 3% paying with Venmo",
    note: "New rewards from Oct 15, 2026 for new cardholders; earlier cardholders may keep the old top-category structure.",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "custom-split", name: "Venmo QR Code splits", description: "Split custom transactions inside the Venmo app.", estimatedValue: 20 }
    ],
    earningRates: [
      { category: "Dining & Entertainment", detail: "Restaurants, delivery, streaming, tickets; +1% when split with a Venmo friend", rate: "3%" },
      { category: "Paying with Venmo", detail: "Venmo checkout and payments to businesses", rate: "3%" },
      { category: "Everything Else", detail: "All other spend", rate: "1%" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "synchrony-lowes",
    name: "MyLowe’s Rewards Credit Card",
    issuer: "Synchrony",
    network: "Visa",
    annualFee: 0,
    color: "#004990",
    rewardsSummary: "Save 5% on everyday Lowe's purchases, promo financing",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "No Annual Fee", "Lifestyle"],
    statementCredits: [],
    perks: [
      { id: "lowes-discount", name: "5% Lowe's Store Discount", description: "Save 5% instantly on eligible Lowe's purchases.", estimatedValue: 100 },
      { id: "silver-key", name: "MyLowe's Silver Key Status", description: "Free standard shipping and 1.25 MyLowe's points per $1. Formerly the Lowe's Advantage Card.", estimatedValue: 20 }
    ],
    earningRates: [
      { category: "Lowe's Purchases", detail: "Store or online checkout", rate: "5%" },
      { category: "Everything Else", detail: "Designed primarily for store transactions", rate: "0%" }
    ],
    protections: STANDARD_PROTECTIONS
  },

  // ================= CREDIT UNIONS & REGIONAL BANKS =================
  {
    id: "navyfed-cashrewards",
    name: "Navy Federal cashRewards",
    issuer: "Navy Federal",
    network: "Visa",
    annualFee: 0,
    color: "#002a54",
    rewardsSummary: "1.5% cash back; up to 2% with cashRewards Plus, no annual fee",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "nf-membership", name: "Requires Military Union Membership", description: "Must be active military, veteran, or eligible family.", estimatedValue: 30 },
      { id: "rate-boost", name: "Higher Rate Options", description: "Up to 1.75% with Navy Federal direct deposit; 2% with cashRewards Plus ($5,000+ credit limit).", estimatedValue: 50 }
    ],
    earningRates: flatCashBackRate("1.5%"),
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "navyfed-morerewards",
    name: "Navy Federal More Rewards",
    issuer: "Navy Federal",
    network: "Amex",
    annualFee: 0,
    color: "#2a75d3",
    rewardsSummary: "3x points on gas, transit, groceries, and dining",
    rewardsCurrency: "Navy Federal Points",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [],
    earningRates: [
      { category: "Supermarkets", detail: "Unlimited domestic food purchases", rate: "3x" },
      { category: "Dining", detail: "Restaurants worldwide", rate: "3x" },
      { category: "Gas & Transit", detail: "Fuel stations & local transport", rate: "3x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "navyfed-flagship",
    name: "Navy Federal Flagship Premier",
    issuer: "Navy Federal",
    network: "Visa",
    annualFee: 95,
    color: "#001e3d",
    rewardsSummary: "4x travel, 3x dining, $100 airline credit, metal card",
    rewardsCurrency: "Navy Federal Points",
    pointValueCents: 1.0,
    categories: ["Travel"],
    note: "Refreshed in Sept 2026 (formerly Flagship Rewards, $49). Complimentary Amazon Prime was removed.",
    statementCredits: [
      { id: "airline-credit", name: "$100 Airline Credit", description: "Annual statement credit on airline purchases.", value: 100, frequency: "annual", category: "Travel" },
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel", cycleYears: 4 }
    ],
    perks: [
      { id: "gigsky", name: "GigSky Global Data", description: "Complimentary 3 GB global data plan.", estimatedValue: 20 }
    ],
    earningRates: [
      { category: "Travel", detail: "Airfare, hotels, rideshare, parking and more", rate: "4x" },
      { category: "Dining", detail: "Restaurants", rate: "3x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: CHASE_ULTIMATE_PROTECTIONS
  },
  {
    id: "penfed-power-cash",
    name: "PenFed Power Cash Rewards",
    issuer: "PenFed",
    network: "Visa",
    annualFee: 0,
    color: "#0d5c3a",
    rewardsSummary: "Flat 2% cash back for Honors members, no annual fee",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [],
    earningRates: flatCashBackRate("2%"),
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "penfed-pathfinder",
    name: "PenFed Pathfinder Rewards",
    issuer: "PenFed",
    network: "Visa",
    annualFee: 95,
    color: "#003b46",
    rewardsSummary: "4x points travel, $100 ancillary credit, no foreign fees",
    note: "Since Sept 28, 2026 the $95 fee is no longer waived for Honors Advantage members.",
    rewardsCurrency: "PenFed Points",
    pointValueCents: 1.0,
    categories: ["Travel"],
    statementCredits: [
      { id: "ancillary-credit", name: "$100 Annual Domestic Airline Credit", description: "Applied to incidental airline fees.", value: 100, frequency: "annual", category: "Travel" },
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 100, frequency: "one-time", category: "Travel", cycleYears: 4 }
    ],
    perks: [],
    earningRates: [
      { category: "Travel", detail: "Honors Advantage members earn 4x, others 3.4x", rate: "4x" },
      { category: "Everything Else", detail: "All other spend", rate: "1.5x" }
    ],
    protections: CHASE_ULTIMATE_PROTECTIONS
  },
  {
    id: "pnc-cash-unlimited",
    name: "PNC Cash Unlimited",
    issuer: "PNC",
    network: "Visa",
    annualFee: 0,
    color: "#f58220",
    rewardsSummary: "Flat 2% cash back on all purchases, no annual fee",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [],
    earningRates: flatCashBackRate("2%"),
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "td-double-up",
    name: "TD Double Up Credit Card",
    issuer: "TD",
    network: "Visa",
    annualFee: 0,
    color: "#008240",
    rewardsSummary: "Flat 2% cash back: 1% when spent, 1% when deposited in TD",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [],
    earningRates: flatCashBackRate("2%"),
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "fidelity-rewards",
    name: "Fidelity Rewards Visa Signature",
    issuer: "Fidelity",
    network: "Visa",
    annualFee: 0,
    color: "#3f5a3b",
    rewardsSummary: "Flat 2% cash back deposited into qualified Fidelity accounts",
    note: "From Jan 1, 2027 Purchase Security and Lost Luggage coverage end; National car rental discounts and travel medical coverage are added.",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "investment-perk", name: "Direct Account Investment", description: "Sweep cash rewards automatically into active investments.", estimatedValue: 50 }
    ],
    earningRates: flatCashBackRate("2%"),
    protections: PREFERRED_PROTECTIONS
  }
];

export const CARD_BY_ID: Record<string, Card> = Object.fromEntries(
  CARDS.map((c) => [c.id, c])
);

/* TODO: Add more regional bank card models in next phase */

/* Added Amex Gold, Platinum, Everyday lineups */

/* Added Venture, Venture X, Savor family cards */

/* Added Citi Premier, Custom Cash, Wells Fargo Active Cash */

/* Catalog finalized at 100 premium US credit cards */

/* Optimized conversion formulas for Ultimate Rewards and Membership Rewards */
