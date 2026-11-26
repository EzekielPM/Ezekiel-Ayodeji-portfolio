import type { Metadata } from "next";
import Image from "next/image";
import "../../v2/redesign/redesign.css";
import RdHeader from "../../v2/redesign/Header";
import RdMotion from "../../v2/redesign/Motion";
import RdFooter from "../../v2/redesign/Footer";
import { FloatingContact } from "../../v2/PortfolioControls";

export const metadata: Metadata = {
  title: "Siiqo case study | Olusola Ayodeji Ezekiel",
  description: "Lead Product Manager and Scrum Master at Siiqo, a trust-led marketplace for Nigerian buyers and vendors: 500+ active vendors and sign-ups 35% above forecast in the first three months.",
  alternates: { canonical: "/case-studies/siiqo" },
};

const gallery = [
  { src: "/portfolio/full/siiqo-1.jpg", label: "Marketplace home" },
  { src: "/portfolio/full/siiqo-2.jpg", label: "Product experience" },
  { src: "/portfolio/full/siiqo-3.jpg", label: "Marketplace journey" },
  { src: "/portfolio/full/siiqo-4.jpg", label: "Seller and buyer flow" },
  { src: "/portfolio/full/siiqo-5.jpg", label: "Product detail" },
];

export default function SiiqoCaseStudy() {
  return (
    <div className="rd" id="top">
      <RdMotion />
      <RdHeader base="/" />
      <main className="rd-case">
        <a className="rd-case-back" href="/work">← All projects</a>

        <header className="rd-case-hero" data-reveal>
          <p className="rd-case-kicker">Case study · Marketplace · Commerce</p>
          <h1>Siiqo: building trust into a marketplace</h1>
          <p className="rd-case-lead">I lead product at Siiqo, a marketplace where Nigerian buyers, vendors and service providers trade with less risk. We put trust first, before features, and the marketplace grew to more than 500 active vendors.</p>
          <dl className="rd-case-facts">
            <div><dt>Role</dt><dd>Lead PM · Scrum Master</dd></div>
            <div><dt>Dates</dt><dd>Jan 2025 – Present</dd></div>
            <div><dt>Domain</dt><dd>Marketplace · Payments</dd></div>
            <div><dt>Status</dt><dd><span className="rd-chip rd-chip-live">Live product</span></dd></div>
          </dl>
        </header>

        <figure className="rd-case-figure" data-reveal>
          <Image src="/portfolio/full/siiqo%20tablet%20mobile%20showcase%20jpg.jpeg" alt="Siiqo marketplace on a tablet and a phone" width={1600} height={1000} sizes="(max-width: 900px) 100vw, 860px" priority />
          <figcaption>Siiqo on tablet and mobile: verified stores up front, protected payment on every order.</figcaption>
        </figure>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">01</span>
          <div>
            <h2>The problem</h2>
            <p>Buying from a stranger online in Nigeria carries real risk. Buyers need to know a seller is genuine, that the product matches the listing and that their money is safe if something goes wrong. Sellers need visibility, simple storefront tools and a reliable way to manage orders.</p>
            <p>Siiqo had to work for both sides without weakening buyer protection.</p>
          </div>
        </section>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">02</span>
          <div>
            <h2>What I own</h2>
            <ul>
              <li>Product direction: what to build first and why.</li>
              <li>Discovery and journeys for buyers, vendors and service providers.</li>
              <li>PRDs, user stories and acceptance criteria the team builds from.</li>
              <li>Sprint planning, stand-ups and reviews as Scrum Master, across design, engineering and QA.</li>
            </ul>
            <a className="rd-text-link" href="/documents/siiqo-product-requirements.pdf" target="_blank" rel="noreferrer">Read the Siiqo PRD (8 pages) ↗</a>
          </div>
        </section>

        <section className="rd-case-block rd-case-highlight rd-case-highlight-navy" data-reveal>
          <span className="rd-case-n">03</span>
          <div>
            <h2>The key decision: trust before breadth</h2>
            <p>We could have launched with community, referrals and rewards. But those features matter less if a buyer can&apos;t trust the seller or doesn&apos;t know what happens after paying.</p>
            <h3>What we built first</h3>
            <ul>
              <li><b>Verified sellers</b>, so buyers can judge credibility before they pay.</li>
              <li><b>Escrow and pay-on-delivery</b>, so money moves only when the order is right.</li>
              <li><b>Clear dispute paths</b>, so both sides know what happens when something goes wrong.</li>
            </ul>
            <p>Vendor storefronts, listings, order management, chat, community, referrals and rewards were then built around that core.</p>
          </div>
        </section>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">04</span>
          <div>
            <h2>How we deliver</h2>
            <p>I break the work into modules the team can test on their own, each with a clear sprint goal and acceptance criteria. Feedback from vendors and buyers decides what we fix or improve next, and regular product reviews and QA keep the marketplace, community and payment journeys consistent.</p>
          </div>
        </section>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">05</span>
          <div>
            <h2>Results so far</h2>
            <dl className="rd-case-results rd-case-results-2">
              <div><dt>Active vendors</dt><dd>500+</dd><span>buying and selling, with storefronts kept up to date</span></div>
              <div><dt>Sign-ups</dt><dd>+35%</dd><span>above forecast, first three months after launch</span></div>
            </dl>
            <p className="rd-case-note" style={{ marginTop: 16 }}>About the figures: an active vendor buys and sells on Siiqo, keeps their storefront updated and restocks regularly. Sign-ups are compared with our forecast for the first three months after public launch, which followed usability testing and real-world testing. Every feature on this page, including escrow, storefronts and disputes, is live.</p>
            <p style={{ marginTop: 16 }}>What I track next: checkout completion, dispute rate and resolution time, repeat purchases and active-vendor retention.</p>
          </div>
        </section>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">06</span>
          <div>
            <h2>What it taught me</h2>
            <ul>
              <li>Marketplace growth isn&apos;t only about adding inventory. It depends on credibility and safe transactions.</li>
              <li>Sequencing is a product decision: reduce uncertainty in the transaction before adding reasons to return.</li>
              <li>Trust has to be visible in the interface, not just written in the terms.</li>
            </ul>
          </div>
        </section>

        <section className="rd-case-gallery" data-reveal aria-label="Siiqo screens">
          {gallery.map((g) => (
            <a key={g.src} href={g.src} target="_blank" rel="noreferrer">
              <Image src={g.src} alt={`Siiqo: ${g.label}`} width={800} height={600} sizes="(max-width: 720px) 70vw, 280px" />
              <span>{g.label}</span>
            </a>
          ))}
        </section>

        <div className="rd-case-actions" data-reveal>
          <a className="rd-btn rd-btn-accent" href="https://siiqo.com" target="_blank" rel="noreferrer">Visit siiqo.com <span aria-hidden="true">↗</span></a>
          <a className="rd-btn rd-btn-ghost" href="/documents/siiqo-product-requirements.pdf" target="_blank" rel="noreferrer">Siiqo PRD <span aria-hidden="true">↗</span></a>
        </div>

        <nav className="rd-case-next" aria-label="Next case study" data-reveal>
          <span>Next in my work</span>
          <a href="/v2/football-fan-arena">Football Fan Arena: one home for football supporters →</a>
        </nav>
      </main>
      <RdFooter base="/" />
      <FloatingContact />
    </div>
  );
}
