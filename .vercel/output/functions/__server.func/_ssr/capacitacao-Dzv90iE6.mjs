import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Button, o as COMPANY } from "./router-CDb-H_fB.mjs";
import { n as Section, t as PageHero } from "./page-hero-BxqR6k8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/capacitacao-Dzv90iE6.js
var import_jsx_runtime = require_jsx_runtime();
function Capacitacao() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		image: "/capacitacao.jpg",
		kicker: "Capacitação",
		title: "Treinamentos oficiais Autodesk, no seu ritmo",
		lead: "Qualificação CAD e BIM com especialistas certificados. Centro de Treinamento, Certificação e único Academic Partner Autodesk da região Centro-Oeste."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-3",
			children: [
				{
					title: "ATC / ALC",
					body: "Authorized Training Center e Authorized Autodesk Learning Center — turmas presenciais em Brasília com material didático oficial."
				},
				{
					title: "Certificação ACC",
					body: "Authorized Autodesk Certification Center: avalie e certifique sua equipe nas ferramentas que o mercado exige."
				},
				{
					title: "Academic Partner",
					body: "Único parceiro Autodesk para a área acadêmica no Centro-Oeste (AAP), apoiando instituições de ensino."
				}
			].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-lg bg-surface p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: item.body
				})]
			}, item.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 grid gap-8 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold",
					children: "CAD Studio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: "Pioneira em Brasília e no Centro-Oeste, a CAD Studio oferece cursos com instrutores certificados, conteúdo programático otimizado e rapidez no aprendizado. Ensino a distância com cerca de 10 cursos da AEC Collection."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: COMPANY.social.cadstudio,
					className: "mt-4 inline-block text-sm text-primary hover:underline",
					target: "_blank",
					rel: "noreferrer",
					children: "cadstudio.com.br"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-semibold",
				children: "Turmas sob demanda"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted",
				children: "Montamos trilhas para órgãos públicos e empresas — Revit (arquitetura, MEP, estrutura), Civil 3D, InfraWorks, Navisworks e Autodesk Construction Cloud. Do onboarding de equipes novas em BIM ao aprofundamento de especialistas."
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contato",
					children: "Solicitar uma turma"
				})
			})
		})
	] })] });
}
//#endregion
export { Capacitacao as component };
