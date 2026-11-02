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

export function ContactForm({ initialService, initialMessage = "" }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState<string>(initialService ?? "");
  const [message, setMessage] = useState(initialMessage);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const missing: string[] = [];
    if (!name.trim()) missing.push("name");
    if (!email.trim() && !phone.trim()) missing.push("email or phone");
    if (!message.trim()) missing.push("concern");
    if (missing.length > 0) {
      setError(
        `Please add your ${missing.slice(0, -1).join(", ")}${
          missing.length > 1 ? " and " : ""
        }${missing[missing.length - 1]}.`,
      );
      return;
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("That email address does not look right — please check it.");
      return;
    }

    setError(null);

    const serviceLabel =
      SERVICES.find((s) => s.id === service)?.name ?? "Not specified";
    const subject = `Brief from ${name.trim()} — ${COMPANY.name}`;
    const body = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim() || "—"}`,
      `Phone: ${phone.trim() || "—"}`,
      `Organisation: ${org.trim() || "—"}`,
      `Service: ${serviceLabel}`,
      "",
      message.trim(),
    ].join("\n");

    const href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    toast.success("Opening your email client to send the brief.");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 lg:pt-1">
      {error ? (
        <p
          role="alert"
          className="rounded-lg bg-danger/10 px-4 py-3 text-sm text-danger ring-1 ring-danger/30"
        >
          {error}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Field>
        <Field label="Organisation" htmlFor="org">
          <Input
            id="org"
            name="organisation"
            autoComplete="organization"
            value={org}
            onChange={(e) => setOrg(e.target.value)}
          />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Field>
      </div>
      <Field label="Service (if known)" htmlFor="service">
        <select
          id="service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="flex h-11 w-full appearance-none rounded-md bg-raised px-3.5 text-sm text-fg hairline field-focus outline-none"
        >
          <option value="">Tell us in the concern</option>
          {SERVICES.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </Field>
      <Field label="What’s going wrong or costing time?" htmlFor="message">
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Describe the concern in plain language."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Field>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <Button type="submit" className="w-full sm:w-auto">
          Send the brief
        </Button>
        <p className="text-xs text-subtle">
          Opens your email app — or write to{" "}
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-accent underline-offset-4 hover:underline"
          >
            {COMPANY.email}
          </a>
          . We reply {COMPANY.responseSla}.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
