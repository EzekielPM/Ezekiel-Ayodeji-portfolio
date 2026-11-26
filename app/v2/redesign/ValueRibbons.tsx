import { values } from "./data";

// Two crossed ribbons: values moving one way, where each was learned moving the other.
export default function RdValueRibbons() {
  const loop = [...values, ...values];
  return (
    <section className="rd-values" aria-labelledby="values-h">
      <div className="rd-wrap rd-values-head" data-reveal>
        <p className="rd-values-kicker" id="values-h">What I believe about product</p>
        <p className="rd-values-lead">Values I didn&apos;t read in a book. I learned each one on a real job.</p>
      </div>
      <ul className="rd-sr-only">
        {values.map((v) => <li key={v.value}>{v.value}, learned at {v.where}</li>)}
      </ul>
      <div className="rd-ribbons" aria-hidden="true">
        <div className="rd-ribbon rd-ribbon-a">
          <div className="rd-ribbon-track rd-ribbon-left">
            {loop.map((v, i) => <span key={i}>{v.value}<i>✦</i></span>)}
          </div>
        </div>
        <div className="rd-ribbon rd-ribbon-b">
          <div className="rd-ribbon-track rd-ribbon-right">
            {loop.map((v, i) => <span key={i}>learned at <b>{v.where}</b><i>•</i></span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
