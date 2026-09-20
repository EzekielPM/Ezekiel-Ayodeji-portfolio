import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wayagram Case Study | Olusola Ayodeji Ezekiel",
  description:
    "A technical product management case study covering production migration, regression QA and delivery across Wayagram's social, marketplace and payment modules.",
};

export default function WayagramCaseStudy() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/">
          <span>OLUSOLA AYODEJI EZEKIEL</span>
          <small>Product Manager</small>
        </Link>
        <nav className="site-nav">
          <Link className="nav-cta desktop-nav-link" href="/#products">Return to portfolio</Link>
        </nav>
      </header>

      <section className="section" id="top">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Featured technical product case study</p>
            <h2>Wayagram</h2>
          </div>
          <p>
            A connected social, marketplace and payments platform where product delivery depended on keeping multiple modules, teams and production risks aligned.
          </p>
        </div>

        <article className="journal">
          <header className="journal-header">
            <p>FinTech · Technical Product Manager · Production Delivery</p>
            <span>03</span>
            <h2>Wayagram</h2>
            <p className="journal-deck">
              I worked across production migration, regression testing, demos, stand-ups and module reporting for a platform combining social interaction, commerce and payments. My role was to make dependencies visible, keep delivery conversations grounded and help the team move complex product areas toward reliable release.
            </p>
          </header>

          <div className="media-rail screenshots" aria-label="Wayagram product gallery">
            <div className="media-frame media-video">
              <video controls playsInline preload="none" poster="/product-media/wayagram-demo-poster.jpg">
                <source src="/product-media/wayagram-demo-web.mp4" type="video/mp4" />
                Your browser does not support video.
              </video>
              <span>Wayagram product walkthrough</span>
            </div>
            <a className="media-frame" href="/portfolio/full/wayagram-1.jpg" target="_blank" rel="noreferrer">
              <Image src="/portfolio/full/wayagram-1.jpg" alt="Wayagram marketplace and quotation experience" fill sizes="(max-width: 600px) 90vw, 500px" />
              <span>Marketplace and RFQ</span>
            </a>
            <a className="media-frame" href="/portfolio/full/wayagram-2.jpg" target="_blank" rel="noreferrer">
              <Image src="/portfolio/full/wayagram-2.jpg" alt="Wayagram social commerce experience" fill sizes="(max-width: 600px) 90vw, 500px" />
              <span>Connected product experience</span>
            </a>
          </div>

          <div className="feature-tags" aria-label="Wayagram product areas">
            <span>Production migration</span><span>Regression QA</span><span>Wallet and virtual accounts</span><span>Marketplace</span><span>Social features</span><span>Release coordination</span>
          </div>

          <section className="resource-panel">
            <p>Supporting technical product work</p>
            <div>
              <a href="/documents/wayagram-product-architecture.pdf" target="_blank" rel="noreferrer">
                <span>
                  <strong>Wayagram Product Architecture</strong>
                  <small>A high-level view of the connected modules, services and product relationships that informed technical discussions and delivery planning.</small>
                </span>
                <b>View PDF ↗</b>
              </a>
            </div>
          </section>

          <div className="hero-cv-actions" aria-label="Download Wayagram architecture document">
            <a href="/documents/wayagram-product-architecture.pdf" download>Download Architecture PDF <span>↓</span></a>
          </div>

          <div className="journal-body">
            <section><span>01</span><div><h3>A product with many connected parts</h3><p>Wayagram brought social interaction, marketplace activity and financial journeys into one platform. Its modules included a social feed, marketplace, requests for quotation and bidding, donations, promotions, polls, contests, events, chat, wallets and virtual accounts. A change in one area could affect several others, so delivery required a clear view of product and technical dependencies.</p></div></section>
            <section><span>02</span><div><h3>The delivery challenge</h3><p>The work was not simply about adding features. The team also needed to move an interconnected product toward production while protecting journeys that crossed authentication, marketplace activity, wallet actions and communication. The key challenge was maintaining enough visibility to find gaps before they became production issues.</p></div></section>
            <section><span>03</span><div><h3>What I owned</h3><p>As Technical Product Manager, I coordinated production migration activities, supported regression testing, facilitated stand-ups and demos, and reported progress across product modules. I worked with engineering and other stakeholders to clarify expected behaviour, surface blockers and keep technical concerns connected to the user journey.</p></div></section>
            <section><span>04</span><div><h3>How I approached technical product delivery</h3><p>I treated each module as part of a wider system rather than an isolated feature. That meant tracing dependencies, checking how data and transaction states moved between experiences, documenting open questions and making sure the team understood the effect of a change beyond the screen being worked on.</p></div></section>
            <section><span>05</span><div><h3>Regression and release readiness</h3><p>Regression testing helped us revisit critical journeys after changes and identify where connected modules behaved differently from what the product expected. I supported issue triage, tracked readiness and used demos and module-level reporting to create a shared picture of what was working, what remained at risk and what needed attention before release.</p></div></section>
            <section><span>06</span><div><h3>What the experience strengthened</h3><p>Wayagram strengthened my ability to work between product intent and technical execution. It reinforced the importance of dependency awareness, clear release communication and disciplined regression testing when a platform combines commerce, community and financial activity in one customer experience.</p></div></section>
          </div>

          <footer className="journal-footer">
            <p>Olusola Ayodeji Ezekiel · Technical product case study</p>
            <div className="hero-actions">
              <Link className="button text" href="/#products">Return to portfolio <span>↖</span></Link>
              <a className="case-button" href="/documents/wayagram-product-architecture.pdf" target="_blank" rel="noreferrer">Open architecture PDF <span>↗</span></a>
            </div>
          </footer>
        </article>
      </section>

      <footer>
        <div className="brand"><span>OLUSOLA AYODEJI EZEKIEL</span><small>Product Manager · Technical Product Delivery</small></div>
        <Link href="/#products">Return to portfolio ↑</Link>
      </footer>
    </main>
  );
}
