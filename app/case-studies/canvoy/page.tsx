import type { Metadata } from "next";
import "../../v2/redesign/redesign.css";
import RdHeader from "../../v2/redesign/Header";
import RdMotion from "../../v2/redesign/Motion";
import RdFooter from "../../v2/redesign/Footer";
import { CaseDocs, CaseGallery, CaseNext, CaseVideo } from "../../v2/redesign/CaseBits";
import { FloatingContact } from "../../v2/PortfolioControls";

export const metadata: Metadata = {
  title: "Canvoy Payment case study | Olusola Ayodeji Ezekiel",
  description: "Lead Product Manager and Scrum Master on Canvoy Payment, a utility payments MVP: scope, journeys, an eight-week roadmap and a Jira delivery plan. Why it did not launch.",
  alternates: { canonical: "/case-studies/canvoy" },
};

const gallery = [
  { src: "/portfolio/full/canvoy-landing-desktop-mobile.jpg", label: "Landing page · two versions" },
  { src: "/portfolio/full/canvoy-figma-flows.jpg", label: "Figma · sign-up, security, dashboard" },
  { src: "/portfolio/full/canvoy-jira-backlog.jpg", label: "Jira backlog · sprint plan" },
  { src: "/portfolio/full/canvoy-jira-summary.jpg", label: "Jira summary · 42 work items" },
  { src: "/portfolio/full/canvoy-3.jpg", label: "Mobile · services" },
  { src: "/portfolio/full/canvoy-4.jpg", label: "Mobile · quick access" },
  { src: "/portfolio/full/canvoy-5.jpg", label: "Mobile · FAQ and footer" },
];

export default function CanvoyCaseStudy() {
  return (
    <div className="rd" id="top">
      <RdMotion />
      <RdHeader base="/" />
      <main className="rd-case">
        <a className="rd-case-back" href="/work">← All projects</a>

        <header className="rd-case-hero" data-reveal>
          <p className="rd-case-kicker">Case study · Fintech · Payments</p>
          <h1>Canvoy Payment: everyday payments, planned properly</h1>
          <p className="rd-case-lead">I led product for an early-stage utility payments app, from discovery to a fully planned MVP. It did not launch, for regulatory and business reasons, but the scope, roadmap and delivery plan are all here.</p>
          <dl className="rd-case-facts">
            <div><dt>Role</dt><dd>Lead PM · Scrum Master</dd></div>
            <div><dt>Dates</dt><dd>Jun 2022 – Dec 2024</dd></div>
            <div><dt>Domain</dt><dd>Fintech · Utility payments</dd></div>
            <div><dt>Status</dt><dd><span className="rd-chip rd-chip-plan">Scoped · not launched</span></dd></div>
          </dl>
        </header>

        <CaseVideo src="/product-media/canvoy-demo-web.mp4" poster="/product-media/canvoy-demo-poster.jpg" caption="Canvoy product concept walkthrough." />

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">01</span>
          <div>
            <h2>The product</h2>
            <p>Canvoy was built around utility and everyday payments. The MVP had to make one journey clear: sign in, pay, and understand exactly what happened to your money, with security checks and recovery paths that don&apos;t get in the way.</p>
          </div>
        </section>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">02</span>
          <div>
            <h2>What I owned</h2>
            <ul>
              <li>Discovery, MVP definition, requirements and prioritisation.</li>
              <li>Scope: authentication, verification, account recovery, dashboards, payment flows, transaction feedback and profiles.</li>
              <li>An eight-week MVP roadmap and the Jira workspace: epics, sprint backlogs, stories and acceptance criteria.</li>
              <li>Scrum ceremonies, with security and QA brought into planning early rather than left to the end.</li>
            </ul>
          </div>
        </section>

        <section className="rd-case-block rd-case-highlight rd-case-highlight-teal" data-reveal>
          <span className="rd-case-n">03</span>
          <div>
            <h2>The key decision: one secure journey over more features</h2>
            <p>Sign-in, verification, recovery, payment status and transaction feedback were treated as one connected journey. A gap between any two of them leaves a customer unsure what happened to their money.</p>
            <p>So the MVP stayed focused, and QA, risk review and release readiness became explicit checkpoints rather than assumptions.</p>
          </div>
        </section>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">04</span>
          <div>
            <h2>Why it did not launch</h2>
            <p>The MVP was fully scoped, designed and planned: an eight-week roadmap, a Jira delivery structure with 42 tracked work items, and security and QA built into the plan. Regulatory requirements for payment services, together with a business decision by the company, meant it was not taken to market.</p>
          </div>
        </section>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">05</span>
          <div>
            <h2>What it taught me</h2>
            <ul>
              <li>In fintech, regulatory readiness belongs in discovery, not at the end of delivery.</li>
              <li>Security, transaction visibility and timely feedback aren&apos;t supporting details in a payment product. They are the product.</li>
            </ul>
          </div>
        </section>

        <CaseGallery items={gallery} label="Canvoy designs and delivery plan" />

        <CaseDocs docs={[{ title: "Canvoy Payment 8-week MVP roadmap", note: "Discovery, design, technical setup, security, implementation and release readiness, week by week.", href: "/documents/canvoy-mvp-roadmap.pdf" }]} />

        <CaseNext href="/case-studies/betbonanza" label="BetBonanza: learning product on a sportsbook" />
      </main>
      <RdFooter base="/" />
      <FloatingContact />
    </div>
  );
}
