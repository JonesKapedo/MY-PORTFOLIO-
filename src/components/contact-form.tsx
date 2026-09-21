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
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Name, email, and a short brief are required.");
      return;
    }

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
    setSent(true);
    toast.success("Opening your email client to send the brief.");
  }

  if (sent) {
    return (
      <div className="rounded-xl bg-surface p-6 hairline">
        <h2 className="text-lg font-medium">Brief ready to send.</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          If your mail app did not open, write directly to{" "}
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-accent underline-offset-4 hover:underline"
          >
            {COMPANY.email}
          </a>
          . We typically reply within two working days.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setSent(false)}
        >
          Write another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 lg:pt-1">
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
          className="flex h-11 w-full rounded-md bg-raised px-3.5 text-sm text-fg hairline field-focus outline-none"
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
      <Button type="submit" className="w-full sm:w-auto">
        Send the brief
      </Button>
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
