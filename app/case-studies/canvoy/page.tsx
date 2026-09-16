export default function CanvoyCaseStudy() {
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
            <h2>Canvoy Payment</h2>
          </div>
          <p>
            A FinTech MVP case covering payment journeys, requirements, Jira ownership, sprint delivery, security, QA readiness and the decisions needed to move an early product toward release.
          </p>
        </div>

        <article className="journal">
          <header className="journal-header">
            <p>FinTech · Product Manager · Scrum Master</p>
            <span>02</span>
            <h2>Canvoy Payment</h2>
            <p className="journal-deck">
              Canvoy focused on making recurring utility and everyday payments easier to complete and easier to trust. I worked across MVP definition, requirements and delivery coordination, while managing the Jira structure that connected the roadmap to sprint execution.
            </p>
          </header>

          <div className="media-rail screenshots" aria-label="Canvoy product gallery">
            <div className="media-frame media-video">
              <video controls playsInline preload="none" poster="/product-media/canvoy-demo-poster.jpg">
                <source src="/product-media/canvoy-demo-web.mp4" type="video/mp4" />
                Your browser does not support video.
              </video>
              <span>Canvoy product concept walkthrough</span>
            </div>
            <a className="media-frame" href="/portfolio/full/canvoy-1.jpg" target="_blank" rel="noreferrer"><img src="/portfolio/full/canvoy-1.jpg" alt="Canvoy payment visual 1" /><span>Payment experience</span></a>
            <a className="media-frame" href="/portfolio/full/canvoy-2.jpg" target="_blank" rel="noreferrer"><img src="/portfolio/full/canvoy-2.jpg" alt="Canvoy payment visual 2" /><span>Customer journey</span></a>
            <a className="media-frame" href="/portfolio/full/canvoy-3.jpg" target="_blank" rel="noreferrer"><img src="/portfolio/full/canvoy-3.jpg" alt="Canvoy payment visual 3" /><span>Product flow</span></a>
            <a className="media-frame" href="/portfolio/full/canvoy-4.jpg" target="_blank" rel="noreferrer"><img src="/portfolio/full/canvoy-4.jpg" alt="Canvoy payment visual 4" /><span>Transaction experience</span></a>
            <a className="media-frame" href="/portfolio/full/canvoy-5.jpg" target="_blank" rel="noreferrer"><img src="/portfolio/full/canvoy-5.jpg" alt="Canvoy payment visual 5" /><span>Product detail</span></a>
          </div>

          <div className="feature-tags" aria-label="Canvoy product areas">
            <span>Utility payments</span><span>MVP roadmap</span><span>Jira ownership</span><span>Scrum</span><span>Security</span><span>QA readiness</span>
          </div>

          <section className="resource-panel">
            <p>Supporting product work</p>
            <div>
              <a href="/documents/canvoy-mvp-roadmap.pdf" target="_blank" rel="noreferrer">
                <span>
                  <strong>Canvoy Payment 8 Week MVP Roadmap</strong>
                  <small>The delivery roadmap covering product discovery, design, technical setup, security, implementation and release readiness.</small>
                </span>
                <b>View PDF ↗</b>
              </a>
            </div>
          </section>

          <div className="hero-cv-actions" aria-label="Download Canvoy document">
            <a href="/documents/canvoy-mvp-roadmap.pdf" download>Download MVP Roadmap <span>↓</span></a>
          </div>

          <div className="journal-body">
            <section><span>01</span><div><h3>Where Canvoy started</h3><p>Canvoy began with a simple product question: how can everyday utility and recurring payments feel less stressful and more dependable? The MVP was shaped around giving customers a clear path from registration to payment completion, while creating a foundation that could support more payment services over time.</p></div></section>
            <section><span>02</span><div><h3>The payment problem we needed to reduce</h3><p>Routine payments become frustrating when users are unsure what information is required, whether a transaction is secure, what stage it has reached or what to do when something fails. The experience needed to reduce that uncertainty and make each payment feel clear from start to finish.</p></div></section>
            <section><span>03</span><div><h3>What I owned</h3><p>As Product Manager and Scrum Master, I contributed across discovery, MVP definition, requirements, prioritisation and delivery coordination. I also structured and managed the Jira workspace, turning the roadmap into epics, sprint backlogs, user stories, tasks and measurable acceptance criteria the team could work from.</p></div></section>
            <section><span>04</span><div><h3>How I shaped the MVP</h3><p>I organised the product around the journeys that mattered most for an initial release: authentication, verification, account recovery, dashboards, payment flows, security questions, transaction feedback and profile management. I worked across design, engineering, data and cybersecurity to surface dependencies early and keep product, experience and risk decisions aligned.</p></div></section>
            <section><span>05</span><div><h3>How we delivered it</h3><p>I facilitated sprint planning, stand-ups, refinement and progress reviews while keeping requirements visible as questions emerged. QA readiness and risk assessment were treated as part of delivery from the beginning, rather than activities to leave until the end of the build.</p></div></section>
            <section><span>06</span><div><h3>What the work reinforced for me</h3><p>The project strengthened my understanding of trust in payment products. Clear flows matter, but so do security, transaction visibility and timely feedback. Those are not supporting details in a financial product; they are part of the product experience itself.</p></div></section>
          </div>

          <footer className="journal-footer">
            <p>Olusola Ayodeji Ezekiel · Product case study</p>
            <div className="hero-actions">
              <a className="button text" href="/v2#products">Return to portfolio <span>↖</span></a>
              <a className="case-button" href="/documents/canvoy-mvp-roadmap.pdf" target="_blank" rel="noreferrer">Open MVP roadmap <span>↗</span></a>
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
