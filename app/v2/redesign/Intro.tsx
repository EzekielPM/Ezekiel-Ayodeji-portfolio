"use client";

import { useEffect } from "react";

// The portfolio's opening screen: the name assembles letter by letter, then zooms into the site.
export default function RdIntro() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let introTimer: number | undefined;
    let zoomTimer: number | undefined;
    let introCleanupTimer: number | undefined;
    let intro: HTMLDivElement | null = null;
    const motionStyle = document.createElement("style");
    motionStyle.textContent = `
      .portfolio-intro .portfolio-intro-name{position:relative;z-index:2;transform-origin:center;transition:transform 1.8s cubic-bezier(.16,1,.3,1),opacity 1.4s ease;will-change:transform,opacity}
      .portfolio-intro.portfolio-intro-zoom .portfolio-intro-name{transform:scale(18);opacity:0}
      .portfolio-intro.portfolio-intro-zoom{background:radial-gradient(ellipse at 50% 48%,#163d43 0%,#102b35 38%,#081820 100%);transition:opacity .95s ease;opacity:0;pointer-events:none}
      @media(prefers-reduced-motion:reduce){.portfolio-intro .portfolio-intro-name,.portfolio-intro.portfolio-intro-zoom{transition:none!important}}
    `;
    document.head.appendChild(motionStyle);
    
    try {
      if (!reducedMotion) {
        intro = document.createElement("div");
        intro.className = "portfolio-intro";
        intro.setAttribute("role", "status");
        intro.setAttribute("aria-label", "Welcome to Olusola Ayodeji Ezekiel's portfolio");
        const assembleText = (value: string, group: "name" | "role") =>
          Array.from(value).map((character, index) => {
            const paths = [
              ["-110vw", "-75vh", "-32deg"], ["108vw", "-70vh", "28deg"],
              ["-105vw", "68vh", "35deg"], ["110vw", "76vh", "-26deg"],
              ["0vw", "-110vh", "18deg"], ["0vw", "110vh", "-22deg"],
              ["-110vw", "0vh", "-40deg"], ["110vw", "0vh", "40deg"],
            ];
            const [x, y, rotation] = paths[(index * 5 + (group === "role" ? 3 : 0)) % paths.length];
            const safeCharacter = character === " " ? "&nbsp;" : character === "&" ? "&amp;" : character;
            return `<span class="portfolio-flying-letter" style="--start-x:${x};--start-y:${y};--start-rotate:${rotation};--letter-index:${index};--group-delay:${group === "role" ? "760ms" : "0ms"}">${safeCharacter}</span>`;
          }).join("");
        intro.innerHTML = `<span class="portfolio-intro-orbit portfolio-intro-orbit-one" aria-hidden="true"></span><span class="portfolio-intro-orbit portfolio-intro-orbit-two" aria-hidden="true"></span><span class="portfolio-intro-core" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span class="portfolio-intro-eyebrow" aria-hidden="true">THINK CLEARLY · BUILD WITH PURPOSE</span><span class="portfolio-intro-name" aria-label="Olusola Ayodeji Ezekiel">${assembleText("OLUSOLA AYODEJI EZEKIEL", "name")}</span><span class="portfolio-intro-role" aria-label="Product Manager · Product Leadership">${assembleText("PRODUCT MANAGER · PRODUCT LEADERSHIP", "role")}</span><span class="portfolio-intro-rule" aria-hidden="true"></span><span class="portfolio-intro-index" aria-hidden="true">STRATEGY / SYSTEMS / DELIVERY</span>`;
        document.body.appendChild(intro);
        root.classList.add("portfolio-intro-active");
        introTimer = window.setTimeout(() => {
          intro?.classList.add("portfolio-intro-zoom");
          zoomTimer = window.setTimeout(() => {
            intro?.classList.add("portfolio-intro-exit");
            introCleanupTimer = window.setTimeout(() => {
              intro?.remove();
              root.classList.remove("portfolio-intro-active");
              
            }, 950);
          }, 1800);
        }, 3750);
      }
    } catch {
      // If session storage is unavailable, the portfolio still loads normally.
    }


    return () => {
      if (introTimer !== undefined) window.clearTimeout(introTimer);
      if (zoomTimer !== undefined) window.clearTimeout(zoomTimer);
      if (introCleanupTimer !== undefined) window.clearTimeout(introCleanupTimer);
      intro?.remove();
      motionStyle.remove();
      root.classList.remove("portfolio-intro-active");
    };
  }, []);
  return null;
}
