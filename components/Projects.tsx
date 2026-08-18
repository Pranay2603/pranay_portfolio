import { projects } from "@/data/resume";
import ProjectFeatured from "./ProjectFeatured";
import ProjectCompact from "./ProjectCompact";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="scroll-mt-16 mx-auto max-w-6xl px-6 md:px-10">
      <div id="engineering" className="scroll-mt-16">
        <h2 className="font-mono text-[15px] uppercase tracking-wide text-ink-soft pt-16 md:pt-20 pb-2 border-t border-hairline">
          Work
        </h2>
        {featured && <ProjectFeatured project={featured} />}
      </div>

      <div className="pt-2">
        {rest.map((p) => (
          <ProjectCompact key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
