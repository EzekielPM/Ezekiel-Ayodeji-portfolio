import Image from "next/image";
import "./redesign/redesign.css";
import RdHeader from "./redesign/Header";
import RdMotion from "./redesign/Motion";
import RdIntro from "./redesign/Intro";
import RdStageTabs from "./redesign/StageTabs";
import RdHeroStars from "./redesign/HeroStars";
import RdInsightDeck from "./redesign/InsightDeck";
import RdDocLibrary from "./redesign/DocLibrary";
import RdValueRibbons from "./redesign/ValueRibbons";
import RdFeaturedWork from "./redesign/FeaturedWork";
import RdYouTube from "./redesign/YouTubeLite";
import RdFooter from "./redesign/Footer";
import RdLagosNow from "./redesign/LagosNow";
import { CopyEmailButton, FloatingContact } from "./PortfolioControls";
import {
  CONSTRUCTION_CV_URL, CV_URL, EMAIL, LINKEDIN, WHATSAPP, YOUTUBE_CHANNEL, YOUTUBE_INTRO_ID,
  projects, slides, openRoles,
} from "./redesign/data";

export default function PortfolioHome() {
  return (
    <div className="rd" id="top">
      <RdIntro />
      <RdHeroStars />
      <RdMotion />
      <RdHeader />

      <main>
        <section className="rd-hero rd-grid-bg" aria-labelledby="hero-h">
          <div className="rd-hero-card" data-reveal>
            <p className="rd-sticky" aria-label="Currently Lead PM and Scrum Master at Siiqo" data-star-unit><span className="rd-sticky-now"><i aria-hidden="true" />Currently</span>{" "}Lead PM &amp; Scrum Master at <b>Siiqo</b></p>
            <div className="rd-hero-hello" data-star-unit>
              <span className="rd-hero-avatar">
                <Image src="/portfolio/bio-portrait.webp" alt="Portrait of Olusola Ayodeji Ezekiel" width={160} height={160} priority />
              </span>
              <span>Hi, I&apos;m <strong>Olusola Ayodeji Ezekiel</strong> <span className="rd-wave" aria-hidden="true">👋🏾</span></span>
            </div>
            <p className="rd-kicker" data-stars>Lagos · 5+ years · Fintech · iGaming · Commerce</p>
            <h1 id="hero-h" data-stars>Product manager.</h1>
            <p className="rd-hero-sub" data-stars>I take{" "}
              <span className="rd-hl rd-hl-blue" data-star-unit><svg className="rd-hl-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="2.5" /><path d="M2.5 10h19M6.5 15h4" /></svg>fintech</span>,{" "}
              <span className="rd-hl rd-hl-green" data-star-unit><svg className="rd-hl-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="3.5" /><circle cx="8.5" cy="8.5" r="1.2" fill="currentColor" /><circle cx="15.5" cy="15.5" r="1.2" fill="currentColor" /><circle cx="15.5" cy="8.5" r="1.2" fill="currentColor" /><circle cx="8.5" cy="15.5" r="1.2" fill="currentColor" /><circle cx="12" cy="12" r="1.2" fill="currentColor" /></svg>iGaming</span> and{" "}
              <span className="rd-hl rd-hl-pink" data-star-unit><svg className="rd-hl-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l-1.2 11.5a1.5 1.5 0 0 1-1.5 1.5H7.7a1.5 1.5 0 0 1-1.5-1.5z" /><path d="M9 8V6.5a3 3 0 0 1 6 0V8" /></svg>commerce</span>{" "}
              products from discovery through delivery, and write about what I learn.</p>
            <div className="rd-hero-actions" data-star-unit>
              <a className="rd-btn rd-btn-dark" href="#work">See my work <span aria-hidden="true">↓</span></a>
              <a className="rd-btn rd-btn-ghost rd-hero-book" href="/book"><svg aria-hidden="true" viewBox="0 0 24 24" width="17" height="17"><rect x="3.5" y="5" width="17" height="15" rx="3" fill="none" stroke="currentColor" strokeWidth="1.9" /><path d="M3.5 10h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" /></svg>Book a call <span aria-hidden="true">→</span></a>
            </div>
            <div className="rd-open" data-star-unit>
              <p className="rd-open-pill">
                <span className="rd-open-dot" aria-hidden="true" />
                <b>Open to</b>{" "}
                <span className="rd-open-roll">
                  <span>
                    {openRoles.map((r, i) => <span key={r}>{r}{i < openRoles.length - 1 ? <span className="rd-sr">, </span> : <span className="rd-sr"> roles</span>}</span>)}
                    {/* Loop copy drawn by CSS only, so it isn't read twice. */}
                    <span className="rd-open-clone" data-text={openRoles[0]} aria-hidden="true" />
                  </span>
                </span>
              </p>
              <p className="rd-open-where">Remote, hybrid, on-site or relocation, anywhere in the world.</p>
            </div>
            <div className="rd-hero-tiles rd-hero-tiles-one" data-star-unit>
              <a href="#watch" className="rd-stream" aria-label="Now streaming: Product Room with ERA">
                <span className="rd-stream-play" aria-hidden="true"><svg viewBox="0 0 24 24" width="12" height="12"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" /></svg></span>
                <span className="rd-stream-eq" aria-hidden="true"><i /><i /><i /><i /></span>
                <small aria-hidden="true">Now streaming</small>{" "}
                <strong aria-hidden="true">{["Product", "Room", "with", "ERA"].map((w, i) => <span key={w} style={{ ["--i" as string]: i }}>{w}{i < 3 ? " " : ""}</span>)}</strong>
              </a>
            </div>
          </div>
        </section>

        <section id="work" className="rd-section rd-soft" aria-labelledby="work-h">
          <div className="rd-wrap">
            <div className="rd-section-head" data-reveal>
              <div>
                <h2 id="work-h" className="rd-display">My work</h2>
                <p>Two products to start with: one I lead at work, one I built on my own. Each has its own page with the problem, the decisions and the results.</p>
              </div>
            </div>
            <RdFeaturedWork items={["siiqo", "ffa"].map((k) => slides.find((x) => x.slug === k)!)} total={projects.length} others={projects.filter((p) => p.slug !== "siiqo" && p.slug !== "ffa").map((p) => p.name.split(":")[0])} />
          </div>
        </section>

        <RdValueRibbons />

        <section id="documents" className="rd-section" aria-labelledby="docs-h">
          <RdDocLibrary />
        </section>

        <section className="rd-map rd-grid-bg" aria-labelledby="map-h">
          <div className="rd-wrap">
            <div className="rd-map-head" data-reveal>
              <h2 id="map-h">How I move a product from idea to delivery</h2>
              <p>Pick a stage. The panel below shows what I do there, and the job where I did it.</p>
            </div>
            <RdStageTabs />
          </div>
        </section>

        <section id="insights" className="rd-section rd-insights-band" aria-labelledby="ins-h">
          <RdInsightDeck />
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
            <div className="rd-contact" data-reveal>
              <div className="rd-contact-left">
                <p className="rd-cta-kicker">Contact · Open to roles worldwide</p>
                <h2 id="contact-h">Need a product shipped, or a PRD like these?</h2>
                <p className="rd-contact-lead">Full-time roles, contracts or a single delivery plan. Book a 30-minute call, or reach me directly.</p>
                <RdLagosNow />
                <div className="rd-cta-actions contact-actions">
                  <a className="rd-btn rd-btn-yellow" href={`mailto:${EMAIL}`}>Email me <span aria-hidden="true">→</span></a>
                  <CopyEmailButton />
                  <a className="contact-icon outline" href={WHATSAPP} target="_blank" rel="noreferrer"><span>WhatsApp</span></a>
                  <a className="contact-icon outline" href={LINKEDIN} target="_blank" rel="noreferrer"><span>LinkedIn</span></a>
                </div>
              </div>
              <a className="rd-contact-cta" href="/book">
                <span className="rd-contact-cta-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="26" height="26"><rect x="3.5" y="5" width="17" height="15" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M3.5 10h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><circle cx="12" cy="15" r="1.6" fill="currentColor" /></svg>
                </span>
                <span className="rd-contact-cta-kicker">30-minute intro call</span>
                <strong>Book a call now</strong>
                <span className="rd-contact-cta-sub">Pick a date and time that suits you. Times show in your own time zone.</span>
                <span className="rd-contact-cta-btn">Book a call now <span aria-hidden="true">→</span></span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <RdFooter />
      <FloatingContact />
    </div>
  );
}
