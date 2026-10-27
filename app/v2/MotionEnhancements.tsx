"use client";

import { useEffect } from "react";

export default function MotionEnhancements() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let introTimer: number | undefined;
    let zoomTimer: number | undefined;
    let introCleanupTimer: number | undefined;
    let zipCleanupTimer: number | undefined;
    let intro: HTMLDivElement | null = null;
    let zipReveal: HTMLDivElement | null = null;
    const motionStyle = document.createElement("style");
    motionStyle.textContent = `
      .portfolio-intro .portfolio-intro-name{position:relative;z-index:2;transform-origin:center;transition:transform 1.8s cubic-bezier(.16,1,.3,1),opacity 1.4s ease;will-change:transform,opacity}
      .portfolio-intro.portfolio-intro-zoom .portfolio-intro-name{transform:scale(18);opacity:0}
      .portfolio-intro.portfolio-intro-zoom{background:radial-gradient(ellipse at 50% 48%,#163d43 0%,#102b35 38%,#081820 100%);transition:opacity .95s ease;opacity:0;pointer-events:none}
      html.portfolio-opening-sequence body > :not(.portfolio-intro):not(.portfolio-zip-reveal){visibility:hidden!important}
      .portfolio-zip-reveal{position:fixed;inset:0;z-index:99999;overflow:hidden;pointer-events:none;background:#123b2d}
      .portfolio-zip-panel{position:absolute;inset:0;width:100%;height:100%;background:linear-gradient(135deg,#1d5a43 0%,#174b38 48%,#103a2d 100%);box-shadow:inset 0 0 90px rgba(0,0,0,.18);will-change:transform;overflow:hidden}
      .portfolio-zip-panel:after{content:"";position:absolute;inset:0;opacity:.24;background:repeating-linear-gradient(135deg,transparent 0 34px,rgba(220,239,223,.09) 35px 36px,transparent 37px 70px)}
      .portfolio-zip-panel:before{content:"";position:absolute;inset:0;opacity:.62;background:radial-gradient(ellipse at 50% 50%,rgba(123,220,164,.18),transparent 48%);filter:blur(12px)}
      .portfolio-zip-panel-left{clip-path:polygon(0 0,58% 0,56% 12%,52% 24%,47% 36%,44% 48%,45% 60%,49% 72%,55% 84%,60% 100%,0 100%)}
      .portfolio-zip-panel-right{clip-path:polygon(58% 0,100% 0,100% 100%,60% 100%,55% 84%,49% 72%,45% 60%,44% 48%,47% 36%,52% 24%,56% 12%)}
      .portfolio-zip-seam{position:absolute;inset:0;width:100%;background:linear-gradient(90deg,transparent 0%,rgba(157,177,163,.65) 42%,#f2f5e9 48%,#9aa99d 53%,rgba(218,230,218,.7) 58%,transparent 100%);clip-path:polygon(56.8% 0,59.2% 0,57.2% 12%,53.2% 24%,48.2% 36%,45.2% 48%,46.2% 60%,50.2% 72%,56.2% 84%,61.2% 100%,58.8% 100%,53.8% 84%,47.8% 72%,43.8% 60%,42.8% 48%,45.8% 36%,50.8% 24%,54.8% 12%);filter:drop-shadow(0 0 9px rgba(199,255,216,.3))}
      .portfolio-zip-teeth{position:absolute;inset:0;background:repeating-linear-gradient(to bottom,transparent 0 9px,rgba(245,249,239,.98) 9px 12px,transparent 12px 18px);clip-path:polygon(56.8% 0,59.2% 0,57.2% 12%,53.2% 24%,48.2% 36%,45.2% 48%,46.2% 60%,50.2% 72%,56.2% 84%,61.2% 100%,58.8% 100%,53.8% 84%,47.8% 72%,43.8% 60%,42.8% 48%,45.8% 36%,50.8% 24%,54.8% 12%);opacity:.9}
      .portfolio-zip-pull{position:absolute;top:-94px;left:50%;z-index:2;width:66px;height:84px;transform:translateX(-50%);border:3px solid #e5e9df;border-radius:19px 19px 24px 24px;background:linear-gradient(110deg,#7d8d83,#f8fff0 42%,#9ca99f 70%,#d7ddd4);box-shadow:0 8px 30px rgba(0,0,0,.38),0 0 20px rgba(202,255,216,.24)}
      .portfolio-zip-pull:before{content:"";position:absolute;left:18px;top:11px;width:24px;height:31px;border:5px solid #53675b;border-radius:12px}
      .portfolio-zip-pull:after{content:"";position:absolute;left:28px;top:42px;width:7px;height:30px;border-radius:5px;background:#6e7d72}
      .portfolio-zip-reveal.is-opening .portfolio-zip-pull{animation:portfolioZipPullDown .95s cubic-bezier(.2,.75,.25,1) forwards}
      .portfolio-zip-reveal.is-opening .portfolio-zip-panel-left{animation:portfolioZipOpenLeft 1.05s .72s cubic-bezier(.76,0,.24,1) forwards}
      .portfolio-zip-reveal.is-opening .portfolio-zip-panel-right{animation:portfolioZipOpenRight 1.05s .72s cubic-bezier(.76,0,.24,1) forwards}
      .portfolio-zip-reveal.is-opening .portfolio-zip-seam{animation:portfolioZipSeamFade .45s 1.1s ease forwards}
      @keyframes portfolioZipPullDown{to{top:calc(100% - 100px)}}
      @keyframes portfolioZipOpenLeft{to{transform:translateX(-102%)}}
      @keyframes portfolioZipOpenRight{to{transform:translateX(102%)}}
      @keyframes portfolioZipSeamFade{to{opacity:0}}
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
              zipReveal = document.createElement("div");
              zipReveal.className = "portfolio-zip-reveal";
              zipReveal.setAttribute("aria-hidden", "true");
              zipReveal.innerHTML = '<div class="portfolio-zip-panel portfolio-zip-panel-left"></div><div class="portfolio-zip-panel portfolio-zip-panel-right"></div><div class="portfolio-zip-seam"><span class="portfolio-zip-teeth"></span></div><div class="portfolio-zip-pull"></div>';
              document.body.appendChild(zipReveal);
              window.requestAnimationFrame(() => zipReveal?.classList.add("is-opening"));
              zipCleanupTimer = window.setTimeout(() => {
                zipReveal?.remove();
                zipReveal = null;
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
      if (zipCleanupTimer !== undefined) window.clearTimeout(zipCleanupTimer);
      zipReveal?.remove();
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
      if (zipCleanupTimer !== undefined) window.clearTimeout(zipCleanupTimer);
      zipReveal?.remove();
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
