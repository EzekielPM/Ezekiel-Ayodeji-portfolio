import Image from "next/image";
import type { Slide } from "./data";

// Two featured products on the home page; everything else lives on /work.
export default function FeaturedWork({ items, total, others }: { items: Slide[]; total: number; others: string[] }) {
  return (
    <>
      <div className="rd-feat">
        {items.map((s, i) => {
          const main = s.actions.find((a) => a.primary) ?? s.actions[0];
          return (
            <div key={s.slug} data-reveal style={{ transitionDelay: `${i * 120}ms` }}>
              <a className="rd-feat-card" href={main.href} style={{ ["--brand" as string]: s.bg }}>
                <span className="rd-feat-img">
                  <Image src={s.image} alt={s.imageAlt} fill sizes="(max-width: 860px) 100vw, 540px" />
                </span>
                <span className="rd-feat-body">
                  <span className="rd-feat-chips">
                    <span className="rd-feat-status">{s.chips[0]}</span>
                    <span className="rd-feat-kind">{s.chips[1]}</span>
                  </span>
                  <h3>{s.name}</h3>
                  <span className="rd-feat-tag">{s.tagline}</span>
                  <span className="rd-feat-sum">{s.summary}</span>
                  <span className="rd-feat-foot">
                    <span>{s.chips[2] ?? ""}</span>
                    <b>{main.label} <span aria-hidden="true">→</span></b>
                  </span>
                </span>
              </a>
            </div>
          );
        })}
      </div>
      <div className="rd-feat-all" data-reveal>
        <a className="rd-btn rd-btn-accent" href="/work">See all {total} projects <span aria-hidden="true">→</span></a>
        <span>{others.join(", ").replace(/, ([^,]*)$/, " and $1")}</span>
      </div>
    </>
  );
}
