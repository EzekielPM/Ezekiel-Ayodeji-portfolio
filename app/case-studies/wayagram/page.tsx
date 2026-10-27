import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wayagram Case Study | Olusola Ayodeji Ezekiel",
  description:
    "A concise account of Olusola Ayodeji Ezekiel's brief technical product management experience with Wayagram, a social, marketplace and payments platform.",
  alternates: { canonical: "/case-studies/wayagram" },
  openGraph: {
    title: "Wayagram Case Study | Olusola Ayodeji Ezekiel",
    description: "A concise account of technical product work across Wayagram's connected social, marketplace and payments experience.",
    type: "article",
    url: "/case-studies/wayagram",
  },
};

export default function WayagramCaseStudy() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/v2">
          <span>OLUSOLA AYODEJI EZEKIEL</span>
          <small>Product Manager</small>
        </Link>
        <nav className="site-nav">
          <Link className="nav-cta desktop-nav-link" href="/v2#products">Return to portfolio</Link>
        </nav>
      </header>

      <section className="section" id="top">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Technical product experience</p>
            <h2>Wayagram</h2>
          </div>
          <p>
            A social, marketplace and payments platform. This case study focuses on the product work I contributed during a brief period with the team.
          </p>
        </div>

        <article className="journal">
          <header className="journal-header">
            <p>FinTech · Technical Product Management · Brief Engagement</p>
            <span>03</span>
            <h2>Wayagram</h2>
            <p className="journal-deck">
              During my time with Wayagram, I contributed to production migration activities, regression testing, team ceremonies and module reporting. The engagement was brief, so this page documents the product context and the work I was able to contribute rather than claiming end-to-end ownership or outcomes I cannot verify.
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
            <span>Production migration support</span><span>Regression testing</span><span>Wallet and virtual accounts</span><span>Marketplace</span><span>Social features</span>
          </div>

          <section className="resource-panel">
            <p>Product context document</p>
            <div>
              <a href="/documents/wayagram-product-architecture.pdf" target="_blank" rel="noreferrer">
                <span>
                  <strong>Wayagram Product Architecture</strong>
                  <small>A high-level view of the product areas and relationships documented for Wayagram.</small>
                </span>
                <b>View PDF ↗</b>
              </a>
            </div>
          </section>

          <div className="hero-cv-actions" aria-label="Download Wayagram architecture document">
            <a href="/documents/wayagram-product-architecture.pdf" download>Download Architecture PDF <span>↓</span></a>
          </div>

          <div className="journal-body">
            <section><span>01</span><div><h3>The product</h3><p>Wayagram was designed to bring social interaction, marketplace activity and financial services into one experience. The product areas I documented included social features, marketplace and quotation flows, donations, chat, wallets and virtual accounts. This is the product context I worked with during my time there.</p></div></section>
            <section><span>02</span><div><h3>Where delivery needed attention</h3><p>Because the product covered several connected areas, production migration and regression checks needed to be considered alongside feature work. My focus was on supporting the team's delivery activities and helping keep progress, issues and module-level updates visible.</p></div></section>
            <section><span>03</span><div><h3>My contribution</h3><p>In my Technical Product Manager role, I contributed to production migration activities, regression testing, stand-ups, demos and reporting across product modules. These activities gave me a view of how product coordination and technical delivery intersected, while the short engagement limited the scope of what I could take through to completion.</p></div></section>
            <section><span>04</span><div><h3>Working across product areas</h3><p>The experience reinforced the importance of viewing connected modules in context. In product discussions and delivery activities, I kept the broader user experience in mind rather than treating each feature as a standalone screen. I have kept this case study to the responsibilities and product context I can speak to confidently.</p></div></section>
            <section><span>05</span><div><h3>What I took from the experience</h3><p>Wayagram gave me exposure to the coordination involved in a product spanning social, commerce and payment experiences. It reinforced the value of clear communication, regression checks and understanding the wider product context during technical delivery. This case study reflects that experience without suggesting that I led the entire programme or can verify a final launch outcome.</p></div></section>
            <section><span>06</span><div><h3>Evidence of contribution and impact</h3><p>The evidence presented here is deliberately scoped to my short engagement: participation in production migration activities, regression testing, team ceremonies and module-level reporting, supported by the linked product architecture document. This makes the contribution and product context reviewable without implying ownership of the full programme or claiming a final launch result I cannot verify.</p><p><strong>Evidence to review:</strong> product architecture PDF and the responsibilities documented above. <strong>Impact evidence still needed:</strong> migration completion records, regression-test results, defect trends or release sign-off that can be attributed to my contribution.</p></div></section>
          </div>

          <nav className="case-study-next" aria-label="Explore other case studies">
            <span>Explore another case study</span>
            <a href="/case-studies/siiqo">Siiqo Marketplace <b>↗</b></a>
            <a href="/case-studies/canvoy">Canvoy Payment <b>↗</b></a>
          </nav>
          <footer className="journal-footer">
            <p>Olusola Ayodeji Ezekiel · Technical product case study</p>
            <div className="hero-actions">
              <Link className="button text" href="/v2#products">Return to portfolio <span>↖</span></Link>
              <a className="case-button" href="/documents/wayagram-product-architecture.pdf" target="_blank" rel="noreferrer">Open architecture PDF <span>↗</span></a>
              <a className="case-contact-link" href="/v2#contact">Let’s talk about product <span>↗</span></a>
            </div>
          </footer>
        </article>
      </section>

      <footer>
        <div className="brand"><span>OLUSOLA AYODEJI EZEKIEL</span><small>Product Manager · Technical Product Delivery</small></div>
        <Link href="/v2#products">Return to portfolio ↑</Link>
      </footer>
    </main>
  );
}
