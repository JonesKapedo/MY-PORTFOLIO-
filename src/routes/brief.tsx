import { createFileRoute } from "@tanstack/react-router";
import { Check, Clock, FileText, Shield } from "lucide-react";
import { z } from "zod";
import { ContactForm } from "@/components/contact-form";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import {
  COMPANY,
  getConcern,
  getService,
  type ServiceId,
} from "@/lib/site";

const briefSearchSchema = z.object({
  service: z.string().optional(),
  concern: z.string().optional(),
});

export const Route = createFileRoute("/brief")({
  validateSearch: briefSearchSchema,
  component: BriefPage,
  head: () => ({
    meta: [
      { title: `Brief — ${COMPANY.name}` },
      {
        name: "description",
        content:
          "Send a free brief in a few minutes. We reply within two business days with fit and a rough next step. No deposit until you approve a written proposal.",
      },
    ],
  }),
});

const ASSURANCES = [
  {
    icon: FileText,
    title: "Free to send",
    body: "No invoice starts from this form.",
  },
  {
    icon: Clock,
    title: `Reply ${COMPANY.responseSla}`,
    body: "Fit, rough scope, and whether we should talk.",
  },
  {
    icon: Shield,
    title: "Deposit later",
    body: "Only after you approve a written proposal.",
  },
] as const;

function BriefPage() {
  const search = Route.useSearch();
  const service = search.service ? getService(search.service) : undefined;
  const concern = search.concern ? getConcern(search.concern) : undefined;
  const initialService = (service?.id ?? undefined) as ServiceId | undefined;

  return (
    <PageFrame className="page-enter !overflow-y-auto overscroll-contain pb-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 lg:gap-12">
        <header className="max-w-2xl">
          <Eyebrow>Start here</Eyebrow>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Tell us what is costing you time or money.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            A short note is enough. We read every brief, reply{" "}
            {COMPANY.responseSla}, and only propose work that fits. You stay in
            control — no pressure, no surprise invoices.
          </p>
        </header>

        <ul className="grid gap-3 sm:grid-cols-3">
          {ASSURANCES.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="flex gap-3 rounded-xl bg-surface/70 px-4 py-4"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Icon className="size-4" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-sm font-medium text-fg">{title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted">{body}</p>
              </div>
            </li>
          ))}
        </ul>

        {(concern || service) && (
          <p className="rounded-xl border border-accent/20 bg-accent/5 px-4 py-3 text-sm text-muted">
            {concern ? (
              <>
                You came from:{" "}
                <span className="font-medium text-fg">{concern.title}</span>
              </>
            ) : null}
            {concern && service ? <span className="mx-2 text-subtle">·</span> : null}
            {service ? (
              <>
                Looking at:{" "}
                <span className="font-medium text-accent">{service.name}</span>
              </>
            ) : null}
            <span className="mt-1 block text-xs text-subtle">
              We pre-filled what we could — edit anything before you send.
            </span>
          </p>
        )}

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14">
          <aside className="space-y-6 lg:pt-1">
            <div>
              <h2 className="text-sm font-semibold text-fg">What happens next</h2>
              <ol className="mt-4 space-y-4">
                {[
                  "You send this brief (two minutes is fine).",
                  `We reply ${COMPANY.responseSla} with fit and a rough direction.`,
                  "If it fits, you get a written proposal — then deposit, then build.",
                ].map((line, i) => (
                  <li key={line} className="flex gap-3 text-sm text-muted">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/15 font-mono text-[11px] font-medium text-accent">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 leading-relaxed">{line}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-xl bg-surface/50 px-4 py-4">
              <p className="flex items-center gap-2 text-xs font-medium text-fg">
                <Check className="size-3.5 text-accent" strokeWidth={2} />
                You do not need a perfect scope
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Plain language is better than a long document. Name the pain,
                the channel (WhatsApp, email, paper…), and roughly how often it
                happens. We will ask if we need more.
              </p>
            </div>

            <p className="text-xs text-subtle">
              Prefer email?{" "}
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-accent hover:underline"
              >
                {COMPANY.email}
              </a>
              <span className="mx-1.5">·</span>
              {COMPANY.phone}
            </p>
          </aside>

          <div className="rounded-2xl bg-surface/70 p-5 sm:p-7">
            <h2 className="text-sm font-semibold text-fg">Your brief</h2>
            <p className="mt-1 text-xs text-muted">
              Required: name, a way to reach you, and what is going wrong.
            </p>
            <div className="mt-6">
              <ContactForm
                initialService={initialService}
                initialMessage={
                  concern ? `Concern: ${concern.title}\n\n` : undefined
                }
              />
            </div>
          </div>
        </div>
      </div>
    </PageFrame>
  );
}
