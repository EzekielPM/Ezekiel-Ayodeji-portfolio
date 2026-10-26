"use client";

import { useState } from "react";

type PracticeItem = {
  number: string;
  title: string;
  statement: string;
  detail: string;
};

type FlipContent = {
  heading: string;
  points: string[];
  outcome: string;
};

const flipContent: Record<string, FlipContent> = {
  Discover: {
    heading: "What this looks like in practice",
    points: [
      "Talk to users and map their current journey",
      "Check support issues, behaviour and market context",
      "Separate the observed problem from assumed solutions",
    ],
    outcome: "A clearly evidenced problem worth solving.",
  },
  Define: {
    heading: "What this looks like in practice",
    points: [
      "Write the problem statement and desired outcome",
      "Map the key journey and edge cases",
      "Prioritise an MVP, document trade-offs and define success",
    ],
    outcome: "A shared scope the team can build and validate.",
  },
  Deliver: {
    heading: "What this looks like in practice",
    points: [
      "Break scope into stories with acceptance criteria",
      "Align sprint goals, owners and dependencies",
      "Work with design, engineering and QA through release",
    ],
    outcome: "A usable release with quality and readiness checked.",
  },
  Improve: {
    heading: "What this looks like in practice",
    points: [
      "Review adoption, completion and drop-off signals",
      "Listen for recurring feedback and support friction",
      "Run focused experiments and reprioritise from evidence",
    ],
    outcome: "A clear next improvement tied to user and business value.",
  },
};

export default function PracticeFlipCards({ items }: { items: PracticeItem[] }) {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  return (
    <div className="capability-grid">
      {items.map((item) => {
        const extra = flipContent[item.title];
        const flipped = Boolean(flippedCards[item.title]);

        return (
          <article
            className={`practice-card practice-flip-card${flipped ? " is-flipped" : ""}`}
            key={item.title}
          >
            <button
              className="practice-flip-toggle"
              type="button"
              aria-label={flipped ? `${item.title}: flip back to summary` : `${item.title}: flip card to see practical examples`}
              aria-pressed={flipped}
              onClick={() =>
                setFlippedCards((current) => ({
                  ...current,
                  [item.title]: !current[item.title],
                }))
              }
            >
              <span className="practice-flip-inner">
                <span className="practice-flip-face practice-flip-front">
                  <span className="practice-card-title">{item.title}</span>
                  <span className="practice-card-statement">{item.statement}</span>
                  <span className="practice-card-detail">{item.detail}</span>
                  <span className="practice-flip-hint">Click to explore <span aria-hidden="true">↻</span></span>
                </span>
                <span className="practice-flip-face practice-flip-back">
                  <span className="practice-card-number">{item.title}</span>
                  <span className="practice-back-heading">{extra.heading}</span>
                  <span className="practice-back-points">
                    {extra.points.map((point) => <span key={point}>{point}</span>)}
                  </span>
                  <span className="practice-back-outcome"><strong>Result</strong>{extra.outcome}</span>
                  <span className="practice-flip-hint">Click to return <span aria-hidden="true">↻</span></span>
                </span>
              </span>
            </button>
          </article>
        );
      })}
    </div>
  );
}
