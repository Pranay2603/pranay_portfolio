import { strataFlow } from "@/data/resume";
import FlowDiagram from "./FlowDiagram";

export default function StrataFlow() {
  return (
    <FlowDiagram
      title="How Strata answers a question. Click a stage."
      stages={strataFlow}
      ariaLabel="Strata request flow"
    />
  );
}
