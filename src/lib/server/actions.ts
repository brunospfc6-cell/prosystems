import { createServerFn } from "@tanstack/react-start";
import { getSql } from "@/lib/db";
import { authMiddleware } from "@/lib/auth/middleware";

type LeadInput = {
  name: string;
  email: string;
  phone: string;
  company: string;
  interest: string;
  message: string;
};

function trimLead(input: LeadInput) {
  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();
  const interest = input.interest.trim();
  if (name.length < 2) throw new Error("Informe seu nome.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Informe um e-mail válido.");
  if (!interest) throw new Error("Selecione um interesse.");
  if (message.length < 10) throw new Error("Descreva sua necessidade com um pouco mais de detalhe.");
  return {
    name,
    email,
    phone: input.phone.trim(),
    company: input.company.trim(),
    interest,
    message,
  };
}

export const submitLead = createServerFn({ method: "POST" })
  .validator((input: LeadInput) => trimLead(input))
  .handler(async ({ data }) => {
    const sql = await getSql();
    await sql`insert into leads (name, email, phone, company, interest, message)
      values (${data.name}, ${data.email}, ${data.phone}, ${data.company}, ${data.interest}, ${data.message})`;
    return { ok: true as const };
  });

export const listQuotes = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const sql = await getSql();
    return sql<{
      id: number;
      interest: string;
      company: string | null;
      phone: string | null;
      message: string;
      status: string;
      created_at: string;
    }>`select id, interest, company, phone, message, status, created_at
      from quotes where user_id = ${context.userId} order by id desc`;
  });

export const createQuote = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: { interest: string; company: string; phone: string; message: string }) => {
    const interest = input.interest.trim();
    const message = input.message.trim();
    if (!interest) throw new Error("Selecione um interesse.");
    if (message.length < 10) throw new Error("Descreva o que sua equipe precisa.");
    return {
      interest,
      company: input.company.trim(),
      phone: input.phone.trim(),
      message,
    };
  })
  .handler(async ({ context, data }) => {
    const sql = await getSql();
    await sql`insert into quotes (user_id, interest, company, phone, message)
      values (${context.userId}, ${data.interest}, ${data.company}, ${data.phone}, ${data.message})`;
    return { ok: true as const };
  });

export const listTickets = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const sql = await getSql();
    return sql<{
      id: number;
      subject: string;
      body: string;
      status: string;
      created_at: string;
    }>`select id, subject, body, status, created_at
      from tickets where user_id = ${context.userId} order by id desc`;
  });

export const createTicket = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: { subject: string; body: string }) => {
    const subject = input.subject.trim();
    const body = input.body.trim();
    if (subject.length < 3) throw new Error("Informe o assunto.");
    if (body.length < 10) throw new Error("Descreva o chamado.");
    return { subject, body };
  })
  .handler(async ({ context, data }) => {
    const sql = await getSql();
    await sql`insert into tickets (user_id, subject, body)
      values (${context.userId}, ${data.subject}, ${data.body})`;
    return { ok: true as const };
  });
