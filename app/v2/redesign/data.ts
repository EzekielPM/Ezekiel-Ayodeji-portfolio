export const CV_URL = "/documents/olusola-ayodeji-product-manager-cv.pdf";
export const CONSTRUCTION_CV_URL = "/documents/olusola-ayodeji-construction-cv.pdf";
export const EMAIL = "Olusola40@gmail.com";
export const WHATSAPP = "https://wa.me/2349015934337";
export const LINKEDIN = "https://www.linkedin.com/in/ayodeji-ezekiel-olusola/";
export const YOUTUBE_CHANNEL = "https://www.youtube.com/@EraProductRoom";
export const YOUTUBE_INTRO_ID = "epiyGrltK8Y";

export type ProjectCategory = "live" | "role" | "independent";

export type Project = {
  slug: string;
  name: string;
  line: string;
  status: string;
  tone: "live" | "role" | "study" | "plan";
  evidence: string;
  role: string;
  image: string;
  href: string;
  categories: ProjectCategory[];
};

// Newest first.
export const projects: Project[] = [
  {
    slug: "ffa",
    name: "Football Fan Arena",
    line: "A football fan community: club fanbases, free matchday predictions, banter groups and fan rankings.",
    status: "Live · MVP",
    tone: "live",
    evidence: "Web app, Android build, PRD",
    role: "Product lead · Independent build",
    image: "/portfolio/full/ffa-live-feed-predictions.jpg",
    href: "/v2/football-fan-arena",
    categories: ["live", "independent"],
  },
  {
    slug: "wayagram",
    name: "Wayagram",
    line: "Release support across a social, marketplace and payments platform, plus its architecture paper.",
    status: "Contract",
    tone: "role",
    evidence: "Architecture paper",
    role: "Technical PM · Jan – May 2026",
    image: "/portfolio/full/wayagram-1.jpg",
    href: "/case-studies/wayagram",
    categories: ["role"],
  },
  {
    slug: "siiqo",
    name: "Siiqo",
    line: "A trust-led marketplace with verified vendors, protected payments and community discovery.",
    status: "Live",
    tone: "live",
    evidence: "siiqo.com, PRD",
    role: "Lead PM · Jan 2025 – Present",
    image: "/portfolio/full/siiqo%20tablet%20mobile%20showcase%20jpg.jpeg",
    href: "/case-studies/siiqo",
    categories: ["live", "role"],
  },
  {
    slug: "tradeflow",
    name: "TradeFlow Commerce",
    line: "Multi-vendor commerce: storefronts, orders and delivery zones. Payments stay in Paystack test mode.",
    status: "Live demo",
    tone: "live",
    evidence: "Working build",
    role: "Independent build",
    image: "/portfolio/full/tradeflow%20tablet%20mobile%20jpg.jpeg",
    href: "/v2/tradeflow",
    categories: ["live", "independent"],
  },
  {
    slug: "kuda",
    name: "Kuda 3.0: Confidence Layer",
    line: "Clearer transaction states, service recovery and balance confidence. An independent concept.",
    status: "Case study",
    tone: "study",
    evidence: "Case study, prototype",
    role: "Independent study",
    image: "/portfolio/full/kuda-confidence-layer.webp",
    href: "https://kuda-confidence-layer.vercel.app",
    categories: ["independent"],
  },
  {
    slug: "dm",
    name: "From DM to Confirmed Order",
    line: "Teardown and prototype: moving a WhatsApp or Instagram “I want it” to a confirmed order.",
    status: "Teardown",
    tone: "study",
    evidence: "Teardown, prototype",
    role: "Independent study",
    image: "/portfolio/full/dm-confirmed-order-preview.webp",
    href: "/case-studies/dm-confirmed-order",
    categories: ["independent"],
  },
  {
    slug: "canvoy",
    name: "Canvoy Payment",
    line: "A utility and everyday payments MVP: scope, journeys, Jira delivery plan, security and QA readiness.",
    status: "MVP planning",
    tone: "plan",
    evidence: "Roadmap, flows, backlog",
    role: "Lead PM · Jun 2022 – Dec 2024",
    image: "/portfolio/full/canvoy-landing-desktop-mobile.jpg",
    href: "/case-studies/canvoy",
    categories: ["role"],
  },
];

export type Slide = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  chips: string[];
  image: string;
  imageAlt: string;
  bg: string;
  ink: string;
  chipBg: string;
  chipInk: string;
  actions: { label: string; href: string; external?: boolean; primary?: boolean }[];
};

export const slides: Slide[] = [
  {
    slug: "siiqo",
    name: "Siiqo",
    tagline: "Buy and sell with people you can trust.",
    summary: "A trust-led marketplace for Nigerian buyers, vendors and service providers, combining verified sellers, protected payments and community-driven discovery.",
    chips: ["Live", "Lead PM · Scrum Master", "Jan 2025 – Present"],
    image: "/portfolio/full/siiqo%20tablet%20mobile%20showcase%20jpg.jpeg",
    imageAlt: "Siiqo marketplace on tablet and phone",
    bg: "#0E1F57",
    ink: "#FFFFFF",
    chipBg: "#5B8CFF",
    chipInk: "#06123A",
    actions: [
      { label: "Read the case study", href: "/case-studies/siiqo", primary: true },
      { label: "Read the PRD", href: "/documents/siiqo-product-requirements.pdf", external: true },
      { label: "Visit siiqo.com", href: "https://siiqo.com", external: true },
    ],
  },
  {
    slug: "ffa",
    name: "Football Fan Arena",
    tagline: "Where supporters predict, banter and rep their club.",
    summary: "A global football fan community with club fanbases, free matchday predictions, banter groups and fan rankings. The MVP deliberately leaves out betting and payments.",
    chips: ["Live web app · MVP", "Product lead", "Web & Android"],
    image: "/portfolio/full/ffa-live-feed-predictions.jpg",
    imageAlt: "Football Fan Arena feed and match predictions screens",
    bg: "#0B0F0C",
    ink: "#FFFFFF",
    chipBg: "#22C55E",
    chipInk: "#052E14",
    actions: [
      { label: "Read the case study", href: "/v2/football-fan-arena", primary: true },
      { label: "Read the PRD", href: "/documents/ffa-product-requirements.pdf", external: true },
      { label: "Open the web app", href: "https://football-fan-arena-web.vercel.app/", external: true },
    ],
  },
  {
    slug: "wayagram",
    name: "Wayagram",
    tagline: "Social, marketplace and payments in one app.",
    summary: "During a contract engagement I supported production migration, regression testing, team ceremonies and module reporting, and wrote up the product and technical architecture.",
    chips: ["Contract", "Technical PM", "Jan – May 2026"],
    image: "/portfolio/full/wayagram-1.jpg",
    imageAlt: "Wayagram app screens",
    bg: "#EA580C",
    ink: "#FFFFFF",
    chipBg: "#FFFFFF",
    chipInk: "#9A3412",
    actions: [
      { label: "Read the case study", href: "/case-studies/wayagram", primary: true },
      { label: "Architecture paper", href: "/documents/wayagram-product-architecture.pdf", external: true },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=ng.wayagram", external: true },
      { label: "App Store", href: "https://apps.apple.com/ng/app/wayagram/id6444311693", external: true },
    ],
  },
  {
    slug: "tradeflow",
    name: "TradeFlow Commerce",
    tagline: "From product discovery to delivered order.",
    summary: "A multi-vendor commerce build connecting discovery, vendor storefronts, order handling and location-based delivery. Paystack stays in test mode while payment flows are validated.",
    chips: ["Live demo", "Independent build", "Test payments"],
    image: "/portfolio/full/tradeflow%20tablet%20mobile%20jpg.jpeg",
    imageAlt: "TradeFlow Commerce on tablet and phone",
    bg: "#3B1A78",
    ink: "#FFFFFF",
    chipBg: "#C4B5FD",
    chipInk: "#2E1065",
    actions: [
      { label: "Read the case study", href: "/v2/tradeflow", primary: true },
      { label: "Open the demo", href: "https://tradeflow-commerce.vercel.app/", external: true },
    ],
  },
  {
    slug: "canvoy",
    name: "Canvoy Payment",
    tagline: "Everyday payments, planned properly.",
    summary: "An early-stage payments MVP for utility and everyday journeys: requirements, an eight-week roadmap, Jira delivery structure and security and QA readiness. The MVP had not launched.",
    chips: ["MVP planning", "Lead PM · Scrum Master", "Jun 2022 – Dec 2024"],
    image: "/portfolio/full/canvoy-landing-desktop-mobile.jpg",
    imageAlt: "Canvoy Payment landing page on desktop and mobile",
    bg: "#0F3D3A",
    ink: "#FFFFFF",
    chipBg: "#5EEAD4",
    chipInk: "#042F2C",
    actions: [{ label: "Read the case study", href: "/case-studies/canvoy", primary: true }],
  },
];

export const steps = [
  { n: "01", name: "Discover", what: "Understand the problem before discussing the feature.", proof: "DM to Confirmed Order", href: "/case-studies/dm-confirmed-order", tone: "pink" },
  { n: "02", name: "Define", what: "Turn evidence into a PRD, clear scope and honest trade-offs.", proof: "Siiqo PRD", href: "/documents/siiqo-product-requirements.pdf", tone: "violet" },
  { n: "03", name: "Design", what: "Shape journeys with design and sign off the screens.", proof: "Canvoy flows", href: "/case-studies/canvoy", tone: "sky" },
  { n: "04", name: "Deliver", what: "Run sprints, manage dependencies, keep QA and scope honest.", proof: "Football Fan Arena", href: "/v2/football-fan-arena", tone: "amber" },
  { n: "05", name: "Improve", what: "Release, listen to product signals and decide what is next.", proof: "Siiqo, live", href: "/case-studies/siiqo", tone: "green" },
];

export const documents = [
  { name: "Siiqo PRD", line: "Scope, user groups and rules for the marketplace.", type: "PRD", kicker: "SIIQO", short: "Product Requirements", bg: "#0E1F57", href: "/documents/siiqo-product-requirements.pdf" },
  { name: "Football Fan Arena PRD", line: "Feed, predictions, communities and moderation.", type: "PRD", kicker: "FOOTBALL FAN ARENA", short: "Product Requirements", bg: "#0B0F0C", accent: "#22C55E", href: "/documents/ffa-product-requirements.pdf" },
  { name: "Wayagram architecture", line: "How the product and its services fit together.", type: "Architecture paper", kicker: "WAYAGRAM", short: "Product & Technical Architecture", bg: "#EA580C", href: "/documents/wayagram-product-architecture.pdf" },
  { name: "Product Manager CV", line: "Two pages, recruiter-friendly and current.", type: "CV", kicker: "OLUSOLA AYODEJI EZEKIEL", short: "Product Manager CV", bg: "#121722", href: CV_URL },
];

export const insights = [
  { topic: "Product documentation", title: "PRDs Are Just Bets, Not Guarantees", text: "Requirements make assumptions visible and give teams a shared direction. They still need validation, feedback and adjustment.", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_productmanagement-productmanager-productstrategy-activity-7479851658903076864-d9Er" },
  { topic: "UX & empathy", title: "Product Managers Create Products People Understand", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_productmanager-usercentric-uiux-activity-7484933393252700160-dq-m" },
  { topic: "UX & iGaming", title: "Becoming the User: A UX Lesson in iGaming", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_productmanager-igaming-userexperience-activity-7481301268641226753-etSu" },
  { topic: "Product discovery", title: "Product Managers Shouldn't Trust Feature Requests Alone", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_productmanager-productdiscovery-userresearch-activity-7483500408246677504-iNQa" },
  { topic: "Product strategy", title: "Optimising vs Innovating: The PM's Dilemma", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_productmanagement-activity-7391033448427171840-kQuU" },
  { topic: "Leadership", title: "Surviving Chaos in Product Management with Purpose", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_productmanager-usercentric-problemsolving-activity-7494005541279539200-DIe6" },
  { topic: "Team alignment", title: "How to Use Meetings to Align and Decide", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_planning-provides-the-direction-and-focus-activity-7376157467107393537-sG3N" },
  { topic: "Building products", title: "Building the Siiqo Marketplace for Safe and Easy Commerce", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_siiqo-ecommerce-marketplace-activity-7459969658050207744-LgKQ" },
];

export const practice = [
  { n: "01", title: "Discover", statement: "I understand the problem before discussing the feature.", detail: "User behaviour, evidence, market context and the real friction behind the request." },
  { n: "02", title: "Define", statement: "I turn evidence into a clear product decision and workable scope.", detail: "Problem framing, journeys, requirements, trade-offs and the smallest useful version worth building." },
  { n: "03", title: "Deliver", statement: "I help the team move from requirements to reliable execution.", detail: "Priorities, sprint goals, dependencies, acceptance criteria, QA and cross-functional alignment." },
  { n: "04", title: "Improve", statement: "I use feedback and product signals to decide what deserves attention next.", detail: "Adoption, friction, support signals, product metrics and continuous improvement after launch." },
];

export const releases = [
  { v: "v5.1", when: "Jan – May 2026 · Contract", title: "Technical Product Manager · Wayagram", note: "Supported production migration, regression testing, stand-ups, demos and module reporting across a connected social, marketplace and payments product.", tone: "orange" },
  { v: "v5.0", when: "Jan 2025 – Present", title: "Lead Product Manager · Scrum Master · Siiqo", note: "Leading product direction and sprint delivery across marketplace trust, protected payments, vendor tools, community features and prioritisation.", tone: "navy" },
  { v: "v4.0", when: "Jun 2022 – Dec 2024", title: "Lead Product Manager · Scrum Master · Canvoy Payment", note: "Shaped MVP scope, payment journeys, requirements and Jira delivery planning, while coordinating security and QA readiness.", tone: "teal" },
  { v: "v3.0", when: "Jan 2021 – Mar 2022", title: "Associate Product Manager · BetBonanza (iGaming)", note: "Contributed to sportsbook user journeys, prioritisation and cross-functional delivery in a fast-paced iGaming environment.", tone: "violet" },
  { v: "v2.0", when: "10+ years", title: "Project leadership · Construction & infrastructure", note: "Led site and project delivery across residential, commercial and public-sector developments: risk, quality, dependencies and team coordination.", tone: "amber" },
  { v: "v1.0", when: "Training", title: "Product Management · Axia Africa School of Product", note: "Where the product practice took shape.", tone: "slate" },
];
