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

export default function RdProjectList({ projects, limit, headingLevel = "h2" }: { projects: Project[]; limit?: number; headingLevel?: "h1" | "h2" }) {
  const allRoles = projects.filter((p) => p.categories.includes("role"));
  const allBuilds = projects.filter((p) => !p.categories.includes("role"));
  const roles = limit ? allRoles.slice(0, limit) : allRoles;
  const builds = limit ? allBuilds.slice(0, limit) : allBuilds;
  const Heading = headingLevel;

  return (
    <div className="rd-list-wrap">
      <div className="rd-list-head" data-reveal>
        <div>
          <Heading id="list-h" className="rd-list-title">Jobs and builds</Heading>
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
          <div className="rd-track-head" data-reveal><h3 id="track-roles">Roles I held</h3><span>{limit ? `Latest ${roles.length} of ${allRoles.length}` : `${allRoles.length} companies, newest first`}</span></div>
          <ul>{roles.map((p, i) => <Card key={p.slug} p={p} i={i} />)}</ul>
        </section>
        <section className="rd-track" aria-labelledby="track-builds">
          <div className="rd-track-head" data-reveal><h3 id="track-builds">Things I built</h3><span>{limit ? `Latest ${builds.length} of ${allBuilds.length}` : `${allBuilds.length} independent, newest first`}</span></div>
          <ul>{builds.map((p, i) => <Card key={p.slug} p={p} i={i} />)}</ul>
        </section>
      </div>
      {limit && (
        <div className="rd-see-all" data-reveal>
          <a className="rd-btn rd-btn-dark" href="/work">See all {projects.length} projects <span aria-hidden="true">→</span></a>
          <span>Including Canvoy, BetBonanza, Kuda 3.0 and DM to Confirmed Order.</span>
        </div>
      )}
    </div>
  );
}
