import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/site/contact-form";
import { PageHero, Section } from "@/components/site/page-hero";
import { COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/contato")({ component: Contato });

function Contato() {
  return (
    <>
      <PageHero
        image="/hero.jpg"
        compact
        kicker="Fale conosco"
        title="Nossos especialistas estão à disposição"
        lead="Licenciamento, BIM, treinamento ou suporte — conte o que sua equipe precisa."
      />
      <Section>
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <ContactForm />
          </div>
          <aside className="md:col-span-2 space-y-6">
            <div className="rounded-lg bg-surface p-6">
              <h2 className="font-display text-sm font-semibold tracking-wide uppercase">
                Comercial
              </h2>
              <p className="mt-3 text-sm text-muted">{COMPANY.city}</p>
              {COMPANY.phones.map((p) => (
                <p key={p} className="mt-1">
                  <a
                    href={`tel:+55${p.replace(/\D/g, "")}`}
                    className="text-fg hover:text-primary"
                  >
                    {p}
                  </a>
                </p>
              ))}
              <a
                href={`mailto:${COMPANY.emails.comercial}`}
                className="mt-3 block text-sm text-primary hover:underline"
              >
                {COMPANY.emails.comercial}
              </a>
            </div>
            <div className="rounded-lg bg-surface p-6">
              <h2 className="font-display text-sm font-semibold tracking-wide uppercase">
                Suporte
              </h2>
              <a
                href={`mailto:${COMPANY.emails.suporte}`}
                className="mt-3 block text-sm text-primary hover:underline"
              >
                {COMPANY.emails.suporte}
              </a>
              <p className="mt-2 text-sm text-muted">
                Clientes com contrato também abrem chamados na{" "}
                <a href="/portal" className="text-fg underline-offset-4 hover:underline">
                  área do cliente
                </a>
                .
              </p>
            </div>
            <div className="rounded-lg bg-surface p-6">
              <h2 className="font-display text-sm font-semibold tracking-wide uppercase">
                Atas de registro de preço
              </h2>
              <a
                href={COMPANY.social.atas}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-sm text-primary hover:underline"
              >
                ata.autodesk.prosystems.com.br
              </a>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
