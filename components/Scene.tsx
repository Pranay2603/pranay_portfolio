"use client";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, reduced } from "./gsap";

const WORDS = ["PRANAY", "GUPTA"];

export default function Scene({ variant, onDone }: { variant: "intro" | "footer"; onDone?: () => void }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const letters = q(".sc-letter");
      const draws = q(".sc-draw") as unknown as SVGGeometryElement[];
      draws.forEach((p) => {
        const len = p.getTotalLength ? p.getTotalLength() : 200;
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });

      if (reduced()) {
        gsap.set(draws, { strokeDashoffset: 0 });
        onDone?.();
        return;
      }

      const build = (tl: gsap.core.Timeline) => {
        tl.from(letters, { yPercent: 105, duration: 1, ease: "power4.out", stagger: 0.045 }, 0)
          .from(q(".sc-shadow"), { xPercent: -6, opacity: 0, duration: 1.1, ease: "power3.out" }, 0.25)
          .from(q(".sc-person"), { yPercent: 22, opacity: 0, duration: 1.2, ease: "power4.out" }, 0.15)
          .to(draws, { strokeDashoffset: 0, duration: 0.9, ease: "power2.inOut", stagger: 0.12 }, 0.7)
          .from(q(".sc-tag"), { opacity: 0, y: 8, duration: 0.5, stagger: 0.12 }, 0.9);
        return tl;
      };

      if (variant === "intro") {
        const tl = gsap.timeline({ onComplete: () => onDone?.() });
        build(tl);
        tl.to({}, { duration: 0.55 });
      } else {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: root.current, start: "top 75%", end: "top 15%", scrub: 0.8 },
        });
        build(tl);
      }

      // pointer parallax
      if (window.matchMedia("(pointer: fine)").matches) {
        const px = gsap.quickTo(q(".sc-parallax")[0], "x", { duration: 0.9, ease: "power3" });
        const wx = gsap.quickTo(q(".sc-mark")[0], "x", { duration: 1.2, ease: "power3" });
        const move = (e: PointerEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          px(nx * -22);
          wx(nx * 30);
        };
        window.addEventListener("pointermove", move);
        return () => window.removeEventListener("pointermove", move);
      }
    },
    { scope: root, dependencies: [variant] }
  );

  return (
    <div ref={root} className={`scene scene-${variant}`}>
      <div className="sc-grid" aria-hidden />
      <div className="sc-mark" aria-hidden>
        {WORDS.map((w) => (
          <span key={w} className="sc-word">
            {w.split("").map((c, i) => (
              <span key={i} className="sc-lw">
                <span className="sc-letter">{c}</span>
              </span>
            ))}
          </span>
        ))}
      </div>

      <div className="sc-stage">
        <div className="sc-parallax">
          <div className="sc-shadow" aria-hidden />
          <img className="sc-person" src="/pranay-bw.webp" alt="Portrait of Pranay Gupta" draggable={false} />
        </div>
        <svg className="sc-lines" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden>
          <path className="sc-draw" d="M30,330 H330" />
          <path className="sc-draw" d="M970,370 H690" />
          <path className="sc-draw" d="M30,860 H280" />
          <path className="sc-draw" d="M970,700 H730" />
        </svg>
        <span className="sc-tag" style={{ left: "3%", top: "34%" }}>// software engineer</span>
        <span className="sc-tag" style={{ right: "3%", top: "38%" }}>status: building</span>
        <span className="sc-tag" style={{ left: "3%", bottom: "11%" }}>IIT Madras · GNDU</span>
        <span className="sc-tag" style={{ right: "3%", bottom: "28%" }}>based in India</span>
      </div>
    </div>
  );
}
