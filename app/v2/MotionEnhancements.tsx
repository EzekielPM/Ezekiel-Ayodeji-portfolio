"use client";

import { useEffect } from "react";

export default function MotionEnhancements() {
  useEffect(() => {
    const root = document.documentElement;
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

    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(
      '.site-nav a[href^="#"]',
    ));
    const navSections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.getAttribute("href") || ""))
      .filter((section): section is HTMLElement => Boolean(section));
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
      ".statement > *",
      "#products .section-heading",
      "#products .case-card",
      "#all-projects .section-heading",
      "#all-projects .all-project-card",
      "#practice .section-heading",
      "#practice .practice-card",
      "#experience .section-heading",
      "#experience .timeline > article",
      "#insights .section-heading",
      "#insights .insight-grid > article",
      "#construction .construction-cta-copy",
      "#rough-space .construction-cta-copy",
      "#about > div",
      "#contact > *",
    ];

    const elements = Array.from(document.querySelectorAll<HTMLElement>(targets.join(",")));
    if (!elements.length) return () => {
      progress.remove();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      window.removeEventListener("scroll", updateActiveNav);
      window.removeEventListener("resize", updateActiveNav);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("motion-reveal", "is-visible"));
      return;
    }

    root.classList.add("motion-ready");
    elements.forEach((element) => element.classList.add("motion-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
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
