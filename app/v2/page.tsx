const selectedWork = [
  {
    number: "01",
    title: "Siiqo",
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
      "A digital payments MVP for recurring utility and everyday payments, designed around clear transaction flows, security and dependable payment feedback.",
    image: "/portfolio/full/canvoy-1.jpg",
    tags: ["Utility payments", "MVP roadmap", "Jira ownership", "Scrum", "Security", "QA readiness"],
    href: "/case-studies/canvoy",
    action: "View case study",
  },
  {
    number: "03",
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
    number: "04",
    title: "Kuda 3.0: Confidence Layer",
    label: "FinTech · Independent product case study",
    status: "INDEPENDENT CASE STUDY",
    summary:
      "An independent teardown and working prototype focused on clearer transaction states, service recovery, balance confidence and recurring financial activity.",
    image: "/portfolio/full/kuda-confidence-layer.png",
    tags: ["Product strategy", "Transaction confidence", "Service recovery", "State modelling", "UX systems", "Product metrics"],
    href: "https://kuda-confidence-layer.vercel.app",
    action: "Open live case study",
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
  {
    topic: "User-centred product thinking",
    title: "Good product management starts with the user",
    text: "A practical reflection on why useful products begin with real user needs and decisions that reduce friction rather than simply add features.",
    href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_productmanager-usercentric-uiux-activity-7484933393252700160-dq-m",
  },
  {
    topic: "Discovery and problem framing",
    title: "Discovery before delivery",
    text: "Why strong delivery starts before the backlog, with better questions, useful evidence and enough context to avoid building the wrong thing well.",
    href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_productmanager-productdiscovery-userresearch-activity-7483500408246677504-iNQa",
  },
  {
    topic: "Product judgement",
    title: "A Product Manager is a problem solver",
    text: "Why the job is less about having every answer and more about creating clarity, making trade-offs and helping teams solve the right problem.",
    href: "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_productmanagement-problemsolving-customercentric-activity-7478764586150637568-JoTM",
  },
];

export default function PortfolioV2() {
  return (
    <main>
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
          <button className="portrait-welcome" aria-label="Olusola Ayodeji Ezekiel portrait">
            <img src="/portfolio/bio-portrait.png" alt="Olusola Ayodeji Ezekiel" />
            <span className="welcome-message">
              <span className="wave-hand" aria-hidden="true">👋🏾</span>
              <span><strong>Hi, welcome.</strong><small>I am Olusola Ayodeji Ezekiel.</small></span>
            </span>
          </button>
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
            <h2>Four projects. Four different product strengths.</h2>
          </div>
          <p>
            Real delivery, MVP thinking, technical product work and independent product exploration, without making every project compete for the same attention.
          </p>
        </div>
        <div className="case-list">
          {selectedWork.map((item) => (
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
                    <img src={item.image} alt={`${item.title} preview`} />
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
                <a className="case-button" href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
                  {item.action}<span>↗</span>
                </a>
              </div>
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
        <div className="capability-grid">
          {practice.map((item) => (
            <article className="practice-card" key={item.title}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.statement}</p>
              <div className="practice-card-meta">
                <strong>{item.detail}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="section-heading compact">
          <div>
            <p className="section-kicker">Experience</p>
            <h2>Leadership across products, platforms and real-world delivery.</h2>
          </div>
        </div>
        <div className="timeline">
          <article><div><span>2025 to 2026</span><span>Product leadership</span></div><div><h3>Siiqo Marketplace</h3><p>Led product direction and delivery across marketplace trust, payments, vendor growth, community, sprint execution and continuous optimisation.</p></div></article>
          <article><div><span>2025</span><span>FinTech product</span></div><div><h3>Canvoy Payment</h3><p>Shaped the MVP, translated payment journeys into delivery-ready work, managed Jira and supported Scrum, QA, security and launch readiness.</p></div></article>
          <article><div><span>Technical product</span><span>FinTech and iGaming</span></div><div><h3>Wayagram and BetBonanza</h3><p>Worked across production QA, wallet and payment journeys, social commerce, sportsbook operations, release coordination and complex product dependencies.</p></div></article>
          <article><div><span>10+ years</span><span>Project leadership</span></div><div><h3>Construction and infrastructure</h3><p>Led site and project delivery across residential, commercial and public-sector developments, building the delivery discipline I now bring into product.</p></div></article>
        </div>
      </section>

      <section className="insights section" id="insights">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Insights</p>
            <h2>Product thinking, written in public.</h2>
          </div>
          <p>A smaller set of useful reflections is enough on the homepage. The goal is to show how I think, not reproduce my full LinkedIn feed.</p>
        </div>
        <div className="insight-grid">
          {insights.map((post, index) => (
            <article key={post.href}>
              <div><span>0{index + 1}</span><small>{post.topic}</small></div>
              <h3>{post.title}</h3>
              <p>{post.text}</p>
              <a href={post.href} target="_blank" rel="noreferrer">Read on LinkedIn ↗</a>
            </article>
          ))}
        </div>
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
          <a className="contact-icon outline" href="https://wa.me/2349015934337" target="_blank" rel="noreferrer"><span>WhatsApp</span></a>
          <a className="contact-icon outline" href="https://www.linkedin.com/in/ayodeji-ezekiel-olusola/" target="_blank" rel="noreferrer"><span>LinkedIn</span></a>
        </div>
      </section>

      <footer>
        <div className="brand"><span>OLUSOLA AYODEJI EZEKIEL</span><small>Product Manager · Technical Product Delivery</small></div>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
