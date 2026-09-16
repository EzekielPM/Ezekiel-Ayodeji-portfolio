export default function DmConfirmedOrderCaseStudy() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/">
          <span>OLUSOLA AYODEJI EZEKIEL</span>
          <small>Product Manager</small>
        </a>
        <nav className="site-nav">
          <a className="nav-cta desktop-nav-link" href="/#products">Return to portfolio</a>
        </nav>
      </header>

      <section className="section" id="top">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Featured product teardown</p>
            <h2>From DM to Confirmed Order</h2>
          </div>
          <p>
            A complete social-commerce product case covering the problem, product decision, user journey, MVP scope, supporting documentation and working prototype.
          </p>
        </div>

        <article className="journal">
          <header className="journal-header">
            <p>Social commerce · Product teardown · Working prototype</p>
            <span>03</span>
            <h2>From DM to Confirmed Order</h2>
            <p className="journal-deck">
              The customer has already said “I want it.” This case study explores how a lightweight checkout handoff can turn that purchase intent into a confirmed, trackable order without replacing WhatsApp or Instagram.
            </p>
          </header>

          <div className="gallery-empty">
            Agreed sale → Create order → Share checkout link → Buyer details + payment → Confirmed order → Seller fulfils
          </div>

          <section className="resource-panel">
            <p>Project documentation</p>
            <div>
              <a href="/documents/dm-confirmed-order-product-case.pdf" target="_blank" rel="noreferrer">
                <span>
                  <strong>Product Case</strong>
                  <small>Problem statement, target users, hypothesis, solution direction, prioritisation, metrics, risks and roadmap.</small>
                </span>
                <b>View PDF ↗</b>
              </a>
              <a href="/documents/dm-confirmed-order-user-flow.pdf" target="_blank" rel="noreferrer">
                <span>
                  <strong>User Journey &amp; Flow</strong>
                  <small>The end-to-end seller and buyer journey from agreed sale in chat to a confirmed order.</small>
                </span>
                <b>View PDF ↗</b>
              </a>
              <a href="/documents/dm-confirmed-order-mvp-feature-list.pdf" target="_blank" rel="noreferrer">
                <span>
                  <strong>MVP Feature List</strong>
                  <small>P0 scope, prioritisation rule, acceptance summary and the features deliberately left for later.</small>
                </span>
                <b>View PDF ↗</b>
              </a>
              <a href="/documents/dm-confirmed-order-short-explanation.pdf" target="_blank" rel="noreferrer">
                <span>
                  <strong>Short Product Explanation</strong>
                  <small>A concise overview of the product problem, solution, MVP decision and success measures.</small>
                </span>
                <b>View PDF ↗</b>
              </a>
              <a href="https://social-order-checkout-assessment.lovable.app" target="_blank" rel="noreferrer">
                <span>
                  <strong>Interactive Prototype</strong>
                  <small>Test the seller dashboard, order creation, shareable checkout, buyer details, simulated payment and confirmation journey.</small>
                </span>
                <b>Open prototype ↗</b>
              </a>
            </div>
          </section>

          <div className="hero-cv-actions" aria-label="Download teardown documents">
            <a href="/documents/dm-confirmed-order-product-case.pdf" download>Download Product Case <span>↓</span></a>
            <a href="/documents/dm-confirmed-order-user-flow.pdf" download>Download User Flow <span>↓</span></a>
            <a href="/documents/dm-confirmed-order-mvp-feature-list.pdf" download>Download MVP Feature List <span>↓</span></a>
            <a href="/documents/dm-confirmed-order-short-explanation.pdf" download>Download Summary <span>↓</span></a>
          </div>

          <div className="journal-body">
            <section>
              <span>01</span>
              <div>
                <h3>Why I explored this</h3>
                <p>
                  Many small sellers already complete discovery and conversation successfully on WhatsApp or Instagram. The friction begins after a buyer agrees to purchase, when the seller still has to collect payment details, proof of transfer, customer information and delivery details across multiple messages.
                </p>
              </div>
            </section>
            <section>
              <span>02</span>
              <div>
                <h3>The product problem</h3>
                <p>
                  Purchase intent already exists, but the order is not yet structured. Important information is scattered across chat, buyers can be asked the same questions repeatedly and sellers may have to reconstruct an order from old messages before fulfilment.
                </p>
              </div>
            </section>
            <section>
              <span>03</span>
              <div>
                <h3>The key product decision</h3>
                <p>
                  I deliberately chose not to replace WhatsApp or Instagram and not to build another marketplace. Conversation and discovery stay where users already behave naturally. The product only enters at the handoff between “I want it” and a confirmed order.
                </p>
              </div>
            </section>
            <section>
              <span>04</span>
              <div>
                <h3>The core hypothesis</h3>
                <p>
                  If a seller can create one agreed order and send one structured checkout link, the final purchase step should require less manual back-and-forth, give the seller a clearer order record and make completion easier for the buyer.
                </p>
              </div>
            </section>
            <section>
              <span>05</span>
              <div>
                <h3>How I shaped the MVP</h3>
                <p>
                  The first version contains only the pieces needed to create, send, complete and track an order: seller dashboard, create order, shareable checkout link, buyer order summary, fulfilment details, payment choice, simulated payment, confirmation and seller-side order status.
                </p>
              </div>
            </section>
            <section>
              <span>06</span>
              <div>
                <h3>What I deliberately left out</h3>
                <p>
                  Marketplace discovery, storefronts, inventory management, CRM, logistics integrations, promotions, loyalty and advanced analytics were kept outside the MVP. If a feature did not help create, send, complete or track the order, it waited.
                </p>
              </div>
            </section>
            <section>
              <span>07</span>
              <div>
                <h3>How I would measure success</h3>
                <p>
                  The primary signal is completed orders through the checkout link. Supporting measures include seller activation, checkout completion and abandonment, payment success, repeat seller usage and the time from order creation to confirmation.
                </p>
              </div>
            </section>
          </div>

          <footer className="journal-footer">
            <p>Olusola Ayodeji Ezekiel · Product teardown</p>
            <div className="hero-actions">
              <a className="button text" href="/#products">Return to portfolio <span>↖</span></a>
              <a className="case-button" href="https://social-order-checkout-assessment.lovable.app" target="_blank" rel="noreferrer">
                Explore working prototype <span>↗</span>
              </a>
            </div>
          </footer>
        </article>
      </section>

      <footer>
        <div className="brand"><span>OLUSOLA AYODEJI EZEKIEL</span><small>Product Manager · Technical Product Delivery</small></div>
        <a href="/#products">Return to portfolio ↑</a>
      </footer>
    </main>
  );
}
