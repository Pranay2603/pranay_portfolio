"use client";
import { useEffect, useRef, useState } from "react";
import Scene from "./Scene";
import { gsap } from "./gsap";

export default function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const [gone, setGone] = useState(false);
  const leaving = useRef(false);

  const leave = () => {
    if (leaving.current || !ref.current) return;
    leaving.current = true;
    gsap.to(ref.current, {
      yPercent: -101,
      duration: 1.1,
      ease: "power4.inOut",
      onStart: () => window.dispatchEvent(new Event("intro-leave")),
      onComplete: () => {
        document.documentElement.classList.remove("locked");
        setGone(true);
      },
    });
  };

  useEffect(() => {
    document.documentElement.classList.add("locked");
    const t = setTimeout(leave, 6000);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;
  return (
    <div ref={ref} className="intro" onClick={leave}>
      <Scene variant="intro" onDone={leave} />
      <button className="intro-skip" onClick={leave}>skip ↓</button>
    </div>
  );
}
