import Image from "next/image";
import "./redesign/redesign.css";
import RdHeader from "./redesign/Header";
import RdMotion from "./redesign/Motion";
import RdIntro from "./redesign/Intro";
import RdFlipSteps from "./redesign/FlipSteps";
import RdCarousel from "./redesign/Carousel";
import RdProjectList from "./redesign/ProjectList";
import RdYouTube from "./redesign/YouTubeLite";
import RdFooter from "./redesign/Footer";
import { CopyEmailButton, FloatingContact } from "./PortfolioControls";
import {
  CONSTRUCTION_CV_URL, CV_URL, EMAIL, LINKEDIN, WHATSAPP, YOUTUBE_CHANNEL, YOUTUBE_INTRO_ID,
  documents, insights, projects, slides,
} from "./redesign/data";

export default function PortfolioHome() {
  return (
    <div className="rd" id="top">
      <RdIntro />
      <RdMotion />
      <RdHeader />

      <main>
        <section className="rd-hero rd-grid-bg" aria-labelledby="hero-h">
          <div className="rd-hero-card" data-reveal>
            <p className="rd-sticky" aria-label="Current role">Currently: Lead PM &amp; Scrum Master at Siiqo</p>
            <div className="rd-hero-hello">
              <span className="rd-hero-avatar">
                <Image src="/portfolio/bio-portrait.webp" alt="Portrait of Olusola Ayodeji Ezekiel" width={160} height={160} priority />
              </span>
              <span>Hi, I&apos;m <strong>Olusola Ayodeji Ezekiel</strong> <span className="rd-wave" aria-hidden="true">👋🏾</span></span>
            </div>
            <p className="rd-kicker">Lagos · Fintech · iGaming · Commerce</p>
            <h1 id="hero-h">Product manager.</h1>
            <p className="rd-hero-sub">I take <span className="rd-hl-blue">fintech</span>, <span className="rd-hl-green">iGaming</span> and <span className="rd-hl-pink">commerce</span> products from discovery through delivery, and write about what I learn.</p>
            <div className="rd-hero-actions">
              <a className="rd-btn rd-btn-dark" href="#work">See my work <span aria-hidden="true">↓</span></a>
              <a className="rd-btn rd-btn-ghost" href={CV_URL} download>Download CV <span aria-hidden="true">↓</span></a>
            </div>
            <p className="rd-hero-open">Open to remote Product Manager and Product Operations roles.</p>
            <div className="rd-hero-tiles">
              <a href="/case-studies/siiqo" className="rd-tile rd-tile-green"><small>Now shipping</small><strong>Siiqo · Live marketplace</strong></a>
              <a href="/v2/football-fan-arena" className="rd-tile rd-tile-amber"><small>Latest build</small><strong>Football Fan Arena · MVP</strong></a>
              <a href="#watch" className="rd-tile rd-tile-violet"><small>Now streaming</small><strong>Product Room with ERA</strong></a>
            </div>
          </div>
        </section>

        <section className="rd-map rd-grid-bg" aria-labelledby="map-h">
          <div className="rd-wrap">
            <div className="rd-map-head" data-reveal>
              <h2 id="map-h">How I move a product from idea to delivery</h2>
              <p>Tap a card to see what each stage looks like in practice, and where I did it.</p>
            </div>
            <RdFlipSteps />
          </div>
        </section>

        <section id="work" className="rd-section rd-soft" aria-labelledby="work-h">
          <div className="rd-wrap">
            <div className="rd-section-head" data-reveal>
              <div>
                <h2 id="work-h" className="rd-display">My work</h2>
                <p>Products I&apos;ve led, shipped, planned or taken apart. Each one is labelled with how far it got, and has its own page with the problem, the decisions and the evidence.</p>
              </div>
              <dl className="rd-stats">
                <div><dt>projects</dt><dd data-count="8">8</dd></div>
                <div><dt>live apps</dt><dd data-count="4">4</dd></div>
                <div><dt>PRDs &amp; papers</dt><dd data-count="3">3</dd></div>
                <div><dt>years in product</dt><dd data-count="5" data-suffix="+">5+</dd></div>
              </dl>
            </div>
            <RdCarousel slides={slides} />
          </div>
        </section>

        <section className="rd-section rd-soft rd-section-tight" aria-labelledby="list-h">
          <div className="rd-wrap">
            <RdProjectList projects={projects} />
          </div>
        </section>

        <section id="documents" className="rd-section" aria-labelledby="docs-h">
          <div className="rd-wrap">
            <div className="rd-section-head" data-reveal>
              <div>
                <h2 id="docs-h" className="rd-display">Documents</h2>
                <p>The real working documents behind the products: requirements, architecture and my CV. Open any of them, no sign-up.</p>
              </div>
            </div>
            <div className="rd-docs">
              {documents.map((d, i) => (
                <a key={d.name} href={d.href} target="_blank" rel="noreferrer" className="rd-doc" data-reveal data-tilt style={{ transitionDelay: `${i * 90}ms` }}>
                  <span className="rd-doc-cover" style={{ background: d.bg }}>
                    <span className="rd-doc-paper">
                      <small style={d.accent ? { color: d.accent } : undefined}>{d.kicker}</small>
                      <b>{d.short}</b>
                      <i aria-hidden="true" /><i aria-hidden="true" /><i aria-hidden="true" />
                    </span>
                  </span>
                  <span className="rd-doc-body">
                    <span className="rd-doc-type">{d.type}</span>
                    <strong>{d.name}</strong>
                    <span>{d.line}</span>
                    <span className="rd-doc-open">Open PDF <span aria-hidden="true">↗</span></span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="insights" className="rd-section rd-soft" aria-labelledby="ins-h">
          <div className="rd-wrap rd-insights">
            <div className="rd-insights-feature" data-reveal>
              <h2 id="ins-h" className="rd-display">Insights</h2>
              <a href={insights[0].href} target="_blank" rel="noreferrer" className="rd-feature-post">
                <small>{insights[0].topic} · Featured</small>
                <strong>{insights[0].title}</strong>
                <span>{insights[0].text}</span>
                <em>Read on LinkedIn <span aria-hidden="true">↗</span></em>
              </a>
            </div>
            <div className="rd-latest" data-reveal>
              <p className="rd-label">Latest</p>
              <ul>
                {insights.slice(1).map((post) => (
                  <li key={post.href}>
                    <a href={post.href} target="_blank" rel="noreferrer"><small>{post.topic}</small><strong>{post.title}</strong><span aria-hidden="true">↗</span></a>
                  </li>
                ))}
              </ul>
              <a className="rd-text-link" href={LINKEDIN} target="_blank" rel="noreferrer">Follow me on LinkedIn ↗</a>
            </div>
          </div>
        </section>

        <section id="watch" className="rd-section" aria-labelledby="watch-h">
          <div className="rd-wrap">
            <div className="rd-section-head" data-reveal>
              <div>
                <h2 id="watch-h" className="rd-display">Watch</h2>
                <p>Welcome to the Product Room with ERA. Behind every great app or failed feature is a messy story nobody puts on a slide deck. This is where we unpack it.</p>
              </div>
              <a className="rd-btn rd-btn-red" href={`${YOUTUBE_CHANNEL}?sub_confirmation=1`} target="_blank" rel="noreferrer">Subscribe on YouTube <span aria-hidden="true">↗</span></a>
            </div>
            <div className="rd-watch" data-reveal>
              <RdYouTube id={YOUTUBE_INTRO_ID} title="Product Room with ERA: introduction" />
              <div className="rd-watch-copy">
                <span className="rd-watch-tag">YouTube channel</span>
                <h3>Product Room with ERA</h3>
                <p>The real side of product management, tech and building things people actually want, without the corporate jargon. Practical breakdowns, honest career lessons and behind-the-scenes conversations with the people in the trenches.</p>
                <p className="rd-watch-meta">Hosted by Ezekiel and Era · New episodes weekly</p>
                <div className="rd-watch-actions">
                  <a className="rd-btn rd-btn-light" href={`https://youtu.be/${YOUTUBE_INTRO_ID}`} target="_blank" rel="noreferrer">Watch on YouTube <span aria-hidden="true">↗</span></a>
                  <a className="rd-btn rd-btn-outline-light" href={YOUTUBE_CHANNEL} target="_blank" rel="noreferrer">Visit the channel <span aria-hidden="true">↗</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rd-section rd-soft rd-section-tight" aria-label="Beyond product">
          <div className="rd-wrap rd-beyond">
            <article className="rd-beyond-card rd-beyond-build" data-reveal>
              <small>Construction background</small>
              <h3>Ten years of delivery still shapes how I manage product work.</h3>
              <p>Site and project leadership across residential, commercial and public-sector builds: risk, quality, dependencies and people. The full portfolio lives separately.</p>
              <div className="rd-beyond-actions">
                <a className="rd-btn rd-btn-dark" href="https://ezekiel-ayodeji-construction-portfo.vercel.app/" target="_blank" rel="noreferrer">Construction portfolio <span aria-hidden="true">↗</span></a>
                <a className="rd-btn rd-btn-ghost" href={CONSTRUCTION_CV_URL} download>Construction CV <span aria-hidden="true">↓</span></a>
              </div>
            </article>
            <article className="rd-beyond-card rd-beyond-rough" data-reveal style={{ transitionDelay: "120ms" }}>
              <small>Rough Space</small>
              <h3>Not everything starts polished.</h3>
              <p>Music, product experiments, unfinished thoughts and visual notes: what I make when I&apos;m exploring an idea without a PRD attached.</p>
              <div className="rd-beyond-actions">
                <a className="rd-btn rd-btn-light" href="/rough-space">Enter Rough Space <span aria-hidden="true">→</span></a>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="rd-section rd-soft" aria-labelledby="contact-h">
          <div className="rd-wrap">
            <div className="rd-cta" data-reveal>
              <div>
                <p className="rd-cta-kicker">Lagos, Nigeria · Open to opportunities</p>
                <h2 id="contact-h">Need a product shipped, or a PRD like these?</h2>
                <p>Full-time roles, contracts or a single delivery plan. Tell me what you&apos;re building.</p>
              </div>
              <div className="rd-cta-actions contact-actions">
                <a className="rd-btn rd-btn-yellow" href={`mailto:${EMAIL}`}>Email me <span aria-hidden="true">→</span></a>
                <CopyEmailButton />
                <a className="contact-icon outline" href={WHATSAPP} target="_blank" rel="noreferrer"><span>WhatsApp</span></a>
                <a className="contact-icon outline" href={LINKEDIN} target="_blank" rel="noreferrer"><span>LinkedIn</span></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <RdFooter />
      <FloatingContact />
    </div>
  );
}
