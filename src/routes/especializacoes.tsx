import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/page-hero";
import { SPECIALIZATIONS } from "@/lib/site-data";

export const Route = createFileRoute("/especializacoes")({
  component: Especializacoes,
});

function Especializacoes() {
  return (
    <>
      <PageHero
        image="/edificacoes.jpg"
        kicker="Especializações e afiliação"
        title="Parceiros especializados nos padrões Autodesk"
        lead="Atendemos aos critérios de capacidade e desempenho de pessoal certificado para entregar o resultado desejado em cada segmento industrial."
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {SPECIALIZATIONS.map((s) => (
            <article key={s.title} className="rounded-lg bg-surface p-6">
              <p className="text-xs tracking-[0.18em] text-primary uppercase">Especialização</p>
              <h2 className="mt-2 font-display text-xl font-semibold">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild variant="outline">
            <Link to="/acreditacoes">Ver acreditações</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
