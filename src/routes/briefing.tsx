import { createFileRoute } from "@tanstack/react-router";
import { BriefingFlow } from "@/components/site/briefing-flow";

export const Route = createFileRoute("/briefing")({ component: BriefingPage });

function BriefingPage() {
  return <BriefingFlow />;
}
