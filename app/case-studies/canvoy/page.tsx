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
            <a className="media-frame" href="/portfolio/full/canvoy-landing-desktop-mobile.jpg" target="_blank" rel="noreferrer"><img src="/portfolio/full/canvoy-landing-desktop-mobile.jpg" alt="Two versions of the Canvoy landing page design, each shown on desktop and mobile" /><span>Landing page · two design versions, desktop and mobile</span></a>
            <a className="media-frame" href="/portfolio/full/canvoy-figma-flows.jpg" target="_blank" rel="noreferrer"><img src="/portfolio/full/canvoy-figma-flows.jpg" alt="Figma board of Canvoy sign-up, verification, security, dashboard and profile screens" /><span>Figma · sign-up, security and dashboard flows</span></a>
            <a className="media-frame" href="/portfolio/full/canvoy-jira-backlog.jpg" target="_blank" rel="noreferrer"><img src="/portfolio/full/canvoy-jira-backlog.jpg" alt="Jira backlog showing Week 1 product discovery and Week 2 UI/UX sprints" /><span>Jira backlog · sprint plan</span></a>
            <a className="media-frame" href="/portfolio/full/canvoy-jira-summary.jpg" target="_blank" rel="noreferrer"><img src="/portfolio/full/canvoy-jira-summary.jpg" alt="Jira project summary showing 42 work items and their status" /><span>Jira summary · 42 work items tracked</span></a>
            <a className="media-frame" href="/portfolio/full/canvoy-3.jpg" target="_blank" rel="noreferrer"><img src="/portfolio/full/canvoy-3.jpg" alt="Canvoy mobile services screen" /><span>Mobile · services</span></a>
            <a className="media-frame" href="/portfolio/full/canvoy-4.jpg" target="_blank" rel="noreferrer"><img src="/portfolio/full/canvoy-4.jpg" alt="Canvoy mobile quick access and testimonials screen" /><span>Mobile · quick access</span></a>
            <a className="media-frame" href="/portfolio/full/canvoy-5.jpg" target="_blank" rel="noreferrer"><img src="/portfolio/full/canvoy-5.jpg" alt="Canvoy mobile FAQ and footer screen" /><span>Mobile · FAQ and footer</span></a>
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
            <section><span>06</span><div><h3>Key product decision and trade-off</h3><p>The planning prioritised a coherent, secure end-to-end payment journey over expanding the MVP with additional features. Authentication, verification, recovery, payment status and transaction feedback were treated as connected steps because gaps between them could leave customers uncertain about what happened to their money. The trade-off was to keep the initial scope focused and make QA, risk review and release readiness explicit checkpoints rather than assume the experience was ready.</p></div></section>
            <section><span>07</span><div><h3>Why it did not launch</h3><p>The MVP was fully scoped, designed and planned: an eight-week roadmap, a Jira delivery structure with 42 tracked work items, and security and QA built into the plan. It did not launch. Regulatory requirements for payment services, together with a business decision by the company, meant the product was not taken to market.</p><p>The lesson I took from it: in fintech, regulatory readiness belongs in discovery, not at the end of delivery.</p></div></section>
            <section><span>08</span><div><h3>What the work reinforced for me</h3><p>The project strengthened my understanding of trust in payment products. Clear flows matter, but so do security, transaction visibility and timely feedback. Those are not supporting details in a financial product; they are part of the product experience itself.</p></div></section>
            <section><span>09</span><div><h3>Evidence and how success would be measured</h3><p>The reviewable outputs are the Canvoy concept walkthrough, Figma screen designs for the landing page and core flows, the eight-week MVP roadmap, and the Jira backlog and project summary that organised the planned work into sprints. They show how the intended journey was translated into requirements, planned work and release-readiness activities; they do not establish that the MVP launched or that customer outcomes improved.</p><p><strong>Before measuring impact:</strong> confirm release status, instrumentation and a reliable baseline. <strong>Core outcome:</strong> successful payment completion rate. <strong>Diagnostic measures:</strong> failed-transaction rate by failure reason, recovery success, time to resolve payment issues and payment-related support requests. Review these together so a higher completion rate does not hide increased failures or support burden.</p></div></section>
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
