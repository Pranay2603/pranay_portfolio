"use client";
import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP, reduced } from "./gsap";
import type { Featured } from "@/data/resume";

export default function Diagram({ p }: { p: Featured }) {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const last = useRef(0);
  const [W, H] = p.viewBox;

  useGSAP(
    () => {
      const el = root.current!;
      const $ = (s: string) => Array.from(el.querySelectorAll<SVGElement>(s));
      const byId = (kind: string, id: string) => el.querySelector<SVGElement>(`[data-${kind}="${id}"]`)!;
      const paths = $("[data-edge]") as unknown as SVGPathElement[];
      const n = p.steps.length;

      if (reduced()) { setActive(n - 1); return; }

      const mm = gsap.matchMedia();
      mm.add({ wide: "(min-width: 900px)" }, (ctx) => {
        const wide = ctx.conditions!.wide;
        paths.forEach((path) => {
          if (path.dataset.dash) { gsap.set(path, { opacity: 0 }); return; }
          const len = path.getTotalLength();
          gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        });
        gsap.set($("[data-node]"), { opacity: 0, y: 14 });
        gsap.set($("[data-note]"), { opacity: 0 });
        gsap.set($("[data-packet]"), { opacity: 0 });

        const STEP = 1.5;
        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: {
            trigger: el,
            start: wide ? "top top" : "top 70%",
            end: wide ? `+=${n * 65}%` : "bottom 60%",
            pin: wide ? true : false,
            scrub: 0.6,
            anticipatePin: 1,
            onUpdate: (self) => {
              const i = Math.min(n - 1, Math.floor(self.progress * n * 0.999));
              if (i !== last.current) { last.current = i; setActive(i); }
            },
          },
        });

        p.steps.forEach((s, i) => {
          const at = i * STEP;
          s.nodes.forEach((id, k) => tl.to(byId("node", id), { opacity: 1, y: 0, duration: 0.6 }, at + k * 0.18));
          s.edges.forEach((id, k) => {
            const path = byId("edge", id) as unknown as SVGPathElement;
            const t = at + 0.3 + k * 0.25;
            if (path.dataset.dash) tl.to(path, { opacity: 1, duration: 0.8 }, t);
            else tl.to(path, { strokeDashoffset: 0, duration: 0.9, ease: "power1.inOut" }, t);
            const pk = el.querySelector(`[data-packet="${id}"]`);
            if (pk) tl.set(pk, { opacity: 1 }, t + 0.8);
          });
          (s.notes ?? []).forEach((id) => tl.to(byId("note", id), { opacity: 1, duration: 0.6 }, at + 0.9));
          tl.to({}, { duration: 0.01 }, at + STEP);
        });
        tl.to({}, { duration: 0.6 });

        // packets travel along their edge forever
        $("[data-packet]").forEach((c, i) => {
          const path = byId("edge", (c as SVGElement).dataset.packet!) as unknown as SVGPathElement;
          const len = path.getTotalLength();
          const o = { t: 0 };
          gsap.to(o, {
            t: 1, duration: 1.4 + (i % 3) * 0.2, repeat: -1, ease: "none", delay: i * 0.17,
            onUpdate: () => {
              const pt = path.getPointAtLength(o.t * len);
              c.setAttribute("cx", String(pt.x));
              c.setAttribute("cy", String(pt.y));
            },
          });
        });

        return () => { tl.scrollTrigger?.kill(); tl.kill(); };
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: [p.slug] }
  );

  return (
    <section ref={root} className="proj" aria-labelledby={`${p.slug}-h`}>
      <div className="proj-head">
        <div>
          <span className="proj-idx">{p.index} / system</span>
          <h2 id={`${p.slug}-h`} className="proj-name">{p.name}</h2>
          <p className="proj-tag">{p.tagline}</p>
        </div>
        <ul className="proj-metrics">
          {p.metrics.map((m) => (
            <li key={m.l}><b>{m.v}</b><span>{m.l}</span></li>
          ))}
        </ul>
      </div>

      <div className="proj-body">
        <figure className="proj-fig">
          <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${p.name} architecture diagram`}>
            {p.edges.map((e) => (
              <path key={e.id} data-edge={e.id} data-dash={e.dash ? "1" : undefined} d={e.d}
                className={`edge${e.hot ? " hot" : ""}${e.dash ? " dash" : ""}`} />
            ))}
            {p.edges.filter((e) => e.packet).map((e) => (
              <circle key={e.id} data-packet={e.id} r="4" className="packet" cx="-20" cy="-20" />
            ))}
            {p.nodes.map((n) => (
              <g key={n.id} data-node={n.id} className={`node${n.hot ? " hot" : ""}`}>
                <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="3" />
                <text x={n.x + n.w / 2} y={n.y + (n.sub ? n.h / 2 - 3 : n.h / 2 + 5)} textAnchor="middle" className="nl">{n.label}</text>
                {n.sub && <text x={n.x + n.w / 2} y={n.y + n.h / 2 + 15} textAnchor="middle" className="ns">{n.sub}</text>}
              </g>
            ))}
            {p.notes.map((n) => (
              <text key={n.id} data-note={n.id} x={n.x} y={n.y} textAnchor={n.anchor ?? "start"} className={`note${n.hot ? " hot" : ""}`}>{n.t}</text>
            ))}
          </svg>
          {p.caption && <figcaption>{p.caption}</figcaption>}
        </figure>

        <ol className="proj-steps">
          {p.steps.map((s, i) => (
            <li key={s.title} className={i === active ? "on" : i < active ? "past" : ""}>
              <span className="si">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="proj-foot">
        <div className="chips">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
        <div className="links">
          {p.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>
          ))}
        </div>
      </div>
    </section>
  );
}
