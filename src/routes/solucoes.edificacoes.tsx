import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/page-hero";

export const Route = createFileRoute("/solucoes/edificacoes")({
  component: Edificacoes,
});

function Edificacoes() {
  return (
    <>
      <PageHero
        image="/edificacoes.jpg"
        kicker="Soluções para edificações"
        title="Modele, coordene e entregue edifícios com BIM"
        lead="Tome decisões mais inteligentes desde o estudo preliminar com análises em tempo real. Transforme ideias em modelos completos, precisos e integrados."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Projeto inteligente",
              body: "Revit para arquitetura, estrutura e MEP — um modelo que alimenta quantitativos, desenhos e coordenação.",
            },
            {
              title: "Antecipe conflitos",
              body: "Navisworks e BIM Collaborate para detectar interferências e ter controle total antes da obra começar.",
            },
            {
              title: "Do conceito à execução",
              body: "Autodesk Construction Cloud conecta escritório e canteiro com dados, issues e versões em um só ambiente.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-lg bg-surface p-6">
              <h2 className="font-display text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-muted">
          Especializações em Arquitetura de Edifícios e MEP: colaboração de equipe,
          transferência de dados, redução do tempo de projeto e estimativas baseadas em
          modelo. Softwares do nosso portfólio incluem Revit, AutoCAD, Navisworks, FormIt
          Pro, Fabrication CADmep e Point Layout.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link to="/contato">Conversar sobre edificações</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
