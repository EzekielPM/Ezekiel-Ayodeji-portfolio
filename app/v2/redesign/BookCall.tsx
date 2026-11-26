"use client";

import { useEffect, useMemo, useState } from "react";
import { CALL_DAYS_AHEAD, CALL_HOURS, CALL_MIN_NOTICE_HOURS, EMAIL, WEB3FORMS_KEY } from "./data";

const TOPICS = ["Full-time role", "Contract", "Collaboration", "Product advice", "Something else"];
const MAX = 500;
const DOW = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

// Lagos is UTC+1 all year, so a Lagos wall-clock time maps to UTC by subtracting one hour.
const lagosToUtc = (y: number, m: number, d: number, h: number) => new Date(Date.UTC(y, m, d, h - 1, 0));
const lagosToday = (now: Date) => {
  const l = new Date(now.getTime() + 60 * 60 * 1000);
  return { y: l.getUTCFullYear(), m: l.getUTCMonth(), d: l.getUTCDate() };
};
const key = (y: number, m: number, d: number) => `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

type Slot = { start: Date; lagosHour: number };
type Day = { y: number; m: number; d: number; slots: Slot[] };

function buildDays(now: Date): Map<string, Day> {
  const map = new Map<string, Day>();
  const t = lagosToday(now);
  const earliest = now.getTime() + CALL_MIN_NOTICE_HOURS * 3600 * 1000;
  for (let i = 0; i <= CALL_DAYS_AHEAD; i++) {
    const base = new Date(Date.UTC(t.y, t.m, t.d + i));
    const y = base.getUTCFullYear(), m = base.getUTCMonth(), d = base.getUTCDate();
    const wd = base.getUTCDay();
    if (wd === 0 || wd === 6) continue;
    const slots = CALL_HOURS.map((h) => ({ start: lagosToUtc(y, m, d, h), lagosHour: h })).filter((s) => s.start.getTime() >= earliest);
    if (slots.length) map.set(key(y, m, d), { y, m, d, slots });
  }
  return map;
}

const fmtLocal = (d: Date, opts: Intl.DateTimeFormatOptions) => d.toLocaleString(undefined, opts);
const fmtLagos = (d: Date, opts: Intl.DateTimeFormatOptions) => d.toLocaleString(undefined, { ...opts, timeZone: "Africa/Lagos" });
const timeOpts: Intl.DateTimeFormatOptions = { hour: "numeric", minute: "2-digit" };

function icsFor(start: Date, name: string) {
  const end = new Date(start.getTime() + 30 * 60000);
  const z = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const body = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Olusola Ayodeji Ezekiel//Call//EN", "BEGIN:VEVENT",
    `UID:${z(start)}-${Math.random().toString(36).slice(2)}@ezekiel-portfolio`, `DTSTAMP:${z(new Date())}`,
    `DTSTART:${z(start)}`, `DTEND:${z(end)}`,
    `SUMMARY:Intro call with Olusola Ayodeji Ezekiel (pending confirmation)`,
    `DESCRIPTION:Requested by ${name}. A Google Meet link will follow by email.`,
    "END:VEVENT", "END:VCALENDAR",
  ].join("\r\n");
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(body)}`;
}

export default function BookCall() {
  const [now, setNow] = useState<Date | null>(null);
  const [view, setView] = useState<{ y: number; m: number } | null>(null);
  const [dayKey, setDayKey] = useState<string | null>(null);
  const [slot, setSlot] = useState<Slot | null>(null);
  const [form, setForm] = useState({ name: "", email: "", company: "", linkedin: "", topic: "", intro: "" });
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    const n = new Date();
    setNow(n);
    const t = lagosToday(n);
    setView({ y: t.y, m: t.m });
  }, []);

  const days = useMemo(() => (now ? buildDays(now) : new Map<string, Day>()), [now]);
  const firstKey = days.keys().next().value as string | undefined;
  const day = dayKey ? days.get(dayKey) : undefined;
  const zone = useMemo(() => {
    try { return Intl.DateTimeFormat().resolvedOptions().timeZone.split("/").pop()?.replace(/_/g, " "); } catch { return undefined; }
  }, []);

  const lastDate = useMemo(() => {
    let last: Day | undefined;
    days.forEach((d) => { last = d; });
    return last;
  }, [days]);

  const errors = {
    name: !form.name.trim(),
    email: !/^\S+@\S+\.\S+$/.test(form.email),
    topic: !form.topic,
    intro: form.intro.trim().length < 10,
    time: !slot,
  };
  const valid = !Object.values(errors).some(Boolean);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched(true);
    if (!valid || !slot) return;
    const hp = (e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement | null)?.checked;
    if (hp) return;
    setState("sending");
    const when = `${fmtLagos(slot.start, { weekday: "short", day: "numeric", month: "short", ...timeOpts })} Lagos (${fmtLocal(slot.start, { weekday: "short", day: "numeric", month: "short", ...timeOpts })} for them${zone ? `, ${zone}` : ""})`;
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New call request: ${form.name}${form.company ? ` (${form.company})` : ""}`,
          from_name: "Portfolio · Book a call",
          replyto: form.email,
          Name: form.name,
          Email: form.email,
          Company: form.company || "–",
          LinkedIn: form.linkedin || "–",
          Topic: form.topic,
          "Requested time": when,
          "Their intro": form.intro,
        }),
      });
      const json = await res.json().catch(() => ({}));
      setState(res.ok && json.success !== false ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value.slice(0, k === "intro" ? MAX : 200) });

  if (state === "sent" && slot) {
    return (
      <div className="rd-book rd-book-done" role="status">
        <span className="rd-book-tick" aria-hidden="true">✓</span>
        <h3>Request sent, {form.name.split(" ")[0]}.</h3>
        <p>
          {fmtLocal(slot.start, { weekday: "short", day: "numeric", month: "short" })} · {fmtLocal(slot.start, timeOpts)} your time ({fmtLagos(slot.start, timeOpts)} in Lagos).<br />
          I&apos;ll confirm by email within a day, with a Google Meet link.
        </p>
        <div className="rd-book-done-actions">
          <a className="rd-book-ghost" href={icsFor(slot.start, form.name)} download="intro-call.ics">Add to calendar</a>
          <button type="button" className="rd-book-ghost" onClick={() => { setState("idle"); setSlot(null); setDayKey(null); setTouched(false); }}>Book another time</button>
        </div>
      </div>
    );
  }

  // Calendar grid for the visible month (Monday first).
  const grid: (Day | { y: number; m: number; d: number; off: true } | null)[] = [];
  if (view) {
    const first = new Date(Date.UTC(view.y, view.m, 1));
    const lead = (first.getUTCDay() + 6) % 7;
    const daysIn = new Date(Date.UTC(view.y, view.m + 1, 0)).getUTCDate();
    for (let i = 0; i < lead; i++) grid.push(null);
    for (let d = 1; d <= daysIn; d++) grid.push(days.get(key(view.y, view.m, d)) ?? { y: view.y, m: view.m, d, off: true });
  }
  const monthLabel = view ? new Date(Date.UTC(view.y, view.m, 1)).toLocaleString(undefined, { month: "long", year: "numeric", timeZone: "UTC" }) : "";
  const canPrev = !!(view && firstKey && (view.y * 12 + view.m) > (Number(firstKey.slice(0, 4)) * 12 + Number(firstKey.slice(5, 7)) - 1));
  const canNext = !!(view && lastDate && (view.y * 12 + view.m) < (lastDate.y * 12 + lastDate.m));
  const move = (n: number) => view && setView({ y: view.y + Math.floor((view.m + n) / 12), m: (view.m + n + 12) % 12 });

  return (
    <form className="rd-book" onSubmit={submit} noValidate>
      <div className="rd-book-head">
        <p className="rd-book-kicker">Book a 30-minute call</p>
        <h3>Tell me a little, then pick a time</h3>
      </div>

      <div className="rd-book-grid">
        <label className={touched && errors.name ? "is-bad" : undefined}>Your name<input value={form.name} onChange={set("name")} autoComplete="name" required /></label>
        <label className={touched && errors.email ? "is-bad" : undefined}>Work email<input type="email" value={form.email} onChange={set("email")} autoComplete="email" required /></label>
        <label><span>Company <em>(optional)</em></span><input value={form.company} onChange={set("company")} autoComplete="organization" /></label>
        <label><span>LinkedIn <em>(optional)</em></span><input value={form.linkedin} onChange={set("linkedin")} placeholder="linkedin.com/in/…" /></label>
      </div>

      <fieldset className={`rd-book-topics${touched && errors.topic ? " is-bad" : ""}`}>
        <legend>What&apos;s it about?</legend>
        {TOPICS.map((t) => (
          <button key={t} type="button" aria-pressed={form.topic === t} onClick={() => setForm({ ...form, topic: t })}>{t}</button>
        ))}
      </fieldset>

      <label className={`rd-book-intro${touched && errors.intro ? " is-bad" : ""}`}>A short intro
        <textarea rows={3} value={form.intro} onChange={set("intro")} placeholder="The role or product, and what you'd like to discuss." required />
        <small>{form.intro.length} / {MAX}</small>
      </label>

      <div className={`rd-book-when${touched && errors.time ? " is-bad" : ""}`}>
        <div className="rd-book-cal">
          <div className="rd-book-cal-head">
            <b>Pick a date</b>
            <span>
              <button type="button" onClick={() => move(-1)} disabled={!canPrev} aria-label="Previous month">‹</button>
              <span>{monthLabel}</span>
              <button type="button" onClick={() => move(1)} disabled={!canNext} aria-label="Next month">›</button>
            </span>
          </div>
          <div className="rd-book-days" role="grid" aria-label={monthLabel}>
            {DOW.map((d) => <span key={d} className="rd-book-dow">{d}</span>)}
            {grid.map((c, i) => c === null ? <span key={i} /> : "off" in c ? (
              <span key={i} className="rd-book-off">{c.d}</span>
            ) : (
              <button key={i} type="button" aria-pressed={dayKey === key(c.y, c.m, c.d)} onClick={() => { setDayKey(key(c.y, c.m, c.d)); setSlot(null); }}>{c.d}</button>
            ))}
          </div>
        </div>
        <div className="rd-book-slots">
          <b>{day ? fmtLocal(day.slots[0].start, { weekday: "short", day: "numeric", month: "short" }) : "Pick a time"} <span>· your time{zone ? ` (${zone})` : ""}</span></b>
          {day ? day.slots.map((s) => (
            <button key={s.lagosHour} type="button" aria-pressed={slot?.lagosHour === s.lagosHour} onClick={() => setSlot(s)}>
              {fmtLocal(s.start, timeOpts)}<small>{fmtLagos(s.start, timeOpts)} Lagos</small>
            </button>
          )) : <p className="rd-book-hint">Choose a highlighted date to see times.</p>}
        </div>
      </div>

      <input type="checkbox" name="botcheck" className="rd-sr" tabIndex={-1} aria-hidden="true" />

      <div className="rd-book-foot">
        <p aria-live="polite">
          {state === "error" ? <>Something went wrong. Please try again, or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</> :
            slot ? <>{fmtLocal(slot.start, { weekday: "short", day: "numeric", month: "short" })} · {fmtLocal(slot.start, timeOpts)} your time ({fmtLagos(slot.start, timeOpts)} in Lagos) · 30 min · Google Meet</> :
            touched && !valid ? <>Please fill in the highlighted parts.</> : <>Times show in your own time zone.</>}
        </p>
        <button type="submit" className="rd-btn rd-btn-accent" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : <>Send booking request <span aria-hidden="true">→</span></>}
        </button>
      </div>
    </form>
  );
}
