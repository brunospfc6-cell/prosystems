import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/page-hero";
import { COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/capacitacao")({ component: Capacitacao });

function Capacitacao() {
  return (
    <>
      <PageHero
        image="/capacitacao.jpg"
        kicker="Capacitação"
        title="Treinamentos oficiais Autodesk, no seu ritmo"
        lead="Qualificação CAD e BIM com especialistas certificados. Centro de treinamento, certificação e parceiro acadêmico Autodesk no Centro-Oeste."
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Centro de treinamento",
              body: "Turmas presenciais em Brasília com material didático oficial Autodesk, para quem está começando ou aprofundando BIM e CAD.",
            },
            {
              title: "Centro de certificação",
              body: "Avalie e certifique sua equipe nas ferramentas Autodesk que o mercado exige, com provas aplicadas por um centro autorizado.",
            },
            {
              title: "Parceiro acadêmico",
              body: "Apoio a instituições de ensino do Centro-Oeste na formação de alunos e docentes em ferramentas Autodesk.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-lg bg-surface p-6">
              <h2 className="font-display text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold">CAD Studio</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Pioneira em Brasília e no Centro-Oeste, a CAD Studio oferece cursos com
              instrutores certificados, conteúdo programático otimizado e rapidez no
              aprendizado. Ensino a distância com cerca de 10 cursos da AEC Collection.
            </p>
            <a
              href={COMPANY.social.cadstudio}
              className="mt-4 inline-block text-sm text-primary hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              cadstudio.com.br
            </a>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">Turmas sob demanda</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Montamos trilhas para órgãos públicos e empresas — Revit (arquitetura, MEP,
              estrutura), Civil 3D, InfraWorks, Navisworks e Autodesk Construction Cloud.
              Do onboarding de equipes novas em BIM ao aprofundamento de especialistas.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <Button asChild>
            <Link to="/contato">Solicitar uma turma</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
