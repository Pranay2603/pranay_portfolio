import { stack } from "@/data/resume";

export default function Stack() {
  const groups = Object.entries(stack);

  return (
    <section id="stack" className="scroll-mt-16 mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-20 border-t border-hairline">
      <h2 className="font-mono text-[15px] uppercase tracking-wide text-ink-soft mb-8">Stack</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {groups.map(([category, items]) => (
          <div key={category}>
            <p className="font-display text-lg text-ink mb-3">{category}</p>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="font-mono text-[13px] text-ink-soft border border-hairline rounded-full px-3 py-1.5 hover:border-accent hover:text-ink transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
