import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ACCREDITATIONS } from "./router-CDb-H_fB.mjs";
import { n as Section, t as PageHero } from "./page-hero-BxqR6k8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/acreditacoes-Dou9Cd7R.js
var import_jsx_runtime = require_jsx_runtime();
function Acreditacoes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		image: "/edificacoes.jpg",
		compact: true,
		kicker: "Acreditações",
		title: "Reconhecimento pelo investimento em sucesso do cliente",
		lead: "A acreditação é obtida ao realizar uma verificação de conhecimento, entregar o serviço a um cliente e ter avaliação positiva na prestação."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-12 md:grid-cols-2",
		children: ACCREDITATIONS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl font-semibold",
			children: group.group
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 space-y-5",
			children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "border-t border-border pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-medium",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: item.body
				})]
			}, item.title))
		})] }, group.group))
	}) })] });
}
//#endregion
export { Acreditacoes as component };
