import type { Metadata } from "next";
import { pageMeta } from "../seo";
import Image from "next/image";
import "../v2/redesign/redesign.css";
import RdHeader from "../v2/redesign/Header";
import RdMotion from "../v2/redesign/Motion";
import RdFooter from "../v2/redesign/Footer";
import { FloatingContact } from "../v2/PortfolioControls";
import { CV_URL, CV_FILENAME, EMAIL, practice, releases } from "../v2/redesign/data";

export const metadata: Metadata = pageMeta({
  title: "About | Olusola Ayodeji Ezekiel, Product Manager",
  description: "Product Manager across fintech, iGaming and commerce. How I work with teams, and my career as release notes.",
  path: "/about",
  image: "/og/about.jpg",
  alt: "Portrait of Olusola Ayodeji Ezekiel",
});

export default function AboutPage() {
  return (
    <div className="rd" id="top">
      <RdMotion />
      <RdHeader base="/" current="about" />
      <main id="main" className="rd-about">
        <section className="rd-about-intro" data-reveal>
          <div className="rd-about-hello">
            <span className="rd-about-avatar">
              <Image src="/portfolio/bio-portrait.webp" alt="Portrait of Olusola Ayodeji Ezekiel" width={240} height={240} priority />
            </span>
            <div>
              <h1>Hey, I&apos;m <em>Ezekiel</em>.</h1>
              <p className="rd-about-role">Product Manager · Fintech · iGaming · Commerce · Lagos</p>
            </div>
          </div>
          <p className="rd-about-lead">I turn complex product problems into clear decisions and dependable delivery. I work across product strategy, discovery and technical delivery, helping teams move from unclear problems to products people can actually use.</p>
          <p>Right now I&apos;m Lead Product Manager and Scrum Master at <strong>Siiqo</strong>, a trust-led marketplace. Before that I worked on payments at Canvoy and sportsbook journeys at BetBonanza, and I spent 10+ years leading construction and infrastructure projects. That background still shapes how I manage risk, dependencies, quality and teams.</p>
          <div className="rd-about-duo">
            <div className="rd-duo-dark"><small>At work</small><strong>The product manager</strong><span>Discovery, PRDs, priorities and releases across fintech, iGaming and commerce.</span></div>
            <div className="rd-duo-green"><small>After hours</small><strong>The builder</strong><span>Independent apps, teardowns and a YouTube show, Product Room with ERA.</span></div>
          </div>
        </section>

        <section aria-labelledby="how-h" className="rd-about-block">
          <h2 id="how-h" data-reveal>How I work</h2>
          <div className="rd-practice">
            {practice.map((p, i) => (
              <article key={p.n} className={`rd-practice-card rd-pc-${i}`} data-reveal data-tilt style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="rd-practice-n">Step {p.n}</span>
                <h3>{p.title}</h3>
                <p className="rd-practice-statement">{p.statement}</p>
                <p>{p.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="rel-h" className="rd-about-block">
          <div data-reveal>
            <h2 id="rel-h">Release notes</h2>
            <p className="rd-muted">My career, newest version first.</p>
          </div>
          <ol className="rd-releases">
            {releases.map((r, i) => (
              <li key={r.v} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="rd-release-meta"><span className={`rd-release-v rd-rel-${r.tone}`}>{r.v}</span><small>{r.when}</small></div>
                <div><strong>{r.title}</strong><p>{r.note}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="rd-cta rd-cta-compact" data-reveal>
          <div>
            <h2>Hiring a product manager?</h2>
            <p>Let&apos;s talk about what you&apos;re building.</p>
          </div>
          <div className="rd-cta-actions">
            <a className="rd-btn rd-btn-yellow" href={`mailto:${EMAIL}`}>Let&apos;s talk <span aria-hidden="true">→</span></a>
            <a className="rd-btn rd-btn-outline-light" href={CV_URL} download={CV_FILENAME}>Download CV <span aria-hidden="true">↓</span></a>
          </div>
        </section>
      </main>
      <RdFooter base="/" />
      <FloatingContact />
    </div>
  );
}
