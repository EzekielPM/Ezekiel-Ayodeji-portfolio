import type { Metadata } from "next";
import { pageMeta } from "../../seo";
import Image from "next/image";
import "../redesign/redesign.css";
import RdHeader from "../redesign/Header";
import RdMotion from "../redesign/Motion";
import RdFooter from "../redesign/Footer";
import { CaseDocs, CaseGallery, CaseNext } from "../redesign/CaseBits";
import { FloatingContact } from "../PortfolioControls";

export const metadata: Metadata = pageMeta({
  title: "Football Fan Arena case study | Olusola Ayodeji Ezekiel",
  description: "An independently built football fan community with club fanbases, free match predictions and banter groups. Web live, Android test build, no betting.",
  path: "/v2/football-fan-arena",
  image: "/og/football-fan-arena.jpg",
  alt: "Football Fan Arena case study",
  article: true,
});

const LIVE_URL = "https://football-fan-arena-web.vercel.app/";

const gallery = [
  { src: "/portfolio/full/ffa-live-feed-predictions.jpg", label: "Live app · feed and predictions" },
  { src: "/portfolio/full/ffa-live-clubs-banter.jpg", label: "Live app · clubs and banter groups" },
  { src: "/portfolio/full/ffa-live-profile.jpg", label: "Live app · supporter profile" },
  { src: "/portfolio/full/ffa-live-rankings.jpg", label: "Live app · top predictors" },
  { src: "/portfolio/full/ffa-welcome-feed-clubs.jpg", label: "Design · welcome, feed and clubs" },
  { src: "/portfolio/full/ffa-admin-moderation.jpg", label: "Design · moderation dashboard" },
];

export default function FootballFanArenaCaseStudy() {
  return (
    <div className="rd" id="top">
      <RdMotion />
      <RdHeader base="/" />
      <main id="main" className="rd-case">
        <a className="rd-case-back" href="/work">← All projects</a>

        <header className="rd-case-hero" data-reveal>
          <p className="rd-case-kicker">Case study · Community · Football</p>
          <h1>Football Fan Arena: one home for football supporters</h1>
          <p className="rd-case-lead">Fans already talk about their clubs everywhere, but the conversation is scattered across feeds, group chats and prediction games that drift towards betting. I&apos;m building one place to join a club fanbase, debate the game, make free predictions and climb a fan ranking.</p>
          <dl className="rd-case-facts">
            <div><dt>Role</dt><dd>Product lead · Independent build</dd></div>
            <div><dt>Platforms</dt><dd>Web (live) · Android (test build)</dd></div>
            <div><dt>Domain</dt><dd>Fan community</dd></div>
            <div><dt>Status</dt><dd><span className="rd-chip rd-chip-mvp">Live web app · MVP</span></dd></div>
          </dl>
        </header>

        <figure className="rd-case-figure" data-reveal>
          <Image src="/portfolio/full/ffa-live-feed-predictions.jpg" alt="Football Fan Arena feed and match predictions screens" width={1600} height={1000} sizes="(max-width: 900px) 100vw, 860px" priority />
          <figcaption>The running app: the fan feed next to matchday predictions.</figcaption>
        </figure>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">01</span>
          <div>
            <h2>Who it&apos;s for</h2>
            <p>Supporters who want to represent their club, fans who post and comment, competitive fans who come for predictions and the leaderboard, and fans who prefer focused rivalry inside a banter group. Administrators sit behind them, keeping the community safe.</p>
          </div>
        </section>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">02</span>
          <div>
            <h2>What I owned</h2>
            <ul>
              <li>Product direction and the PRD: vision, users, features, rules and success measures.</li>
              <li>Design direction in Google Stitch: 36 approved screens across onboarding, feeds, clubs, predictions, groups, profiles and moderation.</li>
              <li>A shared data contract so the web app and the Android app use the same Firebase data and never drift apart.</li>
              <li>Delivery across web and Android.</li>
            </ul>
          </div>
        </section>

        <section className="rd-case-block rd-case-highlight rd-case-highlight-green" data-reveal>
          <span className="rd-case-n">03</span>
          <div>
            <h2>The key decision: fun without betting</h2>
            <p>The most important call was what the MVP would leave out: no betting, no payments, no private messaging, no streaming and no unverified live scores. That keeps it about community and fair play, and avoids the trust and regulatory problems that come with money.</p>
            <ul>
              <li><b>Free predictions:</b> 5 points for the exact score, 3 for the right result, 0 otherwise.</li>
              <li><b>Locked at kickoff</b> using server time, so nobody can change a pick once the match starts.</li>
              <li><b>Scores set by the server</b>: fans can edit their profile, never their own points.</li>
            </ul>
          </div>
        </section>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">04</span>
          <div>
            <h2>Trust, safety and running cost</h2>
            <p>A fan community lives or dies on how it handles rivalry, so privacy and moderation controls are built in, with a moderation dashboard for admins. Cost was a hard constraint: the product runs on Firebase&apos;s free plan. Likes, reactions, reposts and comments are atomic database writes protected by security rules, which keeps counts accurate without paid server functions.</p>
          </div>
        </section>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">05</span>
          <div>
            <h2>Where it stands</h2>
            <p>The web app is live. The Android app is a working test build, not yet on Google Play, and shares the same data. Club fan counts in the app are seeded demo data, so there are no usage figures yet.</p>
            <p>Next: a verified source for fixtures and results, a moderation workflow tested with real reports, and onboarding tested with fans of more than one club. Then I&apos;ll measure weekly active supporters, predictions per matchday and day-7 and day-30 retention.</p>
          </div>
        </section>

        <section className="rd-case-block" data-reveal>
          <span className="rd-case-n">06</span>
          <div>
            <h2>What it taught me</h2>
            <p>Saying no is a product decision. Leaving out betting, payments and live scores made the MVP smaller, safer and easier to explain, and kept the focus on what brings fans back: belonging to a fanbase and being proved right on matchday.</p>
            <a className="rd-text-link" href="https://www.linkedin.com/posts/ayodeji-ezekiel-olusola_footballfanarena-productmanagement-buildinpublic-activity-7532029124572413952-BFU6" target="_blank" rel="noreferrer">Read my post: How Football Fan Arena went from idea to MVP ↗</a>
          </div>
        </section>

        <CaseGallery items={gallery} label="Football Fan Arena screens" />

        <CaseDocs docs={[{ title: "Football Fan Arena PRD", note: "Vision, users, features, the 5 / 3 / 0 prediction rules, quality bar, constraints, success measures and what is out of scope.", href: "/documents/ffa-product-requirements.pdf" }]} />

        <div className="rd-case-actions" data-reveal>
          <a className="rd-btn rd-btn-accent" href={LIVE_URL} target="_blank" rel="noreferrer">Open the web app <span aria-hidden="true">↗</span></a>
        </div>

        <CaseNext href="/case-studies/wayagram" label="Wayagram: keeping a live super-app steady through a migration" />
      </main>
      <RdFooter base="/" />
      <FloatingContact />
    </div>
  );
}
