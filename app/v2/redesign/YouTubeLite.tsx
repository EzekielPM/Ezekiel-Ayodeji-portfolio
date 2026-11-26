"use client";

import { useState } from "react";

// Loads the YouTube player only when the visitor presses play.
export default function RdYouTube({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false);
  const [broken, setBroken] = useState(false);
  if (play) {
    return (
      <div className="rd-video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <button type="button" className={`rd-video rd-video-poster${broken ? " is-broken" : ""}`} onClick={() => setPlay(true)} aria-label={`Play: ${title}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" onError={() => setBroken(true)} />
      <span className="rd-video-badge">Intro video</span>
      <span className="rd-video-play" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="30" height="30"><path d="M8 5 L19 12 L8 19 Z" fill="currentColor" /></svg>
      </span>
    </button>
  );
}
