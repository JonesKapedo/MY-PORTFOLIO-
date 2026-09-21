import { i as __toESM } from "../_runtime.mjs";
import { c as cn, i as PROJECTS } from "./site-DCLhX9eH.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageFrame, t as Eyebrow } from "./page-frame-7rl5aPK7.mjs";
import { t as Badge } from "./badge-Bs_yfNNo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-CXnmNGy8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTERS = [
	"All",
	"Automation",
	"Intelligence",
	"Advisory"
];
function PortfolioPage() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const items = (0, import_react.useMemo)(() => filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageFrame, {
		className: "page-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Portfolio" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-3xl font-display text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl",
				children: "Work we can stand next to."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-base leading-relaxed text-muted",
				children: "A selection of systems installed for operators around Naivasha and the wider Rift — flower farms, lodges, energy crews, desks, and markets. Names are working titles; the outcomes are the point."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap gap-2",
				role: "tablist",
				"aria-label": "Filter projects",
				children: FILTERS.map((item) => {
					const active = item === filter;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": active,
						onClick: () => setFilter(item),
						className: cn("inline-flex h-11 items-center rounded-full px-4 text-sm transition-colors duration-150", active ? "bg-fg text-accent-fg" : "bg-raised text-muted hover:text-fg"),
						children: item
					}, item);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-10 divide-y divide-line border-y border-line",
				children: items.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-6 py-10 md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,16rem)] md:items-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl text-accent/80",
							children: project.code
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-medium sm:text-2xl",
									children: project.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: project.status === "Live" ? "live" : "default",
									children: project.status
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									children: project.category
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base",
							children: project.summary
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "grid grid-cols-2 gap-4 text-sm md:grid-cols-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs tracking-widest text-subtle uppercase",
									children: "Sector"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "mt-1 text-fg",
									children: [
										project.sector,
										" · ",
										project.place
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs tracking-widest text-subtle uppercase",
									children: "Outcome"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-fg",
									children: project.outcome
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs tracking-widest text-subtle uppercase",
									children: "Year"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-fg tabular-nums",
									children: project.year
								})] })
							]
						})
					]
				}, project.id))
			}),
			items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-16 text-center text-sm text-muted",
				children: "Nothing in this lane yet."
			}) : null
		]
	});
}
//#endregion
export { PortfolioPage as component };
