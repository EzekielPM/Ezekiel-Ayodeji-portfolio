"use client";

import { useEffect, useRef, useState } from "react";
import { CV_URL } from "./data";

type Props = { base?: string; current?: "about" };

export default function RdHeader({ base = "", current }: Props) {
  const [theme, setTheme] = useState<"light" | "navy">("light");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    { label: "Work", href: `${base}#work`, active: current === undefined },
    { label: "Documents", href: `${base}#documents` },
    { label: "Insights", href: `${base}#insights` },
    { label: "Watch", href: `${base}#watch` },
    { label: "About", href: "/about", active: current === "about" },
    { label: "Contact", href: `${base}#contact` },
  ];
  const close = () => setOpen(false);

  return (
    <header className={`rd-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="rd-header-inner">
        <a className="rd-brand" href={base || "#top"}>
          <span className="rd-brand-mark" aria-hidden="true" />
          <span className="rd-brand-name">Olusola Ayodeji Ezekiel</span>
        </a>
        <nav className="rd-pills" aria-label="Main">
          {links.map((l) => (
            <a key={l.label} href={l.href} className={l.active ? "is-active" : undefined} aria-current={l.active ? "page" : undefined}>{l.label}</a>
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
          <a className="rd-btn rd-btn-accent rd-header-cv" href={CV_URL} download>Download CV</a>
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
            <a key={l.label} href={l.href} onClick={close} tabIndex={open ? 0 : -1} style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}>{l.label}<span aria-hidden="true">→</span></a>
          ))}
          <a className="rd-mobile-cv" href={CV_URL} download onClick={close} tabIndex={open ? 0 : -1}>Download CV<span aria-hidden="true">↓</span></a>
        </nav>
      </div>
    </header>
  );
}
