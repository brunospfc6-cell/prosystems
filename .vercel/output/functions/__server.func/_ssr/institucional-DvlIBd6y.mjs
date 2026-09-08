import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Button, o as COMPANY, u as SERVICES } from "./router-CDb-H_fB.mjs";
import { n as Section, t as PageHero } from "./page-hero-BxqR6k8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/institucional-DvlIBd6y.js
var import_jsx_runtime = require_jsx_runtime();
function Institucional() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		image: "/hero.jpg",
		kicker: "Institucional",
		title: `${COMPANY.legal}: Autodesk Silver Partner e especialista em BIM`,
		lead: `Desde ${COMPANY.since}, atuamos na transformação digital de empresas de engenharia, arquitetura, infraestrutura e manufatura.`
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 md:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-3 space-y-5 text-base leading-relaxed text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Como ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-fg",
							children: "Autodesk Silver Partner"
						}),
						" e",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-fg",
							children: "Autodesk Authorized Training Center (ATC)"
						}),
						", oferecemos licenciamento oficial Autodesk®, consultoria BIM, implantação do Autodesk Construction Cloud®, treinamentos especializados e suporte técnico para impulsionar produtividade, colaboração e inovação em projetos."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Trabalhamos com transparência, integridade e foco em resultados, construindo relacionamentos duradouros com clientes, colaboradores e parceiros. Nosso objetivo é apoiar organizações na adoção de tecnologias Autodesk® e da metodologia BIM para obter projetos mais eficientes, inteligentes e colaborativos." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Independentemente da complexidade do seu projeto, nossa equipe em",
						" ",
						COMPANY.city,
						" está preparada para implementar soluções Autodesk®, acelerar a adoção BIM e alcançar novos níveis de produtividade."
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "md:col-span-2 rounded-lg bg-surface p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-sm font-semibold tracking-wide uppercase",
					children: "Nossos diferenciais"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted",
					children: [
						"Autodesk Silver Partner",
						"Autodesk Authorized Training Center (ATC)",
						`Mais de ${COMPANY.years} anos de experiência desde ${COMPANY.since}`,
						"Especialistas em implantação BIM",
						"Licenciamento oficial Autodesk®",
						"Consultoria técnica especializada",
						"Treinamentos oficiais Autodesk®",
						"Atendimento a organizações em todo o Brasil"
					].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-b border-border py-2 last:border-0",
						children: d
					}, d))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid gap-4 sm:grid-cols-2",
			children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-lg bg-surface p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold",
					children: s.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: s.body
				})]
			}, s.slug))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 flex flex-wrap gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contato",
					children: "Fale conosco"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/especializacoes",
					children: "Especializações"
				})
			})]
		})
	] })] });
}
//#endregion
export { Institucional as component };
