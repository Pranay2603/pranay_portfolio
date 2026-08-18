import { person } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl w-full px-6 md:px-10 py-8 border-t border-hairline flex flex-col md:flex-row items-center justify-between gap-3">
      <p className="font-mono text-[13.5px] text-ink-soft">
        {person.name} — built with Next.js
      </p>
      <p className="font-mono text-[13.5px] text-ink-soft">
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
