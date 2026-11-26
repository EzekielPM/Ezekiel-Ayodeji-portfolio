"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { steps } from "./data";

// Four tinted stage cards act as tabs; the panel below shows the stage in practice
// and a large picture of the job where it happened.
export default function RdStageTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const s = steps[active];
  const external = s.href.startsWith("http");

  const go = (i: number, focus = false) => {
    const next = (i + steps.length) % steps.length;
    setActive(next);
    if (focus) tabRefs.current[next]?.focus();
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(active + 1, true); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(active - 1, true); }
  };

  return (
    <div className="rd-stages">
      <div data-reveal>
      <div className="rd-stage-tabs" role="tablist" aria-label="Product stages" onKeyDown={onKey}>
        {steps.map((st, i) => (
          <button
            key={st.n}
            ref={(el) => { tabRefs.current[i] = el; }}
            type="button"
            role="tab"
            id={`stage-tab-${st.n}`}
            aria-selected={i === active}
            aria-controls="stage-panel"
            tabIndex={i === active ? 0 : -1}
            className={`rd-stage-tab rd-st-${st.tone}${i === active ? " is-active" : ""}`}
            onClick={() => go(i)}
          >
            <span className="rd-stage-step">Step {st.n}</span>
            <span className="rd-stage-name">{st.name}</span>
            <span className="rd-stage-front">{st.front}</span>
          </button>
        ))}
      </div>
      </div>

      <div data-reveal style={{ transitionDelay: "120ms" }}>
      <div id="stage-panel" role="tabpanel" aria-labelledby={`stage-tab-${s.n}`} className={`rd-stage-panel rd-st-${s.tone}`}>
        <div className="rd-stage-copy" key={s.n}>
          <span className="rd-stage-step">Step {s.n} of 0{steps.length} · In practice</span>
          <h3>{s.name}</h3>
          <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
          <p className="rd-stage-outcome"><b>Outcome:</b> {s.outcome}</p>
          <div className="rd-stage-nav">
            <button type="button" aria-label="Previous stage" onClick={() => go(active - 1)}>‹</button>
            <button type="button" aria-label="Next stage" onClick={() => go(active + 1)} className="is-primary">›</button>
            <span>{active + 1} of {steps.length}</span>
          </div>
        </div>
        <a className="rd-stage-media" href={s.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
          {steps.map((st, i) => (
            <Image key={st.n} src={st.image} alt="" fill sizes="(max-width: 860px) 92vw, 600px" className={i === active ? "is-active" : undefined} />
          ))}
          <span className="rd-stage-seen">
            <span><small>Seen at</small><strong>{s.job}</strong></span>
            <em>View the work {external ? "↗" : "→"}</em>
          </span>
        </a>
      </div>
      </div>
    </div>
  );
}
