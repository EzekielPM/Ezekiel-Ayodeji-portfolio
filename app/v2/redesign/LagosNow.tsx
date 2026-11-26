"use client";

import { useEffect, useState } from "react";

const TZ = "Africa/Lagos";
const LAT = 6.5244;
const LON = 3.3792;

type Weather = { temp: number; code: number; isDay: boolean } | null;

function describe(code: number) {
  if (code === 0) return "clear";
  if (code <= 2) return "partly cloudy";
  if (code === 3) return "cloudy";
  if (code === 45 || code === 48) return "hazy";
  if (code >= 51 && code <= 67) return "rain";
  if (code >= 80 && code <= 82) return "showers";
  if (code >= 95) return "thunderstorms";
  return "mild";
}

// Minutes a time zone is ahead of UTC, from the browser's own time-zone data.
function zoneOffset(now: Date, timeZone?: string) {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone, hourCycle: "h23", year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric" }).formatToParts(now);
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value);
  const asUtc = Date.UTC(get("year"), get("month") - 1, get("day"), get("hour") % 24, get("minute"));
  return Math.round((asUtc - Math.floor(now.getTime() / 60000) * 60000) / 60000);
}

function offsetText(now: Date) {
  const diffMin = zoneOffset(now, TZ) - zoneOffset(now);
  if (diffMin === 0) return "Same time as you";
  const h = Math.floor(Math.abs(diffMin) / 60);
  const m = Math.abs(diffMin) % 60;
  const span = `${h ? `${h} hour${h === 1 ? "" : "s"}` : ""}${h && m ? " " : ""}${m ? `${m} min` : ""}`;
  return `${span} ${diffMin > 0 ? "ahead of" : "behind"} you`;
}

function Icon({ code, isDay }: { code: number; isDay: boolean }) {
  const rainy = (code >= 51 && code <= 67) || (code >= 80 && code <= 82) || code >= 95;
  const cloudy = code >= 2;
  return (
    <svg className="rd-now-icon" width="56" height="56" viewBox="0 0 64 64" aria-hidden="true">
      {isDay ? (
        <g className="rd-now-sun">
          <circle cx="26" cy="24" r="10" fill="#FBBF24" />
          <g stroke="#FBBF24" strokeWidth="3" strokeLinecap="round"><path d="M26 6v5M26 37v5M8 24h5M39 24h5M13 11l3.5 3.5M35.5 33.5 39 37M13 37l3.5-3.5M35.5 14.5 39 11" /></g>
        </g>
      ) : (
        <path d="M34 10a14 14 0 1 0 12 22A16 16 0 0 1 34 10z" fill="#E2E8F0" />
      )}
      {cloudy && <g className="rd-now-cloud"><path d="M24 50h26a9 9 0 0 0 0-18 12 12 0 0 0-23 3 7.5 7.5 0 0 0-3 15z" fill="#E5E7EB" /></g>}
      {rainy && <g stroke="#7DD3FC" strokeWidth="3" strokeLinecap="round"><path d="M30 55l-2 5M38 55l-2 5M46 55l-2 5" /></g>}
    </svg>
  );
}

export default function LagosNow() {
  const [now, setNow] = useState<Date | null>(null);
  const [weather, setWeather] = useState<Weather>(null);

  useEffect(() => {
    setNow(new Date());
    // Tick on the minute boundary so the clock never lags.
    let interval: number | undefined;
    const first = window.setTimeout(() => {
      setNow(new Date());
      interval = window.setInterval(() => setNow(new Date()), 60000);
    }, 60000 - (Date.now() % 60000));
    return () => { window.clearTimeout(first); if (interval) window.clearInterval(interval); };
  }, []);

  useEffect(() => {
    const load = () =>
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,weather_code,is_day&timezone=${encodeURIComponent(TZ)}`)
        .then((r) => (r.ok ? r.json() : null))
        .then((j) => {
          if (j?.current) setWeather({ temp: Math.round(j.current.temperature_2m), code: j.current.weather_code, isDay: j.current.is_day === 1 });
        })
        .catch(() => {});
    load();
    const t = window.setInterval(load, 15 * 60 * 1000);
    return () => window.clearInterval(t);
  }, []);

  const time = now ? now.toLocaleTimeString("en-GB", { timeZone: TZ, hour: "numeric", minute: "2-digit", hour12: true }).replace(/\s?(am|pm)$/i, (x) => " " + x.trim().toLowerCase()) : "–";
  const hour = now ? Number(now.toLocaleString("en-GB", { timeZone: TZ, hour: "2-digit", hour12: false })) : 12;
  const isDay = weather ? weather.isDay : hour >= 6 && hour < 19;

  return (
    <div className="rd-now" aria-live="off">
      <Icon code={weather?.code ?? 1} isDay={isDay} />
      <div>
        <p className="rd-now-label">Right now in Lagos</p>
        <p className="rd-now-main">
          <time suppressHydrationWarning>{time}</time>
          {weather && <> · {weather.temp}°C, {describe(weather.code)}</>}
        </p>
        <p className="rd-now-sub" suppressHydrationWarning>WAT (UTC+1){now ? ` · ${offsetText(now)}` : ""}</p>
      </div>
    </div>
  );
}
