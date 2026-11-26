"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { insightGroups, insights, LINKEDIN, type InsightGroup } from "./data";

type Filter = "all" | InsightGroup;

export default function RdInsightDeck() {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLUListElement | null>(null);
  const shown = insights.filter((p) => filter === "all" || p.group === filter);

  // The card nearest the left edge of the track counts as the current one.
  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    const left = track.getBoundingClientRect().left;
    let best = 0;
    let bestDist = Infinity;
    cards.forEach((card, i) => {
      const d = Math.abs(card.getBoundingClientRect().left - left);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    setActive(best);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(measure); };
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    measure();
    return () => { track.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(frame); };
  }, [measure, filter]);

  const step = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[0] as HTMLElement | undefined;
    const width = card ? card.getBoundingClientRect().width + 18 : 320;
    track.scrollBy({ left: dir * width, behavior: "smooth" });
  };

  const pick = (f: Filter) => {
    setFilter(f);
    setActive(0);
    trackRef.current?.scrollTo({ left: 0 });
  };

  const count = (f: Filter) => (f === "all" ? insights.length : insights.filter((p) => p.group === f).length);
  const atStart = active === 0;
  const atEnd = active >= shown.length - 1;

  return (
    <div className="rd-deck">
      <div className="rd-wrap rd-deck-head" data-reveal>
        <div>
          <h2 id="ins-h" className="rd-display">Insights</h2>
          <p>One idea per card, from what I write on LinkedIn. Swipe through, or pick a topic.</p>
        </div>
        <div className="rd-deck-nav">
          <button type="button" aria-label="Previous insight" onClick={() => step(-1)} disabled={atStart}>‹</button>
          <button type="button" aria-label="Next insight" onClick={() => step(1)} disabled={atEnd} className="is-primary">›</button>
        </div>
      </div>

      <div className="rd-wrap">
        <div className="rd-deck-filters" role="group" aria-label="Filter insights by topic" data-reveal>
          <button type="button" aria-pressed={filter === "all"} className={filter === "all" ? "is-active" : undefined} onClick={() => pick("all")}>All <span>{count("all")}</span></button>
          {insightGroups.map((g) => (
            <button key={g.id} type="button" aria-pressed={filter === g.id} className={`rd-deck-chip-${g.id}${filter === g.id ? " is-active" : ""}`} onClick={() => pick(g.id)}>
              {g.label} <span>{count(g.id)}</span>
            </button>
          ))}
        </div>
      </div>

      <ul className="rd-deck-track" ref={trackRef} key={filter} aria-label="Insights">
        {shown.map((p, i) => (
          <li key={p.href} className={`rd-deck-card rd-deck-${p.group}${i === active ? " is-active" : ""}`} style={{ animationDelay: `${i * 70}ms` }}>
            <a href={p.href} target="_blank" rel="noreferrer">
              <span className="rd-deck-topic">{p.topic}</span>
              <span className="rd-deck-quote">“{p.text}”</span>
              <span className="rd-deck-title">{p.title}</span>
              <span className="rd-deck-read">Read the post <span aria-hidden="true">↗</span></span>
            </a>
          </li>
        ))}
        <li className="rd-deck-end" aria-hidden="true" />
      </ul>

      <div className="rd-wrap rd-deck-foot">
        <span className="rd-deck-progress" aria-hidden="true"><i style={{ width: `${((active + 1) / shown.length) * 100}%` }} /></span>
        <span aria-live="polite">{Math.min(active + 1, shown.length)} of {shown.length}</span>
        <a href={LINKEDIN} target="_blank" rel="noreferrer">Follow me on LinkedIn ↗</a>
      </div>
    </div>
  );
}
