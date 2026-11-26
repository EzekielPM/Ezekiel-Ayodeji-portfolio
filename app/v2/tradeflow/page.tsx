import type { Metadata } from "next";
import "../redesign/redesign.css";
import RdHeader from "../redesign/Header";
import RdMotion from "../redesign/Motion";
import RdFooter from "../redesign/Footer";
import { CaseGallery, CaseNext } from "../redesign/CaseBits";
import { FloatingContact } from "../PortfolioControls";

export const metadata: Metadata = {
  title: "TradeFlow Commerce case study | Olusola Ayodeji Ezekiel",
  description: "An independently built multi-vendor commerce product: buyer shop, vendor workspace, delivery zones and order alerts. Paystack stays in test mode.",
  alternates: { canonical: "/v2/tradeflow" },
};

const SHOP_URL = "https://tradeflow-commerce.vercel.app/";

const gallery = [
  { src: "/portfolio/full/tradeflow-shop.jpg", label: "Buyer shop" },
  { src: "/portfolio/full/tradeflow-checkout.jpg", label: "Checkout" },
  { src: "/portfolio/full/tradeflow-buyer-login.jpg", label: "Buyer login" },
  { src: "/portfolio/full/tradeflow-vendor-dashboard.jpg", label: "Vendor dashboard" },
  { src: "/portfolio/full/tradeflow-vendor-orders.jpg", label: "Vendor orders" },
  { src: "/portfolio/full/tradeflow-create-order.jpg", label: "Create order" },
];

export default function TradeFlowCaseStudy() {
  return (
    <div className="rd" id="top">
      <RdMotion />
      <RdHeader base="/" />
      <main className="rd-case">
        <a className="rd-case-back" href="/work">← All projects</a>

        <header className="rd-case-hero" data-reveal>
          <p className="rd-case-kicker">Case study · Commerce · Independent build</p>
          <h1>TradeFlow Commerce: making the order handoffs dependable</h1>
          <p className="rd-case-lead">A multi-vendor store I built on my own. Buyers get one path from discovery to checkout; vendors get their own workspace for listings, orders and delivery areas. Payments run through Paystack in test mode while I validate them.</p>
          <dl className="rd-case-facts">
            <div><dt>Role</dt><dd>Product builder · PM</dd></div>
            <div><dt>Users</dt><dd>Buyers · Vendors</dd></div>
            <div><dt>Payments</dt><dd>Paystack · test mode</dd></div>
            <div><dt>Status</dt><dd><span className="rd-chip rd-chip-demo">Live demo</span></dd></div>
          </dl>
        </header>

        <figure className="rd-case-figure" data-reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/portfolio/full/tradeflow-journey.svg" alt="TradeFlow product journey from buyer discovery to vendor fulfilment" />
          <figcaption>The product journey: buyer discovery, checkout, vendor order and fulfilment.</figcaption>
        </figure>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">01</span>
          <div>
            <h2>The problem</h2>
            <p>A commerce product is more than a catalogue. Buyers need a clear route from finding a product to placing an order and knowing what delivery costs. Vendors need a dependable way to show products, receive orders and act on them.</p>
          </div>
        </section>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">02</span>
          <div>
            <h2>What I built</h2>
            <ul>
              <li>A buyer shop that brings every vendor&apos;s products into one place, with search, categories and previews.</li>
              <li>A separate vendor workspace for storefronts, products, delivery areas and incoming orders.</li>
              <li>Checkout with location-based delivery pricing and Paystack in test mode.</li>
            </ul>
          </div>
        </section>

        <section className="rd-case-block rd-case-highlight rd-case-highlight-violet" data-reveal>
          <span className="rd-case-n">03</span>
          <div>
            <h2>The key decision: make the handoffs dependable</h2>
            <ul>
              <li><b>Separate paths.</b> Buyers sign in straight to shopping; vendors go to their own tools.</li>
              <li><b>Real delivery fees.</b> Prices come from the areas each vendor actually serves. No invented flat fee for places they don&apos;t cover.</li>
              <li><b>Order alerts that stay.</b> A vendor who was offline still finds the new order when they come back.</li>
            </ul>
            <p>A clean product page can&apos;t make up for an unclear delivery cost or a missed order.</p>
          </div>
        </section>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">04</span>
          <div>
            <h2>Before it goes live</h2>
            <p>Payments stay in test mode until successful, failed and pending states, reconciliation, webhooks and duplicate submissions are all checked end to end. The release list also covers consistent branding across every screen, order and notification states across buyer and vendor accounts, delivery-zone edge cases and transactional emails.</p>
          </div>
        </section>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">05</span>
          <div>
            <h2>What it taught me</h2>
            <p>Commerce trust is built in the handoffs. The product has to make the next step clear for both sides, then give the team evidence to improve the journey after release.</p>
          </div>
        </section>

        <CaseGallery items={gallery} label="TradeFlow screens" />

        <div className="rd-case-actions" data-reveal>
          <a className="rd-btn rd-btn-accent" href={SHOP_URL} target="_blank" rel="noreferrer">Open the buyer shop <span aria-hidden="true">↗</span></a>
        </div>

        <CaseNext href="/case-studies/dm-confirmed-order" label="From DM to Confirmed Order: a social-commerce teardown" />
      </main>
      <RdFooter base="/" />
      <FloatingContact />
    </div>
  );
}
