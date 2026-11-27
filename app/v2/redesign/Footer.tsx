import { CV_URL, CV_FILENAME, CONSTRUCTION_CV_URL, EMAIL, LINKEDIN, YOUTUBE_CHANNEL } from "./data";

export default function RdFooter({ base = "" }: { base?: string }) {
  return (
    <footer className="rd-footer">
      <div className="rd-wrap rd-footer-grid">
        <div>
          <p className="rd-footer-name"><span className="rd-monogram" aria-hidden="true">OE</span>Olusola Ayodeji Ezekiel</p>
          <p className="rd-footer-tag">Product Manager · Fintech, iGaming and commerce · Lagos</p>
        </div>
        <nav aria-label="Explore">
          <p>Explore</p>
          <a href={`${base}#work`}>Work</a>
          <a href={`${base}#documents`}>Documents</a>
          <a href={`${base}#insights`}>Insights</a>
          <a href={`${base}#watch`}>Watch</a>
          <a href="/about">About</a>
        </nav>
        <nav aria-label="Follow">
          <p>Follow</p>
          <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={YOUTUBE_CHANNEL} target="_blank" rel="noreferrer">YouTube</a>
          <a href="/rough-space">Rough Space</a>
        </nav>
        <nav aria-label="Hire">
          <p>Hire</p>
          <a href={CV_URL} download={CV_FILENAME}>Product Manager CV</a>
          <a href={CONSTRUCTION_CV_URL} download>Construction CV</a>
          <a href={`mailto:${EMAIL}`}>Email me</a>
        </nav>
      </div>
      <div className="rd-wrap rd-footer-base">
        <span>© {new Date().getFullYear()} Olusola Ayodeji Ezekiel</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
