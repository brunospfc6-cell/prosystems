import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Building2, Landmark, Layers3, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/page-hero";
import { CASES, COMPANY, PRODUCTS, SERVICES, SPECIALIZATIONS } from "@/lib/site-data";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <section className="relative min-h-dvh overflow-hidden">
        <img
          src="/hero.jpg"
          alt="Complexo arquitetônico brasileiro com gêmeos digitais BIM"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/85 to-bg/45" />
        <div className="relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-24">
          <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
            {COMPANY.badges.join(" · ")}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
            {COMPANY.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-fg/80 sm:text-lg">
            A {COMPANY.legal} oferece licenciamento oficial Autodesk®, consultoria BIM,
            Autodesk Construction Cloud®, treinamentos especializados e suporte técnico
            para engenharia, arquitetura, infraestrutura e manufatura.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/briefing">
                Construir o projeto
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/solucoes">Ver soluções</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-4 sm:px-6">
          {[
            { k: `${COMPANY.years}+`, v: `anos desde ${COMPANY.since}` },
            { k: "ATC", v: "Authorized Training Center" },
            { k: "4", v: "especializações Autodesk" },
            { k: "BR", v: "atendimento em todo o Brasil" },
          ].map((s) => (
            <div key={s.v}>
              <p className="font-display text-2xl font-semibold text-primary">{s.k}</p>
              <p className="mt-1 text-sm text-muted">{s.v}</p>
            </div>
          ))}
        </div>
      </div>

      <Section>
        <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">Atuação</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
          Um parceiro completo para a transformação digital dos seus projetos
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.slug}
              className="rounded-lg bg-surface p-6 shadow-[var(--shadow-border)] transition-shadow hover:shadow-[var(--shadow-border-hover)]"
            >
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
          Especializações
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold">Onde entregamos resultado</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {SPECIALIZATIONS.map((s, i) => (
            <article key={s.title} className="flex gap-4 rounded-lg bg-surface p-5">
              <span className="grid size-10 shrink-0 place-items-center rounded-md bg-elevated text-primary">
                {i === 0 ? (
                  <Building2 className="size-5" />
                ) : i === 1 ? (
                  <Layers3 className="size-5" />
                ) : i === 2 ? (
                  <Landmark className="size-5" />
                ) : (
                  <Award className="size-5" />
                )}
              </span>
              <div>
                <h3 className="font-display font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link to="/especializacoes">
              Ver especializações e acreditações
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-0 md:grid-cols-2">
          <Link to="/solucoes/edificacoes" className="group relative min-h-80 overflow-hidden">
            <img
              src="/edificacoes.jpg"
              alt="Modelo BIM de edificação"
              className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/70 to-bg/20" />
            <div className="relative flex h-full min-h-80 flex-col justify-end p-8">
              <p className="text-xs tracking-[0.2em] text-primary uppercase">Edificações</p>
              <h2 className="mt-2 font-display text-2xl font-semibold">
                Do estudo preliminar à coordenação 3D
              </h2>
              <p className="mt-2 max-w-md text-sm text-fg/80">
                Revit, Navisworks e Autodesk Construction Cloud para projetar, antecipar
                conflitos e entregar modelos integrados.
              </p>
            </div>
          </Link>
          <Link to="/solucoes/infraestrutura" className="group relative min-h-80 overflow-hidden">
            <img
              src="/infra.jpg"
              alt="Infraestrutura com alinhamentos BIM"
              className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/70 to-bg/20" />
            <div className="relative flex h-full min-h-80 flex-col justify-end p-8">
              <p className="text-xs tracking-[0.2em] text-primary uppercase">Infraestrutura</p>
              <h2 className="mt-2 font-display text-2xl font-semibold">
                Civil 3D e InfraWorks em contexto real
              </h2>
              <p className="mt-2 max-w-md text-sm text-fg/80">
                Automatize cálculos, visualize o entorno e acelere entregas de
                rodovias, ferrovias, pontes e saneamento.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <Section>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
              Canteiro conectado
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              Autodesk Construction Cloud
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              Um ambiente comum de dados do projeto ao canteiro — revisão, RFI,
              planejamento e colaboração em um só lugar.
            </p>
          </div>
          <Button asChild>
            <Link to="/solucoes">
              Ver soluções
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
              Cases
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold">Quem já constrói conosco</h2>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link to="/cases">Ver todos</Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {CASES.slice(0, 3).map((c) => (
            <blockquote
              key={c.client}
              className="rounded-lg bg-surface p-6 shadow-[var(--shadow-border)]"
            >
              <p className="text-sm font-medium text-primary">{c.client}</p>
              <p className="mt-3 text-sm leading-relaxed text-fg/90">“{c.quote}”</p>
              <p className="mt-4 text-xs text-muted">
                {c.person} · {c.role}
              </p>
            </blockquote>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
          Ecossistema Autodesk
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold">Soluções que implementamos</h2>
        <ul className="mt-8 flex flex-wrap gap-2">
          {PRODUCTS.map((p) => (
            <li
              key={p}
              className="rounded-full bg-elevated px-3 py-1.5 text-sm text-muted"
            >
              {p}
            </li>
          ))}
        </ul>
      </Section>

      <section className="relative overflow-hidden">
        <img
          src="/capacitacao.jpg"
          alt="Sala de treinamento Autodesk"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-bg/80" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-20 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.22em] text-primary uppercase">
              <GraduationCap className="size-4" />
              Capacitação oficial
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              Treinamento oficial Autodesk no Centro-Oeste
            </h2>
            <p className="mt-3 text-muted">
              Centro de treinamento, certificação e parceiro acadêmico Autodesk.
              Cursos presenciais e a distância da AEC Collection, com instrutores
              certificados.
            </p>
          </div>
          <Button asChild size="lg">
            <Link to="/capacitacao">Ver treinamentos</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
