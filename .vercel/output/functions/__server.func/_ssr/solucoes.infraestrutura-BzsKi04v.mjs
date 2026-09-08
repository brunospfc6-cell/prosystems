import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Button } from "./router-CDb-H_fB.mjs";
import { n as Section, t as PageHero } from "./page-hero-BxqR6k8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solucoes.infraestrutura-BzsKi04v.js
var import_jsx_runtime = require_jsx_runtime();
function Infra() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		image: "/infra.jpg",
		kicker: "Soluções para infraestrutura",
		title: "Projete com inteligência em BIM para infraestrutura",
		lead: "Automatize cálculos, acelere entregas e visualize o projeto em contexto real antes da execução — rodovias, ferrovias, pontes, túneis e ativos hídricos."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: [
			{
				title: "Civil 3D",
				body: "Corredores, superfícies, redes de drenagem e documentação alinhada aos padrões de órgãos públicos. Implementação e customização — inclusive o app de caminhamento de perímetro criado para a Terracap."
			},
			{
				title: "InfraWorks",
				body: "Modele estradas nas fases conceitual e preliminar sobre o entorno real. Ideal para comunicação com stakeholders e estudos de alternativas."
			},
			{
				title: "Transporte",
				body: "Fluxos BIM conectados para pontes, túneis, ferrovias e rodovias mais resilientes, produtivos e lucrativos."
			},
			{
				title: "Infraestrutura hídrica",
				body: "Modelagem hidráulica e nuvem para eficiência e sustentabilidade no ciclo de vida de ativos de saneamento e recursos hídricos — como no trabalho com a CAESB."
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
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contato",
				children: "Conversar sobre infraestrutura"
			})
		})
	})] })] });
}
//#endregion
export { Infra as component };
