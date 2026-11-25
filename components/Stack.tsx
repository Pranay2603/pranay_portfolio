"use client";
import { useRef } from "react";
import { gsap, useGSAP, reduced } from "./gsap";
import { stack } from "@/data/resume";

const MARQUEE = ["PYTHON", "TYPESCRIPT", "NESTJS", "REDIS", "POSTGRESQL", "FASTAPI", "REACT", "DOCKER", "BULLMQ", "GRAPH DBS"];

export default function Stack() {
  const root = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      if (reduced()) return;
      const q = gsap.utils.selector(root);
      gsap.from(q(".stk-group"), { opacity: 0, y: 30, duration: 0.8, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: q(".stk-groups")[0], start: "top 80%" } });
      gsap.to(q(".mq-track")[0], { xPercent: -50, ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: 0.6 } });
    },
    { scope: root }
  );
  const row = MARQUEE.map((m) => <span key={m}>{m}<i>/</i></span>);
  return (
    <section id="stack" ref={root} className="stk">
      <div className="mq" aria-hidden>
        <div className="mq-track">{row}{row}</div>
      </div>
      <div className="sec-head"><span>// 03</span><h2>Stack</h2></div>
      <div className="stk-groups">
        {Object.entries(stack).map(([g, items]) => (
          <div key={g} className="stk-group">
            <h3>{g}</h3>
            <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
