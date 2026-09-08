import { STAGE_LABELS } from "@/lib/briefing";
import { cn } from "@/lib/utils";

const STAGES = [0, 1, 2, 3, 4, 5, 6] as const;

export function RisingBuilding({ stage }: { stage: number; variant?: string }) {
  const clamped = Math.max(0, Math.min(6, stage));

  return (
    <div className="rising-frame">
      <div className="rising-stack">
        {STAGES.map((n) => (
          <img
            key={n}
            src={`/briefing/stage-${n}.jpg`}
            alt={n === clamped ? STAGE_LABELS[n] : ""}
            className={cn("rising-shot", n === clamped && "is-on")}
          />
        ))}
        <div className="rising-veil" />
      </div>
      <p className="rising-caption">{STAGE_LABELS[clamped]}</p>
      <p className="rising-meter">{clamped}/6</p>
    </div>
  );
}
