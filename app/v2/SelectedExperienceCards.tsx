"use client";

import { useState } from "react";

const experiences = [
  {
    year: "2024",
    name: "BetBonanza",
    category: "iGaming · Sportsbook product execution",
    front: "Product delivery in a fast-moving sportsbook environment.",
    back: "Contributed to sportsbook product execution, user journeys, prioritisation and cross-functional delivery, helping the team keep product work focused and moving.",
    number: "01",
  },
  {
    year: "2025",
    name: "Canvoy Payment",
    category: "FinTech · Digital payments MVP",
    front: "Turning everyday payment needs into a workable MVP scope.",
    back: "Worked on MVP scope and payment journeys, shaped requirements and Jira delivery planning, and coordinated work around security and QA readiness. The roadmap reflects planned work, not a verified launch outcome.",
    number: "02",
  },
  {
    year: "2026",
    name: "Wayagram",
    category: "Social platform · Technical product delivery",
    front: "Supporting release readiness across connected product modules.",
    back: "During a brief engagement, contributed to production migration activities, regression testing, stand-ups, demos and module reporting for a connected social, marketplace and payments product.",
    number: "03",
  },
  {
    year: "2026",
    name: "Siiqoo",
    category: "E-commerce · Marketplace product leadership",
    front: "Building trust into the buyer and vendor experience.",
    back: "Led product direction and sprint delivery across marketplace trust, protected payments, vendor tools, community features and prioritisation.",
    number: "04",
  },
  {
    year: "10+ years",
    name: "Construction & Infrastructure",
    category: "Project leadership · Built environment",
    front: "Managing complex site delivery, people, risk and quality.",
    back: "Led site and project delivery across residential, commercial and public-sector developments, building hands-on experience in risk, quality, dependencies and team coordination.",
    number: "05",
  },
];

export default function SelectedExperienceCards() {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  return (
    <div className="selected-experience-grid">
      {experiences.map((item) => {
        const isFlipped = Boolean(flipped[item.number]);
        return (
          <article className={`experience-flip-card${isFlipped ? " is-flipped" : ""}`} key={item.number}>
            <button
              className="experience-flip-button"
              type="button"
              aria-pressed={isFlipped}
              aria-label={isFlipped ? `Show ${item.name} summary` : `Show details for ${item.name}`}
              onClick={() => setFlipped((current) => ({ ...current, [item.number]: !current[item.number] }))}
            >
              <span className="experience-flip-inner">
                <span className="experience-flip-face experience-flip-front">
                  <span className="experience-card-top"><span>{item.year}</span><span>{item.number}</span></span>
                  <span className="experience-card-name">{item.name}</span>
                  <span className="experience-card-category">{item.category}</span>
                  <span className="experience-card-summary">{item.front}</span>
                  <span className="experience-card-hint">Click to read more <span aria-hidden="true">↻</span></span>
                </span>
                <span className="experience-flip-face experience-flip-back">
                  <span className="experience-card-top"><span>{item.year}</span><span>EXPERIENCE</span></span>
                  <span className="experience-card-back-title">{item.name}</span>
                  <span className="experience-card-detail">{item.back}</span>
                  <span className="experience-card-hint">Click to return <span aria-hidden="true">↻</span></span>
                </span>
              </span>
            </button>
          </article>
        );
      })}
    </div>
  );
}
