import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as CASES, n as Button } from "./router-CDb-H_fB.mjs";
import { n as Section, t as PageHero } from "./page-hero-BxqR6k8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cases-B_Vr0m-O.js
var import_jsx_runtime = require_jsx_runtime();
function Cases() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		image: "/infra.jpg",
		kicker: "Cases de sucesso",
		title: "Histórias que destacam resultados dos nossos clientes",
		lead: "Do aço à Amazônia, do saneamento à fiscalização federal — BIM e Autodesk aplicados onde o Brasil constrói."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6",
		children: CASES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "grid gap-6 rounded-lg bg-surface p-6 shadow-[var(--shadow-border)] md:grid-cols-[200px_1fr] md:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xl font-semibold",
				children: c.client
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: c.result
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-base leading-relaxed text-fg/90",
				children: [
					"“",
					c.quote,
					"”"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-4 text-sm text-muted",
				children: [
					c.person,
					" · ",
					c.role
				]
			})] })]
		}, c.client))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contato",
				children: "Quero um resultado parecido"
			})
		})
	})] })] });
}
//#endregion
export { Cases as component };
