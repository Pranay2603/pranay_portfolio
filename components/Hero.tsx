import { person } from "@/data/resume";

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-6 md:px-10 pt-16 md:pt-24 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-end">
        <div className="min-w-0">
          <p className="font-mono text-[15px] tracking-wide text-accent mb-6">
            {person.role} — based in {person.location}
          </p>
          <h1 className="font-display text-[13vw] leading-[0.95] md:text-[5.5rem] md:leading-[0.95] tracking-tight text-ink">
            Retrieval, auth,
            <br />
            and everything <em className="not-italic text-accent">between.</em>
          </h1>
          <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-ink-soft">
            I build backend systems and RAG pipelines that have to actually run —
            in production, under memory limits, with real users hitting them.
            Python and FastAPI on the server, LangChain where retrieval is involved,
            React on the front.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
            >
              See the work
            </a>
            <a
              href={person.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm text-ink-soft hover:text-ink transition-colors underline decoration-hairline underline-offset-4 break-all"
            >
              {person.githubLabel}
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm text-ink-soft hover:text-ink transition-colors underline decoration-hairline underline-offset-4"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Metadata block — real facts, no decoration */}
        <dl className="hidden md:grid grid-cols-[auto_1fr] gap-x-4 gap-y-2.5 font-mono text-[14px] text-ink-soft border-l border-hairline pl-6 pb-1 min-w-[240px]">
          <dt className="text-ink">Focus</dt>
          <dd>RAG systems, backend architecture</dd>
          <dt className="text-ink">Recent</dt>
          <dd>Frontend lead (interim), Zurfte</dd>
          <dt className="text-ink">Studying</dt>
          <dd>Data Science, IIT Madras</dd>
          <dt className="text-ink">Shipped on</dt>
          <dd>Render, 512MB constraint</dd>
        </dl>
      </div>
    </section>
  );
}
