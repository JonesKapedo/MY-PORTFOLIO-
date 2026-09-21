import { i as __toESM } from "../_runtime.mjs";
import { a as QUOTE, c as cn, o as SERVICES, t as COMPANY } from "./site-DCLhX9eH.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Route$2, r as Button } from "./router-DcTWdWeD.mjs";
import { n as PageFrame, t as Eyebrow } from "./page-frame-7rl5aPK7.mjs";
import { t as Portrait } from "./portrait-DrP-Jidy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-dwDOqEGv.js
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
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(event) {
		event.preventDefault();
		if (!name.trim() || !email.trim() || !message.trim()) {
			toast.error("Name, email, and a short brief are required.");
			return;
		}
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
		setSent(true);
		toast.success("Opening your email client to send the brief.");
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-6 hairline",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-medium",
				children: "Brief ready to send."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: [
					"If your mail app did not open, write directly to",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${COMPANY.email}`,
						className: "text-accent underline-offset-4 hover:underline",
						children: COMPANY.email
					}),
					". We typically reply within two working days."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "outline",
				className: "mt-6",
				onClick: () => setSent(false),
				children: "Write another"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "space-y-5 lg:pt-1",
		children: [
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
					className: "flex h-11 w-full rounded-md bg-raised px-3.5 text-sm text-fg hairline field-focus outline-none",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				className: "w-full sm:w-auto",
				children: "Send the brief"
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
