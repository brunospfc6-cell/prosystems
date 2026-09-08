import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/page-hero";

export const Route = createFileRoute("/solucoes/infraestrutura")({
  component: Infra,
});

function Infra() {
  return (
    <>
      <PageHero
        image="/infra.jpg"
        kicker="Soluções para infraestrutura"
        title="Projete com inteligência em BIM para infraestrutura"
        lead="Automatize cálculos, acelere entregas e visualize o projeto em contexto real antes da execução — rodovias, ferrovias, pontes, túneis e ativos hídricos."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Civil 3D",
              body: "Corredores, superfícies, redes de drenagem e documentação alinhada aos padrões de órgãos públicos. Implementação e customização — inclusive o app de caminhamento de perímetro criado para a Terracap.",
            },
            {
              title: "InfraWorks",
              body: "Modele estradas nas fases conceitual e preliminar sobre o entorno real. Ideal para comunicação com stakeholders e estudos de alternativas.",
            },
            {
              title: "Transporte",
              body: "Fluxos BIM conectados para pontes, túneis, ferrovias e rodovias mais resilientes, produtivos e lucrativos.",
            },
            {
              title: "Infraestrutura hídrica",
              body: "Modelagem hidráulica e nuvem para eficiência e sustentabilidade no ciclo de vida de ativos de saneamento e recursos hídricos — como no trabalho com a CAESB.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-lg bg-surface p-6">
              <h2 className="font-display text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild>
            <Link to="/contato">Conversar sobre infraestrutura</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
