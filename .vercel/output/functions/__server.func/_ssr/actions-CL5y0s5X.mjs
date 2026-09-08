import { i as createServerFn, t as TSS_SERVER_FUNCTION } from "./ssr.mjs";
import { r as getSql } from "./db-ovYypp9r.mjs";
import { t as authMiddleware } from "./middleware-C8E8PXBt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/actions-CL5y0s5X.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function trimLead(input) {
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
		message
	};
}
var submitLead_createServerFn_handler = createServerRpc({
	id: "23da2f85280af322b9ce9bb5c2311764913d28359c7d2852124bb732b907ac68",
	name: "submitLead",
	filename: "src/lib/server/actions.ts"
}, (opts) => submitLead.__executeServer(opts));
var submitLead = createServerFn({ method: "POST" }).validator((input) => trimLead(input)).handler(submitLead_createServerFn_handler, async ({ data }) => {
	await (await getSql())`insert into leads (name, email, phone, company, interest, message)
      values (${data.name}, ${data.email}, ${data.phone}, ${data.company}, ${data.interest}, ${data.message})`;
	return { ok: true };
});
var listQuotes_createServerFn_handler = createServerRpc({
	id: "374d5a868638ebe7b099b4ad488cd8e59bc96e7b1eb22432bf348f928c954e1b",
	name: "listQuotes",
	filename: "src/lib/server/actions.ts"
}, (opts) => listQuotes.__executeServer(opts));
var listQuotes = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listQuotes_createServerFn_handler, async ({ context }) => {
	return (await getSql())`select id, interest, company, phone, message, status, created_at
      from quotes where user_id = ${context.userId} order by id desc`;
});
var createQuote_createServerFn_handler = createServerRpc({
	id: "71e9daf10c8b5cc968af3cbb76702bfa7048fd768a454f68892c224f6806390b",
	name: "createQuote",
	filename: "src/lib/server/actions.ts"
}, (opts) => createQuote.__executeServer(opts));
var createQuote = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => {
	const interest = input.interest.trim();
	const message = input.message.trim();
	if (!interest) throw new Error("Selecione um interesse.");
	if (message.length < 10) throw new Error("Descreva o que sua equipe precisa.");
	return {
		interest,
		company: input.company.trim(),
		phone: input.phone.trim(),
		message
	};
}).handler(createQuote_createServerFn_handler, async ({ context, data }) => {
	await (await getSql())`insert into quotes (user_id, interest, company, phone, message)
      values (${context.userId}, ${data.interest}, ${data.company}, ${data.phone}, ${data.message})`;
	return { ok: true };
});
var listTickets_createServerFn_handler = createServerRpc({
	id: "8014e1f6cf70b60f75fb07fbbb012399058f4ba96b7b278e112accb0047d6a9c",
	name: "listTickets",
	filename: "src/lib/server/actions.ts"
}, (opts) => listTickets.__executeServer(opts));
var listTickets = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listTickets_createServerFn_handler, async ({ context }) => {
	return (await getSql())`select id, subject, body, status, created_at
      from tickets where user_id = ${context.userId} order by id desc`;
});
var createTicket_createServerFn_handler = createServerRpc({
	id: "7fba4da8ea8a5ddadabde46ccc043d5c73c3051abce3b8753211792da4959bd3",
	name: "createTicket",
	filename: "src/lib/server/actions.ts"
}, (opts) => createTicket.__executeServer(opts));
var createTicket = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => {
	const subject = input.subject.trim();
	const body = input.body.trim();
	if (subject.length < 3) throw new Error("Informe o assunto.");
	if (body.length < 10) throw new Error("Descreva o chamado.");
	return {
		subject,
		body
	};
}).handler(createTicket_createServerFn_handler, async ({ context, data }) => {
	await (await getSql())`insert into tickets (user_id, subject, body)
      values (${context.userId}, ${data.subject}, ${data.body})`;
	return { ok: true };
});
//#endregion
export { createQuote_createServerFn_handler, createTicket_createServerFn_handler, listQuotes_createServerFn_handler, listTickets_createServerFn_handler, submitLead_createServerFn_handler };
