import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as Section, t as PageHero } from "./page-hero-BxqR6k8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solucoes.index-DAs9fpAJ.js
var import_jsx_runtime = require_jsx_runtime();
function Solucoes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		image: "/hero.jpg",
		kicker: "Soluções",
		title: "Do conceito à execução, um ecossistema Autodesk® completo",
		lead: "Licenciamento, implantação BIM, Construction Cloud, orçamentação 5D e desenvolvimento sob medida para edificações e infraestrutura."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: [
			{
				to: "/solucoes/edificacoes",
				img: "/edificacoes.jpg",
				kicker: "AEC",
				title: "Edificações",
				body: "Revit, Navisworks e ACC para projetar, coordenar e construir com menos retrabalho."
			},
			{
				to: "/solucoes/infraestrutura",
				img: "/infra.jpg",
				kicker: "Civil",
				title: "Infraestrutura",
				body: "Civil 3D e InfraWorks para rodovias, ferrovias, pontes, saneamento e ativos hídricos."
			},
			{
				to: "/solucoes/orcafascio",
				img: "/hero.jpg",
				kicker: "BIM 5D",
				title: "OrçaFascio Prime",
				body: "Engenharia de custo com IA, rastreabilidade e integração nativa com Revit e Civil 3D."
			}
		].map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: card.to,
			className: "group overflow-hidden rounded-lg bg-surface shadow-[var(--shadow-border)] transition-shadow hover:shadow-[var(--shadow-border-hover)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative h-48 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: card.img,
					alt: "",
					className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.2em] text-primary uppercase",
						children: card.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-xl font-semibold",
						children: card.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: card.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 inline-flex items-center gap-1 text-sm text-primary",
						children: ["Saiba mais ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				]
			})]
		}, card.to))
	}) })] });
}
//#endregion
export { Solucoes as component };
