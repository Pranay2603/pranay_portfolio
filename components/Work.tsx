import Diagram from "./Diagram";
import { tilt, strata, small } from "@/data/resume";

export default function Work() {
  return (
    <div id="work">
      <div className="sec-head"><span>// 01</span><h2>Selected systems</h2></div>
      <Diagram p={tilt} />
      <Diagram p={strata} />
      <div className="small">
        {small.map((s) => (
          <article key={s.name} className="small-card">
            <span className="proj-idx">03 / smaller build</span>
            <h3>{s.name}</h3>
            <p className="proj-tag">{s.tagline}</p>
            <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
            <div className="chips">{s.stack.map((t) => <span key={t}>{t}</span>)}</div>
            <a className="links-a" href={s.href} target="_blank" rel="noreferrer">GitHub ↗</a>
          </article>
        ))}
      </div>
    </div>
  );
}
