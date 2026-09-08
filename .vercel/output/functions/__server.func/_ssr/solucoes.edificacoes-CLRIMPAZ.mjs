import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Button } from "./router-CDb-H_fB.mjs";
import { n as Section, t as PageHero } from "./page-hero-BxqR6k8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solucoes.edificacoes-CLRIMPAZ.js
var import_jsx_runtime = require_jsx_runtime();
function Edificacoes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		image: "/edificacoes.jpg",
		kicker: "Soluções para edificações",
		title: "Modele, coordene e entregue edifícios com BIM",
		lead: "Tome decisões mais inteligentes desde o estudo preliminar com análises em tempo real. Transforme ideias em modelos completos, precisos e integrados."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: [
				{
					title: "Projeto inteligente",
					body: "Revit para arquitetura, estrutura e MEP — um modelo que alimenta quantitativos, desenhos e coordenação."
				},
				{
					title: "Antecipe conflitos",
					body: "Navisworks e BIM Collaborate para detectar interferências e ter controle total antes da obra começar."
				},
				{
					title: "Do conceito à execução",
					body: "Autodesk Construction Cloud conecta escritório e canteiro com dados, issues e versões em um só ambiente."
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-10 max-w-3xl text-muted",
			children: "Especializações em Arquitetura de Edifícios e MEP: colaboração de equipe, transferência de dados, redução do tempo de projeto e estimativas baseadas em modelo. Softwares do nosso portfólio incluem Revit, AutoCAD, Navisworks, FormIt Pro, Fabrication CADmep e Point Layout."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contato",
					children: "Conversar sobre edificações"
				})
			})
		})
	] })] });
}
//#endregion
export { Edificacoes as component };
