"use client";

import { useState } from "react";

type Experience = {
  year: string;
  label: string;
  organisation: string;
  summary: string;
  contributions: string[];
};

const experiences: Experience[] = [
  {
    year: "2024",
    label: "iGaming · Product execution",
    organisation: "BetBonanza",
    summary: "Contributed to sportsbook product execution, user journeys, prioritisation and cross-functional delivery in a fast-moving iGaming environment.",
    contributions: [
      "Supported sportsbook product execution and user journeys",
      "Contributed to prioritisation in a fast-moving environment",
      "Worked across functions to support product delivery",
    ],
  },
  {
    year: "2025",
    label: "FinTech · MVP delivery",
    organisation: "Canvoy Payment",
    summary: "Worked on MVP scope, payment journeys, requirements, Jira delivery planning and coordination around security and QA readiness. The roadmap documents planned work, not a verified launch outcome.",
    contributions: [
      "Defined MVP scope and payment journey requirements",
      "Organised delivery work through Jira planning",
      "Coordinated security and QA readiness activities",
      "Roadmap reflects planned work, not a verified launch",
    ],
  },
  {
    year: "2026",
    label: "Technical product · Release delivery",
    organisation: "Wayagram",
    summary: "During a brief engagement, contributed to production migration activities, regression testing, stand-ups, demos and module reporting for a connected social, marketplace and payments product.",
    contributions: [
      "Supported production migration activities",
      "Contributed to regression testing",
      "Participated in stand-ups and demos",
      "Helped report progress across product modules",
    ],
  },
  {
    year: "2026",
    label: "Marketplace · Product leadership",
    organisation: "Siiqoo",
    summary: "Led product direction and sprint delivery across marketplace trust, protected payments, vendor tools, community and prioritisation.",
    contributions: [
      "Led product direction and sprint delivery",
      "Worked across marketplace trust and protected payments",
      "Covered vendor tools and community experiences",
      "Managed prioritisation across product needs",
    ],
  },
  {
    year: "10+ years",
    label: "Construction · Project leadership",
    organisation: "Construction and infrastructure",
    summary: "Led site and project delivery across residential, commercial and public-sector developments, building practical experience in risk, quality, dependencies and team coordination.",
    contributions: [
      "Led site and project delivery across multiple project types",
      "Worked across residential, commercial and public-sector developments",
      "Managed practical risks, quality and dependencies",
      "Coordinated teams through project execution",
    ],
  },
];

export default function SelectedExperienceFlipCards() {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  return (
    <div className="selected-experience-grid">
      {experiences.map((item) => {
        const isFlipped = Boolean(flipped[item.organisation]);
        return (
          <article className={`selected-experience-card${isFlipped ? " is-flipped" : ""}`} key={item.organisation}>
            <button
              className="selected-experience-toggle"
              type="button"
              aria-label={isFlipped ? `${item.organisation}: return to summary` : `${item.organisation}: view experience details`}
              aria-pressed={isFlipped}
              onClick={() => setFlipped((current) => ({ ...current, [item.organisation]: !current[item.organisation] }))}
            >
              <span className="selected-experience-inner">
                <span className="selected-experience-face selected-experience-front">
                  <span className="selected-experience-meta"><span>{item.year}</span><span>{item.label}</span></span>
                  <span className="selected-experience-title">{item.organisation}</span>
                  <span className="selected-experience-summary">{item.summary}</span>
                  <span className="selected-experience-hint">Click to explore <span aria-hidden="true">↻</span></span>
                </span>
                <span className="selected-experience-face selected-experience-back">
                  <span className="selected-experience-back-year">{item.year} · {item.organisation}</span>
                  <span className="selected-experience-back-heading">Experience highlights</span>
                  <span className="selected-experience-points">
                    {item.contributions.map((point) => <span key={point}>{point}</span>)}
                  </span>
                  <span className="selected-experience-hint">Click to return <span aria-hidden="true">↻</span></span>
                </span>
              </span>
            </button>
          </article>
        );
      })}
    </div>
  );
}
