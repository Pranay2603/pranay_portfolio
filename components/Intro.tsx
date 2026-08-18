export default function Intro() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-20 border-t border-hairline">
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-16">
        <p className="font-mono text-[15px] text-ink-soft uppercase tracking-wide">
          What I work on
        </p>
        <div className="max-w-2xl">
          <p className="font-display text-2xl md:text-[1.75rem] leading-snug text-ink">
            Most of my projects share the same shape: a document or a request comes in,
            something has to retrieve or verify the right information fast, and the
            whole thing has to survive on a free-tier server.
          </p>
          <p className="mt-5 text-ink-soft leading-relaxed">
            That constraint — not the model — is usually the interesting engineering
            problem. Swapping PyTorch for FastEmbed to fit inside a 512&nbsp;MB deploy
            limit, or building a heuristic scam detector that doesn&apos;t need a model
            at all, taught me more about shipping than any tutorial did.
          </p>
        </div>
      </div>
    </section>
  );
}
