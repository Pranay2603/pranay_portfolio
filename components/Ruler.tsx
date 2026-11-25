"use client";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "./gsap";

export default function Ruler() {
  const fill = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to(fill.current, {
      scaleY: 1, ease: "none",
      scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.3 },
    });
  });
  return (
    <div className="ruler" aria-hidden>
      <div className="ruler-ticks" />
      <div ref={fill} className="ruler-fill" />
    </div>
  );
}
