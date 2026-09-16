"use client";

import { useEffect, useState } from "react";

const notes = [
  { src: "/rough-space/insurpe-exploration.jpg", alt: "Insurpe product flow exploration", title: "Insurpe exploration" },
  { src: "/rough-space/pm-note-problem-solving.png", alt: "Product management as problem solving", title: "Problem solver note" },
  { src: "/rough-space/pm-note-validation.png", alt: "Feature validation product note", title: "Feature validation note" },
  { src: "/rough-space/signbridge-interface-1.png", alt: "SignBridge accessibility product interface", title: "SignBridge concept" },
  { src: "/rough-space/signbridge-interface-2.png", alt: "SignBridge sign language translation interface", title: "SignBridge interface study" },
  { src: "/rough-space/pm-note-payment-experience.png", alt: "Payment experience product note", title: "Payment experience thinking" },
  { src: "/rough-space/canvoy-design-workspace.jpg", alt: "Canvoy product design workspace", title: "Canvoy design workspace" },
];

export default function RoughSpacePage() {
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setZoom(null);
    };
    window.addEventListener("keydown", close);
    document.body.style.overflow = zoom ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", close);
      document.body.style.overflow = "";
    };
  }, [zoom]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/v2">
          <span>OLUSOLA AYODEJI EZEKIEL</span>
          <small>Product Manager</small>
        </a>
        <nav className="site-nav">
          <a className="nav-cta desktop-nav-link" href="/v2">Return to portfolio</a>
        </nav>
      </header>

      <section className="rough-space section" id="top">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Rough Space</p>
            <h2>Where product thinking meets creative experimentation.</h2>
          </div>
          <p>
            This is where I explore ideas before they become polished outputs. Music, short films, product notes and practical resources live here as part of how I observe, experiment and think through problems.
          </p>
        </div>

        <div className="rough-grid">
          <article className="rough-card music-card">
            <div className="rough-card-heading">
              <span>01</span>
              <div>
                <p>Listening room</p>
                <h3>Original music</h3>
                <p>Music is one of the ways I explore mood, storytelling and everyday experience outside product work.</p>
              </div>
            </div>
            <div className="audio-list">
              <div>
                <div><strong>Era Transition</strong><small>Original track</small></div>
                <audio controls preload="metadata"><source src="/rough-space/era-transition.mp3" type="audio/mpeg" />Your browser does not support audio.</audio>
              </div>
              <div>
                <div><strong>9–5 Lagos</strong><small>Original track</small></div>
                <audio controls preload="metadata"><source src="/rough-space/nine-to-five-lagos.mp3" type="audio/mpeg" />Your browser does not support audio.</audio>
              </div>
            </div>
          </article>

          <article className="rough-card film-card">
            <div className="rough-card-heading">
              <span>02</span>
              <div>
                <p>Moving ideas</p>
                <h3>Video studio</h3>
                <p>Short-form video gives me another way to explore storytelling, product communication and visual context.</p>
              </div>
            </div>
            <div className="studio-video-grid">
              <figure>
                <video controls playsInline preload="none" poster="/rough-space/studio-film-poster.jpg">
                  <source src="/rough-space/studio-film-web.mp4" type="video/mp4" />Your browser does not support video.
                </video>
                <figcaption><strong>Night Drive</strong><small>A visual storytelling experiment</small></figcaption>
              </figure>
              <figure>
                <video controls playsInline preload="none" poster="/rough-space/studio-short-poster.jpg">
                  <source src="/rough-space/studio-short-web.mp4" type="video/mp4" />Your browser does not support video.
                </video>
                <figcaption><strong>Canvoy concept walkthrough</strong><small>An early product experience in motion</small></figcaption>
              </figure>
            </div>
          </article>

          <article className="rough-card notebook-card">
            <div className="rough-card-heading">
              <span>03</span>
              <div>
                <p>Visual notebook</p>
                <h3>Product experiments and artwork</h3>
                <p>Unfinished product thoughts, interface ideas and visual experiments that help me think before the work becomes formal.</p>
              </div>
            </div>
            <div className="note-gallery">
              {notes.map((note) => (
                <button key={note.src} type="button" onClick={() => setZoom({ src: note.src, alt: note.alt })} aria-label={`Open ${note.alt}`}>
                  <img src={note.src} alt={note.alt} />
                  <span>{note.title}</span>
                </button>
              ))}
            </div>
          </article>

          <article className="rough-card handbook-card">
            <div className="rough-card-heading">
              <span>04</span>
              <div>
                <p>Working library</p>
                <h3>PM toolkit handbook</h3>
              </div>
            </div>
            <p>
              A practical working reference built around the tools and habits I use across product work, from discovery and documentation to prioritisation, delivery, technical fluency, QA and stakeholder management.
            </p>
            <div className="handbook-actions">
              <a className="button primary" href="/rough-space/pm-toolkit-handbook.pdf" target="_blank" rel="noreferrer">Read the handbook <span>↗</span></a>
              <a className="button text" href="/rough-space/pm-toolkit-handbook.pdf" download>Download PDF <span>↓</span></a>
            </div>
          </article>
        </div>
      </section>

      <section className="statement">
        <p className="section-kicker">Why this space exists</p>
        <blockquote>
          Not every useful idea begins as a roadmap item. Some start as a note, a sound, a sketch or a question worth exploring.
        </blockquote>
      </section>

      <footer>
        <div className="brand"><span>OLUSOLA AYODEJI EZEKIEL</span><small>Product Manager · Rough Space</small></div>
        <div className="hero-actions">
          <a className="button text" href="/v2">Return to portfolio <span>↖</span></a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      {zoom && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Expanded image" onClick={() => setZoom(null)}>
          <button type="button" aria-label="Close image">Close ×</button>
          <img src={zoom.src} alt={zoom.alt} />
          <p>{zoom.alt}</p>
        </div>
      )}
    </main>
  );
}
