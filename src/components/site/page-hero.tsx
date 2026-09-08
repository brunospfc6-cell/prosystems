import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHero({
  kicker,
  title,
  lead,
  image,
  compact,
}: {
  kicker?: string;
  title: string;
  lead?: string;
  image?: string;
  compact?: boolean;
}) {
  return (
    <section className={cn("relative overflow-hidden", compact ? "min-h-72" : "min-h-96")}>
      {image ? (
        <img src={image} alt="" className="absolute inset-0 size-full object-cover" />
      ) : null}
      <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/90 to-bg/50" />
      <div className="relative mx-auto flex max-w-6xl flex-col justify-end gap-4 px-4 py-16 sm:px-6 sm:py-20">
        {kicker ? (
          <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
            {kicker}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          {title}
        </h1>
        {lead ? (
          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{lead}</p>
        ) : null}
      </div>
    </section>
  );
}

export function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20", className)}>
      {children}
    </section>
  );
}
