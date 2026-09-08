import { Link } from "@tanstack/react-router";
import { COMPANY } from "@/lib/site-data";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <Logo />
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Desde {COMPANY.since}, referência nacional em soluções Autodesk® para
            engenharia, arquitetura, infraestrutura e manufatura. Autodesk Silver
            Partner e Authorized Training Center em {COMPANY.city}.
          </p>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold tracking-wide uppercase">
            Empresa
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <Link to="/briefing" className="hover:text-fg">
                Construir o projeto
              </Link>
            </li>
            <li>
              <Link to="/institucional" className="hover:text-fg">
                Institucional
              </Link>
            </li>
            <li>
              <Link to="/especializacoes" className="hover:text-fg">
                Especializações
              </Link>
            </li>
            <li>
              <Link to="/acreditacoes" className="hover:text-fg">
                Acreditações
              </Link>
            </li>
            <li>
              <Link to="/cases" className="hover:text-fg">
                Cases de sucesso
              </Link>
            </li>
            <li>
              <Link to="/portal" className="hover:text-fg">
                Área do cliente
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold tracking-wide uppercase">
            Contato
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>{COMPANY.city}</li>
            {COMPANY.phones.map((p) => (
              <li key={p}>
                <a href={`tel:+55${p.replace(/\D/g, "")}`} className="hover:text-fg">
                  {p}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${COMPANY.emails.comercial}`} className="hover:text-fg">
                {COMPANY.emails.comercial}
              </a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.emails.suporte}`} className="hover:text-fg">
                {COMPANY.emails.suporte}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {COMPANY.legal}. Autodesk, o logotipo da
            Autodesk e os nomes de produtos são marcas registradas.
          </p>
          <p>Silver Partner · ATC · Brasília</p>
        </div>
      </div>
    </footer>
  );
}
