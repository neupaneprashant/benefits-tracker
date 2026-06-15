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
    statementCredits: [
      { id: "hotel", name: "$100 Annual Chase Travel Hotel Credit", description: "Applied to hotel bookings through Chase Travel℠.", value: 100, frequency: "annual", category: "Travel" },
      { id: "global-entry", name: "Global Entry / PreCheck / NEXUS Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel" }
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
    rewardsSummary: "3x travel & dining, Points Boost, lounge access, hotel credits",
    rewardsCurrency: "Chase Ultimate Rewards® points",
    pointValueCents: 1.5,
    categories: ["Travel", "Premium", "Lifestyle"],
    statementCredits: [
      { id: "travel", name: "$300 Annual Travel Credit", description: "Auto-applies to travel purchases (flights, trains, hotels, parking).", value: 300, frequency: "annual", category: "Travel" },
      { id: "doordash", name: "$5 Monthly DoorDash Credit", description: "Accrues monthly, must spend on DoorDash app.", value: 5, frequency: "monthly", category: "Dining" },
      { id: "clear", name: "$189 Annual CLEAR Plus Credit", description: "TSA PreCheck alternative lane program credit.", value: 189, frequency: "annual", category: "Travel" },
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel" },
      { id: "edit-hotel", name: "$500 Annual 'The Edit' Hotel Credit", description: "Applied as up to $250 per booking (2-night minimum required) for stays at hotels in The Edit by Chase Travel.", value: 500, frequency: "annual", category: "Travel" },
      { id: "select-hotel", name: "$250 Select Hotel Credit (2026)", description: "One-time annual credit for prepaid Chase Travel bookings at participating hotel brands (IHG, Montage, Pendry, etc.).", value: 250, frequency: "one-time", category: "Travel" }
    ],
    perks: [
      { id: "priority-pass", name: "Priority Pass Select", description: "Unlimited airport lounge access for cardmember + 2 guests.", estimatedValue: 429 },
      { id: "dashpass", name: "DoorDash DashPass", description: "Complimentary DashPass membership.", estimatedValue: 120 },
      { id: "chase-lounges", name: "Chase Sapphire Lounges", description: "Access to Chase's new premium airport lounges.", estimatedValue: 100 }
    ],
    earningRates: [
      { category: "Travel via Chase Travel℠", detail: "Earn 10x hotels/cars, 5x flights after using travel credit", rate: "10x" },
      { category: "Dining", detail: "Earn 10x on Chase Dining portal, 3x standard dining", rate: "3x" },
      { category: "Other Travel", detail: "All other travel worldwide", rate: "3x" },
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
      { id: "mastercard-world", name: "Mastercard World Elite Perks", description: "Includes cell phone protection and Lyft credits.", estimatedValue: 60 }
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
    name: "Slate Edge®",
    issuer: "Chase",
    network: "Visa",
    annualFee: 0,
    color: "#3f5a7a",
    rewardsSummary: "Lower your interest rate, 0% intro APR offer",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "apr-reduction", name: "APR Reduction Benefit", description: "Lower your APR by 2% each year you pay on time.", estimatedValue: 40 }
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
    annualFee: 69,
    color: "#304269",
    rewardsSummary: "3,000 anniversary points, 2x Southwest purchases",
    rewardsCurrency: "Southwest Rapid Rewards points",
    pointValueCents: 1.4,
    categories: ["Travel"],
    statementCredits: [
      { id: "earlybird", name: "2 EarlyBird Check-Ins", description: "Reimbursements for EarlyBird Check-In per year.", value: 50, frequency: "annual", category: "Travel" }
    ],
    perks: [
      { id: "anniversary-miles", name: "Anniversary Bonus Points", description: "3,000 Rapid Rewards points added to your account annually.", estimatedValue: 45 }
    ],
    earningRates: [
      { category: "Southwest Purchases", detail: "Flights, hotel partners", rate: "2x" },
      { category: "Rapid Rewards Partners", detail: "Hotel/rental partners", rate: "2x" },
      { category: "Local Transit & Commute", detail: "Includes rideshare", rate: "2x" },
      { category: "Internet, Cable, Streaming", detail: "Monthly utilities", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "southwest-premier",
    name: "Southwest Rapid Rewards Premier",
    issuer: "Chase",
    network: "Visa",
    annualFee: 99,
    color: "#1c2e4a",
    rewardsSummary: "6,000 anniversary points, no foreign transaction fees",
    rewardsCurrency: "Southwest Rapid Rewards points",
    pointValueCents: 1.4,
    categories: ["Travel"],
    statementCredits: [
      { id: "earlybird", name: "2 EarlyBird Check-Ins", description: "Reimbursements for EarlyBird Check-In per year.", value: 50, frequency: "annual", category: "Travel" }
    ],
    perks: [
      { id: "anniversary-miles", name: "Anniversary Bonus Points", description: "6,000 Rapid Rewards points added to your account annually.", estimatedValue: 90 },
      { id: "no-fx", name: "No Foreign Transaction Fees", description: "0% FX fees internationally.", estimatedValue: 20 }
    ],
    earningRates: [
      { category: "Southwest Purchases", detail: "Flights, hotel partners", rate: "3x" },
      { category: "Rapid Rewards Partners", detail: "Hotel/rental partners", rate: "2x" },
      { category: "Local Transit & Commute", detail: "Includes rideshare", rate: "2x" },
      { category: "Internet, Cable, Streaming", detail: "Monthly utilities", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "southwest-priority",
    name: "Southwest Rapid Rewards Priority",
    issuer: "Chase",
    network: "Visa",
    annualFee: 149,
    color: "#0f172a",
    rewardsSummary: "7,500 anniversary points, $75 annual travel credit",
    rewardsCurrency: "Southwest Rapid Rewards points",
    pointValueCents: 1.4,
    categories: ["Travel", "Premium"],
    statementCredits: [
      { id: "sw-credit", name: "$75 Southwest Annual Credit", description: "Automatically applied to Southwest flight purchases.", value: 75, frequency: "annual", category: "Travel" }
    ],
    perks: [
      { id: "anniversary-miles", name: "Anniversary Bonus Points", description: "7,500 Rapid Rewards points added to your account annually.", estimatedValue: 112 },
      { id: "upgrades", name: "4 Upgraded Boardings", description: "Position A1-A15 boardings reimbursed when available.", estimatedValue: 120 }
    ],
    earningRates: [
      { category: "Southwest Purchases", detail: "Flights, hotel partners", rate: "3x" },
      { category: "Rapid Rewards Partners", detail: "Hotel/rental partners", rate: "2x" },
      { category: "Local Transit & Commute", detail: "Includes rideshare", rate: "2x" },
      { category: "Internet, Cable, Streaming", detail: "Monthly utilities", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: CHASE_ULTIMATE_PROTECTIONS
  },
  {
    id: "united-explorer",
    name: "United Explorer",
    issuer: "Chase",
    network: "Visa",
    annualFee: 95,
    color: "#083c6b",
    rewardsSummary: "Free checked bag, 2 MileagePlus lounge passes annually",
    rewardsCurrency: "United MileagePlus® miles",
    pointValueCents: 1.3,
    categories: ["Travel"],
    statementCredits: [
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel" }
    ],
    perks: [
      { id: "checked-bag", name: "First Checked Bag Free", description: "Save up to $140 round-trip for you and a companion.", estimatedValue: 140 },
      { id: "united-passes", name: "2 United Club One-Time Passes", description: "Complimentary lounge passes at United Clubs annually.", estimatedValue: 118 },
      { id: "priority-boarding", name: "Priority Boarding", description: "Board before standard economy.", estimatedValue: 30 }
    ],
    earningRates: [
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
    annualFee: 250,
    color: "#002b5c",
    rewardsSummary: "$125 annual United credit, 2 free checked bags",
    rewardsCurrency: "United MileagePlus® miles",
    pointValueCents: 1.3,
    categories: ["Travel", "Premium"],
    statementCredits: [
      { id: "united-credit", name: "$125 United Annual Credit", description: "Automatically applied to United flight purchases.", value: 125, frequency: "annual", category: "Travel" },
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel" }
    ],
    perks: [
      { id: "checked-bags", name: "Two Checked Bags Free", description: "For primary cardmember and one companion.", estimatedValue: 280 },
      { id: "flight-credits", name: "5,000 Mile Anniversary Award", description: "Get 5,000 miles back after taking an eligible award flight.", estimatedValue: 60 }
    ],
    earningRates: [
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
    name: "United Club Infinite",
    issuer: "Chase",
    network: "Visa",
    annualFee: 525,
    color: "#031d3d",
    rewardsSummary: "United Club membership, 4x United purchases",
    rewardsCurrency: "United MileagePlus® miles",
    pointValueCents: 1.3,
    categories: ["Travel", "Premium", "Lifestyle"],
    statementCredits: [
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel" }
    ],
    perks: [
      { id: "united-club-membership", name: "United Club Membership", description: "Full access to United Clubs and participating Star Alliance lounges.", estimatedValue: 650 },
      { id: "checked-bags", name: "Two Checked Bags Free", description: "For primary cardmember and one companion.", estimatedValue: 280 },
      { id: "premier-access", name: "United Premier Access", description: "Priority check-in, security screening, and boarding.", estimatedValue: 150 }
    ],
    earningRates: [
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
      { id: "qualifying-nights", name: "5 Elite Qualifying Nights", description: "Annual boost toward higher elite tiers.", estimatedValue: 100 }
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
    statementCredits: [],
    perks: [
      { id: "free-night", name: "Annual Free Night Award", description: "Valued up to 35,000 Bonvoy points.", estimatedValue: 200 },
      { id: "marriott-status", name: "Silver Elite Status", description: "Late checkout, 10% points bonus on stays.", estimatedValue: 30 },
      { id: "elite-nights", name: "15 Elite Night Credits", description: "Boost toward Gold/Platinum status annually.", estimatedValue: 150 }
    ],
    earningRates: [
      { category: "Marriott Hotels", detail: "Spent at participating Bonvoy properties", rate: "17x" },
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
      { id: "dining", name: "Dining Credit", description: "$10/mo at Grubhub, Resy, Goldbelly, Cheesecake Factory (enrollment req.).", value: 10, frequency: "monthly", category: "Dining" },
      { id: "uber", name: "Uber Cash", description: "$10/mo for Uber rides or Uber Eats in the U.S.", value: 10, frequency: "monthly", category: "Transit" },
      { id: "dunkin", name: "Dunkin' Credit", description: "$7/mo Dunkin' credit (enrollment req.).", value: 7, frequency: "monthly", category: "Dining" },
      { id: "resy", name: "Resy Credit", description: "$50 in H1, $50 in H2 at Resy restaurants (enrollment req.).", value: 50, frequency: "semiannual", category: "Dining" }
    ],
    perks: [
      { id: "transfer", name: "Membership Rewards Transfers", description: "1:1 transfers to airline/hotel partners (Delta, British Airways).", estimatedValue: 200 },
      { id: "hotel-collection", name: "The Hotel Collection", description: "$100 experience credit on eligible 2+ night hotel stays.", estimatedValue: 50 }
    ],
    earningRates: [
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
      { id: "hotel", name: "$600 Hotel Credit (FHR / THC)", description: "Prepaid FHR or THC bookings, issued as $300 semi-annually (enrollment req.).", value: 300, frequency: "semiannual", category: "Travel" },
      { id: "clear", name: "CLEAR Plus Credit", description: "Annual CLEAR Plus membership.", value: 189, frequency: "annual", category: "Travel" },
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel" },
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
      { category: "Prepaid Hotels", detail: "Booked through amextravel.com", rate: "5x" },
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
      { id: "disney", name: "Disney Bundle Credit", description: "$7/mo statement credit on the Disney Bundle (enrollment req.).", value: 7, frequency: "monthly", category: "Streaming" },
      { id: "equinox", name: "Equinox+ Credit", description: "$10/mo statement credit on Equinox+ fitness app (enrollment req.).", value: 10, frequency: "monthly", category: "Wellness" }
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
      { id: "disney", name: "Disney Bundle Credit", description: "$7/mo statement credit on the Disney Bundle (enrollment req.).", value: 7, frequency: "monthly", category: "Streaming" },
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
    name: "Amex Green Card",
    issuer: "American Express",
    network: "Amex",
    annualFee: 150,
    color: "#2a6f51",
    rewardsSummary: "3x travel, transit & dining, lounge & CLEAR credits",
    rewardsCurrency: "Membership Rewards® points",
    pointValueCents: 1.5,
    categories: ["Travel", "Lifestyle"],
    statementCredits: [
      { id: "clear", name: "$189 Annual CLEAR Plus Credit", description: "Statement credit for CLEAR Plus membership.", value: 189, frequency: "annual", category: "Travel" },
      { id: "loungebuddy", name: "$100 Annual LoungeBuddy Credit", description: "Statement credit for airport lounge access booked via LoungeBuddy.", value: 100, frequency: "annual", category: "Travel" }
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
      { id: "hilton-status", name: "Hilton Honors Silver Status", description: "Complimentary Silver Elite status.", estimatedValue: 20 }
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
      { id: "free-night", name: "Free Night Reward Capability", description: "Earn a Free Night Award after spending $15,000 in a calendar year.", estimatedValue: 50 }
    ],
    earningRates: [
      { category: "Hilton Properties", detail: "Stays within the Hilton portfolio", rate: "12x" },
      { category: "Dining, Gas, Supermarkets", detail: "Includes U.S. locations", rate: "6x" },
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
    rewardsSummary: "First checked bag free, $100 Delta flight credit capability",
    rewardsCurrency: "Delta SkyMiles®",
    pointValueCents: 1.2,
    categories: ["Travel"],
    statementCredits: [
      { id: "resy", name: "$100 Delta Resy Credit", description: "$10/mo statement credit at Resy restaurants (enrollment req.).", value: 10, frequency: "monthly", category: "Dining" }
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
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel" }
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
      { id: "skyclub", name: "Delta Sky Club Access", description: "Unlimited access when flying Delta (limits apply).", estimatedValue: 400 },
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
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel" }
    ],
    perks: [
      { id: "marriott-platinum", name: "Platinum Elite Status", description: "Complimentary Platinum status: lounge access, free breakfast, room upgrades.", estimatedValue: 400 },
      { id: "free-night-85k", name: "Annual Free Night Award (85K)", description: "Valid at hotels up to 85,000 points per night.", estimatedValue: 350 },
      { id: "elite-nights-25", name: "25 Elite Night Credits", description: "Boost toward Titanium status annually.", estimatedValue: 250 }
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
      { category: "U.S. Supermarkets & Dining", detail: "Everyday spending categories", rate: "4x" },
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
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel" }
    ],
    perks: [
      { id: "anniversary-miles", name: "10,000 Anniversary Miles", description: "Awarded annually starting on your first anniversary.", estimatedValue: 100 },
      { id: "priority-pass", name: "Priority Pass Select", description: "Complimentary lounge access for primary member (guests cost $45/visit unless $75k annual spend is met).", estimatedValue: 200 },
      { id: "cap1-lounge", name: "Capital One Lounges", description: "Access to Capital One's premium airport lounges for primary member (guests and authorized users are charged fee).", estimatedValue: 100 }
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
    rewardsSummary: "Flat 2x miles, 2 lounge passes annually, Global Entry credit",
    rewardsCurrency: "Capital One Miles",
    pointValueCents: 1.0,
    categories: ["Travel"],
    statementCredits: [
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel" }
    ],
    perks: [
      { id: "lounge-passes", name: "2 Capital One Lounge Passes", description: "Two complimentary lounge visits annually.", estimatedValue: 90 }
    ],
    earningRates: [
      { category: "Hotels & Cars via Portal", detail: "Booked through Capital One Travel", rate: "5x" },
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
    rewardsSummary: "Flat 2x business miles, 2 lounge passes, Global Entry credit",
    rewardsCurrency: "Capital One Miles",
    pointValueCents: 1.0,
    categories: ["Business", "Travel"],
    statementCredits: [
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel" }
    ],
    perks: [
      { id: "lounge-passes", name: "2 Capital One Lounge Passes", description: "Two complimentary lounge visits annually.", estimatedValue: 90 }
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
    rewardsSummary: "4% gas & EV charging, 3% restaurants & travel",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Cash Back", "No Annual Fee", "Lifestyle"],
    statementCredits: [],
    perks: [
      { id: "costco-membership", name: "Requires Costco Membership", description: "Must possess active Costco membership to hold.", estimatedValue: 60 }
    ],
    earningRates: [
      { category: "Gas & EV Charging", detail: "Up to $7,000 spend annually, then 1%", rate: "4%" },
      { category: "Restaurants & Travel", detail: "Worldwide dining and travel", rate: "3%" },
      { category: "Costco Purchases", detail: "Costco warehouses and costco.com", rate: "2%" },
      { category: "Everything Else", detail: "All other spend", rate: "1%" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "citi-rewards-plus",
    name: "Citi Rewards+®",
    issuer: "Citi",
    network: "Mastercard",
    annualFee: 0,
    color: "#4f7292",
    rewardsSummary: "10% point redemption match, rounds up to nearest 10",
    rewardsCurrency: "Citi ThankYou Points",
    pointValueCents: 1.0,
    categories: ["Regular", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "round-up", name: "Round-up Feature", description: "Rounds up transactions to the nearest 10 points (e.g. $2 coffee earns 10 pts).", estimatedValue: 30 },
      { id: "redemption-match", name: "10% Points Back", description: "Get 10% points back on first 100,000 points redeemed/yr.", estimatedValue: 50 }
    ],
    earningRates: [
      { category: "Supermarkets & Gas", detail: "Up to $6,000 spend combined per year, then 1x", rate: "2x" },
      { category: "Everything Else", detail: "Rounds up to nearest 10 points", rate: "1x" }
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
    rewardsSummary: "4x travel & dining, $300 hotel, splurge, and chauffeur credits",
    rewardsCurrency: "Citi ThankYou Points",
    pointValueCents: 1.5,
    categories: ["Travel", "Premium"],
    statementCredits: [
      { id: "hotel-credit", name: "$300 Annual Hotel Benefit", description: "$300 off a hotel stay of 2+ nights booked through Citi Travel.", value: 300, frequency: "annual", category: "Travel" },
      { id: "splurge-credit", name: "$200 Annual Splurge Credit", description: "Up to $200 statement credit for select brands (Best Buy, American Airlines, etc.).", value: 200, frequency: "annual", category: "Shopping" },
      { id: "blacklane-credit", name: "$200 Annual Blacklane Credit", description: "Up to $200 credit for Blacklane premium chauffeur services.", value: 200, frequency: "annual", category: "Travel" },
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel" }
    ],
    perks: [
      { id: "lounge-access", name: "Priority Pass Select Lounge Access", description: "Complimentary unlimited visits.", estimatedValue: 300 }
    ],
    earningRates: [
      { category: "Citi Travel Bookings", detail: "10x on hotels and cars", rate: "10x" },
      { category: "Flights & Hotels", detail: "Direct bookings", rate: "4x" },
      { category: "Dining", detail: "Restaurants worldwide", rate: "4x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
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
    rewardsSummary: "$10/mo statement credit with AT&T service",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Cash Back", "No Annual Fee", "Lifestyle"],
    statementCredits: [
      { id: "att-credit", name: "$10 Monthly AT&T Statement Credit", description: "When enrolled in paperless billing and autopay with AT&T.", value: 10, frequency: "monthly", category: "Statement Credit" }
    ],
    perks: [],
    earningRates: [
      { category: "Gas & EV Charging", detail: "Broad domestic charging/gas", rate: "3%" },
      { category: "Supermarkets", detail: "Grocery stores", rate: "2%" },
      { category: "Everything Else", detail: "All other spend", rate: "1%" }
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
      { id: "priority-boarding", name: "Preferred Boarding", description: "Group 5 boarding on AA flights.", estimatedValue: 30 }
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
    rewardsSummary: "3% back on choice category, Preferred Rewards 25-75% boost",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "pref-rewards", name: "Preferred Rewards Capability", description: "Get a 25%-75% boost on your rewards if you have BofA/Merrill assets.", estimatedValue: 150 }
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
    rewardsSummary: "Flat 1.5% unlimited cash back, Preferred Rewards compatible",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "pref-rewards-flat", name: "Preferred Rewards Boost", description: "Earn up to 2.62% cash back flat on all spend with Platinum Honors tier.", estimatedValue: 180 }
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
    rewardsSummary: "Flat 2x points travel, 1.5x other spend, $100 airline credit",
    rewardsCurrency: "Bank of America Travel points",
    pointValueCents: 1.0,
    categories: ["Travel"],
    statementCredits: [
      { id: "airline-incidental", name: "$100 Annual Airline Incidental Credit", description: "Statement credit for fees like baggage, lounge, seat selection.", value: 100, frequency: "annual", category: "Travel" },
      { id: "tsa-credit", name: "TSA PreCheck / Global Entry", description: "Application fee credit once every 4 years.", value: 100, frequency: "one-time", category: "Travel" }
    ],
    perks: [
      { id: "pref-rewards-premium", name: "Preferred Rewards Boost", description: "Earn up to 3.5% travel & 2.62% flat cash back with Platinum Honors.", estimatedValue: 200 }
    ],
    earningRates: [
      { category: "Travel Purchases", detail: "Unlimited flat travel points", rate: "2x" },
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
    rewardsSummary: "Priority Pass, $450 in credits, Preferred Rewards integration",
    rewardsCurrency: "Bank of America Travel points",
    pointValueCents: 1.0,
    categories: ["Travel", "Premium", "Lifestyle"],
    statementCredits: [
      { id: "travel-credits", name: "$300 Annual Airline & Incidentals Credit", description: "Statement credit for airline incidentals.", value: 300, frequency: "annual", category: "Travel" },
      { id: "lifestyle-credit", name: "$150 Lifestyle Credit", description: "For rideshare, food delivery, streaming, transit.", value: 150, frequency: "annual", category: "Lifestyle" },
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 120, frequency: "one-time", category: "Travel" }
    ],
    perks: [
      { id: "priority-pass-elite", name: "Priority Pass Select", description: "Unlimited lounge visits with guest allowances.", estimatedValue: 350 },
      { id: "point-boost-portal", name: "20% Discount via Travel Portal", description: "Save 20% on flights booked with points through portal.", estimatedValue: 100 }
    ],
    earningRates: [
      { category: "Travel Purchases", detail: "Earn up to 3.5x points with Platinum Honors", rate: "2x" },
      { category: "Everything Else", detail: "Earn up to 2.62x points with Platinum Honors", rate: "1.5x" }
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
    name: "Alaska Airlines Visa Signature®",
    issuer: "Bank of America",
    network: "Visa",
    annualFee: 95,
    color: "#00426a",
    rewardsSummary: "Alaska Companion Fare, free checked bag, 3x on Alaska",
    rewardsCurrency: "Alaska Airlines Mileage Plan™ miles",
    pointValueCents: 1.5,
    categories: ["Travel"],
    statementCredits: [],
    perks: [
      { id: "companion-fare", name: "Alaska's Famous Companion Fare™", description: "Companion ticket from $121 annually ($99 fare + taxes).", estimatedValue: 200 },
      { id: "checked-bag", name: "Free Checked Bag", description: "For you and up to 6 companions on your reservation.", estimatedValue: 120 }
    ],
    earningRates: [
      { category: "Alaska Airlines Purchases", detail: "Flights, inflight purchases", rate: "3x" },
      { category: "Gas, Cable, Streaming, Transit", detail: "Popular bill pays", rate: "2x" },
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
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "first-year-match", name: "Cashback Match™", description: "Discover matches all cash back earned in first year automatically.", estimatedValue: 150 }
    ],
    earningRates: [
      { category: "Rotating Categories", detail: "5% on quarterly categories up to $1,500 spend per quarter (restaurants, grocery stores, gas, Amazon)", rate: "5%" },
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
    rewardsSummary: "2% gas & dining while building credit, refundable deposit",
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
    earningRates: [
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
    perks: [],
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
      { id: "cell-protection", name: "Cell Phone Protection", description: "Up to $600 against damage or theft ($25 deductible).", estimatedValue: 80 }
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
    rewardsSummary: "5x hotels, 4x airlines, $50 hotel credit, transfer partners",
    rewardsCurrency: "Wells Fargo Rewards points",
    pointValueCents: 1.0,
    categories: ["Travel"],
    statementCredits: [
      { id: "hotel-credit", name: "$50 Annual Hotel Credit", description: "Statement credit for single hotel booking of $50 or more.", value: 50, frequency: "annual", category: "Travel" }
    ],
    perks: [
      { id: "transfer-partners", name: "Wells Fargo Points Transfer", description: "Transfer to travel partners (Air France, Choice).", estimatedValue: 100 }
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
      { id: "cell-protection-reflect", name: "Cell Phone Protection", description: "Up to $600 cell phone protection.", estimatedValue: 80 }
    ],
    earningRates: [
      { category: "No rewards program", detail: "Strictly optimized for balance transfers and APR protection", rate: "0%" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "wf-choice",
    name: "Choice Privileges®",
    issuer: "Wells Fargo",
    network: "Mastercard",
    annualFee: 95,
    color: "#2a75d3",
    rewardsSummary: "Earn Choice points, elite status, anniversary bonus points",
    rewardsCurrency: "Choice Privileges® points",
    pointValueCents: 0.8,
    categories: ["Travel"],
    statementCredits: [],
    perks: [
      { id: "anniversary-choice", name: "10,000 Anniversary Choice Points", description: "Awarded annually starting on your first anniversary.", estimatedValue: 60 },
      { id: "choice-gold", name: "Choice Privileges Gold Status", description: "Complimentary elite status.", estimatedValue: 30 }
    ],
    earningRates: [
      { category: "Choice Purchases", detail: "Eligible stays at Choice Hotels properties", rate: "10x" },
      { category: "Gas, Groceries, Dining", detail: "Everyday spending categories", rate: "5x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "bilt-mastercard",
    name: "Bilt Mastercard® (Bilt 2.0)",
    issuer: "Cardless",
    network: "Mastercard",
    annualFee: 0,
    color: "#1e1e1e",
    rewardsSummary: "Earn points on rent/mortgage, transfer partners, Bilt Rent Day",
    rewardsCurrency: "Bilt Points",
    pointValueCents: 1.5,
    categories: ["Travel", "Regular", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "rent-no-fee", name: "Rent & Mortgage Payments", description: "Earn points on rent or mortgage payments up to 100,000 points/yr without transaction fees.", estimatedValue: 200 },
      { id: "bilt-transfers", name: "Bilt transfer partners", description: "Transfer to Hyatt, United, and other partners (Rent Day bonus capped at 100k bonus points).", estimatedValue: 150 },
      { id: "bilt-cash", name: "Bilt Cash & Rent Day", description: "Get Bilt Cash for local spend, travel portal, fitness, and double points on the 1st of every month.", estimatedValue: 80 }
    ],
    earningRates: [
      { category: "Rent & Mortgage", detail: "Earn 1x points per dollar spent on rent/mortgage (must use card 5x per statement period)", rate: "1x" },
      { category: "Dining", detail: "Restaurants worldwide", rate: "3x" },
      { category: "Travel", detail: "Flights, hotels, rentals", rate: "2x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: CHASE_ULTIMATE_PROTECTIONS
  },
  {
    id: "wf-attune",
    name: "Attune℠ Card",
    issuer: "Wells Fargo",
    network: "Visa",
    annualFee: 0,
    color: "#2a7051",
    rewardsSummary: "4% cash back on wellness, sports, streaming, and entertainment",
    rewardsCurrency: "Cash rewards",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee", "Lifestyle"],
    statementCredits: [],
    perks: [],
    earningRates: [
      { category: "Wellness & Self-Care", detail: "Salons, spas, gyms, therapy", rate: "4%" },
      { category: "Sports & Live Events", detail: "Concerts, ticketing, sporting goods", rate: "4%" },
      { category: "Streaming & Utilities", detail: "Popular digital services", rate: "4%" },
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
      { category: "Dining & Delivery", detail: "Restaurants, bars, takeout", rate: "4x" },
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
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 100, frequency: "one-time", category: "Travel" }
    ],
    perks: [
      { id: "lounge-visits", name: "4 Priority Pass lounge visits/yr", description: "Four complimentary airport lounge visits.", estimatedValue: 120 }
    ],
    earningRates: [
      { category: "Travel via Portal", detail: "Hotels & car rentals", rate: "5x" },
      { category: "Other Travel", detail: "Flights, hotel direct, transit", rate: "4x" },
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
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back"],
    statementCredits: [],
    perks: [],
    earningRates: [
      { category: "Selected Retailers", detail: "6% back at 2 retailers (Amazon, Walmart, Target, Best Buy, etc. up to $1,500/quarter)", rate: "6%" },
      { category: "Choice Category", detail: "3% back in selected everyday categories (gas, utilities, up to $1,500/quarter)", rate: "3%" },
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
      { id: "smartly-boost", name: "Smartly Savings Boost", description: "Earn up to 4% flat on all purchases based on qualified deposits.", estimatedValue: 150 }
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
      { id: "checked-bag", name: "First Checked Bag Free", description: "Save up to $140 round-trip for you and up to 3 companions.", estimatedValue: 140 }
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
    perks: [],
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
    rewardsSummary: "Annual companion discount, free checked bag on Hawaiian",
    rewardsCurrency: "HawaiianMiles®",
    pointValueCents: 1.0,
    categories: ["Travel"],
    statementCredits: [],
    perks: [
      { id: "companion-discount", name: "Annual $100 Companion Discount", description: "For roundtrip coach travel between Hawaii and North America.", estimatedValue: 100 },
      { id: "checked-bag", name: "First Checked Bag Free", description: "Save on checked bag fees for Hawaiian flights.", estimatedValue: 60 }
    ],
    earningRates: [
      { category: "Hawaiian Airlines Purchases", detail: "Direct flight tickets", rate: "3x" },
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
    annualFee: 75,
    color: "#0a2240",
    rewardsSummary: "7,500 anniversary points, Platinum elite status",
    rewardsCurrency: "Wyndham Rewards points",
    pointValueCents: 0.9,
    categories: ["Travel"],
    statementCredits: [],
    perks: [
      { id: "anniversary-wyndham", name: "7,500 Anniversary Points", description: "Awarded starting on first anniversary.", estimatedValue: 75 },
      { id: "wyndham-platinum", name: "Wyndham Platinum Status", description: "Preferred rooms, late checkout, early check-in.", estimatedValue: 60 }
    ],
    earningRates: [
      { category: "Wyndham Properties", detail: "Stays within the Wyndham portfolio", rate: "6x" },
      { category: "Gas, Dining, Groceries", detail: "Everyday spending categories", rate: "4x" },
      { category: "Everything Else", detail: "All other spend", rate: "1x" }
    ],
    protections: PREFERRED_PROTECTIONS
  },
  {
    id: "barclays-frontier",
    name: "Frontier Airlines World Mastercard",
    issuer: "Barclays",
    network: "Mastercard",
    annualFee: 89,
    color: "#2a7051",
    rewardsSummary: "Annual flight voucher eligibility, family pool points",
    rewardsCurrency: "Frontier Miles",
    pointValueCents: 0.8,
    categories: ["Travel"],
    statementCredits: [
      { id: "flight-voucher", name: "$100 Frontier Flight Voucher", description: "Applied on cardmember anniversary after spending $2,500 in 1 yr.", value: 100, frequency: "annual", category: "Travel" }
    ],
    perks: [
      { id: "family-pooling", name: "Family Points Pooling", description: "Share miles with family members at no fee.", estimatedValue: 30 }
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
    rewardsSummary: "4% gas & groceries, 3% dining, pay Verizon bill",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Cash Back", "No Annual Fee", "Lifestyle"],
    statementCredits: [],
    perks: [
      { id: "verizon-bill", name: "Verizon AutoPay discount compatibility", description: "Allows $10/mo savings on Verizon plan.", estimatedValue: 120 }
    ],
    earningRates: [
      { category: "Groceries & Gas", detail: "Fuel & supermarket purchases", rate: "4%" },
      { category: "Dining", detail: "Restaurants worldwide", rate: "3%" },
      { category: "Verizon purchases", detail: "Pay monthly bill or devices", rate: "2%" },
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
    rewardsSummary: "5% cash back on gas worldwide, 3% dining & travel",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Cash Back", "No Annual Fee", "Lifestyle"],
    statementCredits: [],
    perks: [
      { id: "sams-membership", name: "Requires Sam's Club Membership", description: "Must possess active Sam's Club membership.", estimatedValue: 50 }
    ],
    earningRates: [
      { category: "Gas worldwide", detail: "Up to $6,000 spend annually, then 1%", rate: "5%" },
      { category: "Dining & Travel", detail: "Restaurants & eligible vacations", rate: "3%" },
      { category: "Sam's Club Purchases", detail: "Plus members earn up to 5% total", rate: "3%" },
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
    rewardsSummary: "3% back on top category, 2% on second category, auto-adjusted",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "custom-split", name: "Venmo QR Code splits", description: "Split custom transactions inside the Venmo app.", estimatedValue: 20 }
    ],
    earningRates: [
      { category: "Top Spend Category", detail: "3% on your top category (dining, groceries, utility bills, gas, shopping, entertainment)", rate: "3%" },
      { category: "Second Spend Category", detail: "2% back on next highest category", rate: "2%" },
      { category: "Everything Else", detail: "All other spend", rate: "1%" }
    ],
    protections: STANDARD_PROTECTIONS
  },
  {
    id: "synchrony-lowes",
    name: "Lowe’s Advantage Card",
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
      { id: "lowes-discount", name: "5% Lowe's Store Discount", description: "Save 5% instantly on eligible Lowe's purchases.", estimatedValue: 100 }
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
    rewardsSummary: "Flat 1.75% cash back with direct deposit, no annual fee",
    rewardsCurrency: "Cash back",
    pointValueCents: 1.0,
    categories: ["Regular", "Cash Back", "No Annual Fee"],
    statementCredits: [],
    perks: [
      { id: "nf-membership", name: "Requires Military Union Membership", description: "Must be active military, veteran, or eligible family.", estimatedValue: 30 }
    ],
    earningRates: flatCashBackRate("1.75%"),
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
    name: "Navy Federal Flagship Rewards",
    issuer: "Navy Federal",
    network: "Visa",
    annualFee: 49,
    color: "#001e3d",
    rewardsSummary: "Flat 2x rewards on all spend, 3x travel, Amazon Prime credit",
    rewardsCurrency: "Navy Federal Points",
    pointValueCents: 1.0,
    categories: ["Travel"],
    statementCredits: [
      { id: "prime-credit", name: "Amazon Prime Credit Capability", description: "Annual statement credit for Prime membership (seasonal promo).", value: 139, frequency: "annual", category: "Streaming" },
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 100, frequency: "one-time", category: "Travel" }
    ],
    perks: [],
    earningRates: [
      { category: "Travel", detail: "Flights, hotels, rentals, cruises", rate: "3x" },
      { category: "Everything Else", detail: "Unlimited flat-rate cash back", rate: "2x" }
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
    rewardsCurrency: "PenFed Points",
    pointValueCents: 1.0,
    categories: ["Travel"],
    statementCredits: [
      { id: "ancillary-credit", name: "$100 Annual Domestic Airline Credit", description: "Applied to incidental airline fees.", value: 100, frequency: "annual", category: "Travel" },
      { id: "global-entry", name: "Global Entry / PreCheck Credit", description: "Application fee credit once every 4 years.", value: 100, frequency: "one-time", category: "Travel" }
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
