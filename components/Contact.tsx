import { person } from "@/data/resume";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 border-t border-hairline">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-end">
        <div>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
            Have something worth
            <br />
            <span className="text-accent">building?</span>
          </h2>
          <p className="mt-5 max-w-md text-ink-soft leading-relaxed">
            I&apos;m open to backend and full-stack roles, especially where retrieval,
            data, or LLM integration are involved.
          </p>
        </div>

        <div className="flex flex-col gap-3 font-mono text-sm">
          <a
            href={`mailto:${person.email}`}
            className="rounded-full bg-ink text-paper px-6 py-3 text-center hover:bg-accent transition-colors break-all"
          >
            {person.email}
          </a>
          <div className="flex gap-4 justify-center">
            <a href={person.github} target="_blank" rel="noreferrer" className="text-ink-soft hover:text-ink transition-colors">
              GitHub
            </a>
            <a href={person.linkedin} target="_blank" rel="noreferrer" className="text-ink-soft hover:text-ink transition-colors">
              LinkedIn
            </a>
            <a href="/Pranay_Gupta_Resume.pdf" download className="text-ink-soft hover:text-ink transition-colors">
              Resume
            </a>
          </div>
          <p className="text-center text-ink-soft">
            <a href={`tel:${person.phone.replace(/\s/g, "")}`} className="hover:text-ink transition-colors">
              {person.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
