import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as cn } from "./router-CDb-H_fB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-BxqR6k8C.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ kicker, title, lead, image, compact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("relative overflow-hidden", compact ? "min-h-72" : "min-h-96"),
		children: [
			image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-bg via-bg/80 to-bg/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex max-w-6xl flex-col justify-end gap-4 px-4 py-16 sm:px-6 sm:py-20",
				children: [
					kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.22em] text-primary uppercase",
						children: kicker
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl",
						children: title
					}),
					lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-2xl text-base leading-relaxed text-muted sm:text-lg",
						children: lead
					}) : null
				]
			})
		]
	});
}
function Section({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20", className),
		children
	});
}
//#endregion
export { Section as n, PageHero as t };
