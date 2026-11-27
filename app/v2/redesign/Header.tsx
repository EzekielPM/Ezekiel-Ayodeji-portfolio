"use client";

import { useEffect, useRef, useState } from "react";
import { CV_FILENAME, CV_URL } from "./data";

type Props = { base?: string; current?: "about" | "none" };

export default function RdHeader({ base = "", current }: Props) {
  const [theme, setTheme] = useState<"light" | "navy">("light");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [spy, setSpy] = useState("top");
  const navRef = useRef<HTMLElement | null>(null);
  const [ink, setInk] = useState<{ x: number; w: number } | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    const initial = saved === "light" || saved === "navy"
      ? saved
      : window.matchMedia("(prefers-color-scheme: dark)").matches ? "navy" : "light";
    document.documentElement.dataset.theme = initial;
    setTheme(initial);
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) { setOpen(false); toggleRef.current?.focus(); }
    };
    const onDown = (e: PointerEvent) => {
      if (open && !(e.target as HTMLElement).closest(".rd-header")) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    document.body.classList.toggle("rd-menu-open", open);
    return () => { window.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onDown); };
  }, [open]);

  // On the home page, follow the section in view. Sections without a tab count towards the tab before them.
  useEffect(() => {
    if (base) return;
    const ids = ["work", "documents", "insights", "watch", "contact"];
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.35;
      let cur = "top";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) cur = id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) cur = "contact";
      setSpy(cur);
    };
    const onScroll = () => { if (!raf) raf = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (raf) window.cancelAnimationFrame(raf); };
  }, [base]);

  const toggleTheme = () => {
    const next = theme === "navy" ? "light" : "navy";
    const root = document.documentElement;
    root.classList.add("rd-theme-fade");
    root.dataset.theme = next;
    window.localStorage.setItem("portfolio-theme", next);
    setTheme(next);
    window.setTimeout(() => root.classList.remove("rd-theme-fade"), 500);
  };

  const links = [
    { label: "Home", href: base ? "/" : "#top", active: !base && spy === "top" },
    { label: "Work", href: base ? "/work" : "#work", active: (!!base && current === undefined) || (!base && spy === "work") },
    { label: "Documents", href: `${base}#documents`, active: !base && spy === "documents" },
    { label: "Insights", href: `${base}#insights`, active: !base && spy === "insights" },
    { label: "Watch", href: `${base}#watch`, active: !base && spy === "watch" },
    { label: "About", href: "/about", active: current === "about" },
    { label: "Contact", href: `${base}#contact`, active: !base && spy === "contact" },
  ];
  const activeLabel = links.find((l) => l.active)?.label;

  // Slide one highlight between tabs instead of switching instantly.
  useEffect(() => {
    const place = () => {
      const nav = navRef.current;
      const a = nav?.querySelector<HTMLAnchorElement>("a.is-active");
      setInk(nav && a ? { x: a.offsetLeft, w: a.offsetWidth } : null);
    };
    place();
    window.addEventListener("resize", place);
    const t = window.setTimeout(place, 400);
    return () => { window.removeEventListener("resize", place); window.clearTimeout(t); };
  }, [activeLabel]);
  const close = () => setOpen(false);

  return (
    <header className={`rd-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="rd-header-inner">
        <a className="rd-brand" href={base || "#top"}>
          <span className="rd-monogram" aria-hidden="true">OE</span>
          <span className="rd-brand-name">Olusola Ayodeji Ezekiel</span>
        </a>
        <nav className="rd-pills" aria-label="Main" ref={navRef}>
          <span className="rd-pills-ink" aria-hidden="true" style={ink ? { transform: `translateX(${ink.x}px)`, width: ink.w, opacity: 1 } : { opacity: 0 }} />
          {links.map((l) => (
            <a key={l.label} href={l.href} className={l.active ? "is-active" : undefined} aria-current={l.active ? (l.href.startsWith("#") ? "location" : "page") : undefined}>{l.label}</a>
          ))}
        </nav>
        <div className="rd-header-actions">
          <button
            className={`theme-toggle ${theme === "navy" ? "is-navy" : ""}`}
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "navy" ? "Switch to light mode" : "Switch to navy dark mode"}
            title={theme === "navy" ? "Light mode" : "Navy dark mode"}
          >
            <span className="theme-toggle-icon theme-toggle-sun" aria-hidden="true">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/></svg>
            </span>
            <span className="theme-toggle-icon theme-toggle-moon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M20.2 15.3A8.5 8.5 0 0 1 8.7 3.8 8.5 8.5 0 1 0 20.2 15.3Z"/></svg>
            </span>
            <span className="theme-toggle-thumb" aria-hidden="true"/>
          </button>
          <a className="rd-btn rd-btn-accent rd-header-cv rd-cv-glow" href={CV_URL} download={CV_FILENAME}>Download CV <span className="rd-cv-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" width="15" height="15"><path d="M12 4v12M6.5 10.5 12 16l5.5-5.5M5 20h14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span></a>
          <button
            ref={toggleRef}
            className={`rd-menu-toggle${open ? " is-open" : ""}`}
            type="button"
            aria-expanded={open}
            aria-controls="rd-mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" /><span aria-hidden="true" />
          </button>
        </div>
      </div>
      <div ref={panelRef} id="rd-mobile-menu" className={`rd-mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {links.map((l, i) => (
            <a key={l.label} href={l.href} onClick={close} tabIndex={open ? 0 : -1} className={l.active ? "is-active" : undefined} style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}>{l.label}<span aria-hidden="true">→</span></a>
          ))}
          <a className="rd-mobile-cv" href={CV_URL} download={CV_FILENAME} onClick={close} tabIndex={open ? 0 : -1}>Download CV<span aria-hidden="true">↓</span></a>
        </nav>
      </div>
    </header>
  );
}
