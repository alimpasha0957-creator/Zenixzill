// ── ZenixZill App Logic ──────────────────────────────────────────

const UPI_ID = "alimturki10-1@okaxis";
const SITE_NAME = "ZenixZill";

// Demo methods data — aap baad mein isko edit kar sakte ho
const METHODS = [
  {
    id: 1,
    title: "Freelancing Fast-Track",
    category: "Earning",
    desc: "Zero to first client in 7 days — proven outreach scripts & niche selection framework.",
    price: 199,
    badge: "Hot",
    steps: 12,
    preview: "This method covers platform selection, profile optimization, and cold outreach that actually converts...",
    full: `## Freelancing Fast-Track Method\n\n### Step 1 — Pick Your Niche\nFocus on one skill only. The riches are in niches. Pick something you can do RIGHT NOW.\n\n### Step 2 — Profile Setup\nUse this exact formula for your bio: "I help [target client] achieve [result] in [timeframe] without [pain point]."\n\n### Step 3 — Outreach Script\nSend 20 DMs daily using this script:\n"Hi [name], I noticed [specific thing about them]. I help [their niche] with [your skill]. Can I show you a quick idea?"\n\n### Step 4 — Pricing\nStart at ₹2000–₹5000/project. Never work for free. Raise rates after 3 clients.\n\n### Step 5 — Deliver & Upsell\nAlways overdeliver. Ask for review. Offer a monthly retainer at 2x the project price.`
  },
  {
    id: 2,
    title: "Reselling Playbook",
    category: "Earning",
    desc: "Buy low, sell high on Meesho & OLX. Step-by-step sourcing to profit system.",
    price: 149,
    badge: "Popular",
    steps: 8,
    preview: "Learn where to source products at 40-60% below market price and flip them for consistent profit...",
    full: `## Reselling Playbook\n\n### Where to Source\n- Meesho supplier catalogs (filter by <₹100 products)\n- Local wholesale markets — Sadar Bazaar, Chandni Chowk\n- Alibaba for bulk orders above ₹10,000\n\n### What to Sell\nTop categories: Phone accessories, fashion jewelry, home decor, kids toys.\n\n### Platform Strategy\nList on: OLX (free), Facebook Marketplace, Instagram Shopping, WhatsApp Status.\n\n### Pricing Formula\nSelling price = Cost × 2.5 minimum. Never less.\n\n### Scaling\nOnce you hit ₹5000/month profit, reinvest 80% back into inventory.`
  },
  {
    id: 3,
    title: "Content Monetization Blueprint",
    category: "Social Media",
    desc: "Turn your Instagram or YouTube into a money machine — without millions of followers.",
    price: 249,
    badge: "New",
    steps: 15,
    preview: "Discover the exact content formats, posting schedule, and brand deal scripts used by micro-influencers...",
    full: `## Content Monetization Blueprint\n\n### Phase 1 — Niche & Identity (Week 1-2)\nPick a niche with money: Finance, Fitness, Tech, Business, Relationships.\nCreate a consistent aesthetic — same filter, same font, same vibe.\n\n### Phase 2 — Content Engine (Week 3-4)\nPost formula: 3 Reels + 2 Carousels + 1 Story per week.\nBest times: 7-9 AM and 7-9 PM IST.\n\n### Phase 3 — Monetization\n- Affiliate marketing: Share Amazon/Flipkart links in bio\n- Brand deals: DM brands directly when you hit 1000 followers\n- Digital products: Sell your own PDFs, presets, or templates\n- Paid promotions: Charge ₹500–₹5000 per post\n\n### Scripts for Brand Outreach\n"Hi [Brand], I'm a [niche] creator with [X] engaged followers. I'd love to collab on a dedicated post for ₹[amount]. Here's my media kit: [link]"`
  },
  {
    id: 4,
    title: "Dropshipping India Method",
    category: "E-commerce",
    desc: "Run an online store with ₹0 inventory. Full setup guide for Indian market.",
    price: 299,
    badge: "Premium",
    steps: 20,
    preview: "Set up a Shopify or WooCommerce store, find winning products, and automate order fulfillment...",
    full: `## Dropshipping India Method\n\n### Store Setup\nUse Shopify (₹1500/month) or WooCommerce (free + hosting).\nBuy domain from GoDaddy or Hostinger — ₹500/year.\n\n### Finding Winning Products\n- Use Google Trends India to spot rising products\n- Search "#TikTokMadeMeBuyIt" type content on Instagram Reels\n- Sell solutions, not products\n\n### Suppliers\n- GlowRoad — best for fashion & lifestyle\n- Meesho — best for low-cost items\n- IndiaMART — for wholesale sourcing\n\n### Marketing\nRun Facebook/Instagram ads. Start with ₹200/day budget.\nTarget: 18-35, interests matching your product.\n\n### Profit Calculation\nTarget 40% margin minimum after ads + supplier cost + shipping.`
  },
  {
    id: 5,
    title: "Crypto Basics to Profit",
    category: "Trading",
    desc: "Understand crypto markets, spot trends, and protect your capital — beginner-safe.",
    price: 199,
    badge: "",
    steps: 10,
    preview: "Learn the fundamentals of crypto trading including chart reading, entry/exit strategies, and risk management...",
    full: `## Crypto Basics to Profit\n\n⚠️ Disclaimer: Crypto is high risk. Only invest what you can afford to lose.\n\n### Getting Started\nUse CoinDCX or WazirX (Indian exchanges, KYC required).\nStart with ₹1000 only.\n\n### Basic Strategy — DCA (Dollar Cost Averaging)\nInvest a fixed amount weekly regardless of price. Best for beginners. Reduces impact of volatility.\n\n### Reading Charts\n- Green candle = price went up\n- Red candle = price went down\n- Support level = price keeps bouncing from here (BUY zone)\n- Resistance level = price keeps falling from here (SELL zone)\n\n### Risk Management Rules\n- Never invest more than 5% of savings in one coin\n- Always set a stop-loss 10% below your entry\n- Take profits at 20-30% gain\n\n### Top Beginner Coins\nBTC, ETH, SOL — avoid unknown meme coins.`
  },
  {
    id: 6,
    title: "Remote Job Hunting Guide",
    category: "Career",
    desc: "Land a remote job paying ₹30,000–₹1,00,000/month from home — no degree required.",
    price: 179,
    badge: "",
    steps: 9,
    preview: "Discover which remote skills pay the most, where to find legitimate remote jobs, and how to ace interviews...",
    full: `## Remote Job Hunting Guide\n\n### Top Remote Skills (No Degree Needed)\n1. Video Editing — ₹20,000–₹80,000/month\n2. Graphic Design — ₹15,000–₹60,000/month\n3. Virtual Assistant — ₹15,000–₹50,000/month\n4. Data Entry — ₹10,000–₹25,000/month\n5. Customer Support — ₹12,000–₹30,000/month\n\n### Where to Find Remote Jobs\n- LinkedIn (filter: Remote)\n- Indeed.com\n- Naukri.com (work from home filter)\n- Fiverr/Upwork (freelance remote)\n- Internshala\n\n### Resume Tips\nOne page only. Use this format:\n- Summary (2 lines)\n- Skills (bullet points)\n- Experience or Projects\n- Education (last)\n\n### Interview Prep\nPractice these 5 questions: Tell me about yourself, Why remote work, Your biggest strength, Handle deadline pressure, Salary expectation.`
  }
];

// ── Auth helpers ──────────────────────────────────────────────────

function getUsers() {
  return JSON.parse(localStorage.getItem('zz_users') || '{}');
}

function saveUsers(users) {
  localStorage.setItem('zz_users', JSON.stringify(users));
}

function getCurrentUser() {
  const uid = localStorage.getItem('zz_current');
  if (!uid) return null;
  const users = getUsers();
  return users[uid] || null;
}

function logout() {
  localStorage.removeItem('zz_current');
  window.location.href = 'index.html';
}

function requireAuth() {
  const user = getCurrentUser();
  if (!user) {
    window.location.href = 'login.html';
    return null;
  }
  return user;
}

function requirePaid() {
  const user = requireAuth();
  if (!user) return null;
  if (!user.paid) {
    window.location.href = 'payment.html';
    return null;
  }
  return user;
}

// ── Toast ─────────────────────────────────────────────────────────

function showToast(msg, type = 'success') {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.className = `toast ${type} show`;
  setTimeout(() => t.className = `toast ${type}`, 2800);
}

// ── Copy to clipboard ─────────────────────────────────────────────

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Copied to clipboard!');
  }).catch(() => {
    showToast('Press Ctrl+C to copy', 'error');
  });
}
