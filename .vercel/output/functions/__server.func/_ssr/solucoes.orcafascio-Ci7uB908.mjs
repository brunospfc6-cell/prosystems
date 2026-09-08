import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Button } from "./router-CDb-H_fB.mjs";
import { n as Section, t as PageHero } from "./page-hero-BxqR6k8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solucoes.orcafascio-Ci7uB908.js
var import_jsx_runtime = require_jsx_runtime();
function Orcafascio() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		image: "/hero.jpg",
		kicker: "Orçamentação 5D",
		title: "Assuma o controle do orçamento das suas obras",
		lead: "O OrçaFascio Prime é o software de engenharia de custo, dentro dos conceitos de BIM 4D e 5D, criado para órgãos públicos e grandes construtoras."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "max-w-3xl text-muted",
			children: "Membro da Autodesk Developer Network (ADN), o Prime foi projetado para integrar-se a Revit e Civil 3D. Atende aos Decretos Federais nº 9.983/2019 e nº 10.306/2020, que tratam da disseminação do BIM em obras públicas."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-8 grid gap-4 md:grid-cols-2",
			children: [
				"Orçamentos até 8× mais rápidos com inteligência artificial",
				"Interoperabilidade via API com outros sistemas",
				"Trilha de auditoria: cada ação de cada usuário documentada",
				"Relatórios e passo a passo para atender a legislação vigente",
				"Versionamento e rastreabilidade, inclusive entre usuários",
				"Permissões individuais e criptografia com WAF, gerenciadas via Azure AD",
				"BIM 4D: Navisworks e Synchro — cronograma físico-financeiro, curvas ABC/AS, histograma e linha de balanço",
				"BIM 5D: quantitativos automáticos a partir de IFC, RVT e DWG do Civil 3D, com memória de cálculo"
			].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "rounded-lg bg-surface px-5 py-4 text-sm leading-relaxed text-fg/90",
				children: item
			}, item))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contato",
					children: "Falar com um especialista"
				})
			})
		})
	] })] });
}
//#endregion
export { Orcafascio as component };
