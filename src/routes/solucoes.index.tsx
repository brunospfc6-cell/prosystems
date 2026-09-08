import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Section } from "@/components/site/page-hero";

export const Route = createFileRoute("/solucoes/")({ component: Solucoes });

function Solucoes() {
  return (
    <>
      <PageHero
        image="/hero.jpg"
        kicker="Soluções"
        title="Do conceito à execução, um ecossistema Autodesk® completo"
        lead="Licenciamento, implantação BIM, Construction Cloud e desenvolvimento sob medida para edificações e infraestrutura."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              to: "/solucoes/edificacoes" as const,
              img: "/edificacoes.jpg",
              kicker: "AEC",
              title: "Edificações",
              body: "Revit, Navisworks e ACC para projetar, coordenar e construir com menos retrabalho.",
            },
            {
              to: "/solucoes/infraestrutura" as const,
              img: "/infra.jpg",
              kicker: "Civil",
              title: "Infraestrutura",
              body: "Civil 3D e InfraWorks para rodovias, ferrovias, pontes, saneamento e ativos hídricos.",
            },
          ].map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group overflow-hidden rounded-lg bg-surface shadow-[var(--shadow-border)] transition-shadow hover:shadow-[var(--shadow-border-hover)]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.img}
                  alt=""
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs tracking-[0.2em] text-primary uppercase">{card.kicker}</p>
                <h2 className="mt-2 font-display text-xl font-semibold">{card.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{card.body}</p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                  Saiba mais <ArrowRight className="size-4" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
