"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { documents, docKinds, type DocKind } from "./data";

const TOTAL_PAGES = documents.reduce((n, d) => n + d.pages, 0);
const INITIAL = 6;

export default function DocLibrary() {
  const [kind, setKind] = useState<DocKind | "all">("all");
  const [expanded, setExpanded] = useState(false);

  const list = useMemo(() => (kind === "all" ? documents : documents.filter((d) => d.kind === kind)), [kind]);
  const shown = expanded ? list : list.slice(0, INITIAL);

  return (
    <div className="rd-wrap">
      <div className="rd-section-head" data-reveal>
        <div>
          <p className="rd-kicker rd-lib-kicker">Documents · {documents.length} files · {TOTAL_PAGES} pages</p>
          <h2 id="docs-h" className="rd-display rd-lib-title">The paperwork behind the products.</h2>
          <p>Requirements, architecture, roadmaps and practice notes I actually wrote. Every file opens as a PDF, no sign-up.</p>
        </div>
      </div>

      <div data-reveal>
        <div className="rd-lib-chips" role="group" aria-label="Filter documents">
          <button type="button" aria-pressed={kind === "all"} onClick={() => { setKind("all"); setExpanded(false); }}>
            All <b>{documents.length}</b>
          </button>
          {docKinds.map((k) => (
            <button key={k.id} type="button" aria-pressed={kind === k.id} onClick={() => { setKind(k.id); setExpanded(false); }}>
              {k.label} <b>{documents.filter((d) => d.kind === k.id).length}</b>
            </button>
          ))}
        </div>
      </div>

      <div className="rd-lib">
        <div data-reveal>
          <DocFolder />
        </div>

        <div>
          <ul className="rd-lib-grid" key={kind + String(expanded)}>
            {shown.map((d, i) => (
              <li key={d.href} style={{ animationDelay: `${Math.min(i, 8) * 60}ms` }}>
                <a className="rd-lib-card" href={d.href} target="_blank" rel="noreferrer" style={{ ["--doc" as string]: d.color }}>
                  <span className="rd-lib-thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={d.image} alt="" loading="lazy" width={527} height={682} />
                  </span>
                  <span className="rd-lib-meta">{d.type} · {d.pages} {d.pages === 1 ? "page" : "pages"}</span>
                  <strong>{d.name}</strong>
                  <span className="rd-lib-open">Open PDF <span aria-hidden="true">↗</span></span>
                </a>
              </li>
            ))}
          </ul>
          {list.length > INITIAL && (
            <button type="button" className="rd-lib-more" onClick={() => setExpanded((e) => !e)} aria-expanded={expanded}>
              {expanded ? "Show fewer" : `Show all ${list.length} ${kind === "all" ? "documents" : "in this group"}`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function DocFolder() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hold, setHold] = useState(false);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const n = documents.length;

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (paused || hold || !inView || reduced) return;
    const t = window.setTimeout(() => setI((x) => (x + 1) % n), 3400);
    return () => window.clearTimeout(t);
  }, [i, paused, hold, inView, reduced, n]);

  const d = documents[i];
  const go = (step: number) => setI((x) => (x + step + n) % n);

  return (
    <div
      ref={ref}
      className="rd-folder"
      aria-roledescription="carousel"
      aria-label="All documents"
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onFocus={() => setHold(true)}
      onBlur={() => setHold(false)}
      onTouchStart={() => setHold(true)}
    >
      <span className="rd-folder-tab">The full folder</span>
      <div className="rd-folder-stage">
        {documents.map((doc, k) => {
          const off = (k - i + n) % n;
          const pos = off === 0 ? "is-0" : off === 1 ? "is-1" : off === 2 ? "is-2" : off === n - 1 ? "is-out" : "is-hidden";
          return (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={doc.href} src={doc.image} alt="" className={`rd-folder-page ${pos}`} width={527} height={682} loading="lazy" />
          );
        })}
      </div>
      <div className="rd-folder-info" aria-live={paused || hold ? "polite" : "off"}>
        <p className="rd-folder-meta">
          <i style={{ background: d.color }} aria-hidden="true" />
          {d.product} · {d.type} · {d.pages} {d.pages === 1 ? "page" : "pages"}
        </p>
        <h3>{d.name}</h3>
        <p className="rd-folder-line">{d.line}</p>
        <a className="rd-btn rd-btn-accent rd-folder-open" href={d.href} target="_blank" rel="noreferrer">
          Open PDF <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="rd-folder-nav">
        <span className="rd-folder-count">
          <b>{String(i + 1).padStart(2, "0")}</b> / {n}
        </span>
        <span className="rd-folder-bar" aria-hidden="true"><span style={{ width: `${((i + 1) / n) * 100}%` }} /></span>
        <button type="button" onClick={() => go(-1)} aria-label="Previous document">←</button>
        <button type="button" onClick={() => setPaused((p) => !p)} aria-label={paused ? "Play" : "Pause"} aria-pressed={paused}>
          {paused ? "▶" : "❚❚"}
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Next document">→</button>
      </div>
    </div>
  );
}
