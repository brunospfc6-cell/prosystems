import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as INTERESTS, n as Button, o as COMPANY } from "./router-CDb-H_fB.mjs";
import { n as Section, t as PageHero } from "./page-hero-BxqR6k8C.mjs";
import { i as Textarea, l as submitLead, n as Label, r as Select, t as Input } from "./field-DwAiT06s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contato-AxXpw37Q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactForm({ defaultInterest }) {
	const [pending, setPending] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const fd = new FormData(form);
		setPending(true);
		try {
			await submitLead({ data: {
				name: String(fd.get("name") ?? ""),
				email: String(fd.get("email") ?? ""),
				phone: String(fd.get("phone") ?? ""),
				company: String(fd.get("company") ?? ""),
				interest: String(fd.get("interest") ?? ""),
				message: String(fd.get("message") ?? "")
			} });
			form.reset();
			toast.success("Mensagem enviada. Nossa equipe comercial retorna em breve.");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Não foi possível enviar. Tente de novo.");
		} finally {
			setPending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "name",
					children: "Nome"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "name",
					name: "name",
					required: true,
					autoComplete: "name"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "email",
					children: "E-mail"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "email",
					name: "email",
					type: "email",
					required: true,
					autoComplete: "email"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "phone",
					children: "Telefone"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "phone",
					name: "phone",
					type: "tel",
					autoComplete: "tel"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "company",
					children: "Empresa / órgão"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "company",
					name: "company",
					autoComplete: "organization"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "interest",
				children: "Interesse"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
				id: "interest",
				name: "interest",
				defaultValue: defaultInterest ?? INTERESTS[0],
				children: INTERESTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: item,
					children: item
				}, item))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "message",
				children: "Como podemos ajudar?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				id: "message",
				name: "message",
				required: true,
				rows: 5
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				disabled: pending,
				className: "w-full sm:w-auto",
				children: pending ? "Enviando…" : "Enviar mensagem"
			})
		]
	});
}
function Contato() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		image: "/hero.jpg",
		compact: true,
		kicker: "Fale conosco",
		title: "Nossos especialistas estão à disposição",
		lead: "Licenciamento, BIM, treinamento ou suporte — conte o que sua equipe precisa."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-12 md:grid-cols-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:col-span-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "md:col-span-2 space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-surface p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-sm font-semibold tracking-wide uppercase",
							children: "Comercial"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: COMPANY.city
						}),
						COMPANY.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:+55${p.replace(/\D/g, "")}`,
								className: "text-fg hover:text-primary",
								children: p
							})
						}, p)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${COMPANY.emails.comercial}`,
							className: "mt-3 block text-sm text-primary hover:underline",
							children: COMPANY.emails.comercial
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-surface p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-sm font-semibold tracking-wide uppercase",
							children: "Suporte"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${COMPANY.emails.suporte}`,
							className: "mt-3 block text-sm text-primary hover:underline",
							children: COMPANY.emails.suporte
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted",
							children: [
								"Clientes com contrato também abrem chamados na",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/portal",
									className: "text-fg underline-offset-4 hover:underline",
									children: "área do cliente"
								}),
								"."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-surface p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-sm font-semibold tracking-wide uppercase",
						children: "Atas de registro de preço"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: COMPANY.social.atas,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-3 block text-sm text-primary hover:underline",
						children: "ata.autodesk.prosystems.com.br"
					})]
				})
			]
		})]
	}) })] });
}
//#endregion
export { Contato as component };
