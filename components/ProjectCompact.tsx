"use client";

import { useState } from "react";
import type { Project } from "@/data/resume";

export default function ProjectCompact({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="py-7 border-b border-hairline last:border-b-0">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-start md:items-center justify-between gap-4 text-left group"
      >
        <div>
          <h4 className="font-display text-xl md:text-2xl text-ink group-hover:text-accent transition-colors">
            {project.name}
          </h4>
          <p className="text-ink-soft text-[14px] mt-1">{project.tagline}</p>
        </div>
        <span
          aria-hidden
          className={`font-mono text-lg text-ink-soft shrink-0 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {open && (
        <div className="mt-5 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6">
          <ul className="space-y-2.5 max-w-2xl">
            {project.points.map((p, i) => (
              <li key={i} className="flex gap-3 text-[14.5px] leading-relaxed text-ink-soft">
                <span aria-hidden className="text-accent mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
                {p}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 md:items-end md:text-right shrink-0">
            <div className="flex flex-wrap gap-2 md:justify-end">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[12.5px] text-ink-soft border border-hairline rounded-full px-3 py-1"
                >
                  {s}
                </span>
              ))}
            </div>
            <a
              href={project.link.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[13.5px] text-accent hover:text-ink transition-colors"
            >
              {project.link.label} →
            </a>
          </div>
        </div>
      )}
    </article>
  );
}
