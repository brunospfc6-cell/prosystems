import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { submitLead } from "@/lib/server/actions";
import { INTERESTS } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Input, Label, Select, Textarea } from "@/components/ui/field";

export function ContactForm({ defaultInterest }: { defaultInterest?: string }) {
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setPending(true);
    try {
      await submitLead({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          company: String(fd.get("company") ?? ""),
          interest: String(fd.get("interest") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      form.reset();
      toast.success("Mensagem enviada. Nossa equipe comercial retorna em breve.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Não foi possível enviar. Tente de novo.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Nome</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div>
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone">Telefone</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div>
          <Label htmlFor="company">Empresa / órgão</Label>
          <Input id="company" name="company" autoComplete="organization" />
        </div>
      </div>
      <div>
        <Label htmlFor="interest">Interesse</Label>
        <Select id="interest" name="interest" defaultValue={defaultInterest ?? INTERESTS[0]}>
          {INTERESTS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <Label htmlFor="message">Como podemos ajudar?</Label>
        <Textarea id="message" name="message" required rows={5} />
      </div>
      <Button type="submit" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Enviando…" : "Enviar mensagem"}
      </Button>
    </form>
  );
}
