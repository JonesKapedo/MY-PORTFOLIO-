import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  COMPANY,
  SERVICES,
  getConcern,
  getService,
  type ServiceId,
} from "@/lib/site";
import { briefWhatsAppMessage, whatsappHref } from "@/lib/whatsapp";

type Props = {
  initialService?: ServiceId;
  initialConcernSlug?: string;
  initialMessage?: string;
};

const PROMPTS = [
  "Customers ask the same questions on WhatsApp every day",
  "We retype data between two tools",
  "Enquiries come in but nobody owns the follow-up",
  "We only see real numbers at month-end",
] as const;

function buildPrefillMessage(
  serviceId?: string,
  concernSlug?: string,
  fallback?: string,
) {
  if (fallback?.trim()) return fallback;
  const service = serviceId ? getService(serviceId) : undefined;
  const concern = concernSlug ? getConcern(concernSlug) : undefined;
  const parts: string[] = [];
  if (concern) {
    parts.push(`Operational concern: ${concern.title}`);
    parts.push(`Context: ${concern.teaser}`);
  }
  if (service) {
    parts.push(`Service of interest: ${service.name}`);
    parts.push(
      `Indicative investment (after written agreement): ${service.price} (${service.unit})`,
    );
    parts.push(`Typical delivery window: ${service.timeframe}`);
    parts.push(
      "Note: No payment is due until a written proposal is approved. Figures above are indicative starting points only.",
    );
  }
  if (parts.length === 0) return "";
  return `${parts.join("\n")}\n\nAdditional detail:\n`;
}

export function ContactForm({
  initialService,
  initialConcernSlug,
  initialMessage,
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState<string>(initialService ?? "");
  const [message, setMessage] = useState(() =>
    buildPrefillMessage(initialService, initialConcernSlug, initialMessage),
  );
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    setService(initialService ?? "");
    let base = buildPrefillMessage(
      initialService,
      initialConcernSlug,
      initialMessage,
    );
    try {
      const roi = sessionStorage.getItem("gt-roi-note");
      if (roi) {
        base = base ? `${base}\n${roi}\n` : `${roi}\n\n`;
        sessionStorage.removeItem("gt-roi-note");
      }
    } catch {
      /* ignore */
    }
    setMessage(base);
  }, [initialService, initialConcernSlug, initialMessage]);

  const selected = service ? getService(service) : undefined;
  const concern = initialConcernSlug
    ? getConcern(initialConcernSlug)
    : undefined;

  function applyPrompt(prompt: string) {
    setMessage((prev) => {
      const trimmed = prev.trim();
      if (!trimmed) return `${prompt}\n\n`;
      if (trimmed.includes(prompt)) return prev;
      return `${trimmed}\n\n${prompt}\n`;
    });
  }

  function openWhatsApp() {
    const text = briefWhatsAppMessage({
      name: name.trim() || undefined,
      service: selected?.name,
      concern: concern?.title,
      indicativeFee: selected?.price,
      detail: message.trim(),
    });
    window.open(whatsappHref(text), "_blank", "noopener,noreferrer");
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const missing: string[] = [];
    if (!name.trim()) missing.push("name");
    if (!email.trim() && !phone.trim()) missing.push("email or phone");
    if (!message.trim()) missing.push("a short description of the problem");
    if (!privacyConsent) missing.push("privacy consent");
    if (missing.length > 0) {
      setError(
        `Please complete: ${missing.slice(0, -1).join(", ")}${
          missing.length > 1 ? " and " : ""
        }${missing[missing.length - 1]}.`,
      );
      return;
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("That email does not look correct.");
      return;
    }

    setError(null);
    setSending(true);

    const serviceLabel = selected?.name ?? "Not specified";
    const payload = {
      name: name.trim(),
      email: email.trim() || "not-provided@greatturbinez.com",
      phone: phone.trim() || "—",
      organisation: org.trim() || "—",
      service: serviceLabel,
      serviceId: service || "—",
      indicativeFee: selected?.price ?? "—",
      concern: initialConcernSlug ?? "—",
      message: message.trim(),
      privacyConsent: "yes",
      marketingConsent: marketingConsent ? "yes" : "no",
      _subject: `Brief — ${name.trim()} — ${COMPANY.name}`,
      _template: "table",
      _captcha: "false",
    };

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(COMPANY.email)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!res.ok) throw new Error("submit_failed");

      toast.success(
        "Brief received. We will reply within two business days.",
      );
      setName("");
      setEmail("");
      setOrg("");
      setPhone("");
      setMessage(
        buildPrefillMessage(initialService, initialConcernSlug, initialMessage),
      );
      setPrivacyConsent(false);
      setMarketingConsent(false);
    } catch {
      const body = [
        `Name: ${name.trim()}`,
        `Email: ${email.trim() || "—"}`,
        `Phone: ${phone.trim() || "—"}`,
        `Organisation: ${org.trim() || "—"}`,
        `Service: ${serviceLabel}`,
        `Indicative fee (after agreement): ${selected?.price ?? "—"}`,
        `Privacy consent: yes`,
        `Marketing consent: ${marketingConsent ? "yes" : "no"}`,
        "",
        message.trim(),
      ].join("\n");
      window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
        `Brief from ${name.trim()} — ${COMPANY.name}`,
      )}&body=${encodeURIComponent(body)}`;
      toast.message("Opening your email app as a backup path.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {selected ? (
        <div className="rounded-xl border border-accent/25 bg-accent/[0.06] px-4 py-3 text-sm">
          <p className="font-medium text-fg">{selected.name}</p>
          <p className="mt-1 text-xs text-muted">{selected.outcome}</p>
          <p className="mt-2 text-xs text-accent">
            Indicative investment after written agreement:{" "}
            <span className="font-semibold">{selected.price}</span>
            <span className="text-subtle"> · {selected.unit}</span>
          </p>
          <p className="mt-1 text-[11px] text-subtle">
            No payment is requested from this form. Fees apply only once you
            approve a formal proposal.
          </p>
        </div>
      ) : null}

      {error ? (
        <p
          role="alert"
          className="rounded-lg bg-danger/10 px-4 py-3 text-sm text-danger ring-1 ring-danger/25"
        >
          {error}
        </p>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" required>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Field>
        <Field label="Organisation" htmlFor="org" hint="Optional">
          <Input
            id="org"
            name="organisation"
            autoComplete="organization"
            placeholder="Company or team"
            value={org}
            onChange={(e) => setOrg(e.target.value)}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" htmlFor="email" hint="Email or phone required">
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>
        <Field label="Phone / WhatsApp" htmlFor="phone">
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+254 …"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Field>
      </div>

      <Field label="Service" htmlFor="service" hint="Pre-filled when available">
        <select
          id="service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="flex h-11 w-full appearance-none rounded-md bg-raised px-3.5 text-sm text-fg hairline field-focus outline-none"
        >
          <option value="">Not specified yet</option>
          {SERVICES.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name} — from {item.price}
            </option>
          ))}
        </select>
      </Field>

      <div className="space-y-2">
        <Field label="Brief detail" htmlFor="message" required>
          <Textarea
            id="message"
            name="message"
            required
            rows={7}
            placeholder="Describe the operational friction and what better would look like."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Field>
        <p className="text-[11px] text-subtle">
          Attachments: mention files in the brief — we will request them by email
          if needed. Quick starters:
        </p>
        <div className="flex flex-wrap gap-2">
          {PROMPTS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => applyPrompt(p)}
              className="rounded-full border border-line bg-raised/80 px-3 py-1.5 text-left text-[11px] leading-snug text-muted transition-colors hover:border-accent/40 hover:text-fg"
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3 rounded-xl bg-raised/40 px-4 py-4">
        <label className="flex gap-3 text-sm text-muted">
          <input
            type="checkbox"
            className="mt-1 size-4 shrink-0 accent-[var(--color-accent)]"
            checked={privacyConsent}
            onChange={(e) => setPrivacyConsent(e.target.checked)}
            required
          />
          <span>
            I agree to the{" "}
            <Link to="/privacy" className="text-accent hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link to="/terms" className="text-accent hover:underline">
              Terms of Service
            </Link>
            . GREAT TURBINEZ may contact me about this brief, proposals, and
            payment instructions related to work I request.{" "}
            <span className="text-accent">*</span>
          </span>
        </label>
        <label className="flex gap-3 text-sm text-muted">
          <input
            type="checkbox"
            className="mt-1 size-4 shrink-0 accent-[var(--color-accent)]"
            checked={marketingConsent}
            onChange={(e) => setMarketingConsent(e.target.checked)}
          />
          <span>
            Optional: send me occasional practice updates and invitations (you
            may unsubscribe at any time).
          </span>
        </label>
      </div>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          disabled={sending}
        >
          {sending ? "Sending…" : "Submit private brief"}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="w-full sm:w-auto"
          onClick={openWhatsApp}
        >
          <MessageCircle className="size-4" />
          Continue on WhatsApp
        </Button>
        <p className="text-xs leading-relaxed text-subtle">
          Email or WhatsApp — same brief. Reply {COMPANY.responseSla}.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  required,
  hint,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
  hint?: string;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <Label htmlFor={htmlFor}>
          {label}
          {required ? <span className="text-accent"> *</span> : null}
        </Label>
        {hint ? <span className="text-[10px] text-subtle">{hint}</span> : null}
      </div>
      {children}
    </div>
  );
}
