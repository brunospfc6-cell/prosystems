import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as ArrowLeft, s as Check, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as cn, n as Button } from "./router-CDb-H_fB.mjs";
import { l as submitLead, n as Label, t as Input } from "./field-DwAiT06s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/briefing-DhlpTQ_o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BRIEFING_STEPS = [
	{
		id: "tipo",
		kind: "choice",
		title: "Que tipo de obra você quer erguer?",
		caption: "O terreno é marcado. Escolha o programa do edifício.",
		options: [
			{
				value: "edificacao",
				label: "Edificação",
				hint: "Arquitetura, estrutura e MEP"
			},
			{
				value: "infra",
				label: "Infraestrutura",
				hint: "Vias, saneamento, transporte"
			},
			{
				value: "campus",
				label: "Campus / misto",
				hint: "Edifício + entorno"
			}
		]
	},
	{
		id: "perfil",
		kind: "choice",
		title: "Quem conduz o projeto?",
		caption: "A fundação entra no solo. O perfil define o método.",
		options: [
			{
				value: "arquitetura",
				label: "Escritório de arquitetura"
			},
			{
				value: "construtora",
				label: "Construtora ou incorporadora"
			},
			{
				value: "publico",
				label: "Órgão público"
			},
			{
				value: "industria",
				label: "Indústria / manufatura"
			}
		]
	},
	{
		id: "maturidade",
		kind: "choice",
		title: "Onde está a equipe no BIM?",
		caption: "Sobe a estrutura. O método precisa casar com o canteiro.",
		options: [
			{
				value: "cad",
				label: "Ainda no CAD 2D"
			},
			{
				value: "inicio",
				label: "Começando a implantar BIM"
			},
			{
				value: "avancado",
				label: "BIM no dia a dia — queremos evoluir"
			}
		]
	},
	{
		id: "necessidade",
		kind: "choice",
		title: "O que a obra precisa agora?",
		caption: "Os pavimentos avançam. Cada escolha vira um pacote Autodesk.",
		options: [
			{
				value: "Licenciamento Autodesk",
				label: "Licenciamento oficial"
			},
			{
				value: "Consultoria BIM",
				label: "Consultoria e implantação"
			},
			{
				value: "Treinamento ATC",
				label: "Treinamento ATC"
			},
			{
				value: "OrçaFascio Prime",
				label: "Orçamentação 5D"
			}
		]
	},
	{
		id: "prazo",
		kind: "choice",
		title: "Qual o horizonte da entrega?",
		caption: "A fachada fecha. O cronograma entra no modelo.",
		options: [
			{
				value: "trimestre",
				label: "Neste trimestre"
			},
			{
				value: "ano",
				label: "Neste ano"
			},
			{
				value: "longo",
				label: "Planejamento de longo prazo"
			}
		]
	},
	{
		id: "contact",
		kind: "contact",
		title: "Quem recebe a chave?",
		caption: "Último pavimento: identifique a equipe para o comercial ligar."
	}
];
var STAGE_LABELS = [
	"Terreno e levantamento",
	"Fundação",
	"Estrutura",
	"Pavimentos",
	"Fachada",
	"Gêmeo digital BIM",
	"Obra entregue"
];
function interestFromAnswers(answers) {
	return answers.necessidade || "Consultoria BIM";
}
function messageFromAnswers(answers) {
	const tipo = answers.tipo === "infra" ? "Infraestrutura" : answers.tipo === "campus" ? "Campus / misto" : "Edificação";
	const perfil = {
		arquitetura: "Escritório de arquitetura",
		construtora: "Construtora ou incorporadora",
		publico: "Órgão público",
		industria: "Indústria / manufatura"
	}[answers.perfil ?? ""] ?? answers.perfil;
	const mat = {
		cad: "Ainda no CAD 2D",
		inicio: "Começando BIM",
		avancado: "BIM avançado"
	}[answers.maturidade ?? ""] ?? answers.maturidade;
	const prazo = {
		trimestre: "Neste trimestre",
		ano: "Neste ano",
		longo: "Longo prazo"
	}[answers.prazo ?? ""] ?? answers.prazo;
	return [
		`Briefing interativo Pro-Systems.`,
		`Tipo: ${tipo}.`,
		`Perfil: ${perfil}.`,
		`Maturidade BIM: ${mat}.`,
		`Necessidade: ${answers.necessidade}.`,
		`Horizonte: ${prazo}.`
	].join(" ");
}
var STAGES = [
	0,
	1,
	2,
	3,
	4,
	5,
	6
];
function RisingBuilding({ stage }) {
	const clamped = Math.max(0, Math.min(6, stage));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rising-frame",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rising-stack",
				children: [STAGES.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: `/briefing/stage-${n}.jpg`,
					alt: n === clamped ? STAGE_LABELS[n] : "",
					className: cn("rising-shot", n === clamped && "is-on")
				}, n)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rising-veil" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rising-caption",
				children: STAGE_LABELS[clamped]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "rising-meter",
				children: [clamped, "/6"]
			})
		]
	});
}
function BriefingFlow() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [answers, setAnswers] = (0, import_react.useState)({});
	const [done, setDone] = (0, import_react.useState)(false);
	const [pending, setPending] = (0, import_react.useState)(false);
	const current = BRIEFING_STEPS[step];
	const stage = done ? 6 : step;
	function pick(value) {
		if (!current || current.kind !== "choice") return;
		setAnswers((prev) => ({
			...prev,
			[current.id]: value
		}));
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
	async function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const name = String(fd.get("name") ?? "");
		const email = String(fd.get("email") ?? "");
		const company = String(fd.get("company") ?? "");
		const phone = String(fd.get("phone") ?? "");
		setPending(true);
		try {
			const next = {
				...answers,
				company
			};
			await submitLead({ data: {
				name,
				email,
				phone,
				company,
				interest: interestFromAnswers(next),
				message: messageFromAnswers(next)
			} });
			setDone(true);
			toast.success("Projeto registrado. O comercial da Pro-Systems retorna em breve.");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Não foi possível enviar.");
		} finally {
			setPending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-[calc(100dvh-4rem)] lg:grid-cols-[1.1fr_0.9fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RisingBuilding, { stage }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "flex flex-col justify-center border-t border-border bg-surface px-4 py-10 sm:px-8 lg:border-t-0 lg:border-l",
			children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.22em] text-primary uppercase",
						children: "Obra entregue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-3xl font-semibold",
						children: "Seu modelo está de pé"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: "Com as respostas, montamos o briefing da implantação. Um especialista Autodesk da Pro-Systems entra em contato com o próximo passo — licença, consultoria ou turma ATC."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contato",
								children: "Falar agora"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => {
								setDone(false);
								setStep(0);
								setAnswers({});
							},
							children: "Construir outro"
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-medium tracking-[0.22em] text-primary uppercase",
						children: [
							"Briefing ",
							step + 1,
							" / ",
							BRIEFING_STEPS.length
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-3xl font-semibold",
						children: current.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: current.caption
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: current.kind === "choice" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-2",
							children: current.options.map((opt) => {
								const selected = answers[current.id] === opt.value;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => pick(opt.value),
									className: "flex min-h-12 w-full items-center justify-between gap-3 rounded-md bg-elevated px-4 py-3 text-left shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-150 ease-out hover:shadow-[var(--shadow-border-hover)] active:scale-[0.96]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm font-medium",
										children: opt.label
									}), opt.hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 block text-xs text-muted",
										children: opt.hint
									}) : null] }), selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 shrink-0 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 shrink-0 text-muted" })]
								}) }, opt.value);
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit,
							className: "grid gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "name",
									children: "Nome"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									name: "name",
									required: true,
									autoComplete: "name"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "email",
									children: "E-mail"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									name: "email",
									type: "email",
									required: true,
									autoComplete: "email"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "company",
									children: "Empresa / órgão"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "company",
									name: "company",
									autoComplete: "organization"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "phone",
									children: "Telefone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "phone",
									name: "phone",
									type: "tel",
									autoComplete: "tel"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									disabled: pending,
									className: "mt-2",
									children: pending ? "Erguendo o último pavimento…" : "Entregar o projeto"
								})
							]
						})
					}),
					step > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: back,
						className: "mt-8 inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Voltar um pavimento"]
					}) : null
				]
			})
		})]
	});
}
function BriefingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefingFlow, {});
}
//#endregion
export { BriefingPage as component };
