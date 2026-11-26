"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Slide } from "./data";

const DURATION = 7000;

export default function RdCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduce, setReduce] = useState(false);
  const [cycle, setCycle] = useState(0);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const count = slides.length;

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const go = useCallback((next: number) => {
    setIndex(((next % count) + count) % count);
    setCycle((c) => c + 1);
  }, [count]);

  useEffect(() => {
    if (paused || reduce) return;
    const id = window.setTimeout(() => go(index + 1), DURATION);
    return () => window.clearTimeout(id);
  }, [index, paused, reduce, go, cycle]);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
    setPaused(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touch.current;
    touch.current = null;
    setPaused(false);
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(t.clientY - start.y)) go(index + (dx < 0 ? 1 : -1));
  };

  const s = slides[index];

  return (
    <div className="rd-carousel" data-reveal>
      <div
        className="rd-carousel-stage"
        style={{ background: s.bg, color: s.ink }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured projects"
      >
        {slides.map((slide, i) => (
          <article
            key={slide.slug}
            className={`rd-slide${i === index ? " is-active" : ""}`}
            aria-hidden={i !== index}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}: ${slide.name}`}
          >
            <div className="rd-slide-copy">
              <div className="rd-slide-chips">
                {slide.chips.map((c, ci) => (
                  <span key={c} style={ci === 0 ? { background: slide.chipBg, color: slide.chipInk } : undefined}>{c}</span>
                ))}
              </div>
              <h3>{slide.name}</h3>
              <p className="rd-slide-tagline">{slide.tagline}</p>
              <p className="rd-slide-summary">{slide.summary}</p>
              <div className="rd-slide-actions">
                {slide.actions.map((a) => (
                  <a
                    key={a.label}
                    href={a.href}
                    className={a.primary ? "is-primary" : undefined}
                    target={a.external ? "_blank" : undefined}
                    rel={a.external ? "noreferrer" : undefined}
                    tabIndex={i === index ? 0 : -1}
                  >
                    {a.label}{a.external ? <span aria-hidden="true"> ↗</span> : <span aria-hidden="true"> →</span>}
                  </a>
                ))}
              </div>
            </div>
            <div className="rd-slide-media">
              <Image src={slide.image} alt={slide.imageAlt} fill sizes="(max-width: 860px) 92vw, 520px" priority={i === 0} />
            </div>
          </article>
        ))}

        <div className="rd-carousel-controls">
          <button type="button" aria-label="Previous project" onClick={() => go(index - 1)}>‹</button>
          <button type="button" aria-label="Next project" onClick={() => go(index + 1)}>›</button>
          <span className="rd-carousel-count">{index + 1} / {count}</span>
          <div className="rd-carousel-bars" aria-hidden="true">
            {slides.map((slide, i) => (
              <span key={slide.slug} className={i < index ? "is-done" : i === index ? "is-current" : undefined}>
                <i key={i === index ? `run-${cycle}` : "idle"} style={{ animationDuration: `${DURATION}ms`, animationPlayState: paused || reduce ? "paused" : "running" }} />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="rd-carousel-tabs" role="tablist" aria-label="Choose a featured project">
        {slides.map((slide, i) => (
          <button
            key={slide.slug}
            type="button"
            role="tab"
            aria-selected={i === index}
            className={i === index ? "is-active" : undefined}
            onClick={() => go(i)}
          >
            <span className="rd-tab-swatch" style={{ background: slide.bg === "#FFFFFF" ? slide.chipBg : slide.bg }} />
            {slide.name}
            <small>{slide.chips[0]}</small>
          </button>
        ))}
      </div>
    </div>
  );
}
