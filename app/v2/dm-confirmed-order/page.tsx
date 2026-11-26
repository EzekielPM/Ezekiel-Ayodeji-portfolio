import type { Metadata } from "next";
import Image from "next/image";
import "../redesign/redesign.css";
import RdHeader from "../redesign/Header";
import RdMotion from "../redesign/Motion";
import RdFooter from "../redesign/Footer";
import { CaseDocs, CaseNext } from "../redesign/CaseBits";
import { FloatingContact } from "../PortfolioControls";

export const metadata: Metadata = {
  title: "From DM to Confirmed Order | Olusola Ayodeji Ezekiel",
  description: "An independent social-commerce teardown and working prototype: turning a WhatsApp or Instagram “I want it” into a confirmed, trackable order.",
  alternates: { canonical: "/case-studies/dm-confirmed-order" },
};

const PROTOTYPE = "https://social-order-checkout-assessment.lovable.app";
const flow = ["Agreed sale", "Create order", "Share checkout link", "Buyer details + payment", "Confirmed order", "Seller fulfils"];

export default function DmConfirmedOrderCaseStudy() {
  return (
    <div className="rd" id="top">
      <RdMotion />
      <RdHeader base="/" />
      <main className="rd-case">
        <a className="rd-case-back" href="/work">← All projects</a>

        <header className="rd-case-hero" data-reveal>
          <p className="rd-case-kicker">Case study · Social commerce · Teardown</p>
          <h1>From DM to Confirmed Order</h1>
          <p className="rd-case-lead">The buyer has already said &ldquo;I want it&rdquo; in a WhatsApp or Instagram chat. This teardown and working prototype explore how one checkout link can turn that into a confirmed, trackable order, without replacing the chat.</p>
          <dl className="rd-case-facts">
            <div><dt>Type</dt><dd>Independent study</dd></div>
            <div><dt>Output</dt><dd>Teardown · Prototype</dd></div>
            <div><dt>Domain</dt><dd>Social commerce</dd></div>
            <div><dt>Status</dt><dd><span className="rd-chip rd-chip-concept">Concept</span></dd></div>
          </dl>
        </header>

        <figure className="rd-case-figure" data-reveal>
          <Image src="/portfolio/full/dm-confirmed-order-preview.webp" alt="From DM to Confirmed Order prototype screens" width={1600} height={1000} sizes="(max-width: 900px) 100vw, 860px" priority />
          <figcaption>The prototype: seller creates the order, buyer completes it from one link.</figcaption>
        </figure>

        <ol className="rd-case-flow" data-reveal aria-label="The journey">
          {flow.map((f) => <li key={f}>{f}</li>)}
        </ol>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">01</span>
          <div>
            <h2>The problem</h2>
            <p>Small sellers already do discovery and conversation well on WhatsApp and Instagram. The friction starts after the buyer agrees: payment details, proof of transfer, customer and delivery details all scatter across messages, and the seller rebuilds the order from old chats before fulfilling it.</p>
          </div>
        </section>

        <section className="rd-case-block rd-case-highlight rd-case-highlight-amber" data-reveal>
          <span className="rd-case-n">02</span>
          <div>
            <h2>The key decision: don&apos;t replace the chat</h2>
            <p>No new marketplace, and no attempt to move the conversation. Discovery and chat stay where people already are. The product only steps in at the handoff between &ldquo;I want it&rdquo; and a confirmed order.</p>
            <p><b>Hypothesis:</b> if a seller can create one agreed order and send one checkout link, the final step needs less back-and-forth, the seller gets a clear order record and the buyer finds it easier to complete.</p>
          </div>
        </section>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">03</span>
          <div>
            <h2>The MVP, and what waited</h2>
            <p>Only what it takes to create, send, complete and track an order: seller dashboard, create order, shareable checkout link, order summary, fulfilment details, payment choice, a simulated payment, confirmation and order status.</p>
            <p>Storefronts, inventory, CRM, logistics, promotions, loyalty and advanced analytics all waited. If a feature didn&apos;t help create, send, complete or track the order, it wasn&apos;t in.</p>
          </div>
        </section>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">04</span>
          <div>
            <h2>How I&apos;d test it</h2>
            <p>The main signal is orders completed through the link. I&apos;d watch a small group of sellers complete similar orders twice, once their usual way and once with the prototype, and compare time taken, clarification messages and where buyers hesitate.</p>
          </div>
        </section>

        <CaseDocs docs={[
          { title: "Product case", note: "Problem, target users, hypothesis, solution, prioritisation, metrics, risks and roadmap.", href: "/documents/dm-confirmed-order-product-case.pdf" },
          { title: "User journey and flow", note: "The seller and buyer journey from agreed sale to confirmed order.", href: "/documents/dm-confirmed-order-user-flow.pdf" },
          { title: "MVP feature list", note: "P0 scope, the prioritisation rule and what was left for later.", href: "/documents/dm-confirmed-order-mvp-feature-list.pdf" },
          { title: "One-page summary", note: "The whole case on a single page.", href: "/documents/dm-confirmed-order-short-explanation.pdf" },
        ]} />

        <div className="rd-case-actions" data-reveal>
          <a className="rd-btn rd-btn-accent" href={PROTOTYPE} target="_blank" rel="noreferrer">Try the prototype <span aria-hidden="true">↗</span></a>
        </div>

        <CaseNext href="/case-studies/canvoy" label="Canvoy Payment: everyday payments, planned properly" />
      </main>
      <RdFooter base="/" />
      <FloatingContact />
    </div>
  );
}
