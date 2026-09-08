import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/page-hero";
import { CASES } from "@/lib/site-data";

export const Route = createFileRoute("/cases")({ component: Cases });

function Cases() {
  return (
    <>
      <PageHero
        image="/infra.jpg"
        kicker="Cases de sucesso"
        title="Histórias que destacam resultados dos nossos clientes"
        lead="Do aço à Amazônia, do saneamento à fiscalização federal — BIM e Autodesk aplicados onde o Brasil constrói."
      />
      <Section>
        <div className="grid gap-6">
          {CASES.map((c) => (
            <article
              key={c.client}
              className="grid gap-6 rounded-lg bg-surface p-6 shadow-[var(--shadow-border)] md:grid-cols-[200px_1fr] md:p-8"
            >
              <div>
                <p className="font-display text-xl font-semibold">{c.client}</p>
                <p className="mt-2 text-sm text-muted">{c.result}</p>
              </div>
              <blockquote>
                <p className="text-base leading-relaxed text-fg/90">“{c.quote}”</p>
                <footer className="mt-4 text-sm text-muted">
                  {c.person} · {c.role}
                </footer>
              </blockquote>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild>
            <Link to="/contato">Quero um resultado parecido</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
