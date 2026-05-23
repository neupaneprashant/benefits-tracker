/* Sample catalog — fictional cards, realistic benefit structures.
   Swap in real data later. Shapes match the spec exactly. */
(function () {
  const cards = [
    {
      id: "summit-reserve",
      name: "Summit Reserve",
      issuer: "Meridian Bank",
      network: "Visa",
      annualFee: 550,
      color: "#13402f",
      rewardsSummary: "5x flights · 10x hotels · 3x dining (via travel portal)",
      rewardsCurrency: "Summit Rewards points",
      pointValueCents: 1.5,
      note: "Verify current terms in your Guide to Benefits. Some credits require one-time enrollment before they post.",
      statementCredits: [
        { id: "sr-c1", name: "Annual travel credit", description: "Auto-applies to the first $300 of travel purchases each year.", value: 300, frequency: "annual", category: "Travel" },
        { id: "sr-c2", name: "Monthly dining credit", description: "Up to $25/mo at select restaurants & delivery partners.", value: 25, frequency: "monthly", category: "Dining" },
        { id: "sr-c3", name: "Global Entry / TSA PreCheck", description: "Statement credit for the application fee, once every 4 years.", value: 120, frequency: "one-time", category: "Travel" },
        { id: "sr-c4", name: "Welcome statement credit", description: "Posts after you spend $5,000 in the first 3 months.", value: 200, frequency: "one-time", category: "Welcome" }
      ],
      perks: [
        { id: "sr-p1", name: "Airport lounge collection", description: "Unlimited visits for you + 2 guests at 1,300+ lounges.", estimatedValue: 469 },
        { id: "sr-p2", name: "DoorDash DashPass", description: "Free delivery & reduced fees on eligible orders.", estimatedValue: 120 },
        { id: "sr-p3", name: "Rideshare credits", description: "Monthly in-app credit with partner rideshare service.", estimatedValue: 199 }
      ],
      earningRates: [
        { rate: "10x", category: "Hotels & cars", detail: "Booked through the travel portal" },
        { rate: "5x", category: "Flights", detail: "Booked through the travel portal" },
        { rate: "3x", category: "Dining", detail: "Worldwide, including delivery" },
        { rate: "3x", category: "Other travel", detail: "Booked directly" },
        { rate: "1x", category: "Everything else", detail: "All other purchases" }
      ],
      protections: [
        { name: "Trip cancellation / interruption", description: "Up to $10,000 per trip for covered, non-refundable losses." },
        { name: "Auto rental collision damage", description: "Primary coverage for theft & damage on eligible rentals." },
        { name: "Trip delay reimbursement", description: "Up to $500 per ticket for delays over 6 hours." },
        { name: "Lost / delayed baggage", description: "Up to $3,000 per passenger for checked & carry-on bags." },
        { name: "Cell phone protection", description: "Up to $800 per claim when you pay your bill with this card." },
        { name: "Purchase protection", description: "120 days against damage or theft, up to $10,000 per claim." },
        { name: "Extended warranty", description: "Adds up to 1 year on eligible US manufacturer warranties." },
        { name: "No foreign transaction fees", description: "Use abroad with no added surcharge." }
      ]
    },
    {
      id: "atlas-platinum",
      name: "Atlas Platinum",
      issuer: "Crestline Express",
      network: "Amex",
      annualFee: 695,
      color: "#2a2d34",
      rewardsSummary: "5x flights & prepaid hotels · premium lounge access",
      rewardsCurrency: "Crestline Rewards points",
      pointValueCents: 1.5,
      note: "Most credits are issued monthly or semiannually and do not roll over. Enrollment required.",
      statementCredits: [
        { id: "ap-c1", name: "Airline fee credit", description: "Incidental fees with one selected airline.", value: 200, frequency: "annual", category: "Travel" },
        { id: "ap-c2", name: "Rideshare credit", description: "Monthly credit with partner rideshare service.", value: 15, frequency: "monthly", category: "Transit" },
        { id: "ap-c3", name: "Hotel credit", description: "On prepaid bookings through the luxury hotel program.", value: 200, frequency: "semiannual", category: "Travel" },
        { id: "ap-c4", name: "Retail store credit", description: "Twice a year at a partner department store.", value: 50, frequency: "semiannual", category: "Shopping" },
        { id: "ap-c5", name: "Digital entertainment credit", description: "Monthly credit on select streaming & news subscriptions.", value: 20, frequency: "monthly", category: "Entertainment" },
        { id: "ap-c6", name: "Global Entry / TSA PreCheck", description: "Application fee credit, once every 4 years.", value: 100, frequency: "one-time", category: "Travel" }
      ],
      perks: [
        { id: "ap-p1", name: "Lounge access collection", description: "Proprietary + partner lounges worldwide.", estimatedValue: 650 },
        { id: "ap-p2", name: "Hotel elite status", description: "Automatic mid-tier status with two hotel groups.", estimatedValue: 240 },
        { id: "ap-p3", name: "Membership rewards transfer uplift", description: "Extra value transferring points to airline partners.", estimatedValue: null }
      ],
      earningRates: [
        { rate: "5x", category: "Flights", detail: "Booked direct or through the travel portal" },
        { rate: "5x", category: "Prepaid hotels", detail: "Booked through the travel portal" },
        { rate: "1x", category: "Everything else", detail: "All other purchases" }
      ],
      protections: [
        { name: "Trip cancellation / interruption", description: "Up to $10,000 per trip, $20,000 per year." },
        { name: "Trip delay insurance", description: "Up to $500 per trip for delays over 6 hours." },
        { name: "Auto rental loss & damage", description: "Secondary coverage on eligible rentals." },
        { name: "Baggage insurance", description: "Up to $2,000 for checked bags on common carriers." },
        { name: "Purchase protection", description: "90 days against damage or theft, up to $10,000." },
        { name: "Return protection", description: "Up to $300 per item if the merchant won't take it back." },
        { name: "No foreign transaction fees", description: "Use abroad with no added surcharge." }
      ]
    },
    {
      id: "cobalt-everyday",
      name: "Cobalt Everyday",
      issuer: "Harbor Financial",
      network: "Mastercard",
      annualFee: 95,
      color: "#1f44c9",
      rewardsSummary: "5x travel portal · 3x dining & streaming · 1x everything",
      rewardsCurrency: "Harbor Rewards points",
      pointValueCents: 1.25,
      note: null,
      statementCredits: [
        { id: "ce-c1", name: "Annual hotel credit", description: "Statement credit on one prepaid hotel stay per year.", value: 50, frequency: "annual", category: "Travel" },
        { id: "ce-c2", name: "Welcome statement credit", description: "Posts after you spend $4,000 in the first 3 months.", value: 150, frequency: "one-time", category: "Welcome" }
      ],
      perks: [
        { id: "ce-p1", name: "DoorDash DashPass", description: "Complimentary membership for the first year.", estimatedValue: 120 }
      ],
      earningRates: [
        { rate: "5x", category: "Travel", detail: "Booked through the travel portal" },
        { rate: "3x", category: "Dining", detail: "Restaurants & delivery" },
        { rate: "3x", category: "Streaming", detail: "Select streaming services" },
        { rate: "1x", category: "Everything else", detail: "All other purchases" }
      ],
      protections: [
        { name: "Trip cancellation / interruption", description: "Up to $5,000 per person for covered losses." },
        { name: "Baggage delay", description: "Up to $100/day for 5 days after a 6-hour delay." },
        { name: "Purchase protection", description: "120 days against damage or theft, up to $500 per claim." },
        { name: "No foreign transaction fees", description: "Use abroad with no added surcharge." }
      ]
    },
    {
      id: "voyager-gold",
      name: "Voyager Gold",
      issuer: "Crestline Express",
      network: "Amex",
      annualFee: 250,
      color: "#9a7b1f",
      rewardsSummary: "4x dining & groceries · 3x flights · dining & travel credits",
      rewardsCurrency: "Crestline Rewards points",
      pointValueCents: 1.5,
      note: "Quarterly and monthly credits are use-it-or-lose-it.",
      statementCredits: [
        { id: "vg-c1", name: "Dining credit", description: "Monthly credit at participating restaurants & delivery.", value: 10, frequency: "monthly", category: "Dining" },
        { id: "vg-c2", name: "Experience credit", description: "Quarterly credit on entertainment & lifestyle partners.", value: 50, frequency: "quarterly", category: "Entertainment" },
        { id: "vg-c3", name: "Airline incidental credit", description: "Once per year on baggage & in-flight purchases.", value: 120, frequency: "annual", category: "Travel" }
      ],
      perks: [
        { id: "vg-p1", name: "Priority Pass lounges", description: "Membership with limited annual visits.", estimatedValue: 99 },
        { id: "vg-p2", name: "Transfer-partner uplift", description: "Extra value moving points to airline & hotel partners.", estimatedValue: null }
      ],
      earningRates: [
        { rate: "4x", category: "Dining", detail: "Restaurants worldwide" },
        { rate: "4x", category: "Groceries", detail: "U.S. supermarkets, up to $25k/yr" },
        { rate: "3x", category: "Flights", detail: "Booked direct or through the portal" },
        { rate: "1x", category: "Everything else", detail: "All other purchases" }
      ],
      protections: [
        { name: "Trip delay insurance", description: "Up to $300 per trip for delays over 12 hours." },
        { name: "Baggage insurance", description: "Up to $1,250 for carry-on bags." },
        { name: "Auto rental loss & damage", description: "Secondary coverage on eligible rentals." },
        { name: "Purchase protection", description: "90 days against damage or theft, up to $1,000." },
        { name: "No foreign transaction fees", description: "Use abroad with no added surcharge." }
      ]
    },
    {
      id: "horizon-cash",
      name: "Horizon Cash",
      issuer: "Harbor Financial",
      network: "Mastercard",
      annualFee: 0,
      color: "#0f766e",
      rewardsSummary: "Flat 2% on everything · no annual fee",
      rewardsCurrency: "Cash back",
      pointValueCents: 1,
      note: "Cell phone protection requires paying your monthly bill with this card.",
      statementCredits: [
        { id: "hc-c1", name: "Welcome statement credit", description: "Posts after you spend $500 in the first 3 months.", value: 200, frequency: "one-time", category: "Welcome" }
      ],
      perks: [],
      earningRates: [
        { rate: "2%", category: "Everything", detail: "Unlimited, no categories to track" },
        { rate: "3%", category: "Intro year", detail: "On up to $20,000 in the first 12 months" }
      ],
      protections: [
        { name: "Cell phone protection", description: "Up to $600 per claim against damage & theft." },
        { name: "Purchase protection", description: "90 days against damage or theft, up to $500." },
        { name: "Mastercard ID theft protection", description: "Monitoring & resolution support at no cost." }
      ]
    },
    {
      id: "pioneer-cash",
      name: "Pioneer Cash+",
      issuer: "Meridian Bank",
      network: "Visa",
      annualFee: 0,
      color: "#6d28d9",
      rewardsSummary: "5% rotating categories · 1% everything · no annual fee",
      rewardsCurrency: "Cash back",
      pointValueCents: 1,
      note: "You must activate the 5% bonus categories each quarter.",
      statementCredits: [
        { id: "pc-c1", name: "Welcome statement credit", description: "Posts after you spend $500 in the first 3 months.", value: 200, frequency: "one-time", category: "Welcome" }
      ],
      perks: [
        { id: "pc-p1", name: "Cardholder pricing", description: "Member-only access to select event presales.", estimatedValue: null }
      ],
      earningRates: [
        { rate: "5%", category: "Rotating categories", detail: "On up to $1,500/quarter, activation required" },
        { rate: "1%", category: "Everything else", detail: "All other purchases" }
      ],
      protections: [
        { name: "Purchase protection", description: "120 days against damage or theft, up to $500." },
        { name: "Zero liability", description: "No responsibility for unauthorized charges." }
      ]
    },
    {
      id: "meridian-business",
      name: "Meridian Business",
      issuer: "Meridian Bank",
      network: "Mastercard",
      annualFee: 295,
      color: "#7c2d12",
      rewardsSummary: "4x advertising & software · monthly operating credits",
      rewardsCurrency: "Meridian Rewards points",
      pointValueCents: 1.25,
      note: "Software and wireless credits apply only to enrolled merchant categories.",
      statementCredits: [
        { id: "mb-c1", name: "Wireless credit", description: "Monthly credit on U.S. wireless carrier charges.", value: 10, frequency: "monthly", category: "Transit" },
        { id: "mb-c2", name: "Software subscription credit", description: "Monthly credit on select business software.", value: 15, frequency: "monthly", category: "Shopping" },
        { id: "mb-c3", name: "Welcome statement credit", description: "Posts after you spend $6,000 in the first 3 months.", value: 250, frequency: "one-time", category: "Welcome" }
      ],
      perks: [
        { id: "mb-p1", name: "Lounge day passes", description: "Two complimentary partner-lounge passes per year.", estimatedValue: 100 }
      ],
      earningRates: [
        { rate: "4x", category: "Advertising & software", detail: "On the first $150,000 per year" },
        { rate: "2x", category: "Office & shipping", detail: "U.S. purchases" },
        { rate: "1x", category: "Everything else", detail: "All other purchases" }
      ],
      protections: [
        { name: "Purchase protection", description: "90 days against damage or theft, up to $1,000." },
        { name: "Extended warranty", description: "Adds up to 1 year on eligible warranties." },
        { name: "Baggage insurance", description: "Up to $1,000 for checked bags." },
        { name: "No foreign transaction fees", description: "Use abroad with no added surcharge." }
      ]
    }
  ];

  const issuers = Array.from(new Set(cards.map(function (c) { return c.issuer; }))).sort();

  window.SAMPLE_CARDS = cards;
  window.ISSUERS = issuers;
})();
