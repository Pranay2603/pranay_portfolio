"use client";

import { useEffect, useState } from "react";
import { person } from "@/data/resume";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#engineering", label: "Engineering" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

const resumeHref = "/Pranay_Gupta_Resume.pdf";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/90 backdrop-blur-sm border-b border-hairline" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-[15px] tracking-tight text-ink hover:text-accent transition-colors"
        >
          {person.name}
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-[14.5px] text-ink-soft">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href={resumeHref}
            download
            className="hover:text-ink transition-colors"
          >
            Resume
          </a>
          <ThemeToggle />
          <a
            href={`mailto:${person.email}`}
            className="rounded-full border border-ink px-4 py-1.5 text-ink hover:bg-ink hover:text-paper transition-colors"
          >
            Say hello
          </a>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
        >
          <span
            className={`block h-px w-5 bg-ink transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-hairline bg-paper px-6 py-4 flex flex-col gap-4 font-mono text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-ink-soft hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href={resumeHref} download className="text-ink-soft hover:text-ink transition-colors">
            Resume
          </a>
          <a href={`mailto:${person.email}`} className="text-accent break-all">
            {person.email}
          </a>
          <div className="pt-1">
            <ThemeToggle />
          </div>
        </nav>
      )}
    </header>
  );
}
