import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/page-hero";
import { EVENTS } from "@/lib/site-data";

export const Route = createFileRoute("/eventos")({ component: Eventos });

function Eventos() {
  return (
    <>
      <PageHero
        image="/capacitacao.jpg"
        compact
        kicker="Eventos"
        title="Onde o BIM brasileiro se encontra"
        lead="Webinars, workshops e a presença da Pro-Systems nos encontros Autodesk — inclusive o Autodesk University."
      />
      <Section>
        <ol className="space-y-0">
          {EVENTS.map((e) => (
            <li
              key={e.title}
              className="grid gap-2 border-t border-border py-6 sm:grid-cols-[140px_1fr] sm:gap-8"
            >
              <div>
                <p className="text-sm text-primary">{e.date}</p>
                <p className="text-xs text-muted">{e.kind}</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold">{e.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{e.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Button asChild>
            <Link to="/contato">Quero ser avisado dos próximos</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
