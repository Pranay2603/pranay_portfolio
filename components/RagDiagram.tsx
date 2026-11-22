import { ragPipeline } from "@/data/resume";
import FlowDiagram from "./FlowDiagram";

export default function RagDiagram() {
  return (
    <FlowDiagram
      title="How ResolveAI answers a question. Click a stage."
      stages={ragPipeline}
      ariaLabel="RAG pipeline stages"
    />
  );
}
