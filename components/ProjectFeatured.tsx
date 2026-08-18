import type { Project } from "@/data/resume";
import RagDiagram from "./RagDiagram";

export default function ProjectFeatured({ project }: { project: Project }) {
  return (
    <article className="py-14 md:py-16 border-b border-hairline">
      <div className="flex items-baseline justify-between gap-4 mb-3">
        <p className="font-mono text-[13px] uppercase tracking-wide text-accent">Featured</p>
        <a
          href={project.link.href}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[13.5px] text-ink-soft hover:text-ink transition-colors whitespace-nowrap"
        >
          {project.link.label} →
        </a>
      </div>

      <h3 className="font-display text-3xl md:text-4xl text-ink mb-2">{project.name}</h3>
      <p className="text-ink-soft mb-6 max-w-xl">{project.tagline}</p>

      <ul className="space-y-3 max-w-2xl mb-7">
        {project.points.map((p, i) => (
          <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink">
            <span aria-hidden className="text-accent mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
            {p}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.stack.map((s) => (
          <span
            key={s}
            className="font-mono text-[12.5px] text-ink-soft border border-hairline rounded-full px-3 py-1"
          >
            {s}
          </span>
        ))}
      </div>

      <RagDiagram />
    </article>
  );
}
