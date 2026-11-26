"use client";

import { useEffect } from "react";

// Scroll reveals, number count-up and card tilt. Respects reduced motion.
export default function RdMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("rd-motion-ready");

    const reveal = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));

    const runCount = (el: HTMLElement) => {
      const target = Number(el.dataset.count || "0");
      const suffix = el.dataset.suffix || "";
      if (reduce) { el.textContent = `${target}${suffix}`; return; }
      const start = performance.now();
      const dur = 1100;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = `${Math.round(target * eased)}${suffix}`;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (reduce || !("IntersectionObserver" in window)) {
      reveal.forEach((el) => el.classList.add("is-in"));
      counters.forEach(runCount);
    } else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("is-in");
          if (el.dataset.count) runCount(el);
          io.unobserve(el);
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
      reveal.forEach((el) => io.observe(el));
      counters.forEach((el) => io.observe(el));
      // Anything already in view on load reveals straight away.
      requestAnimationFrame(() => {
        reveal.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("is-in");
        });
      });
    }

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const tilts = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
    const handlers: Array<() => void> = [];
    if (fine && !reduce) {
      tilts.forEach((el) => {
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          el.style.setProperty("--rx", `${(-y * 6).toFixed(2)}deg`);
          el.style.setProperty("--ry", `${(x * 8).toFixed(2)}deg`);
        };
        const leave = () => { el.style.setProperty("--rx", "0deg"); el.style.setProperty("--ry", "0deg"); };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        handlers.push(() => { el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); });
      });
    }
    return () => handlers.forEach((h) => h());
  }, []);
  return null;
}
