import "./v2/redesign/redesign.css";
import RdHeader from "./v2/redesign/Header";
import RdFooter from "./v2/redesign/Footer";

export default function NotFound() {
  return (
    <div className="rd" id="top">
      <RdHeader base="/" current="none" />
      <main className="rd-404 rd-grid-bg">
        <div className="rd-404-card">
          <p className="rd-kicker">Error 404</p>
          <h1>This page isn&apos;t in the folder.</h1>
          <p>The link may be old or mistyped. Everything I&apos;ve worked on is one click away.</p>
          <div className="rd-404-actions">
            <a className="rd-btn rd-btn-dark" href="/">Back to home</a>
            <a className="rd-btn rd-btn-ghost" href="/work">See all projects →</a>
          </div>
        </div>
      </main>
      <RdFooter base="/" />
    </div>
  );
}
