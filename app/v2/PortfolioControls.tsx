"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

type IconName = "mail" | "whatsapp" | "phone" | "linkedin" | "chat";

function Icon({ name }: { name: IconName }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "mail") return <svg {...common}><path d="M3 6.5h18v11H3z"/><path d="m4 7 8 6 8-6"/></svg>;
  if (name === "phone") return <svg {...common}><path d="M7.2 3.5 4.6 5.3c-.7.5-.9 1.4-.5 2.2 2.6 5.7 6.7 9.8 12.4 12.4.8.4 1.7.2 2.2-.5l1.8-2.6-4.4-3-1.7 1.7c-2.6-1.3-4.6-3.3-5.9-5.9l1.7-1.7z"/></svg>;
  if (name === "linkedin") return <svg {...common}><path d="M6.5 9.5v8"/><path d="M6.5 6.5h.01"/><path d="M10.5 17.5v-8"/><path d="M10.5 13c0-2 1.2-3.5 3.2-3.5 2.1 0 3.8 1.4 3.8 4.3v3.7"/><rect x="3" y="3" width="18" height="18" rx="4"/></svg>;
  if (name === "chat") return <svg {...common}><path d="M5 5.5h14v10H9l-4 3z"/><path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01"/></svg>;
  return <svg {...common}><path d="M20.5 11.8a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.3-4.4A8.4 8.4 0 1 1 20.5 11.8Z"/><path d="M8.3 8.1c.4 3.3 2.3 5.4 5.7 6.5.7.2 1.5-.2 1.8-.8l.4-.8-2.2-1-1 1c-1.5-.7-2.5-1.7-3.2-3.2l1-1-1-2.2-.8.4c-.5.2-.8.6-.7 1.1Z"/></svg>;
}

export function V2HeaderControls() {
  const [theme, setTheme] = useState<"light" | "navy">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    const initial = saved === "light" || saved === "navy"
      ? saved
      : window.matchMedia("(prefers-color-scheme: dark)").matches ? "navy" : "light";
    document.documentElement.dataset.theme = initial;
    setTheme(initial);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest(".site-nav")) setMobileMenuOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [mobileMenuOpen]);

  const toggleTheme = () => setTheme((current) => {
    const next = current === "navy" ? "light" : "navy";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("portfolio-theme", next);
    return next;
  });

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <button
        className={`theme-toggle ${theme === "navy" ? "is-navy" : ""}`}
        type="button"
        onClick={toggleTheme}
        aria-label={theme === "navy" ? "Switch to light mode" : "Switch to navy dark mode"}
        title={theme === "navy" ? "Light mode" : "Navy dark mode"}
      >
        <span className="theme-toggle-icon theme-toggle-sun" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3.5"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/>
          </svg>
        </span>
        <span className="theme-toggle-icon theme-toggle-moon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M20.2 15.3A8.5 8.5 0 0 1 8.7 3.8 8.5 8.5 0 1 0 20.2 15.3Z"/></svg>
        </span>
        <span className="theme-toggle-thumb" aria-hidden="true"/>
      </button>

      <button
        className="mobile-menu-toggle"
        type="button"
        onClick={() => setMobileMenuOpen((value) => !value)}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-site-menu"
      >
        {mobileMenuOpen ? "Close" : "Menu"}
      </button>

      <div className="mobile-menu-panel" id="mobile-site-menu" aria-label="Mobile navigation" hidden={!mobileMenuOpen}>
        <a href="#products" onClick={closeMenu}>Product work</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#construction" onClick={closeMenu}>Construction</a>
        <a href="#rough-space" onClick={closeMenu}>Rough Space</a>
        <a href="#insights" onClick={closeMenu}>Insights</a>
        <a href="#contact" onClick={closeMenu}>Let&apos;s talk</a>
      </div>
    </>
  );
}

export function FloatingContact() {
  const [contactOpen, setContactOpen] = useState(false);
  const [contactPosition, setContactPosition] = useState<{ x: number; y: number } | null>(null);
  const [contactDragging, setContactDragging] = useState(false);
  const contactRef = useRef<HTMLElement | null>(null);
  const ignoreContactClick = useRef(false);
  const contactDrag = useRef({ active: false, moved: false, startX: 0, startY: 0, startLeft: 0, startTop: 0 });

  const clampContactPosition = (x: number, y: number) => {
    const margin = 10;
    const rect = contactRef.current?.getBoundingClientRect();
    const width = rect?.width || 48;
    const height = rect?.height || 48;
    return {
      x: Math.min(Math.max(margin, x), Math.max(margin, window.innerWidth - width - margin)),
      y: Math.min(Math.max(margin, y), Math.max(margin, window.innerHeight - height - margin)),
    };
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setContactOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      if (contactOpen && !target.closest(".floating-contact")) setContactOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [contactOpen]);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("portfolio-contact-position");
      if (saved) {
        const parsed = JSON.parse(saved) as { x: number; y: number };
        if (Number.isFinite(parsed.x) && Number.isFinite(parsed.y)) {
          window.requestAnimationFrame(() => setContactPosition(clampContactPosition(parsed.x, parsed.y)));
        }
      }
    } catch {}
  }, []);

  useEffect(() => {
    const keepInView = () => setContactPosition((current) => current ? clampContactPosition(current.x, current.y) : current);
    window.addEventListener("resize", keepInView);
    return () => window.removeEventListener("resize", keepInView);
  }, []);

  const startContactDrag = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (event.button !== 0) return;
    const rect = event.currentTarget.getBoundingClientRect();
    contactDrag.current = { active: true, moved: false, startX: event.clientX, startY: event.clientY, startLeft: rect.left, startTop: rect.top };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const moveContactDrag = (event: ReactPointerEvent<HTMLButtonElement>) => {
    const drag = contactDrag.current;
    if (!drag.active) return;
    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;
    if (!drag.moved && Math.hypot(dx, dy) < 6) return;
    if (!drag.moved) {
      drag.moved = true;
      ignoreContactClick.current = true;
      setContactOpen(false);
      setContactDragging(true);
    }
    setContactPosition(clampContactPosition(drag.startLeft + dx, drag.startTop + dy));
  };

  const finishContactDrag = (event: ReactPointerEvent<HTMLButtonElement>) => {
    const drag = contactDrag.current;
    if (!drag.active) return;
    drag.active = false;
    setContactDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    if (drag.moved) {
      setContactPosition((current) => {
        if (current) window.localStorage.setItem("portfolio-contact-position", JSON.stringify(current));
        return current;
      });
    }
  };

  const toggleContact = () => {
    if (ignoreContactClick.current) {
      ignoreContactClick.current = false;
      return;
    }
    setContactOpen((value) => !value);
  };

  return (
    <aside
      ref={contactRef}
      className={`floating-contact ${contactOpen ? "is-open" : ""} ${contactPosition ? "is-positioned" : ""} ${contactDragging ? "is-dragging" : ""}`}
      style={contactPosition ? { left: contactPosition.x, top: contactPosition.y, right: "auto", bottom: "auto", transform: "none" } : undefined}
      aria-label="Quick contact"
    >
      <div className="floating-contact-list" id="quick-contact-list" aria-hidden={!contactOpen}>
        <a href="mailto:Olusola40@gmail.com" aria-label="Email" title="Email" tabIndex={contactOpen ? 0 : -1}><Icon name="mail"/></a>
        <a href="https://wa.me/2349015934337" target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp" tabIndex={contactOpen ? 0 : -1}><Icon name="whatsapp"/></a>
        <a href="tel:+2349015934337" aria-label="Call" title="Call" tabIndex={contactOpen ? 0 : -1}><Icon name="phone"/></a>
        <a href="https://www.linkedin.com/in/ayodeji-ezekiel-olusola/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" tabIndex={contactOpen ? 0 : -1}><Icon name="linkedin"/></a>
      </div>
      <button
        className="floating-contact-toggle"
        type="button"
        onPointerDown={startContactDrag}
        onPointerMove={moveContactDrag}
        onPointerUp={finishContactDrag}
        onPointerCancel={finishContactDrag}
        onClick={toggleContact}
        aria-expanded={contactOpen}
        aria-controls="quick-contact-list"
        aria-label={contactOpen ? "Close contact options. Drag to move." : "Open contact options. Drag to move."}
      >
        <Icon name="chat"/>
        <span aria-hidden="true">×</span>
      </button>
    </aside>
  );
}
