"use client";

import { useState } from "react";
import { steps } from "./data";

function Arrow() {
  return (
    <svg className="rd-arrow" viewBox="0 0 56 28" aria-hidden="true">
      <path className="rd-arrow-line" d="M4 14 C18 2, 34 26, 46 14" />
      <path className="rd-arrow-head" d="M40 8 L48 14 L40 20" />
    </svg>
  );
}

export default function RdFlipSteps() {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const toggle = (n: string) => setFlipped((c) => ({ ...c, [n]: !c[n] }));

  return (
    <ol className="rd-steps">
      {steps.map((s, i) => {
        const isFlipped = Boolean(flipped[s.n]);
        const external = s.href.startsWith("http");
        return (
          <li key={s.n} className="rd-step-item" data-reveal style={{ transitionDelay: `${i * 110}ms` }}>
            <div className={`rd-flip rd-tone-${s.tone}${isFlipped ? " is-flipped" : ""}`}>
              <div className="rd-flip-inner">
                <button type="button" className="rd-flip-face rd-flip-front" onClick={() => toggle(s.n)} aria-expanded={isFlipped} aria-label={`${s.name}: ${s.front} Tap to read more.`} tabIndex={isFlipped ? -1 : 0}>
                  <span className="rd-step-n">{s.n}</span>
                  <strong>{s.name}</strong>
                  <span className="rd-step-what">{s.front}</span>
                  <span className="rd-flip-btn" aria-hidden="true">Tap to read more <span>↻</span></span>
                </button>
                <div className="rd-flip-face rd-flip-back" aria-hidden={!isFlipped} onClick={(e) => { if (!(e.target as HTMLElement).closest("a,button")) toggle(s.n); }}>
                  <span className="rd-flip-kicker">{s.name} · in practice</span>
                  <ul>
                    {s.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  <p className="rd-flip-outcome"><b>Outcome:</b> {s.outcome}</p>
                  <a href={s.href} className="rd-flip-job" target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} tabIndex={isFlipped ? 0 : -1}>
                    <small>Seen at</small> {s.job} <span aria-hidden="true">{external ? "↗" : "→"}</span>
                  </a>
                  <button type="button" className="rd-flip-close" onClick={() => toggle(s.n)} tabIndex={isFlipped ? 0 : -1} aria-label={`Flip ${s.name} card back`}>
                    <span aria-hidden="true">↺</span>
                  </button>
                </div>
              </div>
            </div>
            {i < steps.length - 1 && <Arrow />}
          </li>
        );
      })}
    </ol>
  );
}
