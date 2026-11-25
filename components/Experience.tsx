"use client";
import { useRef } from "react";
import { gsap, useGSAP, reduced } from "./gsap";
import { experience, education } from "@/data/resume";

export default function Experience() {
  const root = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      if (reduced()) return;
      const q = gsap.utils.selector(root);
      gsap.fromTo(q(".tl-line"), { scaleY: 0 }, {
        scaleY: 1, ease: "none", transformOrigin: "top",
        scrollTrigger: { trigger: q(".tl")[0], start: "top 70%", end: "bottom 70%", scrub: 0.4 },
      });
      q(".tl-item").forEach((el) =>
        gsap.from(el, { opacity: 0, y: 40, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%" } })
      );
      q(".edu-row").forEach((el) =>
        gsap.from(el, { opacity: 0, x: -30, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" } })
      );
    },
    { scope: root }
  );

  return (
    <section id="experience" ref={root} className="exp">
      <div className="sec-head"><span>// 02</span><h2>Experience</h2></div>
      <div className="tl">
        <div className="tl-line" aria-hidden />
        {experience.map((e) => (
          <article key={e.role} className="tl-item">
            <span className="tl-dot" aria-hidden />
            <div className="tl-when">{e.period}<small>{e.where}</small></div>
            <div>
              <h3>{e.role}</h3>
              <p className="tl-co">{e.company}</p>
              <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
      <div className="edu">
        <h3 className="edu-h">Education</h3>
        {education.map((e) => (
          <div key={e.school} className="edu-row">
            <b>{e.school}</b><span>{e.degree}</span><em>{e.period}</em>
          </div>
        ))}
      </div>
    </section>
  );
}
