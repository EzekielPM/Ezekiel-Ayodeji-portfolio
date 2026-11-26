"use client";

import { useEffect } from "react";

// Hero entrance: every word starts scattered across the card like stars,
// then all of them drift into place together once the opening screen has gone.
export default function RdHeroStars() {
  useEffect(() => {
    const card = document.querySelector<HTMLElement>(".rd-hero-card");
    if (!card) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rand = (min: number, max: number) => min + Math.random() * (max - min);
    const scatter = (el: HTMLElement) => {
      el.style.setProperty("--sx", `${rand(-260, 260).toFixed(0)}px`);
      el.style.setProperty("--sy", `${rand(-180, 180).toFixed(0)}px`);
      el.style.setProperty("--sr", `${rand(-40, 40).toFixed(0)}deg`);
      el.style.setProperty("--ss", rand(0.3, 0.7).toFixed(2));
      el.style.setProperty("--sd", `${rand(0, 260).toFixed(0)}ms`);
    };

    // Wrap each word of the marked text blocks in its own span.
    card.querySelectorAll<HTMLElement>("[data-stars]").forEach((block) => {
      const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT);
      const nodes: Text[] = [];
      while (walker.nextNode()) nodes.push(walker.currentNode as Text);
      nodes.forEach((node) => {
        const text = node.textContent || "";
        if (!text.trim() || node.parentElement?.closest("[data-star-unit]")) return;
        const frag = document.createDocumentFragment();
        text.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
          const span = document.createElement("span");
          span.className = "rd-star";
          span.textContent = part;
          scatter(span);
          frag.appendChild(span);
        });
        node.parentNode?.replaceChild(frag, node);
      });
    });
    card.querySelectorAll<HTMLElement>("[data-star-unit]").forEach((el) => { el.classList.add("rd-star"); scatter(el); });
    card.classList.add("rd-stars-ready");

    const root = document.documentElement;
    let tries = 0;
    const timer = window.setInterval(() => {
      tries += 1;
      if (!root.classList.contains("portfolio-intro-active") || tries > 60) {
        window.clearInterval(timer);
        window.setTimeout(() => card.classList.add("rd-stars-go"), 150);
      }
    }, 150);
    return () => window.clearInterval(timer);
  }, []);
  return null;
}
