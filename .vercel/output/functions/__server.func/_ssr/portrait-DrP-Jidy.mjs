import { c as cn } from "./site-DCLhX9eH.mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portrait-DrP-Jidy.js
var import_jsx_runtime = require_jsx_runtime();
var SIZE = {
	sm: "size-14",
	md: "size-28",
	lg: "size-44 sm:size-56",
	xl: "size-52 sm:size-64 md:size-72",
	hero: "size-56 sm:size-72 md:size-80"
};
function Portrait({ size = "lg", className, alt = "Principal of Great Turbinez" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative shrink-0 rounded-full", SIZE[size], className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute -inset-1 rounded-full bg-accent/25",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "portrait-ring absolute inset-0 overflow-hidden rounded-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/portrait.jpg",
				alt,
				width: 800,
				height: 800,
				className: "size-full object-cover object-center"
			})
		})]
	});
}
//#endregion
export { Portrait as t };
