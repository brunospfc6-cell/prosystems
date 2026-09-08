import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as signIn } from "./client-sGid3STf.mjs";
import { t as GROK_PROVIDERS } from "./server-BjgX0s7n.mjs";
import { n as Button } from "./router-CDb-H_fB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-D1N-lLaA.js
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-[0.22em] text-primary uppercase",
				children: "Área do cliente"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-3xl font-semibold",
				children: "Entre para solicitar propostas e abrir chamados"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted",
				children: [
					"Use sua conta Google ou X. Visitantes continuam podendo falar com o comercial em",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contato",
						className: "text-fg underline-offset-4 hover:underline",
						children: "Fale conosco"
					}),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-3",
				children: GROK_PROVIDERS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "outline",
					className: "w-full",
					onClick: () => signIn(p.providerId, { callbackURL: "/portal" }),
					children: ["Continuar com ", p.label]
				}, p.providerId))
			})
		]
	});
}
//#endregion
export { Login as component };
