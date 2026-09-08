import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { signOut } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

const NAV = [
  { to: "/briefing", label: "Projeto" },
  { to: "/solucoes", label: "Soluções" },
  { to: "/institucional", label: "Institucional" },
  { to: "/capacitacao", label: "Capacitação" },
  { to: "/cases", label: "Cases" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
              activeProps={{ className: "text-fg" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <AuthSlot />
          <Button asChild size="sm">
            <Link to="/briefing">Construir</Link>
          </Button>
        </div>
        <button
          type="button"
          className="relative grid size-11 place-items-center rounded-md text-fg lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <div
        className={cn(
          "border-t border-border bg-surface lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex min-h-11 items-center text-base text-fg"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/briefing"
            className="flex min-h-11 items-center text-base text-fg"
            onClick={() => setOpen(false)}
          >
            Construir o projeto
          </Link>
          <Link
            to="/contato"
            className="flex min-h-11 items-center text-base text-fg"
            onClick={() => setOpen(false)}
          >
            Fale conosco
          </Link>
          <Link
            to="/portal"
            className="flex min-h-11 items-center text-base text-fg"
            onClick={() => setOpen(false)}
          >
            Área do cliente
          </Link>
          <div className="py-3">
            <AuthSlot />
          </div>
        </nav>
      </div>
    </header>
  );
}

function AuthSlot() {
  const { user, isPending } = useCurrentUserState();
  if (isPending) {
    return <div className="h-8 w-24 animate-pulse rounded-full bg-elevated" />;
  }
  if (!user) {
    return (
      <Button asChild variant="ghost" size="sm">
        <Link to="/login">Entrar</Link>
      </Button>
    );
  }
  return (
    <div className="flex items-center gap-2">
      <Link
        to="/portal"
        className="max-w-36 truncate text-sm text-muted hover:text-fg"
      >
        {user.displayName || user.primaryEmail || "Conta"}
      </Link>
      <button
        type="button"
        onClick={() => void signOut()}
        className="text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
      >
        Sair
      </button>
    </div>
  );
}
