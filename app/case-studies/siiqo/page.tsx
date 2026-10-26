import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Siiqo Marketplace Case Study | Olusola Ayodeji Ezekiel",
  description:
    "A marketplace product management case study covering buyer trust, protected payments, seller tools, community and product prioritisation.",
  openGraph: {
    title: "Siiqo Marketplace Case Study | Olusola Ayodeji Ezekiel",
    description:
      "How product decisions around marketplace trust, protected transactions and seller support shaped the Siiqo experience.",
    type: "article",
  },
};

export default function SiiqoCaseStudy() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/v2">
          <span>OLUSOLA AYODEJI EZEKIEL</span>
          <small>Product Manager</small>
        </a>
        <nav className="site-nav">
          <a className="nav-cta desktop-nav-link" href="/v2#products">Return to portfolio</a>
        </nav>
      </header>

      <section className="section" id="top">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Featured product case study</p>
            <h2>Siiqo Marketplace</h2>
          </div>
          <p>
            A live multi-sided marketplace case covering trust, protected payments, seller tools, community, delivery structure and the product decisions behind the experience.
          </p>
        </div>

        <article className="journal">
          <header className="journal-header">
            <p>Marketplace · Lead Product Manager · Scrum Master</p>
            <span>01</span>
            <h2>Siiqo</h2>
            <p className="journal-deck">
              I worked on Siiqo as a marketplace where trust needed to be designed into the product, not treated as a supporting feature. The work connected buyer protection, seller growth, payments, community and delivery into one product experience.
            </p>
          </header>

          <div className="media-rail screenshots" aria-label="Siiqo product gallery">
            <a className="media-frame" href="/portfolio/full/siiqo-1.jpg" target="_blank" rel="noreferrer"><img src="/portfolio/full/siiqo-1.jpg" alt="Siiqo marketplace visual 1" /><span>Marketplace experience</span></a>
            <a className="media-frame" href="/portfolio/full/siiqo-2.jpg" target="_blank" rel="noreferrer"><img src="/portfolio/full/siiqo-2.jpg" alt="Siiqo marketplace visual 2" /><span>Product experience</span></a>
            <a className="media-frame" href="/portfolio/full/siiqo-3.jpg" target="_blank" rel="noreferrer"><img src="/portfolio/full/siiqo-3.jpg" alt="Siiqo marketplace visual 3" /><span>Marketplace journey</span></a>
            <a className="media-frame" href="/portfolio/full/siiqo-4.jpg" target="_blank" rel="noreferrer"><img src="/portfolio/full/siiqo-4.jpg" alt="Siiqo marketplace visual 4" /><span>Seller and buyer flow</span></a>
            <a className="media-frame" href="/portfolio/full/siiqo-5.jpg" target="_blank" rel="noreferrer"><img src="/portfolio/full/siiqo-5.jpg" alt="Siiqo marketplace visual 5" /><span>Product detail</span></a>
          </div>

          <div className="feature-tags" aria-label="Siiqo product areas">
            <span>Escrow payments</span><span>Vendor storefronts</span><span>Community</span><span>E-bidding</span><span>Disputes</span><span>Rewards</span>
          </div>

          <section className="resource-panel">
            <p>Supporting product work</p>
            <div>
              <a href="https://docs.google.com/document/d/1SmsFGtIb60wlUKtSlwPwm8ixSl2Egf7G4-Jikkam9ko/edit?usp=drivesdk" target="_blank" rel="noreferrer">
                <span>
                  <strong>Siiqo Product Document</strong>
                  <small>Supporting product thinking, feature definition and delivery documentation for the marketplace.</small>
                </span>
                <b>Open document ↗</b>
              </a>
            </div>
          </section>

          <div className="journal-body">
            <section><span>01</span><div><h3>Where Siiqo started</h3><p>I saw Siiqo as more than a marketplace listing products. The bigger opportunity was to build a dependable commerce environment where buyers could discover products and services, judge whether a seller was credible, pay with confidence and still feel protected after payment.</p></div></section>
            <section><span>02</span><div><h3>The trust problem we had to solve</h3><p>Trust was the hard part. Buyers needed confidence that sellers were genuine, products matched expectations and payments would not leave them exposed. Sellers, meanwhile, needed visibility, practical storefront tools and a reliable way to manage orders. The product had to support both sides without weakening buyer protection.</p></div></section>
            <section><span>03</span><div><h3>What I owned</h3><p>As Lead Product Manager and Scrum Master, I shaped the product direction and translated the vision into a delivery plan the team could execute. I led discovery, personas and journeys, wrote PRDs and user stories, defined acceptance criteria, prioritised the backlog and coordinated sprint planning across design, engineering and QA.</p></div></section>
            <section><span>04</span><div><h3>How I shaped the product</h3><p>I centred the experience on trust first: verified sellers, escrow-secured orders and clear dispute paths. Around that foundation, we built vendor storefronts, product and service listings, order management, community content, referrals, rewards and chat. Each feature had to strengthen the marketplace rather than simply add more functionality.</p></div></section>
            <section><span>05</span><div><h3>How we delivered it</h3><p>I broke the work into connected but independently testable modules, with clear sprint goals and acceptance criteria to reduce ambiguity. Feedback from vendors and buyers informed iteration, while regular product reviews and QA helped protect consistency across marketplace, community and payment journeys.</p></div></section>
            <section><span>06</span><div><h3>Trade-offs and prioritisation</h3><p>The product needed to serve buyers and sellers without letting feature breadth dilute the core trust proposition. I prioritised the foundational marketplace journeys—seller credibility, protected transactions, order handling and dispute paths—then connected community, referrals and rewards around that foundation. This kept the backlog tied to marketplace confidence rather than treating every feature as equally urgent.</p></div></section>
            <section><span>07</span><div><h3>How I would evaluate the outcome</h3><p>To evaluate whether the experience is earning trust, I would track verified-seller coverage, product-view-to-order conversion, checkout completion, payment and dispute rates, time to resolve disputes, repeat purchases and active vendor retention. These are proposed measures, not reported results; baselines and targets should be set from actual product analytics.</p></div></section>
            <section><span>08</span><div><h3>What the project taught me</h3><p>Siiqo progressed into a live multi-sided marketplace with a clear trust proposition. The project reinforced something I carry into other product work: marketplace growth is not only about adding inventory. It depends on credibility, safe transactions, seller support and an experience that makes those values visible to users.</p></div></section>
          </div>

          <footer className="journal-footer">
            <p>Olusola Ayodeji Ezekiel · Product case study</p>
            <div className="hero-actions">
              <a className="button text" href="/v2#products">Return to portfolio <span>↖</span></a>
              <a className="case-button" href="https://docs.google.com/document/d/1SmsFGtIb60wlUKtSlwPwm8ixSl2Egf7G4-Jikkam9ko/edit?usp=drivesdk" target="_blank" rel="noreferrer">Open product document <span>↗</span></a>
              <a className="case-contact-link" href="/v2#contact">Let’s talk about product <span>↗</span></a>
            </div>
          </footer>
        </article>
      </section>

      <footer>
        <div className="brand"><span>OLUSOLA AYODEJI EZEKIEL</span><small>Product Manager · Technical Product Delivery</small></div>
        <a href="/v2#products">Return to portfolio ↑</a>
      </footer>
    </main>
  );
}
