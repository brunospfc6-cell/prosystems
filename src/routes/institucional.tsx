import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/page-hero";
import { COMPANY, SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/institucional")({ component: Institucional });

function Institucional() {
  return (
    <>
      <PageHero
        image="/hero.jpg"
        kicker="Institucional"
        title={`${COMPANY.legal}: Autodesk Silver Partner e especialista em BIM`}
        lead={`Desde ${COMPANY.since}, atuamos na transformação digital de empresas de engenharia, arquitetura, infraestrutura e manufatura.`}
      />
      <Section>
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3 space-y-5 text-base leading-relaxed text-muted">
            <p>
              Como <strong className="text-fg">Autodesk Silver Partner</strong> e{" "}
              <strong className="text-fg">Autodesk Authorized Training Center (ATC)</strong>,
              oferecemos licenciamento oficial Autodesk®, consultoria BIM, implantação do
              Autodesk Construction Cloud®, treinamentos especializados e suporte técnico
              para impulsionar produtividade, colaboração e inovação em projetos.
            </p>
            <p>
              Trabalhamos com transparência, integridade e foco em resultados, construindo
              relacionamentos duradouros com clientes, colaboradores e parceiros. Nosso
              objetivo é apoiar organizações na adoção de tecnologias Autodesk® e da
              metodologia BIM para obter projetos mais eficientes, inteligentes e
              colaborativos.
            </p>
            <p>
              Independentemente da complexidade do seu projeto, nossa equipe em{" "}
              {COMPANY.city} está preparada para implementar soluções Autodesk®, acelerar a
              adoção BIM e alcançar novos níveis de produtividade.
            </p>
          </div>
          <aside className="md:col-span-2 rounded-lg bg-surface p-6">
            <h2 className="font-display text-sm font-semibold tracking-wide uppercase">
              Nossos diferenciais
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {[
                "Autodesk Silver Partner",
                "Autodesk Authorized Training Center (ATC)",
                `Mais de ${COMPANY.years} anos de experiência desde ${COMPANY.since}`,
                "Especialistas em implantação BIM",
                "Licenciamento oficial Autodesk®",
                "Consultoria técnica especializada",
                "Treinamentos oficiais Autodesk®",
                "Atendimento a organizações em todo o Brasil",
              ].map((d) => (
                <li key={d} className="border-b border-border py-2 last:border-0">
                  {d}
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <article key={s.slug} className="rounded-lg bg-surface p-6">
              <h2 className="font-display text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/contato">Fale conosco</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/especializacoes">Especializações</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
