import type { Metadata } from "next";
import { pageMeta } from "../seo";
import "../v2/redesign/redesign.css";
import RdHeader from "../v2/redesign/Header";
import RdMotion from "../v2/redesign/Motion";
import RdFooter from "../v2/redesign/Footer";
import RdBookCall from "../v2/redesign/BookCall";
import RdLagosNow from "../v2/redesign/LagosNow";
import { FloatingContact } from "../v2/PortfolioControls";

export const metadata: Metadata = pageMeta({
  title: "Book a call | Olusola Ayodeji Ezekiel",
  description: "Book a 30-minute intro call with Olusola Ayodeji Ezekiel, Product Manager. Pick a date and time in your own time zone.",
  path: "/book",
  image: "/og/book.jpg",
  alt: "Book a call with Olusola Ayodeji Ezekiel",
});

export default function BookPage() {
  return (
    <div className="rd" id="top">
      <RdMotion />
      <RdHeader base="/" current="none" />
      <main className="rd-bookpage rd-grid-bg">
        <div className="rd-bookpage-wrap">
          <a className="rd-case-back" href="/#contact">← Back to contact</a>
          <header className="rd-bookpage-head" data-reveal>
            <p className="rd-kicker">Book a call</p>
            <h1>Let&apos;s talk about what you&apos;re building.</h1>
            <p>A 30-minute intro call on Google Meet or Zoom. Tell me a little, pick a time, and I&apos;ll confirm by email within a day.</p>
          </header>
          <div className="rd-bookpage-grid">
            <aside className="rd-bookpage-side" data-reveal>
              <RdLagosNow />
              <ul className="rd-bookpage-list">
                <li><b>Roles</b> Full-time, contract or a single delivery plan</li>
                <li><b>Where</b> Remote, hybrid, on-site or relocation, anywhere in the world</li>
                <li><b>Format</b> 30 minutes, video call</li>
              </ul>
            </aside>
            <div className="rd-bookpage-form" data-reveal>
              <RdBookCall />
            </div>
          </div>
        </div>
      </main>
      <RdFooter base="/" />
      <FloatingContact />
    </div>
  );
}
