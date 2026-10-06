import { i as __toESM } from "../_runtime.mjs";
import { a as QUOTE, c as cn, o as SERVICES, t as COMPANY } from "./site-DRhKEnTe.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Route$2, r as Button } from "./router-asoFSED0.mjs";
import { n as PageFrame, t as Eyebrow } from "./page-frame-BD1Oderc.mjs";
import { t as Portrait } from "./portrait-jcZDQwsy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BYwQBPdh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md bg-raised px-3.5 text-sm text-fg hairline field-focus outline-none transition-[box-shadow] duration-150 placeholder:text-subtle disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-xs font-medium tracking-widest text-muted uppercase", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-32 w-full rounded-lg bg-raised px-3.5 py-3 text-sm text-fg hairline field-focus outline-none transition-[box-shadow] duration-150 placeholder:text-subtle disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function ContactForm({ initialService }) {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [org, setOrg] = (0, import_react.useState)("");
	const [service, setService] = (0, import_react.useState)(initialService ?? "");
	const [message, setMessage] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	function onSubmit(event) {
		event.preventDefault();
		const missing = [];
		if (!name.trim()) missing.push("name");
		if (!email.trim()) missing.push("email");
		if (!message.trim()) missing.push("brief");
		if (missing.length > 0) {
			setError(`Please add your ${missing.slice(0, -1).join(", ")}${missing.length > 1 ? " and " : ""}${missing[missing.length - 1]}.`);
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
			setError("That email address does not look right — please check it.");
			return;
		}
		setError(null);
		const serviceLabel = SERVICES.find((s) => s.id === service)?.name ?? "Not specified";
		const subject = `Brief from ${name.trim()} — ${COMPANY.name}`;
		const body = [
			`Name: ${name.trim()}`,
			`Email: ${email.trim()}`,
			`Organisation: ${org.trim() || "—"}`,
			`Service: ${serviceLabel}`,
			"",
			message.trim()
		].join("\n");
		const href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		window.location.href = href;
		toast.success("Opening your email client to send the brief.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "space-y-5 lg:pt-1",
		children: [
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "rounded-lg bg-danger/10 px-4 py-3 text-sm text-danger ring-1 ring-danger/30",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Name",
					htmlFor: "name",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "name",
						name: "name",
						autoComplete: "name",
						required: true,
						value: name,
						onChange: (e) => setName(e.target.value)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					htmlFor: "email",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "email",
						name: "email",
						type: "email",
						autoComplete: "email",
						required: true,
						value: email,
						onChange: (e) => setEmail(e.target.value)
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Organisation",
				htmlFor: "org",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "org",
					name: "organisation",
					autoComplete: "organization",
					value: org,
					onChange: (e) => setOrg(e.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Service of interest",
				htmlFor: "service",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					id: "service",
					name: "service",
					value: service,
					onChange: (e) => setService(e.target.value),
					className: "flex h-11 w-full appearance-none rounded-md bg-raised px-3.5 text-sm text-fg hairline field-focus outline-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "Tell us in the brief"
					}), SERVICES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: item.id,
						children: item.name
					}, item.id))]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "The brief",
				htmlFor: "message",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "message",
					name: "message",
					required: true,
					placeholder: "What process is repeating, who runs it, and what a good week would look like.",
					value: message,
					onChange: (e) => setMessage(e.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-x-4 gap-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "w-full sm:w-auto",
					children: "Send the brief"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-subtle",
					children: [
						"Opens your email app — or write to",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${COMPANY.email}`,
							className: "text-accent underline-offset-4 hover:underline",
							children: COMPANY.email
						}),
						"."
					]
				})]
			})
		]
	});
}
function Field({ label, htmlFor, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor,
			children: label
		}), children]
	});
}
function ContactPage() {
	const { service } = Route$2.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageFrame, {
		className: "page-enter",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-12 lg:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col items-center text-center lg:items-start lg:text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, {
					size: "lg",
					className: "mx-auto lg:mx-0"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "mt-8 max-w-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-xl leading-snug font-medium tracking-tight text-fg italic sm:text-2xl",
						children: [
							"“",
							QUOTE.text,
							"”"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "mt-5 text-xs font-medium tracking-widest text-accent uppercase",
						children: ["— ", QUOTE.attribution]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Contact" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
					children: "Write to the studio."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-base leading-relaxed text-muted",
					children: [
						"Tell us the process that is eating the week. We read every brief at",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${COMPANY.email}`,
							className: "text-accent underline-offset-4 hover:underline",
							children: COMPANY.email
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, { initialService: service })
				})
			] })]
		})
	});
}
//#endregion
export { ContactPage as component };
