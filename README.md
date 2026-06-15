# 💳 Offset Cost — Credit Card Benefits Tracker

**Offset Cost** is an interactive, premium auditing dashboard that helps you calculate the true net cost of your premium U.S. credit cards after the statement credits, perks, and rewards you actually capture. 

By discounting marketing valuations to your personal utility value and logging statement credits as you use them, this calculator helps you visualize whether your credit cards are net-positive assets or underwater drains.

Live Web Application: **[https://offsetcost.me](https://offsetcost.me)**

---

## 📈 The Economics Engine

Premium credit cards advertise massive values, but their real cost depends entirely on your personal spending habits. Offset Cost calculates your **Net Annual Value** using a four-factor mathematical equation:

$$\text{Net Annual Value} = (\text{Credits Captured} + \text{Valued Perks} + \text{Rewards Earned}) - \text{Total Annual Fees}$$

### Key Financial Concepts
1. **True Net Cost**: The actual amount you pay to hold a card after subtracting flat statement credits you successfully captured.
2. **Valuation Multipliers**: The cash-equivalent worth of points. For instance, earning 3x points on a card with a $550 fee is worth **$450** if you estimate $10,000 in spend and value points at **1.5 cents each**.
3. **Personal Utility Discounting**: Valuing a benefit based on what you *would have spent* on it, rather than the bank's marketing brochure value. For example, a $200 airline lounge pass is worth $50 if you only travel once a year and wouldn't buy a lounge ticket otherwise.

---

## 📖 How to Use the Application

Follow these steps to audit your credit card portfolio and determine your net value:

### 1. Assemble Your Wallet
* Go to the **Browse Cards** tab at the top.
* Search across a database of **100 premium U.S. credit cards** from Chase, Amex, Capital One, Citi, Wells Fargo, and more.
* Use the **Issuer Selector** or **Category Chips** (Travel, Cash Back, Lifestyle, Business, Premium) to filter cards.
* Click **+ Add to my cards** to add them to your active tracker.

### 2. Log Captured Statement Credits
* Navigate to the **My Tracker** tab to see your active cards.
* Tap on any card tile to open its interactive drawer.
* Under the **Statement Credits** ledger:
  * For fixed flat credits, check the checkbox when you receive them.
  * For monthly or recurring incremental credits (e.g., a $10 monthly dining credit), use the transaction logger. Type in the amount you used and click **Add** to aggregate your captured credits.
* The calculator instantly adds these up to reduce your card's Net Cost in real time.

### 3. Calibrate Your Custom Perk Values
* Scroll down to the **Valued Perks & Protections** section.
* Move the slider for each perk to match what it is worth *to you*. If a card offers a $100 travel credit you don't care about, slide it to `$0`. If it offers a lounge pass you value at `$50`, slide it to `$50`.
* Read the **Protections list** below the perks to understand what complimentary coverages (like primary rental car coverage, trip delay insurance) you are carrying.

### 4. Input Your Annual Spend Multipliers
* Under the **Earning & Rewards** section:
  * Set your **Point Value** slider (e.g. 1.0¢ for cash back, or 1.5¢ for Ultimate Rewards/Membership Rewards).
  * Enter your estimated annual spend for specific categories (Dining, Travel, Groceries, Gas, etc.).
* The engine dynamically calculates the exact points you will earn, applies your valuation multiplier, and shows you the cash-equivalent rewards return.

### 5. Review the Global Dashboard
* The aggregated dashboard at the top of the **My Tracker** page updates instantly as you make changes.
* Visualize your **Total Annual Fees**, **Total Rewards Earned**, **Statement Credits Captured**, **Personal Perk Value**, and your overall **Net Annual Value**.
* A positive net value (colored in green) means you are winning against the banks. A negative value (colored in red) means your cards are costing you more than you extract!

---

## 🛠️ Technology Stack
* **Frontend Library**: React 19 (TypeScript)
* **Build Tool**: Vite
* **Styling**: Vanilla CSS (Warm Premium Light Paper design system, custom typographic grid, glassmorphism panel interfaces, responsive flex layouts)
* **State Management**: Reactive LocalStorage state-sync layer
* **Icons**: Custom responsive SVG vector icons

---

## 💻 Local Development Setup

To run this project locally, clone the repository and run:

```bash
# Install dependencies
npm install

# Run the local development server
npm run dev

# Compile the production bundle
npm run build
```

---

## 🌐 Automated CI/CD Deployments
This repository is configured with a fully automated **GitHub Actions** deployment pipeline. Pushing updates to the `main` branch automatically triggers the `.github/workflows/deploy.yml` workflow, which compiles the Vite bundle and publishes it directly to your custom domain **[offsetcost.me](https://offsetcost.me)**!
