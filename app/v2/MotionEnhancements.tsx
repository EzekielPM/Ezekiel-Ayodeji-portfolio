"use client";

import { useEffect } from "react";

export default function MotionEnhancements() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let introTimer: number | undefined;
    let zoomTimer: number | undefined;
    let introCleanupTimer: number | undefined;
    let energyCleanupTimer: number | undefined;
    let intro: HTMLDivElement | null = null;
    let energyReveal: HTMLDivElement | null = null;
    const motionStyle = document.createElement("style");
    motionStyle.textContent = `
      .portfolio-intro .portfolio-intro-name{position:relative;z-index:2;transform-origin:center;transition:transform 1.8s cubic-bezier(.16,1,.3,1),opacity 1.4s ease;will-change:transform,opacity}
      .portfolio-intro.portfolio-intro-zoom .portfolio-intro-name{transform:scale(18);opacity:0}
      .portfolio-intro.portfolio-intro-zoom{background:radial-gradient(ellipse at 50% 48%,#163d43 0%,#102b35 38%,#081820 100%);transition:opacity .95s ease;opacity:0;pointer-events:none}
      html.portfolio-opening-sequence body > :not(.portfolio-intro):not(.portfolio-energy-burst){visibility:hidden!important}
      .portfolio-energy-burst{position:fixed;inset:0;z-index:99999;overflow:hidden;pointer-events:none;background:radial-gradient(ellipse at center,#0b3329 0%,#081c20 44%,#07131c 100%);isolation:isolate}
      .portfolio-energy-burst:before{content:"";position:absolute;inset:-35%;background:conic-gradient(from 0deg at 50% 50%,transparent 0deg,rgba(28,255,143,.03) 18deg,rgba(36,255,167,.8) 24deg,rgba(220,255,235,.96) 26deg,rgba(12,213,135,.58) 29deg,transparent 36deg,transparent 72deg,rgba(24,225,147,.08) 84deg,rgba(31,255,161,.7) 90deg,transparent 96deg,transparent 144deg,rgba(27,242,151,.65) 151deg,rgba(230,255,238,.92) 154deg,transparent 160deg,transparent 220deg,rgba(24,255,146,.65) 228deg,transparent 235deg,transparent 300deg,rgba(32,255,155,.6) 308deg,transparent 316deg);filter:blur(2px);opacity:0;transform:scale(1.4) rotate(-18deg);animation:portfolioEnergySweep 1.28s cubic-bezier(.16,1,.3,1) both}
      .portfolio-energy-burst:after{content:"";position:absolute;inset:-20%;background:radial-gradient(ellipse at center,rgba(225,255,237,.98) 0%,rgba(84,255,167,.65) 5%,rgba(23,245,145,.2) 15%,transparent 38%);opacity:0;transform:scale(.1);animation:portfolioEnergyFlash .5s .78s ease-out both}
      .portfolio-energy-core{position:absolute;left:50%;top:50%;width:min(72vw,900px);aspect-ratio:1;border:1px solid rgba(116,255,185,.38);border-radius:50%;transform:translate(-50%,-50%) scale(.12);opacity:0;box-shadow:0 0 28px rgba(39,255,156,.18),inset 0 0 40px rgba(39,255,156,.12);animation:portfolioEnergyCore 1.38s cubic-bezier(.16,1,.3,1) both}
      .portfolio-energy-core:before,.portfolio-energy-core:after{content:"";position:absolute;inset:12%;border:1px solid rgba(106,255,183,.23);border-radius:50%;transform:rotate(32deg) scaleY(.52)}
      .portfolio-energy-core:after{inset:23%;transform:rotate(-38deg) scaleY(.62);border-color:rgba(212,255,230,.28)}
      .portfolio-energy-streaks{position:absolute;inset:-20%;background:repeating-conic-gradient(from 0deg at 50% 50%,transparent 0deg,transparent 4deg,rgba(74,255,162,.82) 4.15deg,rgba(215,255,232,.78) 4.3deg,transparent 4.55deg,transparent 13deg);mask-image:radial-gradient(ellipse at center,transparent 0%,#000 23%,#000 48%,transparent 72%);opacity:0;transform:scale(1.35);animation:portfolioEnergyStreaks 1.32s cubic-bezier(.16,1,.3,1) both}
      .portfolio-energy-particles{position:absolute;inset:0;background-image:radial-gradient(circle,rgba(229,255,238,.98) 0 1px,transparent 2px),radial-gradient(circle,rgba(38,255,151,.95) 0 1.5px,transparent 2.5px),radial-gradient(circle,rgba(89,255,178,.8) 0 1px,transparent 2px),radial-gradient(circle,rgba(229,255,238,.75) 0 1px,transparent 2px);background-size:71px 83px,113px 97px,149px 127px,191px 163px;background-position:10px 20px,55px 31px,25px 75px,100px 12px;opacity:0;transform:scale(.65);animation:portfolioEnergyParticles 1.55s ease-out both}
      @keyframes portfolioEnergySweep{0%{opacity:0;transform:scale(1.65) rotate(-28deg)}24%{opacity:1}62%{opacity:1;transform:scale(.9) rotate(12deg)}100%{opacity:0;transform:scale(.25) rotate(28deg)}}
      @keyframes portfolioEnergyFlash{0%{opacity:0;transform:scale(.1)}22%{opacity:1;transform:scale(1.4)}55%{opacity:.78;transform:scale(1.9)}100%{opacity:0;transform:scale(2.5)}}
      @keyframes portfolioEnergyCore{0%{opacity:0;transform:translate(-50%,-50%) scale(.12) rotate(-30deg)}35%{opacity:.9}75%{opacity:.55;transform:translate(-50%,-50%) scale(1.15) rotate(24deg)}100%{opacity:0;transform:translate(-50%,-50%) scale(1.55) rotate(42deg)}}
      @keyframes portfolioEnergyStreaks{0%{opacity:0;transform:scale(1.7) rotate(-22deg)}28%{opacity:.88}58%{opacity:.7;transform:scale(.95) rotate(12deg)}100%{opacity:0;transform:scale(.3) rotate(25deg)}}
      @keyframes portfolioEnergyParticles{0%{opacity:0;transform:scale(.65)}24%{opacity:.85}68%{opacity:.7;transform:scale(1.08)}100%{opacity:0;transform:scale(1.3)}}
      @media(prefers-reduced-motion:reduce){.portfolio-energy-burst:before,.portfolio-energy-burst:after,.portfolio-energy-core,.portfolio-energy-streaks,.portfolio-energy-particles{animation-duration:.01ms!important;animation-delay:0ms!important}}
      html[data-theme="navy"] .statement{background:#091722!important;color:#e8eff2!important;border-top:1px solid #1c3441;border-bottom:1px solid #1c3441}
      html[data-theme="navy"] .statement .section-kicker{color:#8ba99f!important}
      html[data-theme="navy"] .statement blockquote em{color:#a9cbbd!important}
      .motion-ready .statement{opacity:0;transform:translateY(34px) scale(.985);clip-path:inset(0 0 10% 0);will-change:opacity,transform,clip-path}
      .motion-ready .statement.is-visible{animation:pointOfViewSectionReveal .9s cubic-bezier(.2,.8,.2,1) both}
      .motion-ready .statement .section-kicker,.motion-ready .statement blockquote{opacity:0;transform:translateY(22px)}
      .motion-ready .statement.is-visible .section-kicker{animation:pointOfViewReveal .65s .18s cubic-bezier(.2,.8,.2,1) both}
      .motion-ready .statement.is-visible blockquote{animation:pointOfViewReveal .85s .32s cubic-bezier(.2,.8,.2,1) both}
      @keyframes pointOfViewSectionReveal{to{opacity:1;transform:translateY(0) scale(1);clip-path:inset(0 0 0 0)}}
      @keyframes pointOfViewReveal{to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.portfolio-intro .portfolio-intro-name,.portfolio-intro.portfolio-intro-zoom{transition:none!important}}
    `;
    document.head.appendChild(motionStyle);
    if (reducedMotion) root.classList.add("hero-text-ready");

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
        root.classList.add("portfolio-opening-sequence");
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
              root.classList.add("hero-text-ready");
              energyReveal = document.createElement("div");
              energyReveal.className = "portfolio-energy-burst";
              energyReveal.setAttribute("aria-hidden", "true");
              energyReveal.innerHTML = '<div class="portfolio-energy-streaks"></div><div class="portfolio-energy-core"></div><div class="portfolio-energy-particles"></div>';
              document.body.appendChild(energyReveal);
              energyCleanupTimer = window.setTimeout(() => {
                energyReveal?.remove();
                energyReveal = null;
                root.classList.remove("portfolio-opening-sequence");
              }, 2050);
            }, 950);
          }, 1800);
        }, 3750);
      }
    } catch {
      // If session storage is unavailable, the portfolio still loads normally.
    }

    const progress = document.createElement("div");
    progress.className = "scroll-progress";
    progress.setAttribute("aria-hidden", "true");
    document.body.prepend(progress);

    let scrollTicking = false;
    const updateProgress = () => {
      if (scrollTicking) return;
      scrollTicking = true;
      window.requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const amount = scrollable > 0 ? window.scrollY / scrollable : 0;
        progress.style.transform = `scaleX(${Math.min(1, Math.max(0, amount))})`;
        scrollTicking = false;
      });
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    const portrait = document.querySelector<HTMLButtonElement>(".portrait-welcome");
    const handlePortraitClick = () => {
      if (!portrait) return;
      portrait.classList.remove("is-welcoming");
      void portrait.offsetWidth;
      portrait.classList.add("is-welcoming");
    };
    portrait?.addEventListener("click", handlePortraitClick);

    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(
      '.site-nav a[href^="#"]',
    ));
    const navSections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.getAttribute("href") || ""))
      .filter((section): section is HTMLElement => Boolean(section))
      .filter((section, index, all) => all.indexOf(section) === index)
      .sort((a, b) => a.offsetTop - b.offsetTop);
    const updateActiveNav = () => {
      const marker = window.innerHeight * 0.34;
      let activeId = "";
      navSections.forEach((section) => {
        if (section.getBoundingClientRect().top <= marker) activeId = section.id;
      });
      navLinks.forEach((link) => {
        const active = link.hash === `#${activeId}`;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };
    window.addEventListener("scroll", updateActiveNav, { passive: true });
    window.addEventListener("resize", updateActiveNav);
    updateActiveNav();
    const targets = [
      ".statement",
      "#products .section-heading",
      "#products .case-card",
      "#all-projects .section-heading",
      "#all-projects .all-project-card",
      "#practice .section-heading",
      "#practice .practice-card",
      "#experience .section-heading",
      "#experience .timeline > article",
      "#insights .section-heading",
      "#insights .insight-featured",
      "#insights .insight-grid > article",
      "#construction .construction-cta-copy",
      "#rough-space .construction-cta-copy",
      "#about > div",
      "#contact > *",
    ];

    const elements = Array.from(document.querySelectorAll<HTMLElement>(targets.join(",")));
    if (!elements.length) return () => {
      progress.remove();
      if (introTimer !== undefined) window.clearTimeout(introTimer);
      if (zoomTimer !== undefined) window.clearTimeout(zoomTimer);
      if (introCleanupTimer !== undefined) window.clearTimeout(introCleanupTimer);
      if (energyCleanupTimer !== undefined) window.clearTimeout(energyCleanupTimer);
      energyReveal?.remove();
      motionStyle.remove();
      intro?.remove();
      root.classList.remove("portfolio-intro-active");
      portrait?.removeEventListener("click", handlePortraitClick);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      window.removeEventListener("scroll", updateActiveNav);
      window.removeEventListener("resize", updateActiveNav);
    };

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("motion-reveal", "is-visible"));
      return;
    }

    root.classList.add("motion-ready");
    elements.forEach((element) => element.classList.add("motion-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add("is-visible");

            if (target.matches("#about > div")) {
              if (!reducedMotion) {
                const about = target.closest<HTMLElement>("#about");
                if (about && !about.dataset.writingStarted) {
                  about.dataset.writingStarted = "true";
                  const writingItems = Array.from(about.querySelectorAll<HTMLElement>(
                    ".section-kicker, h2, .about-copy .lead, .about-copy > p:not(.lead), .principles span",
                  ));
                  writingItems.forEach((item, index) => {
                    item.style.opacity = "0";
                    item.style.clipPath = "inset(0 100% 0 0)";
                    item.style.transition = "opacity .25s ease, clip-path 1.05s steps(28, end)";
                    window.setTimeout(() => {
                      item.style.opacity = "1";
                      item.style.clipPath = "inset(0 0 0 0)";
                    }, index * 360);
                  });
                }
              } else {
                target.closest<HTMLElement>("#about")?.classList.add("about-writing-complete");
              }
            }

            if (!reducedMotion && target.matches(".statement")) {
              target.animate(
                [
                  { opacity: 0, transform: "translateY(42px) scale(.97)", clipPath: "inset(0 0 12% 0)" },
                  { opacity: 1, transform: "translateY(0) scale(1)", clipPath: "inset(0 0 0 0)" },
                ],
                { duration: 1050, easing: "cubic-bezier(.16,1,.3,1)", fill: "both" },
              );
              target.querySelector(".section-kicker")?.animate(
                [
                  { opacity: 0, transform: "translateY(24px)" },
                  { opacity: 1, transform: "translateY(0)" },
                ],
                { duration: 650, delay: 220, easing: "cubic-bezier(.2,.8,.2,1)", fill: "both" },
              );
              target.querySelector("blockquote")?.animate(
                [
                  { opacity: 0, transform: "translateY(28px)" },
                  { opacity: 1, transform: "translateY(0)" },
                ],
                { duration: 850, delay: 360, easing: "cubic-bezier(.2,.8,.2,1)", fill: "both" },
              );
            }

            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      if (introTimer !== undefined) window.clearTimeout(introTimer);
      if (zoomTimer !== undefined) window.clearTimeout(zoomTimer);
      if (introCleanupTimer !== undefined) window.clearTimeout(introCleanupTimer);
      if (energyCleanupTimer !== undefined) window.clearTimeout(energyCleanupTimer);
      energyReveal?.remove();
      intro?.remove();
      root.classList.remove("portfolio-intro-active");
      motionStyle.remove();
      portrait?.removeEventListener("click", handlePortraitClick);
      root.classList.remove("motion-ready");
      progress.remove();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      window.removeEventListener("scroll", updateActiveNav);
      window.removeEventListener("resize", updateActiveNav);
    };
  }, []);

  return null;
}
