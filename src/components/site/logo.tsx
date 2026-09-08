import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2.5 text-fg", className)}>
      <img
        src="/logo.png"
        alt=""
        width={36}
        height={36}
        className="size-9 shrink-0 outline-none"
      />
      <span className="font-display text-sm font-bold tracking-[0.14em] uppercase">
        Pro-Systems
      </span>
    </Link>
  );
}
