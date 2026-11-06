import { useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { COMPANY, SERVICES, type ServiceId } from "@/lib/site";

type Props = {
  initialService?: ServiceId;
  initialMessage?: string;
};

const PROMPTS = [
  "Customers ask the same questions on WhatsApp every day",
  "We retype data between two tools",
  "Enquiries come in but nobody owns the follow-up",
  "We only see real numbers at month-end",
] as const;

export function ContactForm({ initialService, initialMessage = "" }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState<string>(initialService ?? "");
  const [message, setMessage] = useState(initialMessage);
  const [error, setError] = useState<string | null>(null);

  function applyPrompt(prompt: string) {
    setMessage((prev) => {
      const trimmed = prev.trim();
      if (!trimmed) return `${prompt}\n\n`;
      if (trimmed.includes(prompt)) return prev;
      return `${trimmed}\n\n${prompt}\n`;
    });
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const missing: string[] = [];
    if (!name.trim()) missing.push("name");
    if (!email.trim() && !phone.trim()) missing.push("email or phone");
    if (!message.trim()) missing.push("a short description of the problem");
    if (missing.length > 0) {
      setError(
        `Almost there — please add your ${missing.slice(0, -1).join(", ")}${
          missing.length > 1 ? " and " : ""
        }${missing[missing.length - 1]}.`,
      );
      return;
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("That email does not look right — a quick check please.");
      return;
    }

    setError(null);

    const serviceLabel =
      SERVICES.find((s) => s.id === service)?.name ?? "Not sure yet";
    const subject = `Brief from ${name.trim()} — ${COMPANY.name}`;
    const body = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim() || "—"}`,
      `Phone / WhatsApp: ${phone.trim() || "—"}`,
      `Organisation: ${org.trim() || "—"}`,
      `Service interest: ${serviceLabel}`,
      "",
      message.trim(),
    ].join("\n");

    const href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    toast.success("Opening your email to send the brief. Thank you.");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {error ? (
        <p
          role="alert"
          className="rounded-lg bg-danger/10 px-4 py-3 text-sm text-danger ring-1 ring-danger/25"
        >
          {error}
        </p>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name" required>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="e.g. Amina"
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
        <Field label="Email" htmlFor="email" hint="Email or phone is enough">
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

      <Field label="Service (if you already know)" htmlFor="service" hint="Optional">
        <select
          id="service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="flex h-11 w-full appearance-none rounded-md bg-raised px-3.5 text-sm text-fg hairline field-focus outline-none"
        >
          <option value="">I am not sure yet — that is fine</option>
          {SERVICES.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </Field>

      <div className="space-y-2">
        <Field
          label="What is going wrong or costing time?"
          htmlFor="message"
          required
        >
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="A few sentences is enough — what happens today, how often, and what ‘better’ would look like."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Field>
        <p className="text-[11px] text-subtle">Need a starting line? Tap one:</p>
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

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Send my brief
        </Button>
        <p className="text-xs leading-relaxed text-subtle">
          Opens your email app with the brief filled in. We reply{" "}
          {COMPANY.responseSla}.
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
