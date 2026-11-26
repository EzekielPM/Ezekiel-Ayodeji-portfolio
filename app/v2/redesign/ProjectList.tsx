"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project, ProjectCategory } from "./data";

type Filter = "all" | ProjectCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "live", label: "Live" },
  { id: "role", label: "Roles" },
  { id: "independent", label: "Independent" },
];

export default function RdProjectList({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [version, setVersion] = useState(0);
  const count = (f: Filter) => (f === "all" ? projects.length : projects.filter((p) => p.categories.includes(f)).length);
  const shown = projects.filter((p) => filter === "all" || p.categories.includes(filter));

  return (
    <div className="rd-list-wrap">
      <div className="rd-list-head" data-reveal>
        <h2 id="list-h">Everything, newest first</h2>
        <div className="rd-filters" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              className={filter === f.id ? "is-active" : undefined}
              onClick={() => { setFilter(f.id); setVersion((v) => v + 1); }}
            >
              {f.label} <span>{count(f.id)}</span>
            </button>
          ))}
        </div>
      </div>
      <ul className="rd-list" key={version} aria-live="polite">
        {shown.map((p, i) => {
          const external = p.href.startsWith("http");
          return (
            <li key={p.slug} style={{ animationDelay: `${i * 55}ms` }}>
              <a href={p.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
                <span className="rd-list-thumb"><Image src={p.image} alt="" fill sizes="140px" /></span>
                <span className="rd-list-main">
                  <strong>{p.name}</strong>
                  <span>{p.line}</span>
                </span>
                <span className="rd-list-status">
                  <span className={`rd-chip rd-chip-${p.tone}`}>{p.status}</span>
                  <small>{p.evidence}</small>
                </span>
                <span className="rd-list-role">{p.role}</span>
                <span className="rd-list-arrow" aria-hidden="true">{external ? "↗" : "→"}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
