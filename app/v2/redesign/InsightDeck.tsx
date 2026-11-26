"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { insightGroups, insights, LINKEDIN, type InsightGroup } from "./data";

type Filter = "all" | InsightGroup;

export default function RdInsightDeck() {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hold, setHold] = useState(false);
  const [inView, setInView] = useState(false);
  const [reduce, setReduce] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
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

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = wrapRef.current;
    if (!el || !("IntersectionObserver" in window)) { setInView(true); return; }
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Move to the next card on its own; loop back to the first at the end.
  useEffect(() => {
    if (!playing || hold || !inView || reduce) return;
    const id = window.setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      const atEndNow = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
      if (atEndNow) track.scrollTo({ left: 0, behavior: "smooth" });
      else {
        const card = track.children[0] as HTMLElement | undefined;
        const width = card ? card.getBoundingClientRect().width + 18 : 320;
        track.scrollBy({ left: width, behavior: "smooth" });
      }
    }, 3200);
    return () => window.clearInterval(id);
  }, [playing, hold, inView, reduce, filter]);

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
    <div className="rd-deck" ref={wrapRef}>
      <div className="rd-wrap rd-deck-head" data-reveal>
        <div>
          <h2 id="ins-h" className="rd-display">Insights</h2>
          <p>One idea per card, from what I write on LinkedIn. Swipe through, or pick a topic.</p>
        </div>
        <div className="rd-deck-nav">
          {!reduce && (
            <button type="button" className="rd-deck-play" aria-label={playing ? "Pause moving cards" : "Play moving cards"} aria-pressed={!playing} onClick={() => setPlaying((v) => !v)}>
              {playing ? <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" /><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" /></svg>
                : <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M8 5 L19 12 L8 19 Z" fill="currentColor" /></svg>}
            </button>
          )}
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

      <ul
        className={`rd-deck-track${playing && !reduce ? " is-auto" : ""}`}
        ref={trackRef}
        key={filter}
        aria-label="Insights"
        onMouseEnter={() => setHold(true)}
        onMouseLeave={() => setHold(false)}
        onFocus={() => setHold(true)}
        onBlur={() => setHold(false)}
        onTouchStart={() => setHold(true)}
        onTouchEnd={() => window.setTimeout(() => setHold(false), 4000)}
      >
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
