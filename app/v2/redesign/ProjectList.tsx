import Image from "next/image";
import type { Project } from "./data";

const legend = [
  { tone: "live", label: "Live product", note: "Shipped and in use" },
  { tone: "mvp", label: "Live · MVP", note: "Deployed first version" },
  { tone: "demo", label: "Live demo", note: "Working build, test payments" },
  { tone: "plan", label: "Planning", note: "Scoped, not launched" },
  { tone: "concept", label: "Concept", note: "Independent study" },
  { tone: "past", label: "Past role", note: "Earlier job" },
];

function Card({ p, i }: { p: Project; i: number }) {
  const external = p.href.startsWith("http");
  return (
    <li className="rd-track-item" data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
      <a className="rd-track-card" href={p.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
        <span className="rd-track-media">
          {p.image ? <Image src={p.image} alt="" fill sizes="(max-width: 860px) 92vw, 540px" /> : null}
          <span className={`rd-chip rd-chip-${p.tone}`}>{p.status}</span>
        </span>
        <span className="rd-track-body">
          <strong>{p.name} <span aria-hidden="true">{external ? "↗" : "→"}</span></strong>
          <span className="rd-track-line">{p.line}</span>
          <span className="rd-track-meta">{p.role}<em>{p.evidence}</em></span>
        </span>
      </a>
    </li>
  );
}

export default function RdProjectList({ projects }: { projects: Project[] }) {
  const roles = projects.filter((p) => p.categories.includes("role"));
  const builds = projects.filter((p) => !p.categories.includes("role"));

  return (
    <div className="rd-list-wrap">
      <div className="rd-list-head" data-reveal>
        <div>
          <h2 id="list-h">Jobs and builds</h2>
          <p className="rd-list-intro">Left: roles I held at companies. Right: products I built or studied on my own. Every card says how far it got.</p>
        </div>
      </div>
      <ul className="rd-legend" aria-label="What each status means" data-reveal>
        {legend.map((l) => (
          <li key={l.tone}><span className={`rd-chip rd-chip-${l.tone}`}>{l.label}</span>{l.note}</li>
        ))}
      </ul>
      <div className="rd-tracks">
        <section className="rd-track" aria-labelledby="track-roles">
          <div className="rd-track-head" data-reveal><h3 id="track-roles">Roles I held</h3><span>{roles.length} companies, newest first</span></div>
          <ul>{roles.map((p, i) => <Card key={p.slug} p={p} i={i} />)}</ul>
        </section>
        <section className="rd-track" aria-labelledby="track-builds">
          <div className="rd-track-head" data-reveal><h3 id="track-builds">Things I built</h3><span>{builds.length} independent, newest first</span></div>
          <ul>{builds.map((p, i) => <Card key={p.slug} p={p} i={i} />)}</ul>
        </section>
      </div>
    </div>
  );
}
