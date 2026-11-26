import type { Metadata } from "next";
import "../../v2/redesign/redesign.css";
import RdHeader from "../../v2/redesign/Header";
import RdMotion from "../../v2/redesign/Motion";
import RdFooter from "../../v2/redesign/Footer";
import { FloatingContact } from "../../v2/PortfolioControls";

export const metadata: Metadata = {
  title: "BetBonanza case study | Olusola Ayodeji Ezekiel",
  description: "Associate Product Manager in iGaming: sportsbook user journeys, prioritisation and cross-functional delivery at BetBonanza Nigeria.",
  alternates: { canonical: "/case-studies/betbonanza" },
};

const IGAMING_POST = "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_productmanager-igaming-userexperience-activity-7481301268641226753-etSu";

export default function BetBonanzaCaseStudy() {
  return (
    <div className="rd" id="top">
      <RdMotion />
      <RdHeader base="/" />
      <main className="rd-case">
        <a className="rd-case-back" href="/#work">← Back to my work</a>

        <header className="rd-case-hero" data-reveal>
          <p className="rd-case-kicker">Case study · iGaming · Sportsbook</p>
          <h1>BetBonanza: learning product on a sportsbook that never sleeps</h1>
          <p className="rd-case-lead">My first product role. I worked on sportsbook user journeys at BetBonanza Nigeria, helping prioritise work and keep delivery moving across a fast-paced team.</p>
          <dl className="rd-case-facts">
            <div><dt>Role</dt><dd>Associate Product Manager</dd></div>
            <div><dt>Dates</dt><dd>Jan 2021 – Mar 2022</dd></div>
            <div><dt>Domain</dt><dd>iGaming · Sportsbook</dd></div>
            <div><dt>Status</dt><dd><span className="rd-chip rd-chip-past">Past role</span></dd></div>
          </dl>
        </header>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">01</span>
          <div>
            <h2>The context</h2>
            <p>A sportsbook moves at the speed of the fixtures list. Markets open and close around live matches, promotions change weekly, and users usually arrive with one job in mind: find a game, build a bet slip and place it before kick-off. Product work has to fit around that rhythm.</p>
          </div>
        </section>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">02</span>
          <div>
            <h2>What I owned</h2>
            <ul>
              <li>Contributing to sportsbook user journeys, from finding an event to placing a bet.</li>
              <li>Helping prioritise requests from across the business into a workable order for the team.</li>
              <li>Keeping cross-functional delivery organised and moving with engineering, design and operations.</li>
            </ul>
          </div>
        </section>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">03</span>
          <div>
            <h2>A trade-off that stuck with me</h2>
            <p>Promotions grab attention, and in iGaming there is always pressure to show more of them. But every extra pop-up or banner sits between users and the task they came to complete. Using the product myself as a customer made that tension obvious: interruptions that look harmless in a planning meeting feel very different when you are trying to place a bet before a match starts.</p>
            <p>The lesson I carried forward is to protect the core journey first, and earn the right to interrupt it.</p>
            <a className="rd-text-link" href={IGAMING_POST} target="_blank" rel="noreferrer">Read my post: Becoming the User, a UX lesson in iGaming ↗</a>
          </div>
        </section>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">04</span>
          <div>
            <h2>What it taught me</h2>
            <ul>
              <li>Speed and clarity matter more than features when users are working against the clock.</li>
              <li>Prioritisation is a conversation, not a list: the order has to make sense to the people asking.</li>
              <li>Being a user of your own product is one of the fastest ways to find friction.</li>
            </ul>
          </div>
        </section>

        <p className="rd-case-note" data-reveal>About the evidence: this was an early role and I don&apos;t have product artefacts or metrics I can share publicly, so this page describes my contribution rather than claiming outcomes.</p>

        <nav className="rd-case-next" aria-label="Next case study" data-reveal>
          <span>Next in my journey</span>
          <a href="/case-studies/canvoy">Canvoy Payment: everyday payments, planned properly →</a>
        </nav>
      </main>
      <RdFooter base="/" />
      <FloatingContact />
    </div>
  );
}
