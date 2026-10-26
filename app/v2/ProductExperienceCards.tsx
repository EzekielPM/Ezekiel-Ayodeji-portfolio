"use client";

import Image from "next/image";
import { useState } from "react";

type Product = {
  number: string;
  title: string;
  label: string;
  status: string;
  summary: string;
  image: string;
  tags: string[];
  href: string;
  action: string;
};

export default function ProductExperienceCards({ items }: { items: Product[] }) {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  return (
    <div className="case-list product-experience-grid">
      {items.map((item, index) => {
        const flipped = Boolean(flippedCards[item.title]);
        return (
          <article className={`case-card product-experience-card${flipped ? " is-flipped" : ""}`} key={item.title}>
            <button
              className="product-flip-toggle"
              type="button"
              aria-label={flipped ? `${item.title}: return to overview` : `${item.title}: explore product details`}
              aria-pressed={flipped}
              onClick={() => setFlippedCards((current) => ({ ...current, [item.title]: !current[item.title] }))}
            >
              <span className="product-flip-inner">
                <span className="product-flip-face product-flip-front">
                  <span className="case-top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span className="case-status">{item.status}</span>
                    <span className="product-card-flip-icon" aria-hidden="true">↻</span>
                  </span>
                  <span className="case-intro">
                    <span className="product-card-title">{item.title}</span>
                    <span className="product-card-summary">{item.summary}</span>
                  </span>
                  <span className="product-card-label">{item.label}</span>
                  <span className="product-card-tags">
                    {item.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}
                  </span>
                  <span className="practice-flip-hint">Click to explore <span aria-hidden="true">↻</span></span>
                </span>
                <span className="product-flip-face product-flip-back">
                  <span className="product-back-eyebrow">PRODUCT SNAPSHOT</span>
                  <span className="product-back-title">{item.title}</span>
                  <span className="product-back-summary">{item.summary}</span>
                  <span className="product-back-tags">
                    {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </span>
                  <span className="practice-flip-hint">Click to return <span aria-hidden="true">↻</span></span>
                </span>
              </span>
            </button>
            <div className="product-card-action">
              <a className="case-button" href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
                {item.action}<span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}
