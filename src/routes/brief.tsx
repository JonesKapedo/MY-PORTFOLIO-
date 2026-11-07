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
          "Request a private automation brief. Reply within two business days. No deposit until you approve a written proposal.",
      },
    ],
  }),
});

const ASSURANCES = [
  {
    icon: FileText,
    title: "No charge to brief",
    body: "Submitting does not create an invoice.",
  },
  {
    icon: Clock,
    title: `Reply ${COMPANY.responseSla}`,
    body: "Fit assessment and a clear next step.",
  },
  {
    icon: Shield,
    title: "Deposit after agreement",
    body: "Payment only against an approved proposal.",
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
          <Eyebrow>Private brief</Eyebrow>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Commission a structured conversation about automation.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Share the operational friction. We respond {COMPANY.responseSla}
            with fit and direction. Work proceeds only under written scope —
            the standard serious operators expect.
          </p>
        </header>

        <ul className="stagger-children grid gap-3 sm:grid-cols-3">
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
          <div className="rounded-xl border border-accent/20 bg-accent/5 px-5 py-4 text-sm text-muted">
            <p className="font-medium text-fg">Context carried into this brief</p>
            {concern ? (
              <p className="mt-2">
                Concern: <span className="text-fg">{concern.title}</span>
              </p>
            ) : null}
            {service ? (
              <p className="mt-1">
                Service:{" "}
                <span className="text-accent">{service.name}</span>
                <span className="text-subtle">
                  {" "}
                  · Indicative {service.price} after written agreement ·{" "}
                  {service.timeframe}
                </span>
              </p>
            ) : null}
            <p className="mt-2 text-xs text-subtle">
              The form is pre-filled. Adjust freely before you submit.
            </p>
          </div>
        )}

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14">
          <aside className="space-y-6 lg:pt-1">
            <div>
              <h2 className="text-sm font-semibold text-fg">Process</h2>
              <ol className="mt-4 space-y-4">
                {[
                  "Submit this brief — a few minutes is sufficient.",
                  `We reply ${COMPANY.responseSla} with fit and a rough direction.`,
                  "If aligned, you receive a written proposal. Deposit and build follow only after your approval.",
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
                Precision over volume
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                We accept briefs we can own end-to-end. If the work sits outside
                our practice, we say so plainly — so your time is not spent on
                the wrong path.
              </p>
            </div>

            <p className="text-xs text-subtle">
              Direct line:{" "}
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
              Required: identity, a contact channel, detail, and privacy consent.
            </p>
            <div className="mt-6">
              <ContactForm
                initialService={initialService}
                initialConcernSlug={concern?.slug}
              />
            </div>
          </div>
        </div>
      </div>
    </PageFrame>
  );
}
