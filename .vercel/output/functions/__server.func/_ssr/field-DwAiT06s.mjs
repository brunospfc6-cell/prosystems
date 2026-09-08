import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as createServerFn, o as getServerFnById, t as TSS_SERVER_FUNCTION } from "./ssr.mjs";
import { f as cn } from "./router-CDb-H_fB.mjs";
import { t as authMiddleware } from "./middleware-C8E8PXBt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/field-DwAiT06s.js
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
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
var submitLead = createServerFn({ method: "POST" }).validator((input) => trimLead(input)).handler(createSsrRpc("23da2f85280af322b9ce9bb5c2311764913d28359c7d2852124bb732b907ac68"));
var listQuotes = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("374d5a868638ebe7b099b4ad488cd8e59bc96e7b1eb22432bf348f928c954e1b"));
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
}).handler(createSsrRpc("71e9daf10c8b5cc968af3cbb76702bfa7048fd768a454f68892c224f6806390b"));
var listTickets = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("8014e1f6cf70b60f75fb07fbbb012399058f4ba96b7b278e112accb0047d6a9c"));
var createTicket = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => {
	const subject = input.subject.trim();
	const body = input.body.trim();
	if (subject.length < 3) throw new Error("Informe o assunto.");
	if (body.length < 10) throw new Error("Descreva o chamado.");
	return {
		subject,
		body
	};
}).handler(createSsrRpc("7fba4da8ea8a5ddadabde46ccc043d5c73c3051abce3b8753211792da4959bd3"));
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("mb-1.5 block text-sm font-medium text-fg", className),
		...props
	});
}
var fieldClass = "h-11 w-full rounded-md bg-elevated px-3 text-sm text-fg shadow-[var(--shadow-border)] outline-none transition-shadow placeholder:text-muted focus:shadow-[var(--shadow-border-hover)]";
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn(fieldClass, className),
		...props
	});
}
function Select({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: cn(fieldClass, "appearance-none pr-8", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn(fieldClass, "h-auto min-h-32 py-2.5", className),
		...props
	});
}
//#endregion
export { createQuote as a, listTickets as c, Textarea as i, submitLead as l, Label as n, createTicket as o, Select as r, listQuotes as s, Input as t };
