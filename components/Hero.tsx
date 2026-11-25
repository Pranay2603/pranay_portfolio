"use client";
import { useRef } from "react";
import { gsap, useGSAP, reduced } from "./gsap";
import { person } from "@/data/resume";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      if (reduced()) return;
      const tl = gsap.timeline({ paused: true });
      tl.from(q(".h-line > span"), { yPercent: 110, duration: 1.1, ease: "power4.out", stagger: 0.12 })
        .from(q(".h-fade"), { opacity: 0, y: 16, duration: 0.7, stagger: 0.1, ease: "power2.out" }, 0.5)
        .from(q(".h-rule"), { scaleX: 0, transformOrigin: "left", duration: 1.2, ease: "power3.inOut" }, 0.3);
      let played = false;
      const play = () => { if (!played) { played = true; tl.play(); } };
      window.addEventListener("intro-leave", play);
      const t = setTimeout(play, 7500);

      // packets running along the rail
      const dots = q(".h-dot");
      dots.forEach((d, i) =>
        gsap.fromTo(d, { left: "0%" }, { left: "100%", duration: 3.2, repeat: -1, ease: "none", delay: i * 1.05 })
      );
      return () => { window.removeEventListener("intro-leave", play); clearTimeout(t); };
    },
    { scope: root }
  );

  return (
    <header id="top" ref={root} className="hero">
      <div className="hero-top h-fade">
        <span>{person.role}</span>
        <span>Available for roles · India</span>
      </div>

      <h1 className="hero-title" aria-label="Software engineer">
        <span className="h-line"><span>&lt;SOFTWARE</span></span>
        <span className="h-line"><span>ENGINEER /&gt;</span></span>
      </h1>

      <div className="hero-rail">
        <div className="h-rule" />
        <i className="h-dot" /><i className="h-dot" /><i className="h-dot" />
      </div>

      <div className="hero-bottom">
        <p className="hero-lede h-fade">
          I build software end to end: mobile and web frontends, the APIs behind them, and the data layer
          underneath. My latest, Tilt, serves 3,300+ requests a second, and I can prove none were lost.</p>
        <div className="hero-meta h-fade">
          <a href="#work">See the systems ↓</a>
          <a href={person.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
    </header>
  );
}
