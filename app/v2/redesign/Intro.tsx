"use client";

import { useEffect } from "react";

// Opening screen: a blueprint draws the page while a greeting types the real Lagos time,
// then the drawing fades into the live site. Once per visit, about 2.5s, skips on any tap or key.
const SEEN_KEY = "rd-intro-seen";

function lagosGreeting(now: Date) {
  const hour = Number(new Intl.DateTimeFormat("en-GB", { timeZone: "Africa/Lagos", hour: "2-digit", hourCycle: "h23" }).format(now));
  const part = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  const time = new Intl.DateTimeFormat("en-GB", { timeZone: "Africa/Lagos", hour: "numeric", minute: "2-digit", hour12: true })
    .format(now)
    .replace(/\s?(am|pm)$/i, (x) => " " + x.trim().toLowerCase());
  return { part, time };
}

const CSS = `
html.portfolio-intro-active,html.portfolio-intro-active body{overflow:hidden}
.rd-intro{position:fixed;inset:0;z-index:9999;background:#F6F1E7;color:#121722;font-family:Inter,system-ui,sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;transition:opacity .7s ease,filter .7s ease}
.rd-intro.is-out{opacity:0;filter:blur(6px);pointer-events:none}
.rd-intro-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(43,92,158,.10) 1px,transparent 1px),linear-gradient(90deg,rgba(43,92,158,.10) 1px,transparent 1px);background-size:28px 28px;opacity:0;animation:rdIntroFade .4s ease forwards}
.rd-intro svg{position:relative;width:min(92vw,1080px);height:auto;max-height:62vh}
.rd-intro svg *{fill:none;stroke:#2B5C9E;stroke-width:1.6;stroke-linecap:round;vector-effect:non-scaling-stroke;stroke-dasharray:1;stroke-dashoffset:1;animation:rdIntroDraw 1.1s cubic-bezier(.6,.05,.3,1) forwards}
.rd-intro svg .s2{animation-delay:.15s}.rd-intro svg .s3{animation-delay:.3s}.rd-intro svg .s4{animation-delay:.45s}.rd-intro svg .s5{animation-delay:.6s}
.rd-intro-greet{position:relative;min-height:1.6em;margin-bottom:22px;font-size:clamp(15px,2vw,20px);font-weight:600;color:#4D4840}
.rd-intro-greet b{color:#3D5A2E}
.rd-intro-greet span{display:inline-block;overflow:hidden;white-space:nowrap;vertical-align:bottom;max-width:0;animation:rdIntroType 1s steps(34) .2s forwards}
.rd-intro-cap{position:relative;margin-top:22px;font-family:"Fraunces",Georgia,serif;font-size:clamp(18px,2.6vw,26px);opacity:0;animation:rdIntroUp .6s ease .7s forwards}
.rd-intro-skip{position:absolute;bottom:22px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#6A6359;opacity:0;animation:rdIntroFade .4s ease 1s forwards}
.rd-intro.is-navy{background:#0B1220;color:#E8EDF7}
.rd-intro.is-navy .rd-intro-grid{background-image:linear-gradient(rgba(124,155,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(124,155,255,.12) 1px,transparent 1px)}
.rd-intro.is-navy svg *{stroke:#7C9BFF}
.rd-intro.is-navy .rd-intro-greet{color:#B6C0D4}.rd-intro.is-navy .rd-intro-greet b{color:#9CCB7A}.rd-intro.is-navy .rd-intro-skip{color:#8A96AD}
@keyframes rdIntroFade{to{opacity:1}}
@keyframes rdIntroDraw{to{stroke-dashoffset:0}}
@keyframes rdIntroType{to{max-width:40em}}
@keyframes rdIntroUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
`;

export default function RdIntro() {
  useEffect(() => {
    const root = document.documentElement;
    const clearPending = () => root.classList.remove("rd-intro-pending", "rd-intro-pending-navy");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return clearPending();
    try {
      if (window.sessionStorage.getItem(SEEN_KEY)) return clearPending();
      window.sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      // Private mode or blocked storage: still show it, once per page load.
    }

    const style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);

    const { part, time } = lagosGreeting(new Date());
    const intro = document.createElement("div");
    let navy = false;
    try {
      const saved = window.localStorage.getItem("portfolio-theme");
      navy = saved ? saved === "navy" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch { /* default to light */ }
    intro.className = navy ? "rd-intro is-navy" : "rd-intro";
    intro.setAttribute("role", "status");
    intro.setAttribute("aria-label", `${part} from Lagos. Welcome to Olusola Ayodeji Ezekiel's portfolio.`);
    intro.innerHTML = `
      <div class="rd-intro-grid" aria-hidden="true"></div>
      <p class="rd-intro-greet" aria-hidden="true"><span>${part} from Lagos · it's <b>${time}</b> here.</span></p>
      <svg viewBox="0 0 1000 560" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <path pathLength="1" class="s1" d="M0 40H1000"/>
        <rect pathLength="1" class="s1" x="18" y="12" width="40" height="40" rx="10"/>
        <rect pathLength="1" class="s2" x="70" y="80" width="860" height="440" rx="28"/>
        <path pathLength="1" class="s2" d="M70 80H40M930 80H960M70 520H40M930 520H960M70 80V50M930 80V50M70 520V550M930 520V550"/>
        <rect pathLength="1" class="s3" x="410" y="120" width="180" height="34" rx="17"/>
        <rect pathLength="1" class="s3" x="250" y="200" width="500" height="80" rx="6"/>
        <path pathLength="1" class="s4" d="M300 320H700M340 348H660"/>
        <rect pathLength="1" class="s5" x="366" y="390" width="128" height="44" rx="10"/>
        <rect pathLength="1" class="s5" x="506" y="390" width="128" height="44" rx="10"/>
      </svg>
      <p class="rd-intro-cap" aria-hidden="true">Planned like a builder. Delivered like a PM.</p>
      <span class="rd-intro-skip" aria-hidden="true">Tap to skip</span>`;
    document.body.appendChild(intro);
    root.classList.add("portfolio-intro-active");
    root.classList.remove("rd-intro-pending", "rd-intro-pending-navy");

    let done = false;
    const timers: number[] = [];
    const finish = () => {
      if (done) return;
      done = true;
      intro.classList.add("is-out");
      root.classList.remove("portfolio-intro-active");
      timers.push(window.setTimeout(() => { intro.remove(); style.remove(); }, 750));
      window.removeEventListener("keydown", finish);
    };
    intro.addEventListener("pointerdown", finish);
    window.addEventListener("keydown", finish);
    timers.push(window.setTimeout(finish, 2300));

    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener("keydown", finish);
      intro.remove();
      style.remove();
      root.classList.remove("portfolio-intro-active");
    };
  }, []);
  return null;
}
