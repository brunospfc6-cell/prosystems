import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { RedirectToSignIn } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import {
  createQuote,
  createTicket,
  listQuotes,
  listTickets,
} from "@/lib/server/actions";
import { INTERESTS } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Input, Label, Select, Textarea } from "@/components/ui/field";
import { Section } from "@/components/site/page-hero";

export const Route = createFileRoute("/portal")({ component: Portal });

type Quote = Awaited<ReturnType<typeof listQuotes>>[number];
type Ticket = Awaited<ReturnType<typeof listTickets>>[number];

function Portal() {
  const { user, isPending } = useCurrentUserState();
  if (isPending) {
    return <div className="min-h-[50vh] animate-pulse bg-surface" />;
  }
  if (!user) return <RedirectToSignIn />;
  return <PortalHome name={user.displayName ?? user.primaryEmail ?? "cliente"} />;
}

function PortalHome({ name }: { name: string }) {
  const [tab, setTab] = useState<"propostas" | "chamados">("propostas");
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const [q, t] = await Promise.all([listQuotes(), listTickets()]);
      setQuotes(q);
      setTickets(t);
    } catch {
      toast.error("Não foi possível carregar seus registros. Entre novamente.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  return (
    <Section>
      <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
        Área do cliente
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold">Olá, {name}</h1>
      <p className="mt-2 max-w-xl text-muted">
        Solicite propostas de licenciamento, consultoria ou treinamento e abra chamados de
        suporte. Tudo fica registrado na sua conta.
      </p>

      <div className="mt-8 flex gap-2">
        <Button
          type="button"
          size="sm"
          variant={tab === "propostas" ? "primary" : "outline"}
          onClick={() => setTab("propostas")}
        >
          Propostas
        </Button>
        <Button
          type="button"
          size="sm"
          variant={tab === "chamados" ? "primary" : "outline"}
          onClick={() => setTab("chamados")}
        >
          Chamados
        </Button>
      </div>

      {tab === "propostas" ? (
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <QuoteForm onDone={refresh} />
          <RecordList
            loading={loading}
            empty="Nenhuma proposta ainda."
            items={quotes.map((q) => ({
              id: q.id,
              title: q.interest,
              meta: q.status,
              body: q.message,
              date: q.created_at,
            }))}
          />
        </div>
      ) : (
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <TicketForm onDone={refresh} />
          <RecordList
            loading={loading}
            empty="Nenhum chamado ainda."
            items={tickets.map((t) => ({
              id: t.id,
              title: t.subject,
              meta: t.status,
              body: t.body,
              date: t.created_at,
            }))}
          />
        </div>
      )}
    </Section>
  );
}

function QuoteForm({ onDone }: { onDone: () => Promise<void> }) {
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setPending(true);
    try {
      await createQuote({
        data: {
          interest: String(fd.get("interest") ?? ""),
          company: String(fd.get("company") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      form.reset();
      toast.success("Proposta registrada. O comercial retorna em breve.");
      await onDone();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Falha ao enviar.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-lg bg-surface p-6">
      <h2 className="font-display text-lg font-semibold">Nova proposta</h2>
      <div>
        <Label htmlFor="interest">Interesse</Label>
        <Select id="interest" name="interest" defaultValue={INTERESTS[0]}>
          {INTERESTS.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </Select>
      </div>
      <div>
        <Label htmlFor="company">Empresa / órgão</Label>
        <Input id="company" name="company" />
      </div>
      <div>
        <Label htmlFor="phone">Telefone</Label>
        <Input id="phone" name="phone" type="tel" />
      </div>
      <div>
        <Label htmlFor="message">Detalhes</Label>
        <Textarea id="message" name="message" required />
      </div>
      <Button type="submit" disabled={pending}>
        {pending ? "Enviando…" : "Solicitar proposta"}
      </Button>
    </form>
  );
}

function TicketForm({ onDone }: { onDone: () => Promise<void> }) {
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setPending(true);
    try {
      await createTicket({
        data: {
          subject: String(fd.get("subject") ?? ""),
          body: String(fd.get("body") ?? ""),
        },
      });
      form.reset();
      toast.success("Chamado aberto.");
      await onDone();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Falha ao abrir chamado.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-lg bg-surface p-6">
      <h2 className="font-display text-lg font-semibold">Novo chamado</h2>
      <div>
        <Label htmlFor="subject">Assunto</Label>
        <Input id="subject" name="subject" required />
      </div>
      <div>
        <Label htmlFor="body">Descrição</Label>
        <Textarea id="body" name="body" required />
      </div>
      <Button type="submit" disabled={pending}>
        {pending ? "Enviando…" : "Abrir chamado"}
      </Button>
    </form>
  );
}

function RecordList({
  loading,
  empty,
  items,
}: {
  loading: boolean;
  empty: string;
  items: { id: number; title: string; meta: string; body: string; date: string }[];
}) {
  if (loading) return <p className="text-sm text-muted">Carregando…</p>;
  if (items.length === 0) return <p className="text-sm text-muted">{empty}</p>;
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.id} className="rounded-lg bg-surface p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-medium">{item.title}</h3>
            <span className="rounded-full bg-elevated px-2 py-0.5 text-xs capitalize text-primary">
              {item.meta}
            </span>
          </div>
          <p className="mt-2 text-sm text-muted">{item.body}</p>
          <p className="mt-2 text-xs text-muted">{formatDate(item.date)}</p>
        </li>
      ))}
    </ul>
  );
}

function formatDate(value: string) {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("pt-BR");
}
