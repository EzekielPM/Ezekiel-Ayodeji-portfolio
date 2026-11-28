import { roles } from "./data";

// Every professional role, newest first, on one line. Used on the home page
// (compact) and at the top of /work.
export default function RoleTimeline({ heading = "Every role, at a glance", headingLevel = 3 }: { heading?: string; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className="rd-roles" data-reveal>
      <H className="rd-roles-h">{heading}</H>
      <ol className="rd-roles-list">
        {roles.map((r) => (
          <li key={r.slug} className="rd-role">
            <a href={r.href}>
              <span className="rd-role-dot" aria-hidden="true" />
              <span className="rd-role-dates">{r.dates}</span>
              <strong className="rd-role-co">{r.company}</strong>
              <span className="rd-role-title">{r.title}</span>
              <span className="rd-role-sector">{r.sector}</span>
              <span className="rd-role-out">{r.outcome}</span>
              <span className="rd-role-more">Case study <span aria-hidden="true">→</span></span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
