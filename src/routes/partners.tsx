import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PARTNER_FEE_USD, PARTNER_PROGRAM } from "@/lib/partner-program";
import { COMPANY } from "@/lib/site";

export const Route = createFileRoute("/partners")({
  component: PartnersPage,
  head: () => ({
    meta: [
      { title: `Partner Network — ${COMPANY.name}` },
      {
        name: "description",
        content:
          "Apply to the GREAT TURBINEZ Partner Network. $100/month seat for qualified automation practices — referrals, co-delivery, and shared standards.",
      },
    ],
  }),
});

function PartnersPage() {
  return (
    <PageFrame className="page-enter !overflow-y-auto overscroll-contain pb-14">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-14">
        <header className="max-w-3xl">
          <Eyebrow>Partner Network</Eyebrow>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {PARTNER_PROGRAM.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {PARTNER_PROGRAM.tagline}. A paid seat for practices we can send work
            to — and receive work from — under clear rules. Not a lead-selling
            list. Not an open directory.
          </p>
          <p className="mt-4 inline-flex items-baseline gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm">
            <span className="font-semibold text-accent">
              {PARTNER_PROGRAM.feeLabel}
            </span>
            <span className="text-xs text-muted">{PARTNER_PROGRAM.feeNote}</span>
          </p>
        </header>

        <section className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold text-fg">Who this is for</h2>
            <ul className="mt-4 space-y-3">
              {PARTNER_PROGRAM.whoFits.map((line) => (
                <li key={line} className="flex gap-3 text-sm text-muted">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-fg">Who should not apply</h2>
            <ul className="mt-4 space-y-3">
              {PARTNER_PROGRAM.whoDoesNot.map((line) => (
                <li key={line} className="flex gap-3 text-sm text-muted">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-subtle" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            What the seat delivers
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Every benefit below is operationally deliverable by GREAT TURBINEZ
            today — referral triage, co-delivery under written scope, and a
            partner channel. We do not promise fixed lead quotas.
          </p>
          <div className="stagger-children mt-8 grid gap-4 sm:grid-cols-2">
            {PARTNER_PROGRAM.benefits.map((b) => (
              <article
                key={b.title}
                className="rounded-xl bg-surface/70 p-5 sm:p-6"
              >
                <h3 className="text-sm font-semibold text-fg">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold text-fg">Partner obligations</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {PARTNER_PROGRAM.obligations.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-accent">·</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-fg">How onboarding works</h2>
            <ol className="mt-4 space-y-3">
              {PARTNER_PROGRAM.process.map((line, i) => (
                <li key={line} className="flex gap-3 text-sm text-muted">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/15 font-mono text-[11px] text-accent">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{line}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="rounded-2xl bg-surface/70 p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            Apply for a partner seat
          </h2>
          <p className="mt-2 text-sm text-muted">
            Applications are reviewed manually. Acceptance is not guaranteed.
            Seat billing begins only after onboarding confirmation.
          </p>
          <div className="mt-8">
            <PartnerApplicationForm />
          </div>
        </section>

        <p className="text-xs text-subtle">
          Questions before applying?{" "}
          <a
            href={`mailto:${COMPANY.email}?subject=Partner%20Network`}
            className="text-accent hover:underline"
          >
            {COMPANY.email}
          </a>
          <span className="mx-2">·</span>
          <Link to="/terms" className="hover:text-fg">
            Terms
          </Link>
          <span className="mx-2">·</span>
          <Link to="/privacy" className="hover:text-fg">
            Privacy
          </Link>
        </p>
      </div>
    </PageFrame>
  );
}

function PartnerApplicationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [practice, setPractice] = useState("");
  const [website, setWebsite] = useState("");
  const [focus, setFocus] = useState("");
  const [capacity, setCapacity] = useState("");
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !practice.trim() || !focus.trim()) {
      setError("Name, email, practice name, and focus are required.");
      return;
    }
    if (!consent) {
      setError("Please accept the privacy terms to submit.");
      return;
    }
    setError(null);
    setSending(true);
    const payload = {
      _subject: `Partner application — ${practice.trim()}`,
      type: "partner-application",
      name: name.trim(),
      email: email.trim(),
      practice: practice.trim(),
      website: website.trim() || "—",
      focus: focus.trim(),
      capacity: capacity.trim() || "—",
      fee: `$${PARTNER_FEE_USD}/month`,
      privacyConsent: "yes",
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
      if (!res.ok) throw new Error("fail");
      toast.success("Application received. We review within five business days.");
      setName("");
      setEmail("");
      setPractice("");
      setWebsite("");
      setFocus("");
      setCapacity("");
      setConsent(false);
    } catch {
      window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
        `Partner application — ${practice.trim()}`,
      )}&body=${encodeURIComponent(
        Object.entries(payload)
          .filter(([k]) => !k.startsWith("_"))
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n"),
      )}`;
      toast.message("Opening email as a backup path.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {error ? (
        <p role="alert" className="text-sm text-danger">
          {error}
        </p>
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="p-name">Your name</Label>
          <Input
            id="p-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="p-email">Work email</Label>
          <Input
            id="p-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="p-practice">Practice name</Label>
          <Input
            id="p-practice"
            value={practice}
            onChange={(e) => setPractice(e.target.value)}
            required
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="p-web">Website</Label>
          <Input
            id="p-web"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="https://"
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="p-focus">Focus & delivery capacity</Label>
        <Textarea
          id="p-focus"
          rows={4}
          value={focus}
          onChange={(e) => setFocus(e.target.value)}
          placeholder="What you ship, regions you cover, stack strengths…"
          required
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="p-cap">Monthly capacity for referred work (optional)</Label>
        <Input
          id="p-cap"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          placeholder="e.g. 1–2 concurrent builds"
        />
      </div>
      <label className="flex gap-3 text-sm text-muted">
        <input
          type="checkbox"
          className="mt-1 size-4 accent-[var(--color-accent)]"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        <span>
          I agree to the{" "}
          <Link to="/privacy" className="text-accent hover:underline">
            Privacy Policy
          </Link>{" "}
          and understand the seat is {PARTNER_PROGRAM.feeLabel} after acceptance.
        </span>
      </label>
      <Button type="submit" size="lg" disabled={sending}>
        {sending ? "Sending…" : "Submit partner application"}
        <ArrowRight className="size-4 opacity-80" />
      </Button>
    </form>
  );
}
