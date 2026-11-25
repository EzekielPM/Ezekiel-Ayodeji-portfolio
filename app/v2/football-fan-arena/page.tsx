import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Football Fan Arena | Product Builder & Product Manager Case Study",
  description:
    "Independently built football supporter community for web and Android, covering club fanbases, fan discussions, matchday predictions, banter groups and fan rankings.",
  alternates: { canonical: "/v2/football-fan-arena" },
  openGraph: {
    title: "Football Fan Arena | Product Builder & Product Manager Case Study",
    description:
      "A global football supporter community built around club allegiance, matchday predictions, banter and fan rankings, with no betting or payments.",
    type: "article",
  },
};

const LIVE_URL = "https://football-fan-arena-web.vercel.app/";

export default function FootballFanArenaCaseStudy() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/v2">
          <span>OLUSOLA AYODEJI EZEKIEL</span>
          <small>Product Manager</small>
        </a>
        <nav className="site-nav">
          <a className="nav-cta desktop-nav-link" href="/v2">Go Back Home</a>
          <a className="desktop-nav-link" href={LIVE_URL} target="_blank" rel="noreferrer">Open web app ↗</a>
        </nav>
      </header>

      <section className="section" id="top">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Independently built product · Football community · Web &amp; Android</p>
            <h2>Football Fan Arena</h2>
          </div>
          <p>
            Football Fan Arena is a global supporter community built around club allegiance, fan discussions, matchday predictions, banter and fan rankings. This case study covers the product decisions behind it, including what I deliberately left out.
          </p>
        </div>

        <article className="journal">
          <header className="journal-header">
            <p>PRODUCT BUILDER &amp; PRODUCT MANAGER · COMMUNITY PRODUCT · CROSS-PLATFORM DELIVERY</p>
            <span>07</span>
            <h2>Football Fan Arena</h2>
            <p className="journal-deck">
              Football fans already talk about their clubs everywhere, but the conversation is scattered across general social feeds, group chats and prediction games that often drift towards betting. I am building Football Fan Arena as one home for supporters: a place to join a club fanbase, debate the game, make free matchday predictions and climb a fan ranking.
            </p>
            <p className="case-disclaimer"><strong>My role:</strong> Product Builder &amp; Product Manager · Product vision, community model, screen design direction in Google Stitch, shared data contract and delivery across web and Android.</p>
            <p className="case-disclaimer">
              Current status: the web app is deployed for review and an Android client shares the same Firebase data. The gallery shows the approved Stitch designs the apps are built from. No user or engagement metrics are claimed.
            </p>
          </header>

          <section className="siiqo-overview" aria-label="Football Fan Arena project overview">
            <div className="siiqo-overview-heading">
              <p className="section-kicker">Project overview</p>
              <p>A quick view of the challenge, my contribution, the key product decisions and the evidence available.</p>
            </div>
            <div className="siiqo-overview-grid">
              <article><span>01 · CHALLENGE</span><h3>Give fans one home</h3><p>Bring club allegiance, discussion, predictions and bragging rights into one community instead of scattered feeds and chats.</p></article>
              <article><span>02 · MY ROLE</span><h3>Product Builder &amp; Product Manager</h3><p>Set the product direction, approved the screen designs, defined the shared data contract and shaped delivery for web and Android.</p></article>
              <article><span>03 · KEY DECISIONS</span><h3>Fun without betting</h3><p>Free predictions with points, locked at kickoff. No betting, payments, private messaging, streaming or unverified live scores in the MVP.</p></article>
              <article><span>04 · EVIDENCE</span><h3>Product and design</h3><p>Deployed web app, 36 approved Stitch screens across three design batches and a documented data contract. Engagement impact is not yet measured.</p></article>
            </div>
          </section>

          <div className="media-rail screenshots" aria-label="Football Fan Arena approved screen designs">
            <div className="media-frame">
              <Image src="/portfolio/full/ffa-welcome-feed-clubs.jpg" alt="Football Fan Arena welcome screen, home feed and club discovery screens" fill sizes="(max-width: 600px) 88vw, 500px" />
              <span>Welcome, feed and clubs</span>
            </div>
            <div className="media-frame">
              <Image src="/portfolio/full/ffa-predictions-rankings.jpg" alt="Football Fan Arena matchday predictions, prediction history and notifications screens" fill sizes="(max-width: 600px) 88vw, 500px" />
              <span>Predictions and notifications</span>
            </div>
            <div className="media-frame">
              <Image src="/portfolio/full/ffa-banter-community.jpg" alt="Football Fan Arena banter groups, post discussion and create post screens" fill sizes="(max-width: 600px) 88vw, 500px" />
              <span>Banter groups and discussion</span>
            </div>
            <div className="media-frame">
              <Image src="/portfolio/full/ffa-clubs-profile.jpg" alt="Football Fan Arena club fanbase, club details and supporter profile screens" fill sizes="(max-width: 600px) 88vw, 500px" />
              <span>Club fanbase and profile</span>
            </div>
            <div className="media-frame">
              <Image src="/portfolio/full/ffa-admin-moderation.jpg" alt="Football Fan Arena administration and moderation dashboard for the web" fill sizes="(max-width: 600px) 88vw, 500px" />
              <span>Moderation dashboard</span>
            </div>
          </div>

          <div className="feature-tags" aria-label="Football Fan Arena product areas">
            <span>Club fanbases</span><span>Fan feed</span><span>Matchday predictions</span><span>Banter groups</span><span>Fan rankings</span><span>Moderation</span><span>Web &amp; Android</span>
          </div>

          <section className="resource-panel">
            <p>Explore the product</p>
            <div>
              <a href={LIVE_URL} target="_blank" rel="noreferrer">
                <span>
                  <strong>Open the web app</strong>
                  <small>Explore the deployed supporter community. Sign-in and database-backed features use the live Firebase project.</small>
                </span>
                <b>Open product ↗</b>
              </a>
            </div>
          </section>

          <div className="journal-body">
            <section>
              <span>01</span>
              <div>
                <h3>The product opportunity</h3>
                <p>
                  Supporting a club is social by nature. Fans want to share an opinion after a match, defend their team, predict the next result and prove they called it. Today those moments are split across general social apps, private group chats and prediction games, many of which sit next to betting. Football Fan Arena brings them into one product built only for supporters.
                </p>
              </div>
            </section>

            <section>
              <span>02</span>
              <div>
                <h3>Who it is for</h3>
                <p>
                  The core user is a supporter who identifies with one club and wants a place to belong to its fanbase. Around them sit casual fans who mainly want to predict and compete, banter group creators who organise rivalries, and administrators who keep the community safe. Each needs a different entry point: joining a club, making a prediction, starting a group or moderating content.
                </p>
              </div>
            </section>

            <section>
              <span>03</span>
              <div>
                <h3>The core experience</h3>
                <p>
                  Supporters choose a favourite club during onboarding and join its fanbase space. The feed groups posts by topic, including fan banter, and supports football-themed reactions, reposts, quote reposts and comments. Matchday predictions let fans call the score before kickoff and earn points for exact scores and correct outcomes, which feed a public fan ranking. Notifications bring people back when someone replies, reacts or a prediction is scored.
                </p>
              </div>
            </section>

            <section>
              <span>04</span>
              <div>
                <h3>Key product decisions</h3>
                <p>
                  The most important decision was what the MVP would not include: no betting, no payments, no private messaging, no video streaming and no unverified live-score feeds. That keeps the product focused on community and fair play, and avoids the regulatory and trust problems that come with money and unverified data. Predictions lock at kickoff using a server timestamp, so nobody can change a pick once the match starts. Points and ranking statistics are controlled on the server; players can edit their profile, but never their own score.
                </p>
              </div>
            </section>

            <section>
              <span>05</span>
              <div>
                <h3>Designing once for web and Android</h3>
                <p>
                  I directed the interface through Google Stitch, approving 36 screens across three design batches covering onboarding, feeds, clubs, predictions, groups, profiles and moderation. Both the web app and the Android app are built from those designs. To stop the two platforms drifting apart, I defined a shared Firestore data contract: one set of collections, canonical club identifiers and timestamp rules, with older club aliases normalised when data is read.
                </p>
              </div>
            </section>

            <section>
              <span>06</span>
              <div>
                <h3>Trust, safety and running cost</h3>
                <p>
                  A fan community lives or dies on how it handles rivalry. The design includes privacy and moderation controls for supporters and a dedicated moderation dashboard for administrators. On the technical side, likes, reactions and reposts run as atomic database transactions protected by security rules, which keeps engagement counts accurate and lets the product run on Firebase’s free tier. Server functions are used only where they are needed, such as comments.
                </p>
              </div>
            </section>

            <section>
              <span>07</span>
              <div>
                <h3>How I would measure success</h3>
                <p>
                  I would set a baseline before any targets. Core measures would be weekly active supporters, predictions submitted per matchday, the share of predictions made before lock, club-join rate after onboarding, posts and reactions per active supporter, and day-7 and day-30 retention. For community health I would track reports per thousand posts and time to resolve a report. These are proposed measures, not reported results.
                </p>
              </div>
            </section>

            <section>
              <span>08</span>
              <div>
                <h3>Current status and next validation</h3>
                <p>
                  The web app is deployed and automated checks cover type-checking and production builds for the web app and server functions. The Android client shares the same Firebase project and data contract. Next, I need a verified source for fixtures and results so predictions can be scored reliably, a moderation workflow tested with real reports, and onboarding tested with supporters from more than one club.
                </p>
              </div>
            </section>

            <section>
              <span>09</span>
              <div>
                <h3>What this work reinforced</h3>
                <p>
                  Saying no is a product decision. Leaving out betting, payments and live scores made the MVP smaller, safer and easier to explain, and it kept attention on what makes the product worth returning to: belonging to a fanbase and being proved right on matchday.
                </p>
              </div>
            </section>

            <section>
              <span>10</span>
              <div>
                <h3>Evidence of progress versus impact</h3>
                <p>The deployed web app, the 36 approved Stitch designs and the documented data contract make the product direction inspectable. They show what has been designed and built, not how many fans use it.</p>
                <p><strong>Evidence available now:</strong> deployed web app, approved screen designs, shared data contract and automated build checks. <strong>Impact still to validate:</strong> active supporters, prediction participation, retention and moderation load once real fans are using the product.</p>
              </div>
            </section>
          </div>

          <nav className="case-study-next" aria-label="Explore other case studies">
            <span>Explore another case study</span>
            <a href="/v2/tradeflow">TradeFlow Commerce <b>↗</b></a>
            <a href="/case-studies/siiqo">Siiqo Marketplace <b>↗</b></a>
          </nav>
          <footer className="journal-footer">
            <p>Olusola Ayodeji Ezekiel · Football Fan Arena</p>
            <div className="hero-actions">
              <a className="button text" href="/v2">Go Back Home <span>↖</span></a>
              <a className="case-button" href={LIVE_URL} target="_blank" rel="noreferrer">
                Open web app <span>↗</span>
              </a>
              <a className="case-contact-link" href="/v2#contact">Let’s talk about product <span>↗</span></a>
            </div>
          </footer>
        </article>
      </section>

      <footer>
        <div className="brand"><span>OLUSOLA AYODEJI EZEKIEL</span><small>Product Manager · Technical Product Delivery</small></div>
        <a href="/v2">Go Back Home ↑</a>
      </footer>
    </main>
  );
}
