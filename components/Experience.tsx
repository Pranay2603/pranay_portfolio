import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-20 border-t border-hairline">
      <h2 className="font-mono text-[15px] uppercase tracking-wide text-ink-soft mb-8">
        Experience
      </h2>

      {experience.map((job, i) => (
        <div key={i} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-10 mb-10 last:mb-0">
          <div className="font-mono text-[13.5px] text-ink-soft">{job.period}</div>
          <div className="max-w-2xl pb-2">
            <h3 className="font-display text-2xl text-ink">{job.role}</h3>
            <p className="text-ink-soft text-[14px] mb-4">
              {job.company} — {job.location}
            </p>
            <ul className="space-y-2.5">
              {job.points.map((p, j) => (
                <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                  <span aria-hidden className="text-accent mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
