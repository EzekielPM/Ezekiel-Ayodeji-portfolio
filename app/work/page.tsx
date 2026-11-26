import type { Metadata } from "next";
import "../v2/redesign/redesign.css";
import RdHeader from "../v2/redesign/Header";
import RdMotion from "../v2/redesign/Motion";
import RdFooter from "../v2/redesign/Footer";
import RdProjectList from "../v2/redesign/ProjectList";
import { FloatingContact } from "../v2/PortfolioControls";
import { projects } from "../v2/redesign/data";

export const metadata: Metadata = {
  title: "All projects | Olusola Ayodeji Ezekiel, Product Manager",
  description: "Every role and independent build, newest first: Siiqo, Wayagram, Football Fan Arena, TradeFlow, Kuda 3.0, DM to Confirmed Order, Canvoy and BetBonanza.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="rd" id="top">
      <RdMotion />
      <RdHeader base="/" />
      <main className="rd-work-page rd-soft">
        <div className="rd-wrap">
          <a className="rd-case-back" href="/#work">← Back to home</a>
          <div style={{ height: 18 }} />
          <RdProjectList projects={projects} headingLevel="h1" />
        </div>
      </main>
      <RdFooter base="/" />
      <FloatingContact />
    </div>
  );
}
