import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-16">
      <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
        Área do cliente
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold">Entre para solicitar propostas e abrir chamados</h1>
      <p className="mt-3 text-sm text-muted">
        Use sua conta Google ou X. Visitantes continuam podendo falar com o comercial em{" "}
        <Link to="/contato" className="text-fg underline-offset-4 hover:underline">
          Fale conosco
        </Link>
        .
      </p>
      <div className="mt-8 space-y-3">
        {authEnabled ? (
          GROK_PROVIDERS.map((p) => (
            <Button
              key={p.providerId}
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => signIn(p.providerId, { callbackURL: "/portal" })}
            >
              Continuar com {p.label}
            </Button>
          ))
        ) : (
          <p className="text-sm text-muted">O acesso está desativado neste ambiente.</p>
        )}
      </div>
    </main>
  );
}
