import { useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { COMPANY, SERVICES, type ServiceId } from "@/lib/site";

type Props = {
  initialService?: ServiceId;
};

export function ContactForm({ initialService }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [service, setService] = useState<string>(initialService ?? "");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // `required` already covers empties for a mouse user; this catches a pasted
    // whitespace-only value, which the browser happily submits as "filled".
    const missing: string[] = [];
    if (!name.trim()) missing.push("name");
    if (!email.trim()) missing.push("email");
    if (!message.trim()) missing.push("brief");
    if (missing.length > 0) {
      setError(
        `Please add your ${missing.slice(0, -1).join(", ")}${
          missing.length > 1 ? " and " : ""
        }${missing[missing.length - 1]}.`,
      );
      return;
    }

    // Reject an address the mail client would bounce, before handing off.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("That email address does not look right — please check it.");
      return;
    }

    setError(null);

    const serviceLabel =
      SERVICES.find((s) => s.id === service)?.name ?? "Not specified";
    const subject = `Brief from ${name.trim()} — ${COMPANY.name}`;
    const body = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
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
      {/* Announced rather than only coloured, so the reason a submit failed is
          available to a screen reader as well as being visible. */}
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
        <Field label="Email" htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>
      </div>
      <Field label="Organisation" htmlFor="org">
        <Input
          id="org"
          name="organisation"
          autoComplete="organization"
          value={org}
          onChange={(e) => setOrg(e.target.value)}
        />
      </Field>
      <Field label="Service of interest" htmlFor="service">
        <select
          id="service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="flex h-11 w-full appearance-none rounded-md bg-raised px-3.5 text-sm text-fg hairline field-focus outline-none"
        >
          <option value="">Tell us in the brief</option>
          {SERVICES.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </Field>
      <Field label="The brief" htmlFor="message">
        <Textarea
          id="message"
          name="message"
          required
          placeholder="What process is repeating, who runs it, and what a good week would look like."
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
          .
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
