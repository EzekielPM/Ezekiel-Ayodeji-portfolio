export const CV_FILENAME = "Ezekiel O AYODEJI.pdf";
export const CV_URL = "/documents/Ezekiel%20O%20AYODEJI.pdf";
export const CONSTRUCTION_CV_URL = "/documents/olusola-ayodeji-construction-cv.pdf";
export const EMAIL = "Olusola40@gmail.com";
export const WHATSAPP = "https://wa.me/2349015934337";
export const LINKEDIN = "https://www.linkedin.com/in/ayodeji-ezekiel-olusola/";
export const YOUTUBE_CHANNEL = "https://www.youtube.com/@EraProductRoom";
export const YOUTUBE_INTRO_ID = "epiyGrltK8Y";
// Paste the Calendly event link here (e.g. https://calendly.com/name/30min) to embed booking in Contact.
export const CALENDLY_URL = "";
// Web3Forms access key: an alias for the inbox that receives call requests (safe to be public).
export const WEB3FORMS_KEY = "1bf6e5a3-d33c-4793-b644-f2f74fded580";
// Call availability, in Lagos time (WAT, UTC+1, no daylight saving).
export const CALL_HOURS = [9, 10, 11, 12, 13, 14, 15, 16, 17];
export const CALL_DAYS_AHEAD = 28;
export const CALL_MIN_NOTICE_HOURS = 12;

export const openRoles = ["Product Manager", "Product Operations", "Technical Product Manager", "Product Owner", "Scrum Master · Agile Delivery", "Technical Program Manager"];

export type ProjectCategory = "live" | "role" | "independent";

export type Project = {
  slug: string;
  name: string;
  line: string;
  status: string;
  tone: "live" | "mvp" | "demo" | "plan" | "concept" | "past";
  evidence: string;
  role: string;
  image?: string;
  mono?: { text: string; bg: string; ink: string };
  href: string;
  docs?: { label: string; href: string }[];
  categories: ProjectCategory[];
};

// Newest first.
export const projects: Project[] = [
  {
    slug: "ffa",
    name: "Football Fan Arena",
    line: "A football fan community: club fanbases, free matchday predictions, banter groups and fan rankings.",
    status: "Live web app · MVP",
    tone: "mvp",
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
    status: "Live product",
    tone: "live",
    evidence: "Contract role · on Play and App Store",
    role: "Technical PM · Jan – May 2026 · alongside Siiqo",
    image: "/portfolio/full/wayagram-1.jpg",
    href: "/case-studies/wayagram",
    categories: ["live", "role"],
  },
  {
    slug: "siiqo",
    name: "Siiqo",
    line: "A trust-led marketplace with verified vendors and protected payments. 500+ active vendors; sign-ups 35% above forecast in the first three months.",
    status: "Live product",
    tone: "live",
    evidence: "siiqo.com",
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
    tone: "demo",
    evidence: "Test payments · not a business",
    role: "Independent build",
    image: "/portfolio/full/tradeflow%20tablet%20mobile%20jpg.jpeg",
    href: "/v2/tradeflow",
    categories: ["live", "independent"],
  },
  {
    slug: "kuda",
    name: "Kuda 3.0: Confidence Layer",
    line: "Clearer transaction states, service recovery and balance confidence. An independent concept.",
    status: "Concept",
    tone: "concept",
    evidence: "Independent, not a Kuda release",
    role: "Independent study",
    image: "/portfolio/full/kuda-confidence-layer.webp",
    href: "https://kuda-confidence-layer.vercel.app",
    categories: ["independent"],
  },
  {
    slug: "dm",
    name: "From DM to Confirmed Order",
    line: "Teardown and prototype: moving a WhatsApp or Instagram “I want it” to a confirmed order.",
    status: "Concept",
    tone: "concept",
    evidence: "Teardown and prototype",
    role: "Independent study",
    image: "/portfolio/full/dm-confirmed-order-preview.webp",
    href: "/case-studies/dm-confirmed-order",
    categories: ["independent"],
  },
  {
    slug: "canvoy",
    name: "Canvoy Payment",
    line: "A utility payments MVP, fully scoped and planned. It did not launch, for regulatory and business reasons.",
    status: "Scoped · not launched",
    tone: "plan",
    evidence: "Roadmap, flows, backlog",
    role: "Lead PM · Jun 2022 – Dec 2024",
    image: "/portfolio/full/canvoy-landing-desktop-mobile.jpg",
    href: "/case-studies/canvoy",
    categories: ["role"],
  },
  {
    slug: "betbonanza",
    name: "BetBonanza",
    line: "Sportsbook journeys and a 12 Days of December campaign: sign-ups up 25%, daily active users up 35%, 52% retention.",
    status: "Past role",
    tone: "past",
    evidence: "Role experience",
    role: "Associate PM · Jan 2021 – Mar 2022",
    image: "/portfolio/full/betbonanza-thumb.jpg",
    href: "/case-studies/betbonanza",
    categories: ["role"],
  },
];

export type Slide = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  brief?: string; // shorter text for the home page card
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
    summary: "A trust-led marketplace for Nigerian buyers, vendors and service providers: verified sellers, protected payments and community discovery. Over 500 active vendors, and sign-ups 35% above forecast in the first three months after public launch.",
    brief: "A trust-led marketplace for Nigerian buyers, vendors and service providers: verified sellers, protected payments and community discovery.",
    chips: ["Live product", "Lead PM · Scrum Master", "Jan 2025 – Present"],
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
    chips: ["Live product", "Technical PM · Contract", "Jan – May 2026 · alongside Siiqo"],
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
    chips: ["Live demo · test payments", "Independent build"],
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
    summary: "An early-stage payments MVP for utility and everyday journeys: requirements, an eight-week roadmap, Jira delivery structure and security and QA readiness. It did not launch, following regulatory requirements and a business decision.",
    chips: ["Scoped · not launched", "Lead PM · Scrum Master", "Jun 2022 – Dec 2024"],
    image: "/portfolio/full/canvoy-landing-desktop-mobile.jpg",
    imageAlt: "Canvoy Payment landing page on desktop and mobile",
    bg: "#0F3D3A",
    ink: "#FFFFFF",
    chipBg: "#5EEAD4",
    chipInk: "#042F2C",
    actions: [{ label: "Read the case study", href: "/case-studies/canvoy", primary: true }],
  },
  {
    slug: "betbonanza",
    name: "BetBonanza",
    tagline: "Sportsbook journeys and a 12 Days of December campaign.",
    summary: "My first product role, in iGaming. I worked on sportsbook user journeys and prioritisation, and led the competitor analysis behind a 12 Days of December campaign: sign-ups up 25% from November to December, daily active users up 35% and 52% retention among bonus players.",
    chips: ["Past role", "Associate PM · iGaming", "Jan 2021 – Mar 2022"],
    image: "/portfolio/full/betbonanza-home.jpg",
    imageAlt: "BetBonanza sportsbook home on mobile",
    bg: "#1F4A57",
    ink: "#FFFFFF",
    chipBg: "#F28C28",
    chipInk: "#2A1300",
    actions: [{ label: "Read the case study", href: "/case-studies/betbonanza", primary: true }],
  },
];

export const steps = [
  {
    n: "01", name: "Discover", tone: "pink",
    front: "I understand the problem before discussing the feature.",
    points: ["Talk to users and map their current journey", "Check support issues, behaviour and market context", "Separate the observed problem from assumed solutions"],
    outcome: "A clearly evidenced problem worth solving.",
    job: "BetBonanza", href: "/case-studies/betbonanza", image: "/portfolio/full/betbonanza-thumb.jpg",
  },
  {
    n: "02", name: "Define", tone: "violet",
    front: "I turn evidence into a clear product decision and workable scope.",
    points: ["Write the problem statement and desired outcome", "Map the key journey and edge cases", "Prioritise an MVP, document trade-offs and define success"],
    outcome: "A shared scope the team can build and validate.",
    job: "Canvoy Payment", href: "/case-studies/canvoy", image: "/portfolio/full/canvoy-jira-backlog.jpg",
  },
  {
    n: "03", name: "Deliver", tone: "amber",
    front: "I help the team move from requirements to reliable execution.",
    points: ["Break scope into stories with acceptance criteria", "Align sprint goals, owners and dependencies", "Work with design, engineering and QA through release"],
    outcome: "A usable release with quality and readiness checked.",
    job: "Wayagram", href: "/case-studies/wayagram", image: "/portfolio/full/wayagram-1.jpg",
  },
  {
    n: "04", name: "Improve", tone: "green",
    front: "I use feedback and product signals to decide what deserves attention next.",
    points: ["Review adoption, completion and drop-off signals", "Listen for recurring feedback and support friction", "Run focused experiments and reprioritise from evidence"],
    outcome: "A clear next improvement tied to user and business value.",
    job: "Siiqo", href: "/case-studies/siiqo", image: "/portfolio/full/siiqo%20tablet%20mobile%20showcase%20jpg.jpeg",
  },
];

export type DocKind = "requirements" | "architecture" | "plans" | "cases" | "journals" | "cv";

export const docKinds: { id: DocKind; label: string }[] = [
  { id: "requirements", label: "Requirements" },
  { id: "architecture", label: "Architecture" },
  { id: "plans", label: "Plans & roadmaps" },
  { id: "cases", label: "Product cases" },
  { id: "journals", label: "Practice journals" },
  { id: "cv", label: "CVs" },
];

const D = "/documents/";
const P = "/portfolio/docs/";

// Ordered the way a reviewer would want to read them.
export const documents: { name: string; product: string; kind: DocKind; type: string; pages: number; line: string; color: string; href: string; image: string }[] = [
  { name: "Siiqo PRD", product: "Siiqo", kind: "requirements", type: "PRD", pages: 8, line: "Scope, user groups and the trust rules for the marketplace.", color: "#1E3A8A", href: D + "siiqo-product-requirements.pdf", image: P + "siiqo-product-requirements.jpg" },
  { name: "Football Fan Arena PRD", product: "Football Fan Arena", kind: "requirements", type: "PRD", pages: 6, line: "Feed, predictions, communities and moderation.", color: "#15803D", href: D + "ffa-product-requirements.pdf", image: P + "ffa-product-requirements.jpg" },
  { name: "Wayagram architecture", product: "Wayagram", kind: "architecture", type: "Architecture paper", pages: 6, line: "How the product and its services fit together.", color: "#EA580C", href: D + "wayagram-product-architecture.pdf", image: P + "wayagram-product-architecture.jpg" },
  { name: "Wayagram product overview", product: "Wayagram", kind: "architecture", type: "Product paper", pages: 6, line: "Social, marketplace and payments in one app, explained.", color: "#EA580C", href: D + "wayagram-product-paper.pdf", image: P + "wayagram-product-paper.jpg" },
  { name: "Kuda 3.0 PRD: Confidence Layer", product: "Kuda 3.0 concept", kind: "requirements", type: "PRD", pages: 7, line: "A confidence layer that helps users trust each payment.", color: "#6D28D9", href: D + "Kuda_3_0_PRD_Confidence_Layer.pdf", image: P + "Kuda_3_0_PRD_Confidence_Layer.jpg" },
  { name: "Kuda 3.0 feature specification", product: "Kuda 3.0 concept", kind: "requirements", type: "Feature spec", pages: 8, line: "Every feature with its rules and edge cases.", color: "#6D28D9", href: D + "Kuda_3_0_Feature_Specification_Document.pdf", image: P + "Kuda_3_0_Feature_Specification_Document.jpg" },
  { name: "Kuda 3.0 90-day MVP plan", product: "Kuda 3.0 concept", kind: "plans", type: "MVP plan", pages: 5, line: "What ships in 90 days and how we would know it worked.", color: "#6D28D9", href: D + "Kuda_3_0_MVP_90_Day_Confidence_Plan.pdf", image: P + "Kuda_3_0_MVP_90_Day_Confidence_Plan.jpg" },
  { name: "Canvoy MVP roadmap", product: "Canvoy Payment", kind: "plans", type: "Roadmap", pages: 3, line: "Two months from planning to a working MVP.", color: "#0F766E", href: D + "canvoy-mvp-roadmap.pdf", image: P + "canvoy-mvp-roadmap.jpg" },
  { name: "DM to Confirmed Order: product case", product: "DM to Confirmed Order", kind: "cases", type: "Product case", pages: 3, line: "Why social sellers lose orders in the DMs.", color: "#B45309", href: D + "dm-confirmed-order-product-case.pdf", image: P + "dm-confirmed-order-product-case.jpg" },
  { name: "DM to Confirmed Order: user flow", product: "DM to Confirmed Order", kind: "cases", type: "User flow", pages: 2, line: "The main MVP journey, step by step.", color: "#B45309", href: D + "dm-confirmed-order-user-flow.pdf", image: P + "dm-confirmed-order-user-flow.jpg" },
  { name: "DM to Confirmed Order: MVP features", product: "DM to Confirmed Order", kind: "cases", type: "Feature list", pages: 2, line: "What made the cut, and what waited.", color: "#B45309", href: D + "dm-confirmed-order-mvp-feature-list.pdf", image: P + "dm-confirmed-order-mvp-feature-list.jpg" },
  { name: "DM to Confirmed Order: one-pager", product: "DM to Confirmed Order", kind: "cases", type: "Summary", pages: 1, line: "The whole case on a single page.", color: "#B45309", href: D + "dm-confirmed-order-short-explanation.pdf", image: P + "dm-confirmed-order-short-explanation.jpg" },
  { name: "Journal 01: Discover", product: "My product practice", kind: "journals", type: "Journal", pages: 3, line: "How I find the real problem before the feature.", color: "#3D5A2E", href: D + "discover-product-practice-journal.pdf", image: P + "discover-product-practice-journal.jpg" },
  { name: "Journal 02: Define", product: "My product practice", kind: "journals", type: "Journal", pages: 3, line: "Turning evidence into a clear decision and scope.", color: "#3D5A2E", href: D + "define-product-practice-journal.pdf", image: P + "define-product-practice-journal.jpg" },
  { name: "Journal 03: Deliver", product: "My product practice", kind: "journals", type: "Journal", pages: 3, line: "From requirements to a reliable release.", color: "#3D5A2E", href: D + "deliver-product-practice-journal.pdf", image: P + "deliver-product-practice-journal.jpg" },
  { name: "Journal 04: Improve", product: "My product practice", kind: "journals", type: "Journal", pages: 3, line: "Reading product signals after launch.", color: "#3D5A2E", href: D + "improve-product-practice-journal.pdf", image: P + "improve-product-practice-journal.jpg" },
  { name: "Product Manager CV", product: "Olusola Ayodeji Ezekiel", kind: "cv", type: "CV", pages: 2, line: "Two pages, recruiter-friendly and current.", color: "#334155", href: CV_URL, image: P + "olusola-ayodeji-product-manager-cv.jpg" },
  { name: "Construction CV", product: "Olusola Ayodeji Ezekiel", kind: "cv", type: "CV", pages: 2, line: "Ten years of project and site delivery.", color: "#334155", href: CONSTRUCTION_CV_URL, image: P + "olusola-ayodeji-construction-cv.jpg" },
];

export type InsightGroup = "discovery" | "strategy" | "delivery" | "leadership";

export const insightGroups: { id: InsightGroup; label: string }[] = [
  { id: "discovery", label: "Discovery & UX" },
  { id: "strategy", label: "Strategy" },
  { id: "delivery", label: "Delivery" },
  { id: "leadership", label: "Leadership" },
];

export const insights: { topic: string; title: string; text: string; group: InsightGroup; href: string }[] = [
  { topic: "Product documentation", group: "strategy", title: "PRDs Are Just Bets, Not Guarantees", text: "Requirements make assumptions visible and give teams a shared direction. They still need validation, feedback and adjustment.", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_productmanagement-productmanager-productstrategy-activity-7479851658903076864-d9Er" },
  { topic: "Product discovery", group: "discovery", title: "Product Managers Shouldn't Trust Feature Requests Alone", text: "A request is a useful starting point, not the whole problem. Understand the need behind it before committing to a solution.", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_productmanager-productdiscovery-userresearch-activity-7483500408246677504-iNQa" },
  { topic: "UX & iGaming", group: "discovery", title: "Becoming the User: A UX Lesson in iGaming", text: "Promotions can grab attention, but too many interruptions get in the way of the task a user came to complete.", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_productmanager-igaming-userexperience-activity-7481301268641226753-etSu" },
  { topic: "Team alignment", group: "delivery", title: "How to Use Meetings to Align and Decide", text: "Good meetings create shared understanding, clarify decisions and give the team a useful next step rather than more noise.", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_planning-provides-the-direction-and-focus-activity-7376157467107393537-sG3N" },
  { topic: "UX & empathy", group: "discovery", title: "Product Managers Create Products People Understand", text: "A payment can work as designed and still leave people uncertain. Clear feedback and thoughtful journeys matter as much as the transaction.", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_productmanager-usercentric-uiux-activity-7484933393252700160-dq-m" },
  { topic: "Product strategy", group: "strategy", title: "Optimising vs Innovating: The PM's Dilemma", text: "Knowing when to improve what exists and when to explore something new is a product judgement call, not a default rule.", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_productmanagement-activity-7391033448427171840-kQuU" },
  { topic: "Leadership", group: "leadership", title: "Surviving Chaos in Product Management with Purpose", text: "When priorities and opinions collide, listening carefully and bringing the conversation back to user value restores direction.", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_productmanager-usercentric-problemsolving-activity-7494005541279539200-DIe6" },
  { topic: "Building products", group: "delivery", title: "Building the Siiqo Marketplace for Safe and Easy Commerce", text: "Marketplace thinking through trust, commerce and the decisions that help buyers and vendors transact with confidence.", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_siiqo-ecommerce-marketplace-activity-7459969658050207744-LgKQ" },
];

export const practice = [
  { n: "01", title: "Discover", statement: "I understand the problem before discussing the feature.", detail: "User behaviour, evidence, market context and the real friction behind the request." },
  { n: "02", title: "Define", statement: "I turn evidence into a clear product decision and workable scope.", detail: "Problem framing, journeys, requirements, trade-offs and the smallest useful version worth building." },
  { n: "03", title: "Deliver", statement: "I help the team move from requirements to reliable execution.", detail: "Priorities, sprint goals, dependencies, acceptance criteria, QA and cross-functional alignment." },
  { n: "04", title: "Improve", statement: "I use feedback and product signals to decide what deserves attention next.", detail: "Adoption, friction, support signals, product metrics and continuous improvement after launch." },
];

export const releases = [
  { v: "v5.1", when: "Jan – May 2026 · Contract, alongside Siiqo", title: "Technical Product Manager · Wayagram", note: "Supported production migration, regression testing, stand-ups, demos and module reporting across a connected social, marketplace and payments product.", tone: "orange" },
  { v: "v5.0", when: "Jan 2025 – Present", title: "Lead Product Manager · Scrum Master · Siiqo", note: "Leading product direction and sprint delivery across marketplace trust, protected payments, vendor tools and community features. 500+ active vendors, and sign-ups 35% above forecast in the first three months live.", tone: "navy" },
  { v: "v4.0", when: "Jun 2022 – Dec 2024", title: "Lead Product Manager · Scrum Master · Canvoy Payment", note: "Shaped MVP scope, payment journeys, requirements and Jira delivery planning, while coordinating security and QA readiness. The MVP did not launch, for regulatory and business reasons.", tone: "teal" },
  { v: "v3.0", when: "Jan 2021 – Mar 2022", title: "Associate Product Manager · BetBonanza (iGaming)", note: "Worked on sportsbook user journeys and prioritisation, and led the competitor analysis behind a 12 Days of December campaign: sign-ups up 25%, daily active users up 35%, 52% retention among bonus players.", tone: "violet" },
  { v: "v2.0", when: "10+ years", title: "Project leadership · Construction & infrastructure", note: "Led site and project delivery across residential, commercial and public-sector developments: risk, quality, dependencies and team coordination.", tone: "amber" },
  { v: "v1.0", when: "Training", title: "Product Management · Axia Africa School of Product", note: "Where the product practice took shape.", tone: "slate" },
];

export const values = [
  { value: "Problem before feature", verb: "Proven in", where: "user discovery" },
  { value: "Trust is the product", verb: "Shipped at", where: "Siiqo" },
  { value: "PRDs are bets, not guarantees", verb: "Tested in", where: "every PRD I write" },
  { value: "Protect the core journey", verb: "Validated at", where: "BetBonanza" },
  { value: "Start from the market", verb: "Proven by", where: "12 Days of December" },
  { value: "Scope honestly, ship reliably", verb: "Built in", where: "Football Fan Arena" },
  { value: "Build to learn", verb: "Tested in", where: "my independent builds" },
  { value: "Clarity over noise", verb: "Practised in", where: "sprint rituals" },
  { value: "Plan like a builder", verb: "Earned in", where: "10 years of construction" },
];

// Quiet results line on the home page.
export const homeResults = [
  { figure: "500+", label: "active vendors", where: "Siiqo", href: "/case-studies/siiqo" },
  { figure: "+35%", label: "sign-ups above forecast, first 3 months", where: "Siiqo", href: "/case-studies/siiqo" },
  { figure: "+25%", label: "sign-ups, Nov to Dec", where: "BetBonanza", href: "/case-studies/betbonanza" },
  { figure: "+35%", label: "daily active users, 12 Days campaign", where: "BetBonanza", href: "/case-studies/betbonanza" },
];
