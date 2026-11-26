import Image from "next/image";

// Shared pieces for case study pages in the new design.
export function CaseGallery({ items, label }: { items: { src: string; label: string }[]; label: string }) {
  return (
    <section className="rd-case-gallery" data-reveal aria-label={label}>
      {items.map((g) => (
        <a key={g.src} href={g.src} target="_blank" rel="noreferrer">
          <Image src={g.src} alt={g.label} width={800} height={600} sizes="(max-width: 720px) 72vw, 280px" />
          <span>{g.label}</span>
        </a>
      ))}
    </section>
  );
}

export function CaseVideo({ src, poster, caption }: { src: string; poster?: string; caption: string }) {
  return (
    <figure className="rd-case-figure" data-reveal>
      <video className="rd-case-video" controls playsInline preload="none" poster={poster}>
        <source src={src} type="video/mp4" />
      </video>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function CaseDocs({ docs }: { docs: { title: string; note: string; href: string }[] }) {
  return (
    <section className="rd-case-docs" data-reveal aria-label="Documents">
      <p className="rd-case-docs-label">Documents</p>
      {docs.map((d) => (
        <a key={d.href} href={d.href} target="_blank" rel="noreferrer">
          <span><strong>{d.title}</strong><small>{d.note}</small></span>
          <b>Open PDF <span aria-hidden="true">↗</span></b>
        </a>
      ))}
    </section>
  );
}

export function CaseNext({ href, label }: { href: string; label: string }) {
  return (
    <nav className="rd-case-next" aria-label="Next case study" data-reveal>
      <span>Next in my work</span>
      <a href={href}>{label} →</a>
    </nav>
  );
}
