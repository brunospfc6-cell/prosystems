import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import {
  BRIEFING_STEPS,
  interestFromAnswers,
  messageFromAnswers,
} from "@/lib/briefing";
import { submitLead } from "@/lib/server/actions";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/field";
import { RisingBuilding } from "./rising-building";

export function BriefingFlow() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [pending, setPending] = useState(false);

  const current = BRIEFING_STEPS[step];
  const stage = done ? 6 : step;

  function pick(value: string) {
    if (!current || current.kind !== "choice") return;
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
    setStep((s) => Math.min(s + 1, BRIEFING_STEPS.length - 1));
  }

  function back() {
    if (done) {
      setDone(false);
      setStep(BRIEFING_STEPS.length - 1);
      return;
    }
    setStep((s) => Math.max(0, s - 1));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "");
    const email = String(fd.get("email") ?? "");
    const company = String(fd.get("company") ?? "");
    const phone = String(fd.get("phone") ?? "");
    setPending(true);
    try {
      const next = { ...answers, company };
      await submitLead({
        data: {
          name,
          email,
          phone,
          company,
          interest: interestFromAnswers(next),
          message: messageFromAnswers(next),
        },
      });
      setDone(true);
      toast.success("Projeto registrado. O comercial da Pro-Systems retorna em breve.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Não foi possível enviar.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="grid min-h-[calc(100dvh-4rem)] lg:grid-cols-[1.1fr_0.9fr]">
      <RisingBuilding stage={stage} />
      <section className="flex flex-col justify-center border-t border-border bg-surface px-4 py-10 sm:px-8 lg:border-t-0 lg:border-l">
        {done ? (
          <div className="mx-auto w-full max-w-md">
            <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
              Obra entregue
            </p>
            <h1 className="mt-3 font-display text-3xl font-semibold">
              Seu modelo está de pé
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Com as respostas, montamos o briefing da implantação. Um especialista
              Autodesk da Pro-Systems entra em contato com o próximo passo — licença,
              consultoria ou turma ATC.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/contato">Falar agora</Link>
              </Button>
              <Button type="button" variant="outline" onClick={() => {
                setDone(false);
                setStep(0);
                setAnswers({});
              }}>
                Construir outro
              </Button>
            </div>
          </div>
        ) : (
          <div className="mx-auto w-full max-w-md">
            <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
              Briefing {step + 1} / {BRIEFING_STEPS.length}
            </p>
            <h1 className="mt-3 font-display text-3xl font-semibold">{current.title}</h1>
            <p className="mt-3 text-sm leading-relaxed text-muted">{current.caption}</p>

            <div className="mt-8">
              {current.kind === "choice" ? (
                <ul className="grid gap-2">
                  {current.options.map((opt) => {
                    const selected = answers[current.id] === opt.value;
                    return (
                      <li key={opt.value}>
                        <button
                          type="button"
                          onClick={() => pick(opt.value)}
                          className="flex min-h-12 w-full items-center justify-between gap-3 rounded-md bg-elevated px-4 py-3 text-left shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-150 ease-out hover:shadow-[var(--shadow-border-hover)] active:scale-[0.96]"
                        >
                          <span>
                            <span className="block text-sm font-medium">{opt.label}</span>
                            {opt.hint ? (
                              <span className="mt-0.5 block text-xs text-muted">{opt.hint}</span>
                            ) : null}
                          </span>
                          {selected ? (
                            <Check className="size-4 shrink-0 text-primary" />
                          ) : (
                            <ArrowRight className="size-4 shrink-0 text-muted" />
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-4">
                  <div>
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" name="name" required autoComplete="name" />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" name="email" type="email" required autoComplete="email" />
                  </div>
                  <div>
                    <Label htmlFor="company">Empresa / órgão</Label>
                    <Input id="company" name="company" autoComplete="organization" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" name="phone" type="tel" autoComplete="tel" />
                  </div>
                  <Button type="submit" disabled={pending} className="mt-2">
                    {pending ? "Erguendo o último pavimento…" : "Entregar o projeto"}
                  </Button>
                </form>
              )}
            </div>

            {step > 0 ? (
              <button
                type="button"
                onClick={back}
                className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg"
              >
                <ArrowLeft className="size-4" />
                Voltar um pavimento
              </button>
            ) : null}
          </div>
        )}
      </section>
    </div>
  );
}
