import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TradeFlow Commerce | Founder & Product Manager Case Study",
  description:
    "Founder-led product case study for TradeFlow Commerce, covering buyer and vendor journeys, location-based delivery, order notifications and payment validation.",
  alternates: { canonical: "/v2/tradeflow" },
  openGraph: {
    title: "TradeFlow Commerce | Founder & Product Manager Case Study",
    description:
      "Building a more connected way for buyers to discover products and for vendors to manage orders, delivery and fulfilment.",
    type: "article",
  },
};

export default function TradeFlowCaseStudy() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/v2">
          <span>OLUSOLA AYODEJI EZEKIEL</span>
          <small>Product Manager</small>
        </a>
        <nav className="site-nav">
          <a className="nav-cta desktop-nav-link" href="/v2">Go Back Home</a>
          <a className="desktop-nav-link" href="https://orderflow-six-sage.vercel.app/" target="_blank" rel="noreferrer">Open buyer shop ↗</a>
        </nav>
      </header>

      <section className="section" id="top">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Founder-led product · Multi-vendor commerce · Nigeria</p>
            <h2>TradeFlow Commerce</h2>
          </div>
          <p>
            TradeFlow is my founder-led commerce build, connecting buyer discovery, vendor operations, checkout and location-based delivery. This case study focuses on the product decisions behind those connected journeys and the release checks still required.
          </p>
        </div>

        <article className="journal">
          <header className="journal-header">
            <p>FOUNDER &amp; PRODUCT MANAGER · PRODUCT STRATEGY · END-TO-END DELIVERY</p>
            <span>06</span>
            <h2>TradeFlow Commerce</h2>
            <p className="journal-deck">
              I am building TradeFlow as Founder and Product Manager. Buyers need a straightforward path from product discovery to checkout; vendors need a separate workspace to manage listings, orders and delivery coverage. I shaped the product around those linked journeys, with the handoffs between them treated as core product requirements.
            </p>
            <p className="case-disclaimer"><strong>My role:</strong> Founder &amp; Product Manager · Product vision, buyer and vendor journeys, delivery logic, payment integration and fulfilment.</p>
            <p className="case-disclaimer">
              Current status: the product build is deployed for review. Paystack remains in Test Mode, so this case study does not claim live payment processing or verified business outcomes.
            </p>
          </header>

          <div className="media-rail screenshots" aria-label="TradeFlow product journey">
            <div className="media-frame">
              <Image
                src="/portfolio/full/tradeflow-journey.svg"
                alt="TradeFlow journey from vendor storefront and buyer discovery through order, payment validation, fulfilment and location-based delivery"
                fill
                sizes="(max-width: 600px) 88vw, 500px"
              />
              <span>Product journey</span>
            </div>
          </div>

          <section className="resource-panel">
            <p>Explore the product</p>
            <div>
              <a href="https://orderflow-six-sage.vercel.app/" target="_blank" rel="noreferrer">
                <span>
                  <strong>Open the buyer shop</strong>
                  <small>Open the deployed build to explore the buyer and vendor experience. Payment flows are still in Test Mode.</small>
                </span>
                <b>Open product ↗</b>
              </a>
            </div>
          </section>

          <div className="journal-body">
            <section>
              <span>01</span>
              <div>
                <h3>The product opportunity</h3>
                <p>
                  A commerce experience is more than a catalogue. Buyers need a clear route from finding a product to placing an order and understanding delivery. Vendors need a dependable way to present products, receive new orders and act on them. TradeFlow brings those connected responsibilities into one product journey.
                </p>
              </div>
            </section>

            <section>
              <span>02</span>
              <div>
                <h3>Designing for two distinct users</h3>
                <p>
                  I kept the buyer and vendor entry paths distinct. Buyers should be able to sign in and go straight to shopping rather than being dropped into merchant tools. Vendors need their own space to manage their storefront, products, delivery settings and incoming orders. That separation makes the next action clearer for each role.
                </p>
              </div>
            </section>

            <section>
              <span>03</span>
              <div>
                <h3>The buyer journey</h3>
                <p>
                  The buyer shop brings products from different vendors into one browsing experience, supported by vendor search, category filters and product previews. At checkout, the buyer provides location and address details so delivery pricing can use the vendor’s configured service areas. The important decision is to calculate from known coverage rather than show a convenient but potentially incorrect flat fee.
                </p>
              </div>
            </section>

            <section>
              <span>04</span>
              <div>
                <h3>The vendor journey</h3>
                <p>
                  Vendors configure their storefront and products, define the delivery areas they can serve and set the fees for those areas. Order notifications are persisted so the alert remains available when a vendor returns, instead of disappearing as a temporary pop-up. This makes order awareness part of the fulfilment workflow, not just a momentary interface event.
                </p>
              </div>
            </section>

            <section>
              <span>05</span>
              <div>
                <h3>Key product decisions</h3>
                <p>
                  I prioritised role clarity, product discovery and dependable order handoffs. Buyers can browse across vendor storefronts instead of navigating a separate shop for every seller. Delivery fees are based on vendor-configured coverage. Unsupported delivery areas are not assigned an invented default charge. Vendor order notifications are persisted so an offline vendor can still find the alert.
                </p>
              </div>
            </section>

            <section>
              <span>06</span>
              <div>
                <h3>Payments, trust and release readiness</h3>
                <p>
                  Paystack is integrated into the intended payment journey but remains in Test Mode. Before live release, I need to validate successful, failed and pending states, transaction reconciliation, webhook behaviour, duplicate submissions and the customer-facing message for each outcome. A deployed interface is not evidence that live payment processing has been verified.
                </p>
              </div>
            </section>

            <section>
              <span>07</span>
              <div>
                <h3>Delivery and communication beyond the screen</h3>
                <p>
                  The next layer is to make sure the right person receives the right update at the right time: account welcome messages, order updates, payment status, fulfilment changes and delivery confirmation. Transactional email automation is a roadmap item, with buyer and vendor communication kept distinct and marketing consent handled separately.
                </p>
              </div>
            </section>

            <section>
              <span>08</span>
              <div>
                <h3>How I would measure success</h3>
                <p>
                  I would establish a reliable baseline before setting targets. Core measures would include product-view-to-order conversion, checkout completion and abandonment, payment success and failure rates, time from order placement to vendor acknowledgement, delivery completion, support contacts per order and repeat buyer or vendor activity. Delivery-fee accuracy and unsupported delivery-area attempts would help test whether the location rules are understandable. These are proposed measures, not reported results.
                </p>
              </div>
            </section>

            <section>
              <span>09</span>
              <div>
                <h3>Current status and next validation</h3>
                <p>
                  The build is deployed for review, but it is not yet ready to present as a fully released commerce service. Some live screens still display OrderFlow branding, and Paystack remains in Test Mode. The release checklist is to resolve brand consistency, complete end-to-end payment tests, verify order and notification states across buyer and vendor accounts, test delivery-zone edge cases and confirm customer-facing updates before considering live payment processing.
                </p>
              </div>
            </section>

            <section>
              <span>10</span>
              <div>
                <h3>Trade-offs and prioritisation</h3>
                <p>
                  I prioritised work by how directly it protects a real order: first, make buyer and vendor responsibilities clear; next, calculate delivery only when a vendor has configured coverage; then preserve order alerts so vendors can return to them. Payment automation and transactional email need separate end-to-end checks before they can be treated as release-ready. This sequencing keeps core order handling ahead of secondary convenience features without implying that the product is ready for live transactions.
                </p>
              </div>
            </section>

            <section>
              <span>11</span>
              <div>
                <h3>What this work reinforced</h3>
                <p>
                  Commerce trust is built in the handoffs. A clean product page cannot compensate for unclear delivery costs, a missed vendor order or an ambiguous payment state. The product needs to make the next step clear for both sides, then give the team evidence to improve the journey after release.
                </p>
              </div>
            </section>
            <section>
              <span>12</span>
              <div>
                <h3>Evidence of progress versus business impact</h3>
                <p>The deployed build and linked buyer shop make the current product direction inspectable. The documented scope covers distinct buyer and vendor paths, vendor-configured delivery areas, persisted order notifications and a payment journey kept in Test Mode. These are tangible product outputs and design decisions, not proof of live transaction volume or commercial performance.</p>
                <p><strong>Evidence available now:</strong> deployed interface, buyer-shop link and documented journey. <strong>Impact still to validate:</strong> successful end-to-end order tests across buyer and vendor accounts, delivery-zone accuracy, vendor acknowledgement time, checkout completion and payment reconciliation. Live-payment and business-impact claims remain out of scope until those checks produce reliable results.</p>
              </div>
            </section>
          </div>

          <nav className="case-study-next" aria-label="Explore other case studies">
            <span>Explore another case study</span>
            <a href="/v2/dm-confirmed-order">From DM to Confirmed Order <b>↗</b></a>
            <a href="/case-studies/siiqo">Siiqo Marketplace <b>↗</b></a>
          </nav>
          <footer className="journal-footer">
            <p>Olusola Ayodeji Ezekiel · TradeFlow Commerce</p>
            <div className="hero-actions">
              <a className="button text" href="/v2">Go Back Home <span>↖</span></a>
              <a className="case-button" href="https://orderflow-six-sage.vercel.app/" target="_blank" rel="noreferrer">
                Open buyer shop <span>↗</span>
              </a>
              <a className="case-contact-link" href="/v2#contact">Let’s talk about product <span>↗</span></a>
            </div>
          </footer>
        </article>
      </section>

      <footer>
        <div className="brand"><span>OLUSOLA AYODEJI EZEKIEL</span><small>Product Manager · Technical Product Delivery</small></div>
        <a href="/v2">Go Back Home ↑</a>
      </footer>
    </main>
  );
}
