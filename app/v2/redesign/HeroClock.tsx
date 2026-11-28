"use client";

import { useEffect, useState } from "react";

// Live Lagos time for the intro card's title block. Renders a neutral label on
// the server, then the real time once the page is running in the browser.
export default function HeroClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", { timeZone: "Africa/Lagos", hour: "numeric", minute: "2-digit" });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    let interval: number | undefined;
    const first = window.setTimeout(() => {
      tick();
      interval = window.setInterval(tick, 60000);
    }, 60000 - (Date.now() % 60000));
    return () => { window.clearTimeout(first); if (interval) window.clearInterval(interval); };
  }, []);

  return (
    <span className="rd-sheet-cell-value">
      {time ? <><time suppressHydrationWarning>{time}</time> · WAT (UTC+1)</> : "WAT (UTC+1)"}
    </span>
  );
}
