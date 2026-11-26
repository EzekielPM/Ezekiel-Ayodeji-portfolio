import type { Metadata } from "next";
import "../../v2/redesign/redesign.css";
import RdHeader from "../../v2/redesign/Header";
import RdMotion from "../../v2/redesign/Motion";
import RdFooter from "../../v2/redesign/Footer";
import { CaseDocs, CaseGallery, CaseNext, CaseVideo } from "../../v2/redesign/CaseBits";
import { FloatingContact } from "../../v2/PortfolioControls";

export const metadata: Metadata = {
  title: "Wayagram case study | Olusola Ayodeji Ezekiel",
  description: "Technical Product Manager on a contract at Wayagram, a social, marketplace and payments app: production migration, regression testing, ceremonies and module reporting.",
  alternates: { canonical: "/case-studies/wayagram" },
};

const gallery = [
  { src: "/portfolio/full/wayagram-1.jpg", label: "Marketplace and RFQ" },
  { src: "/portfolio/full/wayagram-2.jpg", label: "Connected product experience" },
];

export default function WayagramCaseStudy() {
  return (
    <div className="rd" id="top">
      <RdMotion />
      <RdHeader base="/" />
      <main className="rd-case">
        <a className="rd-case-back" href="/work">← All projects</a>

        <header className="rd-case-hero" data-reveal>
          <p className="rd-case-kicker">Case study · Social · Marketplace · Payments</p>
          <h1>Wayagram: keeping a live super-app steady through a migration</h1>
          <p className="rd-case-lead">A short contract alongside my role at Siiqo. I helped the team through a production migration on a live app that combines social, marketplace and payments, and wrote up how the product fits together.</p>
          <dl className="rd-case-facts">
            <div><dt>Role</dt><dd>Technical PM · Contract</dd></div>
            <div><dt>Dates</dt><dd>Jan – May 2026</dd></div>
            <div><dt>Domain</dt><dd>Social · Marketplace · Payments</dd></div>
            <div><dt>Status</dt><dd><span className="rd-chip rd-chip-live">Live product</span></dd></div>
          </dl>
        </header>

        <CaseVideo src="/product-media/wayagram-demo-web.mp4" caption="Wayagram product walkthrough." />

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">01</span>
          <div>
            <h2>The product</h2>
            <p>Wayagram brings social features, a marketplace with quotations, donations, chat, wallets and virtual accounts into one app. Every area connects to the others, so a change in one place can break something somewhere else.</p>
          </div>
        </section>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">02</span>
          <div>
            <h2>What I owned</h2>
            <ul>
              <li>Production migration support on the live platform.</li>
              <li>Regression testing, so existing features kept working through the change.</li>
              <li>Stand-ups and demos, plus module-by-module progress reports for stakeholders.</li>
              <li>The product overview and the product and technical architecture papers.</li>
            </ul>
          </div>
        </section>

        <section className="rd-case-highlight rd-case-block" data-reveal>
          <span className="rd-case-n">03</span>
          <div>
            <h2>Where delivery needed attention</h2>
            <p>With so many connected areas, the migration and regression checks had to run alongside feature work, not after it. I kept progress, issues and module updates visible so the team and stakeholders could see where things stood each week.</p>
          </div>
        </section>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">04</span>
          <div>
            <h2>What it taught me</h2>
            <ul>
              <li>On a connected product, look at every module in the context of the whole journey, not as a standalone screen.</li>
              <li>Regression checks and clear status reporting are what keep a migration calm.</li>
            </ul>
          </div>
        </section>

        <CaseGallery items={gallery} label="Wayagram screens" />

        <CaseDocs docs={[
          { title: "Wayagram product & technology overview", note: "Customer journey, wallet and money flow, marketplace and escrow, PRD breakdown and a Now / Next / Later roadmap.", href: "/documents/wayagram-product-paper.pdf" },
          { title: "Wayagram product & technical architecture", note: "System layers, feature-by-feature engineering, business model and KPIs, security and roadmap.", href: "/documents/wayagram-product-architecture.pdf" },
        ]} />

        <div className="rd-case-actions" data-reveal>
          <a className="rd-btn rd-btn-ghost" href="https://play.google.com/store/apps/details?id=ng.wayagram" target="_blank" rel="noreferrer">Google Play <span aria-hidden="true">↗</span></a>
          <a className="rd-btn rd-btn-ghost" href="https://apps.apple.com/ng/app/wayagram/id6444311693" target="_blank" rel="noreferrer">App Store <span aria-hidden="true">↗</span></a>
        </div>

        <CaseNext href="/v2/tradeflow" label="TradeFlow Commerce: multi-vendor commerce, built on my own" />
      </main>
      <RdFooter base="/" />
      <FloatingContact />
    </div>
  );
}
