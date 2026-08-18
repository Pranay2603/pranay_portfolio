"use client";

import { useState } from "react";
import { ragPipeline } from "@/data/resume";

export default function RagDiagram() {
  const [activeId, setActiveId] = useState(ragPipeline[0].id);
  const active = ragPipeline.find((s) => s.id === activeId) ?? ragPipeline[0];
  const activeIndex = ragPipeline.findIndex((s) => s.id === activeId);

  return (
    <div className="rounded-lg border border-hairline bg-paper-dim/60 p-5 md:p-7">
      <p className="font-mono text-[13.5px] uppercase tracking-wide text-ink-soft mb-5">
        How ResolveAI answers a question — click a stage
      </p>

      {/* Stage row */}
      <div
        role="tablist"
        aria-label="RAG pipeline stages"
        className="flex flex-wrap md:flex-nowrap items-stretch gap-0"
      >
        {ragPipeline.map((stage, i) => (
          <div key={stage.id} className="flex items-center flex-1 min-w-[110px]">
            <button
              role="tab"
              aria-selected={activeId === stage.id}
              onClick={() => setActiveId(stage.id)}
              className={`w-full text-left rounded-md border px-3 py-3 font-mono text-[13.5px] leading-tight transition-colors ${
                activeId === stage.id
                  ? "border-accent bg-accent text-paper"
                  : "border-hairline text-ink-soft hover:border-ink hover:text-ink"
              }`}
            >
              <span className="block text-[11px] opacity-70 mb-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              {stage.label}
            </button>
            {i < ragPipeline.length - 1 && (
              <span
                aria-hidden
                className={`hidden md:block h-px w-4 shrink-0 transition-colors ${
                  i < activeIndex ? "bg-accent" : "bg-hairline"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Detail panel */}
      <div className="mt-6 pt-5 border-t border-hairline">
        <p className="font-display text-lg text-ink mb-1.5">{active.label}</p>
        <p className="text-[15px] text-ink-soft leading-relaxed max-w-xl">{active.detail}</p>
      </div>
    </div>
  );
}
