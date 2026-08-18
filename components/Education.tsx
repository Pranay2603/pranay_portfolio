import { education } from "@/data/resume";

export default function Education() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-20 border-t border-hairline">
      <h2 className="font-mono text-[15px] uppercase tracking-wide text-ink-soft mb-8">
        Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {education.map((ed, i) => (
          <div key={i} className="flex justify-between gap-4 border-b border-hairline pb-4">
            <div>
              <p className="font-display text-lg text-ink">{ed.school}</p>
              <p className="text-ink-soft text-[14px]">
                {ed.degree}
                {ed.location ? ` — ${ed.location}` : ""}
              </p>
            </div>
            <p className="font-mono text-[13.5px] text-ink-soft whitespace-nowrap shrink-0 pt-1">
              {ed.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
