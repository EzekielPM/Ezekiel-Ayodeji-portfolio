import Image from "next/image";
import MotionEnhancements from "./MotionEnhancements";
import PracticeFlipCards from "./PracticeFlipCards";
import SelectedExperienceCards from "./SelectedExperienceCards";
import { CopyEmailButton, FloatingContact, V2HeaderControls } from "./PortfolioControls";

const selectedWork = [
  {
    number: "01",
    title: "Siiqo",
    liveUrl: "https://siiqo.com",
    label: "Marketplace · Lead Product Manager · Scrum Master",
    status: "LIVE PRODUCT",
    summary:
      "A trust-led marketplace for Nigerian buyers, vendors and service providers, combining verified sellers, protected payments and community-driven discovery.",
    image: "/portfolio/full/siiqo-1.jpg",
    tags: ["Escrow payments", "Vendor storefronts", "Community", "E-bidding", "Disputes", "Rewards"],
    href: "/case-studies/siiqo",
    action: "View case study",
  },
  {
    number: "02",
    title: "Canvoy Payment",
    label: "FinTech · Product Manager · Scrum Master",
    status: "MVP / DELIVERY",
    summary:
      "An early-stage digital payments MVP focused on utility and everyday payment journeys, with work spanning requirements, Jira delivery planning and security and QA readiness.",
    image: "/portfolio/full/canvoy-1.jpg",
    tags: ["Utility payments", "MVP definition", "Jira planning", "Scrum", "Security and QA planning"],
    href: "/case-studies/canvoy",
    action: "View case study",
  },
  {
    number: "03",
    title: "Wayagram",
    liveUrl: "https://wayagram.ng/",
    label: "FinTech · Technical Product Manager",
    status: "PRODUCTION DELIVERY",
    summary:
      "A social, marketplace and payments platform. During a brief engagement, I contributed to production migration activities, regression testing, team ceremonies and module reporting.",
    image: "/portfolio/full/wayagram-1.jpg",
    tags: ["Migration support", "Regression testing", "Wallet", "Marketplace", "Delivery coordination"],
    href: "/case-studies/wayagram",
    action: "View case study",
  },
  {
    number: "04",
    title: "From DM to Confirmed Order",
    label: "Social commerce · Product teardown · Working prototype",
    status: "PRODUCT TEARDOWN",
    summary:
      "A focused product teardown exploring the messy step after a customer says ‘I want it’ on WhatsApp or Instagram, and how one structured checkout link could move the order from purchase intent to confirmation.",
    image: "/portfolio/full/dm-confirmed-order-preview.webp",
    tags: ["Problem framing", "User flow", "MVP", "Prioritisation", "Social commerce", "Prototype"],
    href: "/v2/dm-confirmed-order",
    action: "View case study",
  },
  {
    number: "05",
    title: "Kuda 3.0: Confidence Layer",
    label: "FinTech · Independent product case study",
    status: "INDEPENDENT CASE STUDY",
    summary:
      "An independent teardown and working prototype focused on clearer transaction states, service recovery, balance confidence and recurring financial activity.",
    image: "/portfolio/full/kuda-confidence-layer.webp",
    tags: ["Product strategy", "Transaction confidence", "Service recovery", "State modelling", "UX systems", "Product metrics"],
    href: "https://kuda-confidence-layer.vercel.app",
    action: "Open live case study",
  },
  {
    number: "06",
    title: "TradeFlow Commerce",
    label: "Founder & Product Manager · Multi-vendor commerce",
    status: "DEPLOYED BUILD",
    summary:
      "I’m building TradeFlow to connect product discovery, vendor storefronts, order handling and location-based delivery. Paystack remains in Test Mode while payment flows are validated.",
    image: "/portfolio/full/tradeflow-journey.svg",
    tags: ["Buyer catalogue", "Vendor storefronts", "Delivery zones", "Order alerts", "Fulfilment", "Paystack test mode"],
    href: "/v2/tradeflow",
    liveUrl: "https://orderflow-six-sage.vercel.app/",
    action: "View case study",
  },
];

const practice = [
  {
    number: "01",
    title: "Discover",
    statement: "I understand the problem before discussing the feature.",
    detail: "User behaviour, evidence, market context and the real friction behind the request.",
  },
  {
    number: "02",
    title: "Define",
    statement: "I turn evidence into a clear product decision and workable scope.",
    detail: "Problem framing, journeys, requirements, trade-offs and the smallest useful version worth building.",
  },
  {
    number: "03",
    title: "Deliver",
    statement: "I help the team move from requirements to reliable execution.",
    detail: "Priorities, sprint goals, dependencies, acceptance criteria, QA and cross-functional alignment.",
  },
  {
    number: "04",
    title: "Improve",
    statement: "I use feedback and product signals to decide what deserves attention next.",
    detail: "Adoption, friction, support signals, product metrics and continuous improvement after launch.",
  },
];

const insights = [
  { topic: "UX & empathy", title: "Product Managers Create Products People Understand", text: "A payment experience can work as designed and still leave people uncertain. Clear feedback and thoughtful user journeys matter just as much as the transaction itself.", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_productmanager-usercentric-uiux-activity-7484933393252700160-dq-m" },
  { topic: "UX & iGaming", title: "Becoming the User: A UX Lesson in iGaming", text: "Promotions can grab attention, but too many interruptions can get in the way of the task a user came to complete.", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_productmanager-igaming-userexperience-activity-7481301268641226753-etSu" },
  { topic: "Product discovery", title: "Product Managers Shouldn't Trust Feature Requests Alone", text: "A request is a useful starting point, not the whole problem. Understand the need behind it before committing to a solution.", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_productmanager-productdiscovery-userresearch-activity-7483500408246677504-iNQa" },
  { topic: "Product strategy", title: "Optimizing vs Innovating: The PM's Dilemma", text: "Knowing when to improve an existing experience and when to explore something new is a product judgement call, not a default rule.", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_productmanagement-activity-7391033448427171840-kQuU" },
  { topic: "Product documentation", title: "PRDs Are Just Bets, Not Guarantees", text: "Requirements make assumptions visible and give teams a shared direction. They still need validation, feedback and adjustment.", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_productmanagement-productmanager-productstrategy-activity-7479851658903076864-d9Er" },
  { topic: "Leadership", title: "Surviving Chaos in Product Management with Purpose", text: "When priorities and opinions collide, listening carefully and bringing the conversation back to user value helps restore direction.", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_productmanager-usercentric-problemsolving-activity-7494005541279539200-DIe6" },
  { topic: "Team alignment", title: "How to Use Meetings to Align and Decide", text: "Good meetings create shared understanding, clarify decisions and give the team a useful next step rather than more noise.", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_planning-provides-the-direction-and-focus-activity-7376157467107393537-sG3N" },
  { topic: "Building products", title: "Building SIIQO Marketplace for Safe and Easy Commerce", text: "A look at marketplace thinking through trust, commerce and the decisions that help buyers and vendors transact with more confidence.", href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_siiqo-ecommerce-marketplace-activity-7459969658050207744-LgKQ" },
];

export default function PortfolioV2() {
  return (
    <main>
      <MotionEnhancements />
      <header className="site-header">
        <a className="brand" href="#top">
          <span>OLUSOLA AYODEJI EZEKIEL</span>
          <small>Product Manager</small>
        </a>
        <nav className="site-nav">
          <a className="desktop-nav-link" href="#products">Product work</a>
          <a className="desktop-nav-link" href="#practice">Product practice</a>
          <a className="desktop-nav-link" href="#experience">Experience</a>
          <a className="desktop-nav-link" href="#insights">Insights</a>
          <a className="desktop-nav-link" href="#about">About</a>
          <V2HeaderControls />
          <a className="nav-cta desktop-nav-link" href="#contact">Let&apos;s talk</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="hero-label">Product Manager · FinTech · eCommerce · iGaming</p>
          <h1>I turn complex product problems into <em>clear decisions and dependable delivery.</em></h1>
          <p className="hero-intro">
            I am <strong>Olusola Ayodeji Ezekiel</strong>. I work across product strategy, discovery and technical delivery, helping teams move from unclear problems to products people can actually use.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#products">View product work <span>↘</span></a>
            <a className="button text" href="#contact">Let&apos;s talk <span>↗</span></a>
          </div>
          <div className="hero-cv-actions">
            <a href="/documents/olusola-ayodeji-product-manager-cv.pdf" download>
              Download Product Manager CV <span>↓</span>
            </a>
          </div>
        </div>
        <aside className="portrait-panel">
          <div className="portrait-welcome">
            <Image src="/portfolio/bio-portrait.webp" alt="Portrait of Olusola Ayodeji Ezekiel" width={1254} height={1254} sizes="(max-width: 850px) 100vw, 450px" priority />
            <span className="welcome-message" aria-label="Welcome message">
              <span className="wave-hand" aria-hidden="true">👋🏾</span>
              <span><strong>Hi, welcome.</strong><small>I am Olusola Ayodeji Ezekiel.</small></span>
            </span>
          </div>
          <div className="portrait-caption">
            <strong>4+ years</strong><span>Product management</span>
            <strong>10+ years</strong><span>Project leadership</span>
          </div>
        </aside>
      </section>

      <section className="statement">
        <p className="section-kicker">My point of view</p>
        <blockquote>
          Good product management creates enough clarity to solve the <em>right problem</em> and enough structure to deliver it well.
        </blockquote>
      </section>

      <section className="section" id="products">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Selected product work</p>
            <h2>Two projects. Different product challenges.</h2>
          </div>
          <div className="section-heading-actions">
            <p>A focused look at two substantial commerce products: marketplace trust and the practical work of building a commerce experience.</p>
            <a className="button text" href="#all-projects">View all projects <span>↗</span></a>
          </div>
        </div>
        <div className="case-list">
          {[selectedWork[0], selectedWork[5]].map((item) => (
            <article className="case-card" key={item.title}>
              <div className="case-top">
                <span>{item.number}</span>
                <p>{item.label}</p>
                <span className="case-status">{item.status}</span>
              </div>
              <div className="case-intro">
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
              {item.image ? (
                <div className="media-rail screenshots" aria-label={`${item.title} preview`}>
                  <div className="media-frame">
                    <Image src={item.image} alt={`${item.title} preview`} fill sizes="(max-width: 600px) 88vw, 500px" />
                    <span>Featured work</span>
                  </div>
                </div>
              ) : (
                <div className="gallery-empty">
                  Buyer says “I want it” → seller creates order → checkout link → buyer details → payment → confirmed order
                </div>
              )}
              <div className="case-footer">
                <div className="feature-tags">
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                {item.liveUrl && <a className="case-button" href={item.liveUrl} target="_blank" rel="noreferrer">{item.title === "Siiqo" ? "Visit Siiqo" : item.title === "TradeFlow Commerce" ? "Visit TradeFlow" : `Visit ${item.title} live`} <span>↗</span></a>}
                <a className="case-button" href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
                  {item.action}<span>↗</span>
                </a>
                {item.title === "Wayagram" && <div className="hero-actions" style={{ marginTop: "0.75rem" }} aria-label="Download Wayagram app">
                  <a className="case-button" href="https://play.google.com/store/apps/details?id=ng.wayagram" target="_blank" rel="noreferrer">Google Play <span>↗</span></a>
                  <a className="case-button" href="https://apps.apple.com/ng/app/wayagram/id6444311693" target="_blank" rel="noreferrer">App Store <span>↗</span></a>
                </div>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="all-projects section" id="all-projects">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Explore more</p>
            <h2>All product projects.</h2>
          </div>
          <p>The featured work is only the starting point. Explore the other product case studies and independent explorations.</p>
        </div>
        <div className="all-projects-grid">
          {selectedWork.filter((item) => item.title !== "Siiqo" && item.title !== "TradeFlow Commerce").map((item) => (
            <article className={`all-project-card all-project-card-${item.number}`} key={item.title}>
              <div className="all-project-meta"><span>{item.number}</span><span>{item.status}</span></div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              {item.liveUrl && <a className="all-project-card-link" href={item.liveUrl} target="_blank" rel="noreferrer">Visit {item.title} live <span aria-hidden="true">↗</span></a>}
              <a className="all-project-card-link" href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>{item.action} <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities section" id="practice">
        <div className="section-heading compact">
          <div>
            <p className="section-kicker">My product practice</p>
            <h2>How I actually move product work forward.</h2>
          </div>
          <p>Less framework theatre. More clarity around what I do at each stage and why it matters.</p>
        </div>
        <PracticeFlipCards items={practice} />
      </section>

      <section className="experience section" id="experience">
        <div className="section-heading compact">
          <div>
            <p className="section-kicker">Selected experience</p>
            <h2>Product decisions, technical delivery and project leadership.</h2>
          </div>
          <p>A snapshot of product roles and delivery work, alongside the construction leadership that shaped how I manage risk, dependencies and execution.</p>
        </div>
        <SelectedExperienceCards />
      </section>

      <section className="insights section" id="insights">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Insights · From LinkedIn</p>
            <h2>The thinking behind the product.</h2>
          </div>
          <p>Practical lessons from product discovery, user experience, team alignment and building digital products. Curated from my writing on LinkedIn.</p>
        </div>
        <article className="insight-featured">
          <div className="insight-featured-copy">
            <div className="insight-meta"><span>FEATURED INSIGHT</span><small>{insights[0].topic}</small></div>
            <h3>{insights[0].title}</h3>
            <p>{insights[0].text}</p>
            <a href={insights[0].href} target="_blank" rel="noreferrer">Read original post <span aria-hidden="true">↗</span></a>
          </div>
          <div className="insight-featured-mark" aria-hidden="true"><span>01</span><span>USER</span><span>FIRST</span></div>
        </article>
        <div className="insight-grid">
          {insights.slice(1, 4).map((post, index) => (
            <article key={post.href} className={"insight-card insight-card-" + (index + 1)}>
              <div><span>0{index + 2}</span><small>{post.topic}</small></div>
              <h3>{post.title}</h3>
              <p>{post.text}</p>
              <a href={post.href} target="_blank" rel="noreferrer">Read on LinkedIn <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
        <details className="insight-archive">
          <summary><span>View all insights</span><span className="insight-archive-count">+ {insights.length - 4} more posts</span></summary>
          <div className="insight-archive-grid">
            {insights.slice(4).map((post, index) => (
              <article key={post.href}>
                <div><span>0{index + 5}</span><small>{post.topic}</small></div>
                <h3>{post.title}</h3>
                <p>{post.text}</p>
                <a href={post.href} target="_blank" rel="noreferrer">Read original post <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </details>
        <a className="linkedin-profile" href="https://www.linkedin.com/in/ayodeji-ezekiel-olusola/" target="_blank" rel="noreferrer">Explore my LinkedIn profile ↗</a>
      </section>

      <section className="construction construction-cta section" id="construction">
        <div className="construction-cta-copy">
          <p className="section-kicker">Construction background</p>
          <h2>Ten years of delivery experience still shapes how I manage product work.</h2>
          <p>The full civil engineering portfolio stays separate, so recruiters can explore it without interrupting the Product Manager journey.</p>
        </div>
        <a className="button primary" href="https://ezekiel-ayodeji-construction-portfo.vercel.app/" target="_blank" rel="noreferrer">
          Explore construction portfolio <span>↗</span>
        </a>
      </section>

      <section className="construction construction-cta section" id="rough-space">
        <div className="construction-cta-copy">
          <p className="section-kicker">Rough Space</p>
          <h2>Not everything starts polished.</h2>
          <p>Music, product experiments, unfinished thoughts, visual notes and the things I create when I am exploring an idea without a PRD attached to it.</p>
        </div>
        <a className="button primary" href="/rough-space">
          Enter Rough Space <span>↗</span>
        </a>
      </section>

      <section className="about section" id="about">
        <div>
          <p className="section-kicker">About</p>
          <h2>Product thinking grounded in real-world delivery.</h2>
        </div>
        <div className="about-copy">
          <p className="lead">
            I am a Product Manager working across FinTech, digital payments, eCommerce and iGaming. I bring structured discovery, clear documentation, technical curiosity and cross-functional coordination to complex product work.
          </p>
          <p>
            Before moving fully into digital products, I spent more than a decade delivering construction and infrastructure projects. That experience still shapes how I manage risk, dependencies, teams, quality and delivery today.
          </p>
          <div className="principles"><span>Clarity over noise</span><span>Users before assumptions</span><span>Outcomes over output</span></div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <p className="section-kicker">Lagos, Nigeria · Open to opportunities and collaboration</p>
        <h2>Have a product problem worth solving? Let&apos;s talk.</h2>
        <p>I am open to Product Manager opportunities, product collaborations and meaningful product work with teams building useful things.</p>
        <div className="contact-actions">
          <a className="contact-icon light" href="mailto:Olusola40@gmail.com"><span>Email</span></a>
          <CopyEmailButton />
          <a className="contact-icon outline" href="https://wa.me/2349015934337" target="_blank" rel="noreferrer"><span>WhatsApp</span></a>
          <a className="contact-icon outline" href="https://www.linkedin.com/in/ayodeji-ezekiel-olusola/" target="_blank" rel="noreferrer"><span>LinkedIn</span></a>
        </div>
      </section>

      <FloatingContact />

      <footer>
        <div className="brand"><span>OLUSOLA AYODEJI EZEKIEL</span><small>Product Manager · Technical Product Delivery</small></div>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
