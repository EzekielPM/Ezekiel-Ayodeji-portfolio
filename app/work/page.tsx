import type { Metadata } from "next";
import Image from "next/image";
import "../v2/redesign/redesign.css";
import RdHeader from "../v2/redesign/Header";
import RdMotion from "../v2/redesign/Motion";
import RdFooter from "../v2/redesign/Footer";
import RdCarousel from "../v2/redesign/Carousel";
import { FloatingContact } from "../v2/PortfolioControls";
import { projects, slides } from "../v2/redesign/data";

export const metadata: Metadata = {
  title: "All projects | Olusola Ayodeji Ezekiel, Product Manager",
  description: "Every role and independent build: Siiqo, Football Fan Arena, Wayagram, TradeFlow, Canvoy, BetBonanza, Kuda 3.0 and DM to Confirmed Order.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const inCarousel = new Set(slides.map((s) => s.slug));
  const studies = projects.filter((p) => !inCarousel.has(p.slug));
  return (
    <div className="rd" id="top">
      <RdMotion />
      <RdHeader base="/" />
      <main className="rd-work-page rd-soft">
        <div className="rd-wrap">
          <a className="rd-case-back" href="/#work">← Back to home</a>
          <div data-reveal>
            <h1 className="rd-display rd-work-h">All projects</h1>
            <p className="rd-work-lead">Products I&apos;ve led, shipped, planned or taken apart. Each one is labelled with how far it got, and has its own page with the problem, the decisions and the evidence.</p>
          </div>

          <p className="rd-work-label" data-reveal>Products · {slides.length}</p>
          <RdCarousel slides={slides} />

          <p className="rd-work-label rd-work-label-gap" data-reveal>Independent studies · {studies.length}</p>
          <div className="rd-studies">
            {studies.map((p, i) => {
              const ext = p.href.startsWith("http");
              return (
                <div key={p.slug} data-reveal style={{ transitionDelay: `${i * 100}ms` }}>
                  <a className="rd-study" href={p.href} {...(ext ? { target: "_blank", rel: "noreferrer" } : {})}>
                    <span className="rd-study-img">
                      {p.image && <Image src={p.image} alt="" fill sizes="(max-width: 720px) 100vw, 240px" />}
                    </span>
                    <span className="rd-study-body">
                      <small>{p.status} · {p.role}</small>
                      <strong>{p.name} <span aria-hidden="true">{ext ? "↗" : "→"}</span></strong>
                      <span>{p.line}</span>
                      <em>{p.evidence}</em>
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <RdFooter base="/" />
      <FloatingContact />
    </div>
  );
}
