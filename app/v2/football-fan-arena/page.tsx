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
              Current status: the web app is deployed for review and an Android client shares the same Firebase data. The gallery leads with screenshots from the running Android app, followed by two of the approved Stitch designs; the linked PRD sets out the full scope. Club fan counts and group sizes in the app are seeded demo data. No user or engagement metrics are claimed.
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
              <article><span>04 · EVIDENCE</span><h3>Product and design</h3><p>Deployed web app, a working Android build, a master PRD, 36 approved Stitch screens and a documented data contract. Engagement impact is not yet measured.</p></article>
            </div>
          </section>

          <div className="media-rail screenshots" aria-label="Football Fan Arena app screens">
            <div className="media-frame">
              <Image src="/portfolio/full/ffa-live-feed-predictions.jpg" alt="Football Fan Arena running app: home feed with reposts and reactions, and the match predictions screen with 5, 3 and 0 point scoring" fill sizes="(max-width: 600px) 88vw, 500px" />
              <span>Live app · Feed and match predictions</span>
            </div>
            <div className="media-frame">
              <Image src="/portfolio/full/ffa-live-clubs-banter.jpg" alt="Football Fan Arena running app: club communities list and fan banter groups" fill sizes="(max-width: 600px) 88vw, 500px" />
              <span>Live app · Clubs and banter groups (demo data)</span>
            </div>
            <div className="media-frame">
              <Image src="/portfolio/full/ffa-live-profile.jpg" alt="Football Fan Arena running app: supporter profile with prediction stats, club wallpapers, display mode and Google sign-in" fill sizes="(max-width: 600px) 88vw, 500px" />
              <span>Live app · Supporter profile and settings</span>
            </div>
            <div className="media-frame">
              <Image src="/portfolio/full/ffa-welcome-feed-clubs.jpg" alt="Football Fan Arena approved Stitch designs for the welcome screen, home feed and club discovery" fill sizes="(max-width: 600px) 88vw, 500px" />
              <span>Approved design · Welcome, feed and clubs</span>
            </div>
            <div className="media-frame">
              <Image src="/portfolio/full/ffa-admin-moderation.jpg" alt="Football Fan Arena approved design for the web moderation dashboard" fill sizes="(max-width: 600px) 88vw, 500px" />
              <span>Approved design · Moderation dashboard</span>
            </div>
          </div>

          <div className="feature-tags" aria-label="Football Fan Arena product areas">
            <span>Club fanbases</span><span>Fan feed</span><span>Matchday predictions</span><span>Banter groups</span><span>Fan rankings</span><span>Moderation</span><span>Web &amp; Android</span>
          </div>

          <section className="resource-panel">
            <p>Explore the product</p>
            <div>
              <a href="/documents/ffa-product-requirements.pdf" target="_blank" rel="noreferrer">
                <span>
                  <strong>Football Fan Arena Product Requirements Document</strong>
                  <small>Vision, users, features, the 5 / 3 / 0 prediction rules, quality bar, constraints, success measures, out-of-scope items and open decisions.</small>
                </span>
                <b>View PDF ↗</b>
              </a>
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
                  The PRD names four groups: supporters who want to represent their club, active community members who post and comment, competitive supporters who come for predictions and the leaderboard, and fans who prefer focused rivalry inside a Banter Group. Administrators sit behind them, keeping the community safe. Each needs a different way in: choosing a club, joining the conversation, making a prediction or joining a group.
                </p>
              </div>
            </section>

            <section>
              <span>03</span>
              <div>
                <h3>The core experience</h3>
                <p>
                  Supporters choose a favourite club during onboarding and join its fanbase space. The feed has four tabs (For You, Following, Trending and Matchday) plus topic filters. Fans can like a post or pick one football reaction, and comment, repost or quote it. Matchday predictions let fans call the score before kickoff: 5 points for the exact score, 3 for the right result and 0 otherwise, feeding a public leaderboard. Notifications bring people back when someone replies, reacts or a prediction is scored.
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
                  A fan community lives or dies on how it handles rivalry. The design includes privacy and moderation controls for supporters and a dedicated moderation dashboard for administrators. Cost is a hard constraint too: the PRD keeps FFA on Firebase’s free Spark plan, with no paid services. Likes, reactions and reposts already run as atomic database transactions protected by security rules, which keeps counts accurate within that plan. Comment creation still relies on Cloud Functions, which need a paid plan, so moving comments to a free-plan approach is an open item.
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
                <p>The documentation labels every feature by how far it has got: specified, designed, implemented or verified. That keeps this case study honest. The PRD shows what is specified, the 36 Stitch screens show what is designed, and the deployed web app, the running Android build and the data contract show what is built. None of it shows how many fans use the product.</p>
                <p><strong>Evidence available now:</strong> master PRD, deployed web app, approved screen designs, shared data contract and automated build checks. <strong>Impact still to validate:</strong> active supporters, prediction participation, retention and moderation load once real fans are using the product.</p>
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
