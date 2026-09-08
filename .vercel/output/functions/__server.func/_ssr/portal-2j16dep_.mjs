import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime, y as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as INTERESTS, n as Button, r as useCurrentUserState } from "./router-CDb-H_fB.mjs";
import { n as Section } from "./page-hero-BxqR6k8C.mjs";
import { a as createQuote, c as listTickets, i as Textarea, n as Label, o as createTicket, r as Select, s as listQuotes, t as Input } from "./field-DwAiT06s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portal-2j16dep_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Auth state components — plain wrappers around `useCurrentUserState()`.
*
* Auth is ON by default (including the sandbox live preview, which does real
* sign-in). Visitors are signed out until they authenticate. The shared dev
* user only appears when auth is explicitly disabled (`VITE_AUTH_ENABLED=false`).
* While the session is still resolving, gates that care about signed-out state
* render nothing so there's no signed-out flash on hard reload.
*/
/** Where `RedirectToSignIn` sends signed-out visitors. Create this route. */
var SIGN_IN_PATH = "/login";
/**
* Client-side redirect to the sign-in route (TanStack `<Navigate>` — NOT a full
* `window.location` reload). A hard navigation re-bootstraps the SPA and re-runs
* session loading, which feels like a second "Loading…" on /login.
*
* Guard routes by waiting out `isPending` first (see `use-current-user`), then
* render this.
*/
function RedirectToSignIn({ to = SIGN_IN_PATH }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to });
}
function Portal() {
	const { user, isPending } = useCurrentUserState();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-h-[50vh] animate-pulse bg-surface" });
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RedirectToSignIn, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalHome, { name: user.displayName ?? user.primaryEmail ?? "cliente" });
}
function PortalHome({ name }) {
	const [tab, setTab] = (0, import_react.useState)("propostas");
	const [quotes, setQuotes] = (0, import_react.useState)([]);
	const [tickets, setTickets] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const refresh = (0, import_react.useCallback)(async () => {
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
	(0, import_react.useEffect)(() => {
		refresh();
	}, [refresh]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium tracking-[0.22em] text-primary uppercase",
			children: "Área do cliente"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
			className: "mt-3 font-display text-3xl font-semibold",
			children: ["Olá, ", name]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-xl text-muted",
			children: "Solicite propostas de licenciamento, consultoria ou treinamento e abra chamados de suporte. Tudo fica registrado na sua conta."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				size: "sm",
				variant: tab === "propostas" ? "primary" : "outline",
				onClick: () => setTab("propostas"),
				children: "Propostas"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				size: "sm",
				variant: tab === "chamados" ? "primary" : "outline",
				onClick: () => setTab("chamados"),
				children: "Chamados"
			})]
		}),
		tab === "propostas" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, { onDone: refresh }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordList, {
				loading,
				empty: "Nenhuma proposta ainda.",
				items: quotes.map((q) => ({
					id: q.id,
					title: q.interest,
					meta: q.status,
					body: q.message,
					date: q.created_at
				}))
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicketForm, { onDone: refresh }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordList, {
				loading,
				empty: "Nenhum chamado ainda.",
				items: tickets.map((t) => ({
					id: t.id,
					title: t.subject,
					meta: t.status,
					body: t.body,
					date: t.created_at
				}))
			})]
		})
	] });
}
function QuoteForm({ onDone }) {
	const [pending, setPending] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const fd = new FormData(form);
		setPending(true);
		try {
			await createQuote({ data: {
				interest: String(fd.get("interest") ?? ""),
				company: String(fd.get("company") ?? ""),
				phone: String(fd.get("phone") ?? ""),
				message: String(fd.get("message") ?? "")
			} });
			form.reset();
			toast.success("Proposta registrada. O comercial retorna em breve.");
			await onDone();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Falha ao enviar.");
		} finally {
			setPending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-4 rounded-lg bg-surface p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg font-semibold",
				children: "Nova proposta"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "interest",
				children: "Interesse"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
				id: "interest",
				name: "interest",
				defaultValue: INTERESTS[0],
				children: INTERESTS.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: i }, i))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "company",
				children: "Empresa / órgão"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "company",
				name: "company"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "phone",
				children: "Telefone"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "phone",
				name: "phone",
				type: "tel"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "message",
				children: "Detalhes"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				id: "message",
				name: "message",
				required: true
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				disabled: pending,
				children: pending ? "Enviando…" : "Solicitar proposta"
			})
		]
	});
}
function TicketForm({ onDone }) {
	const [pending, setPending] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const fd = new FormData(form);
		setPending(true);
		try {
			await createTicket({ data: {
				subject: String(fd.get("subject") ?? ""),
				body: String(fd.get("body") ?? "")
			} });
			form.reset();
			toast.success("Chamado aberto.");
			await onDone();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Falha ao abrir chamado.");
		} finally {
			setPending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-4 rounded-lg bg-surface p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg font-semibold",
				children: "Novo chamado"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "subject",
				children: "Assunto"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "subject",
				name: "subject",
				required: true
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "body",
				children: "Descrição"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				id: "body",
				name: "body",
				required: true
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				disabled: pending,
				children: pending ? "Enviando…" : "Abrir chamado"
			})
		]
	});
}
function RecordList({ loading, empty, items }) {
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Carregando…"
	});
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: empty
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-3",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "rounded-lg bg-surface p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-elevated px-2 py-0.5 text-xs capitalize text-primary",
						children: item.meta
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: item.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-muted",
					children: formatDate(item.date)
				})
			]
		}, item.id))
	});
}
function formatDate(value) {
	const d = new Date(value);
	if (Number.isNaN(d.getTime())) return value;
	return d.toLocaleDateString("pt-BR");
}
//#endregion
export { Portal as component };
