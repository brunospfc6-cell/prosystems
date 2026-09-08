import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, b as useRouter, d as HeadContent, g as createFileRoute, h as lazyRouteComponent, m as Outlet, p as createRouter, u as Scripts, v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as __exportAll } from "./ssr.mjs";
import { L as string, N as number, P as object, R as union, j as literal } from "../_libs/@better-auth/core+[...].mjs";
import { i as signOut, t as authClient } from "./client-sGid3STf.mjs";
import { n as auth } from "./server-BjgX0s7n.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as TriangleAlert, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CDb-H_fB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-lg font-semibold",
				children: "Algo deu errado"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-muted",
				children: error.message || "Ocorreu um erro inesperado. Recarregue a página."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var COMPANY = {
	name: "Pro-Systems",
	legal: "Pro-Systems Brasil",
	tagline: "Transforme seus projetos com especialistas em BIM e soluções Autodesk®",
	since: 1987,
	years: 39,
	city: "Brasília — DF",
	phones: ["(61) 3202-2666", "(61) 3968-1446"],
	emails: {
		comercial: "comercial@prosystems.com.br",
		suporte: "suporte@prosystems.com.br"
	},
	social: {
		instagram: "https://www.instagram.com/prosystemsdf/",
		facebook: "https://www.facebook.com/prosystemsdf/",
		cadstudio: "https://www.cadstudio.com.br/",
		atas: "https://ata.autodesk.prosystems.com.br"
	},
	badges: ["Autodesk Silver Partner", "Authorized Training Center"]
};
var INTERESTS = [
	"Licenciamento Autodesk",
	"Consultoria BIM",
	"Treinamento ATC",
	"Autodesk Construction Cloud",
	"OrçaFascio Prime",
	"Desenvolvimento de soluções",
	"Suporte técnico"
];
var SERVICES = [
	{
		slug: "licenciamento",
		title: "Licenciamento oficial Autodesk®",
		body: "Disponibilizamos licenciamento oficial Autodesk® com orientação especializada para que empresas utilizem as soluções mais adequadas às suas necessidades."
	},
	{
		slug: "consultoria",
		title: "Consultoria BIM",
		body: "Apoiamos organizações na implantação da metodologia BIM, definição de processos, padronização de fluxos de trabalho e transformação digital."
	},
	{
		slug: "treinamentos",
		title: "Treinamentos oficiais Autodesk®",
		body: "Como Autodesk Authorized Training Center (ATC), oferecemos treinamentos conduzidos por instrutores qualificados para diferentes níveis de conhecimento."
	},
	{
		slug: "desenvolvimento",
		title: "Desenvolvimento de soluções",
		body: "Criamos aplicações e integrações personalizadas para otimizar processos e aumentar a produtividade — como o app Civil 3D desenvolvido para a Terracap."
	}
];
var SPECIALIZATIONS = [
	{
		title: "Arquitetura de edifícios",
		body: "Otimizamos o projeto de construção com colaboração aprimorada da equipe, transferência de dados mais eficiente, redução do tempo geral de projeto e maior capacidade de carga de trabalho."
	},
	{
		title: "Mecânica, elétrica e hidráulica (MEP)",
		body: "Ajudamos a projetar e fabricar melhores sistemas prediais, criar estimativas baseadas em modelos e adicionar componentes MEP aos projetos com eficiência."
	},
	{
		title: "Infraestrutura civil e de transporte",
		body: "Fluxos BIM inteligentes e conectados para pontes, túneis, ferrovias, estradas e rodovias — mais resilientes, produtivos e lucrativos."
	},
	{
		title: "Infraestrutura hídrica",
		body: "Modelagem hidráulica e tecnologias em nuvem que impulsionam eficiência e sustentabilidade em todas as fases do ciclo de vida dos ativos hídricos."
	}
];
var ACCREDITATIONS = [{
	group: "Capacidades técnicas",
	items: [
		{
			title: "Revit — Arquitetura",
			body: "Como implementar o Revit em projetos de construção."
		},
		{
			title: "Revit — MEP",
			body: "Implementação do Revit incluindo funções MEP de gerenciamento de modelos."
		},
		{
			title: "Revit — Estrutura",
			body: "Criação de modelos, produção de desenhos e revisão de projetos."
		},
		{
			title: "Civil 3D",
			body: "Como implementar o Civil 3D em projetos de infraestrutura."
		},
		{
			title: "InfraWorks Starter Pack",
			body: "Abordagem BIM para projetar estradas nas fases conceitual e preliminar."
		},
		{
			title: "Capacidade técnica do Revit",
			body: "Suporte de produto para o Revit com êxito."
		}
	]
}, {
	group: "Habilidades de sucesso do cliente",
	items: [
		{
			title: "Credenciamento de suporte técnico",
			body: "Comportamentos centrados no cliente, criando momentos positivos e decisivos."
		},
		{
			title: "Estrutura de implementação de consultoria",
			body: "Prestação de serviços por meio de uma abordagem sistemática de consultoria."
		},
		{
			title: "Gerenciamento de projetos",
			body: "Condução de projetos que sustentam a prestação de serviços."
		},
		{
			title: "Descoberta coordenada",
			body: "Identificamos as necessidades dos usuários e direcionamos aos serviços certos."
		}
	]
}];
var CASES = [
	{
		client: "ArcelorMittal",
		quote: "A parceria que temos com a Pro-Systems é muito consolidada e nos proporciona um melhor desempenho em nossos projetos e desenvolvimentos.",
		person: "Giseli Batista Facundes Fabres",
		role: "Planejamento de Engenharia",
		result: "Adoção de coleções Autodesk para otimização de processos e produtividade."
	},
	{
		client: "COMARA",
		quote: "Excelência profissional e tecnológica no projeto, construção e recuperação de aeroportos em áreas remotas da Amazônia Legal.",
		person: "Comissão de Aeroportos da Região Amazônica",
		role: "Comando da Aeronáutica",
		result: "Aprimoramento de projetos aeroportuários com uso de BIM."
	},
	{
		client: "CAESB",
		quote: "Não se faz BIM sem todos os recursos proporcionados pelas ferramentas Autodesk. É o casamento da metodologia com os recursos dos softwares.",
		person: "Fábio Barcellar",
		role: "Gerente de Projetos dos Sistemas de Esgotos",
		result: "Implementação BIM bem-sucedida em saneamento no Distrito Federal."
	},
	{
		client: "Terracap",
		quote: "O aplicativo AutoCAD Civil 3D para geração de caminhamento de perímetro e quadros de unidades imobiliárias melhorou bastante a utilização dos recursos humanos da GEPRO.",
		person: "Gerência de Projetos (GEPRO)",
		role: "Terracap",
		result: "App customizado em Civil 3D para agilidade nos processos fundiários."
	},
	{
		client: "Receita Federal",
		quote: "O pacote Autodesk, implementado com o apoio da Pro-Systems, tornou a fiscalização de obras mais ágil e com ganhos de qualidade.",
		person: "Receita Federal do Brasil",
		role: "Fiscalização de projetos",
		result: "BIM aplicado à fiscalização de obras públicas."
	}
];
var EVENTS = [
	{
		date: "Set 2025",
		title: "Autodesk University 2025",
		kind: "Presença",
		body: "A Pro-Systems participou do maior evento global de projeto e construção da Autodesk, acompanhando as práticas que chegam aos projetos brasileiros."
	},
	{
		date: "2026",
		title: "Webinar InfraWorks",
		kind: "Online",
		body: "Modele e visualize projetos de infraestrutura em contexto real antes da execução — estradas, terrapleno e entorno."
	},
	{
		date: "2026",
		title: "BIM para órgãos públicos",
		kind: "Brasília",
		body: "Workshop sobre os decretos federais de BIM e a adoção prática em obras e serviços de engenharia."
	},
	{
		date: "Contínuo",
		title: "Turmas ATC — Civil 3D e Revit",
		kind: "Presencial / EaD",
		body: "Capacitação oficial com instrutores certificados, material didático Autodesk e certificação."
	}
];
var PRODUCTS = [
	"AEC Collection",
	"AutoCAD",
	"Revit",
	"Civil 3D",
	"InfraWorks",
	"Navisworks",
	"ReCap Pro",
	"FormIt Pro",
	"BIM Collaborate",
	"Autodesk Construction Cloud",
	"Dynamo",
	"Vehicle Tracking"
];
function Logo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: cn("flex items-center gap-2.5 text-fg", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 32 32",
			className: "size-8 shrink-0",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "32",
				height: "32",
				rx: "7",
				className: "fill-primary"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "fill-fg",
				d: "M8 22.5V9.5h8.2c2.9 0 4.8 1.7 4.8 4.2 0 1.7-1 3-2.5 3.6 1.8.5 3 2 3 3.9 0 2.8-2.1 4.3-5.3 4.3H8zm3.1-7.5h4.6c1.5 0 2.3-.8 2.3-2s-.8-1.9-2.3-1.9h-4.6V15zm0 6.4h5.2c1.7 0 2.6-.8 2.6-2.2s-.9-2.1-2.6-2.1h-5.2v4.3z"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-sm font-bold tracking-[0.14em] uppercase",
			children: "Pro-Systems"
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "max-w-md text-sm leading-relaxed text-muted",
						children: [
							"Desde ",
							COMPANY.since,
							", referência nacional em soluções Autodesk® para engenharia, arquitetura, infraestrutura e manufatura. Autodesk Silver Partner e Authorized Training Center em ",
							COMPANY.city,
							"."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-sm font-semibold tracking-wide uppercase",
					children: "Empresa"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/briefing",
							className: "hover:text-fg",
							children: "Construir o projeto"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/institucional",
							className: "hover:text-fg",
							children: "Institucional"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/especializacoes",
							className: "hover:text-fg",
							children: "Especializações"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/acreditacoes",
							className: "hover:text-fg",
							children: "Acreditações"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/cases",
							className: "hover:text-fg",
							children: "Cases de sucesso"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/portal",
							className: "hover:text-fg",
							children: "Área do cliente"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-sm font-semibold tracking-wide uppercase",
					children: "Contato"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: COMPANY.city }),
						COMPANY.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:+55${p.replace(/\D/g, "")}`,
							className: "hover:text-fg",
							children: p
						}) }, p)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${COMPANY.emails.comercial}`,
							className: "hover:text-fg",
							children: COMPANY.emails.comercial
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${COMPANY.emails.suporte}`,
							className: "hover:text-fg",
							children: COMPANY.emails.suporte
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					COMPANY.legal,
					". Autodesk, o logotipo da Autodesk e os nomes de produtos são marcas registradas."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Silver Partner · ATC · Brasília" })]
			})
		})]
	});
}
/**
* Current user + loading state. Same behavior in live preview and when deployed:
*   - Auth enabled (default) -> the real signed-in user; `user` is `null` while
*                            the session resolves (`isPending: true`) and when
*                            signed out (`isPending: false`). Session comes from
*                            Better Auth `useSession()` → `/api/auth/get-session`
*                            (cookie when deployed; bearer in live preview).
*   - Auth disabled (`VITE_AUTH_ENABLED=false`) -> `DEV_USER`, never pending.
*
* Protect a route by waiting out `isPending` before acting on `user` —
* redirecting on `user: null` alone bounces signed-in visitors to sign-in on
* every hard reload:
*
*   import { RedirectToSignIn } from "@/lib/auth/gates";
*   const { user, isPending } = useCurrentUserState();
*   if (isPending) return null;              // still resolving — don't redirect yet
*   if (!user) return <RedirectToSignIn />;  // definitely signed out
*
* `authEnabled` is a module-level constant fixed at load, so the guarded hook
* call keeps a stable hook order across every render of a given component.
*/
function useCurrentUserState() {
	const { data, isPending } = authClient.useSession();
	const user = data?.user;
	return {
		user: user ? {
			id: user.id,
			displayName: user.name ?? null,
			primaryEmail: user.email ?? null,
			profileImageUrl: user.image ?? null,
			isDevFallback: false
		} : null,
		isPending
	};
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-md font-medium transition-[transform,background-color,color,box-shadow] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-fg hover:bg-primary/90",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)] hover:bg-elevated",
			ghost: "bg-transparent text-fg hover:bg-elevated",
			muted: "bg-elevated text-fg hover:bg-border"
		},
		size: {
			sm: "h-9 px-3 text-sm",
			md: "h-11 px-5 text-sm",
			lg: "h-12 px-6 text-base"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var NAV = [
	{
		to: "/briefing",
		label: "Projeto"
	},
	{
		to: "/solucoes",
		label: "Soluções"
	},
	{
		to: "/institucional",
		label: "Institucional"
	},
	{
		to: "/capacitacao",
		label: "Capacitação"
	},
	{
		to: "/cases",
		label: "Cases"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/80 bg-bg/80 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-fg",
						activeProps: { className: "text-fg" },
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-2 lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthSlot, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/briefing",
							children: "Construir"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "relative grid size-11 place-items-center rounded-md text-fg lg:hidden",
					"aria-label": open ? "Fechar menu" : "Abrir menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("border-t border-border bg-surface lg:hidden", open ? "block" : "hidden"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-6xl flex-col px-4 py-3",
				children: [
					NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "flex min-h-11 items-center text-base text-fg",
						onClick: () => setOpen(false),
						children: item.label
					}, item.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/briefing",
						className: "flex min-h-11 items-center text-base text-fg",
						onClick: () => setOpen(false),
						children: "Construir o projeto"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contato",
						className: "flex min-h-11 items-center text-base text-fg",
						onClick: () => setOpen(false),
						children: "Fale conosco"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/portal",
						className: "flex min-h-11 items-center text-base text-fg",
						onClick: () => setOpen(false),
						children: "Área do cliente"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "py-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthSlot, {})
					})
				]
			})
		})]
	});
}
function AuthSlot() {
	const { user, isPending } = useCurrentUserState();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-24 animate-pulse rounded-full bg-elevated" });
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		variant: "ghost",
		size: "sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/login",
			children: "Entrar"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/portal",
			className: "max-w-36 truncate text-sm text-muted hover:text-fg",
			children: user.displayName || user.primaryEmail || "Conta"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => void signOut(),
			className: "text-sm text-muted underline-offset-4 hover:text-fg hover:underline",
			children: "Sair"
		})]
	});
}
var styles_default = "/assets/styles-OVHbxIVv.css";
var APP_NAME = "Pro-Systems";
var Route$17 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Pro-Systems Brasil — Autodesk Silver Partner e Authorized Training Center. Licenciamento, consultoria BIM, treinamentos e suporte desde 1987."
			},
			{
				name: "theme-color",
				content: "#050505"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Syne:wght@500;600;700;800&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt-BR",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-dvh bg-bg font-sans text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
						theme: "dark",
						position: "bottom-right",
						toastOptions: { className: "bg-elevated text-fg border-border" }
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$15 = () => import("./routes-C8UGg6f1.mjs");
var Route$16 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./acreditacoes-Dou9Cd7R.mjs");
var Route$15 = createFileRoute("/acreditacoes")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./briefing-DhlpTQ_o.mjs");
var Route$14 = createFileRoute("/briefing")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./capacitacao-Dzv90iE6.mjs");
var Route$13 = createFileRoute("/capacitacao")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./cases-B_Vr0m-O.mjs");
var Route$12 = createFileRoute("/cases")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./contato-AxXpw37Q.mjs");
var Route$11 = createFileRoute("/contato")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./especializacoes-Cyc4WFyH.mjs");
var Route$10 = createFileRoute("/especializacoes")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./eventos-Dy0GRN4U.mjs");
var Route$9 = createFileRoute("/eventos")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./institucional-DvlIBd6y.mjs");
var Route$8 = createFileRoute("/institucional")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./login-D1N-lLaA.mjs");
var Route$7 = createFileRoute("/login")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./portal-2j16dep_.mjs");
var Route$6 = createFileRoute("/portal")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./solucoes-CQMjMSk7.mjs");
var Route$5 = createFileRoute("/solucoes")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./solucoes.index-DAs9fpAJ.mjs");
var Route$4 = createFileRoute("/solucoes/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./solucoes.edificacoes-CLRIMPAZ.mjs");
var Route$3 = createFileRoute("/solucoes/edificacoes")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./solucoes.infraestrutura-BzsKi04v.mjs");
var Route$2 = createFileRoute("/solucoes/infraestrutura")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./solucoes.orcafascio-Ci7uB908.mjs");
var Route$1 = createFileRoute("/solucoes/orcafascio")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var Route = createFileRoute("/api/auth/$")({ server: { handlers: {
	GET: ({ request }) => auth.handler(request),
	POST: ({ request }) => auth.handler(request)
} } });
var IndexRoute = Route$16.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$17
});
var AcreditacoesRoute = Route$15.update({
	id: "/acreditacoes",
	path: "/acreditacoes",
	getParentRoute: () => Route$17
});
var BriefingRoute = Route$14.update({
	id: "/briefing",
	path: "/briefing",
	getParentRoute: () => Route$17
});
var CapacitacaoRoute = Route$13.update({
	id: "/capacitacao",
	path: "/capacitacao",
	getParentRoute: () => Route$17
});
var CasesRoute = Route$12.update({
	id: "/cases",
	path: "/cases",
	getParentRoute: () => Route$17
});
var ContatoRoute = Route$11.update({
	id: "/contato",
	path: "/contato",
	getParentRoute: () => Route$17
});
var EspecializacoesRoute = Route$10.update({
	id: "/especializacoes",
	path: "/especializacoes",
	getParentRoute: () => Route$17
});
var EventosRoute = Route$9.update({
	id: "/eventos",
	path: "/eventos",
	getParentRoute: () => Route$17
});
var InstitucionalRoute = Route$8.update({
	id: "/institucional",
	path: "/institucional",
	getParentRoute: () => Route$17
});
var LoginRoute = Route$7.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$17
});
var PortalRoute = Route$6.update({
	id: "/portal",
	path: "/portal",
	getParentRoute: () => Route$17
});
var SolucoesRoute = Route$5.update({
	id: "/solucoes",
	path: "/solucoes",
	getParentRoute: () => Route$17
});
var SolucoesIndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => SolucoesRoute
});
var SolucoesEdificacoesRoute = Route$3.update({
	id: "/edificacoes",
	path: "/edificacoes",
	getParentRoute: () => SolucoesRoute
});
var SolucoesInfraestruturaRoute = Route$2.update({
	id: "/infraestrutura",
	path: "/infraestrutura",
	getParentRoute: () => SolucoesRoute
});
var SolucoesOrcafascioRoute = Route$1.update({
	id: "/orcafascio",
	path: "/orcafascio",
	getParentRoute: () => SolucoesRoute
});
var ApiAuthSplatRoute = Route.update({
	id: "/api/auth/$",
	path: "/api/auth/$",
	getParentRoute: () => Route$17
});
var SolucoesRouteChildren = {
	SolucoesEdificacoesRoute,
	SolucoesInfraestruturaRoute,
	SolucoesOrcafascioRoute,
	SolucoesIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AcreditacoesRoute,
	BriefingRoute,
	CapacitacaoRoute,
	CasesRoute,
	ContatoRoute,
	EspecializacoesRoute,
	EventosRoute,
	InstitucionalRoute,
	LoginRoute,
	PortalRoute,
	SolucoesRoute: SolucoesRoute._addFileChildren(SolucoesRouteChildren),
	ApiAuthSplatRoute
};
var routeTree = Route$17._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { CASES as a, INTERESTS as c, SPECIALIZATIONS as d, cn as f, ACCREDITATIONS as i, PRODUCTS as l, Button as n, COMPANY as o, useCurrentUserState as r, EVENTS as s, router_exports as t, SERVICES as u };
