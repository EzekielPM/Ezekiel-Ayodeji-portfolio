import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canvoy Payment Case Study | Olusola Ayodeji Ezekiel",
  description:
    "An account of Olusola Ayodeji Ezekiel's product management and Scrum work on the Canvoy Payment MVP, including requirements, Jira delivery planning and release readiness.",
  alternates: { canonical: "/case-studies/canvoy" },
  openGraph: {
    title: "Canvoy Payment Case Study | Olusola Ayodeji Ezekiel",
    description:
      "Product scope, delivery artefacts and practices documented for the Canvoy Payment MVP.",
    type: "article",
    url: "/case-studies/canvoy",
  },
};

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
            <p className="section-kicker">FinTech product experience</p>
            <h2>Canvoy Payment</h2>
          </div>
          <p>
            A FinTech MVP experience focused on payment journeys, requirements, Jira delivery planning and coordination around security and QA readiness.
          </p>
        </div>

        <article className="journal">
          <header className="journal-header">
            <p>FinTech · Product Manager · Scrum Master</p>
            <span>02</span>
            <h2>Canvoy Payment</h2>
            <p className="journal-deck">
              Canvoy Payment focused on utility and everyday payments. My role combined Product Manager and Scrum Master responsibilities, including MVP definition, requirements and delivery coordination. I managed the Jira structure used to organise planned work and connect the roadmap with sprint execution.
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
            <span>Utility payments</span><span>MVP definition</span><span>Jira delivery planning</span><span>Scrum</span><span>Security and QA planning</span>
          </div>

          <section className="resource-panel">
            <p>Supporting product work</p>
            <div>
              <a href="/documents/canvoy-mvp-roadmap.pdf" target="_blank" rel="noreferrer">
                <span>
                  <strong>Canvoy Payment 8 Week MVP Roadmap</strong>
                  <small>An eight-week plan outlining intended discovery, design, technical setup, security, implementation and release-readiness activities.</small>
                </span>
                <b>View PDF ↗</b>
              </a>
            </div>
          </section>

          <div className="hero-cv-actions" aria-label="Download Canvoy document">
            <a href="/documents/canvoy-mvp-roadmap.pdf" download>Download MVP Roadmap <span>↓</span></a>
          </div>

          <div className="journal-body">
            <section><span>01</span><div><h3>The product and its focus</h3><p>Canvoy Payment was an early-stage FinTech product centred on utility and everyday payments. The MVP planning focused on making the core customer journey clear, from account access through payment steps and transaction feedback, while keeping future expansion separate from the initial scope.</p></div></section>
            <section><span>02</span><div><h3>The experience to plan for</h3><p>The planned payment journey needed clear instructions, appropriate security checks and understandable transaction feedback. Account access, payment status and recovery paths were important considerations in defining what the MVP should cover.</p></div></section>
            <section><span>03</span><div><h3>My role and contribution</h3><p>As Product Manager and Scrum Master, I worked on discovery, MVP definition, requirements, prioritisation and delivery coordination. I structured and managed the Jira workspace, organising planned work into epics, sprint backlogs, user stories, tasks and acceptance criteria. This describes the product and delivery work, not a claim that the MVP launched or achieved a particular result.</p></div></section>
            <section><span>04</span><div><h3>How the MVP was structured</h3><p>The planned scope covered authentication, verification, account recovery, dashboards, payment flows, security questions, transaction feedback and profile management. These areas helped organise requirements and highlight where design, engineering, data and security considerations needed to be coordinated.</p></div></section>
            <section><span>05</span><div><h3>Delivery coordination</h3><p>I supported sprint planning, stand-ups, refinement and progress reviews, using Jira to keep requirements and planned work organised. Security considerations and QA readiness were included in delivery discussions rather than treated only as final-stage checks.</p></div></section>
            <section><span>06</span><div><h3>Product priorities</h3><p>The planning kept the end-to-end payment journey at the centre: account access, required steps, payment flow and transaction feedback. Authentication, verification, recovery and security were considered as connected parts of that experience. QA and risk review were included in the delivery plan, while release readiness remained something to validate rather than assume.</p></div></section>
            <section><span>07</span><div><h3>Delivery artefacts and outcome assessment</h3><p>The work was translated into an eight-week MVP roadmap and a Jira delivery structure that connected scope to sprint execution. These artefacts make the planned work and delivery approach reviewable; they should not be mistaken for evidence of a live launch or measured customer impact. To assess the product outcome, I would first confirm release status and establish baselines for payment completion, failed transactions, recovery success and support requests before setting targets.</p></div></section>
            <section><span>08</span><div><h3>What the work reinforced for me</h3><p>The project strengthened my understanding of trust in payment products. Clear flows matter, but so do security, transaction visibility and timely feedback. Those are not supporting details in a financial product; they are part of the product experience itself.</p></div></section>
          </div>

          <nav className="case-study-next" aria-label="Explore other case studies">
            <span>Explore another case study</span>
            <a href="/case-studies/siiqo">Siiqo Marketplace <b>↗</b></a>
            <a href="/case-studies/wayagram">Wayagram <b>↗</b></a>
          </nav>
          <footer className="journal-footer">
            <p>Olusola Ayodeji Ezekiel · Product case study</p>
            <div className="hero-actions">
              <a className="button text" href="/v2#products">Return to portfolio <span>↖</span></a>
              <a className="case-button" href="/documents/canvoy-mvp-roadmap.pdf" target="_blank" rel="noreferrer">Open MVP roadmap <span>↗</span></a>
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
