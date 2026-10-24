import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TradeFlow Commerce | Founder & Product Manager Case Study",
  description:
    "Founder-led product case study for TradeFlow Commerce, covering buyer and vendor journeys, location-based delivery, order notifications and payment validation.",
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
          <a className="desktop-nav-link" href="https://tradeflow-commerce.vercel.app/shop" target="_blank" rel="noreferrer">Open buyer shop ↗</a>
        </nav>
      </header>

      <section className="section" id="top">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Founder-led product · Multi-vendor commerce · Nigeria</p>
            <h2>TradeFlow Commerce</h2>
          </div>
          <p>
            One connected marketplace experience for product discovery, vendor operations, checkout and location-based delivery — built to make the next step clearer for buyers and sellers.
          </p>
        </div>

        <article className="journal">
          <header className="journal-header">
            <p>FOUNDER &amp; PRODUCT MANAGER · PRODUCT STRATEGY · END-TO-END DELIVERY</p>
            <span>06</span>
            <h2>TradeFlow Commerce</h2>
            <p className="journal-deck">
              I’m building TradeFlow to make buying and selling feel connected. Buyers can discover products across vendors, while vendors need a clear way to manage their storefronts, incoming orders and delivery settings. The product work brings those journeys together instead of treating them as separate problems.
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
              <a href="https://tradeflow-commerce.vercel.app" target="_blank" rel="noreferrer">
                <span>
                  <strong>TradeFlow Commerce</strong>
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
                  The shop brings products from different vendors into one browsing experience, supported by vendor search, category filters and product previews. At checkout, delivery details matter: the buyer provides their state, area and address so the delivery charge can follow the vendor’s configured service areas rather than an assumed flat fee.
                </p>
              </div>
            </section>

            <section>
              <span>04</span>
              <div>
                <h3>The vendor journey</h3>
                <p>
                  Vendors configure their storefront and products, define the delivery areas they can serve and set the fees for those areas. When an order is placed, the notification is saved in the database so it remains available if the vendor is offline and returns later. This treats order awareness as part of fulfilment, not merely a temporary pop-up.
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
                  Paystack is part of the payment journey, but it remains in Test Mode. Before treating payments as production-ready, the next validation work should cover successful, failed and pending states, transaction reconciliation, webhook behaviour, duplicate submissions and the customer-facing message for each outcome. A deployed interface is not the same as a fully verified live payment system.
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
                  I would establish a baseline before setting targets. Core measures include product-view-to-order conversion, checkout completion and abandonment, payment success and failure rates, time from order placement to vendor acknowledgement, delivery completion, support contacts per order and repeat buyer or vendor activity. Delivery-fee accuracy and failed or unsupported delivery-area attempts would help show whether the location rules are clear.
                </p>
              </div>
            </section>

            <section>
              <span>09</span>
              <div>
                <h3>Current status and next validation</h3>
                <p>
                  The build is deployed for review. Some live screens still display OrderFlow branding, so brand consistency remains a release check. Paystack remains in Test Mode. The next release checks are to complete end-to-end payment testing, verify order and notification states across buyer and vendor accounts, test delivery-zone edge cases, and confirm the customer-facing updates before promoting payment processing to live use.
                </p>
              </div>
            </section>

            <section>
              <span>10</span>
              <div>
                <h3>Trade-offs and prioritisation</h3>
                <p>
                  I treated role clarity, accurate delivery pricing and reliable order handoff as foundations rather than optional polish. That means not inventing a delivery fee when an area is unsupported, keeping vendor tools separate from buyer shopping, and preserving order notifications for vendors who are not online when an order arrives. These decisions favour predictable fulfilment over a superficially frictionless flow.
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
          </div>

          <footer className="journal-footer">
            <p>Olusola Ayodeji Ezekiel · TradeFlow Commerce</p>
            <div className="hero-actions">
              <a className="button text" href="/v2">Go Back Home <span>↖</span></a>
              <a className="case-button" href="https://tradeflow-commerce.vercel.app" target="_blank" rel="noreferrer">
                Open TradeFlow <span>↗</span>
              </a>
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
