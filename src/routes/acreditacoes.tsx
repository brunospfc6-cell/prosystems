import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-hero";
import { ACCREDITATIONS } from "@/lib/site-data";

export const Route = createFileRoute("/acreditacoes")({ component: Acreditacoes });

function Acreditacoes() {
  return (
    <>
      <PageHero
        image="/edificacoes.jpg"
        compact
        kicker="Acreditações"
        title="Reconhecimento pelo investimento em sucesso do cliente"
        lead="A acreditação é obtida ao realizar uma verificação de conhecimento, entregar o serviço a um cliente e ter avaliação positiva na prestação."
      />
      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          {ACCREDITATIONS.map((group) => (
            <div key={group.group}>
              <h2 className="font-display text-2xl font-semibold">{group.group}</h2>
              <ul className="mt-6 space-y-5">
                {group.items.map((item) => (
                  <li key={item.title} className="border-t border-border pt-4">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
