import type { Metadata } from "next";
import Image from "next/image";
import "../../v2/redesign/redesign.css";
import RdHeader from "../../v2/redesign/Header";
import RdMotion from "../../v2/redesign/Motion";
import RdFooter from "../../v2/redesign/Footer";
import { FloatingContact } from "../../v2/PortfolioControls";

export const metadata: Metadata = {
  title: "BetBonanza case study | Olusola Ayodeji Ezekiel",
  description: "Associate Product Manager in iGaming at BetBonanza Nigeria: sportsbook journeys and a 12 Days of December bonus calendar shaped by competitor analysis.",
  alternates: { canonical: "/case-studies/betbonanza" },
};

const IGAMING_POST = "https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_productmanager-igaming-userexperience-activity-7481301268641226753-etSu";

export default function BetBonanzaCaseStudy() {
  return (
    <div className="rd" id="top">
      <RdMotion />
      <RdHeader base="/" />
      <main className="rd-case">
        <a className="rd-case-back" href="/work">← All projects</a>

        <header className="rd-case-hero" data-reveal>
          <p className="rd-case-kicker">Case study · iGaming · Sportsbook</p>
          <h1>BetBonanza: learning product on a sportsbook that never sleeps</h1>
          <p className="rd-case-lead">My first product role. I worked on sportsbook user journeys at BetBonanza Nigeria, and led the competitor analysis behind a 12 Days of December campaign that lifted sign-ups by 25% and daily active users by 35%.</p>
          <dl className="rd-case-facts">
            <div><dt>Role</dt><dd>Associate Product Manager</dd></div>
            <div><dt>Dates</dt><dd>Jan 2021 – Mar 2022</dd></div>
            <div><dt>Domain</dt><dd>iGaming · Sportsbook</dd></div>
            <div><dt>Status</dt><dd><span className="rd-chip rd-chip-past">Past role</span></dd></div>
          </dl>
        </header>

        <figure className="rd-case-figure" data-reveal>
          <Image src="/portfolio/full/betbonanza-home.jpg" alt="BetBonanza sportsbook home on mobile: boosted odds banner, welcome package, popular matches and bottom navigation" width={1600} height={1200} sizes="(max-width: 900px) 100vw, 860px" priority />
          <figcaption>BetBonanza sportsbook home on mobile: promotions up top, popular matches one tap away.</figcaption>
        </figure>

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
              <li>Shaping seasonal bonus and engagement offers, starting from what competitors were already giving players.</li>
            </ul>
          </div>
        </section>

        <section className="rd-case-block rd-case-highlight" data-reveal>
          <span className="rd-case-n">03</span>
          <div>
            <h2>The 12 Days of December campaign</h2>
            <p>December is a crowded month for betting promotions, and players compare what each operator is offering. A thin or generic festive offer would have been easy to ignore.</p>
            <h3>What I did</h3>
            <ul>
              <li><b>Competitor analysis first.</b> I went through the festive offers other operators were running: what they gave away, how often, and what players had to do to unlock it.</li>
              <li><b>Filled every day.</b> I used what I learned to make sure all twelve days carried a worthwhile bonus or engagement offer, so players had a reason to come back each day of the campaign.</li>
            </ul>
            <h3>How it turned out</h3>
            <p>The campaign worked on both fronts: it brought new players in and kept existing ones coming back across the twelve days.</p>
            <dl className="rd-case-results">
              <div><dt>Sign-ups</dt><dd>+25%</dd><span>November to December</span></div>
              <div><dt>Daily active users</dt><dd>+35%</dd><span>vs November daily average</span></div>
              <div><dt>30-day retention</dt><dd>52%</dd><span>casino and new players on the bonuses</span></div>
            </dl>
          </div>
        </section>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">04</span>
          <div>
            <h2>A trade-off that stuck with me</h2>
            <p>Promotions grab attention, and in iGaming there is always pressure to show more of them. But every extra pop-up or banner sits between users and the task they came to complete. Using the product myself as a customer made that tension obvious: interruptions that look harmless in a planning meeting feel very different when you are trying to place a bet before a match starts.</p>
            <p>The lesson I carried forward is to protect the core journey first, and earn the right to interrupt it.</p>
            <a className="rd-text-link" href={IGAMING_POST} target="_blank" rel="noreferrer">Read my post: Becoming the User, a UX lesson in iGaming ↗</a>
          </div>
        </section>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">05</span>
          <div>
            <h2>What it taught me</h2>
            <ul>
              <li>Speed and clarity matter more than features when users are working against the clock.</li>
              <li>Prioritisation is a conversation, not a list: the order has to make sense to the people asking.</li>
              <li>Being a user of your own product is one of the fastest ways to find friction.</li>
              <li>Good campaigns start with the market: know what players are already being offered before deciding what to offer them.</li>
            </ul>
          </div>
        </section>

        <p className="rd-case-note" data-reveal>About the figures: they cover the December campaign and are rounded. Sign-ups compare December with November. Daily active users are unique players who logged in, deposited or withdrew on a given day, compared with November's daily average. Retention is the share of casino players and new players on the welcome bonus and the 12 Days bonus who were still active 30 days later.</p>

        <nav className="rd-case-next" aria-label="Next case study" data-reveal>
          <span>Next in my work</span>
          <a href="/case-studies/siiqo">Siiqo: building trust into a marketplace →</a>
        </nav>
      </main>
      <RdFooter base="/" />
      <FloatingContact />
    </div>
  );
}
