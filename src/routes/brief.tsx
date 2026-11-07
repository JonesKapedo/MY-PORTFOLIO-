import { createFileRoute, Link } from "@tanstack/react-router";
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
    <PageFrame className="page-enter !overflow-y-auto overscroll-contain pb-14">
      <div className="flex w-full flex-col gap-10 lg:gap-12">
        <header className="grid w-full gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
          <div>
            <Eyebrow>Private brief · conversion path</Eyebrow>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Start the engagement here.
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              This is how every automation build at GREAT TURBINEZ begins: a
              structured brief, a fit reply {COMPANY.responseSla}, then a written
              proposal. We commit to scoped delivery — not open-ended retainers.
            </p>
          </div>
          <p className="rounded-2xl border border-accent/25 bg-accent/[0.06] px-5 py-4 text-sm leading-relaxed text-muted lg:text-right">
            <span className="font-medium text-accent">Our commitment:</span>{" "}
            clear edges, deposit only after you approve scope, handoff you can
            run without us.
          </p>
        </header>

        <ul className="stagger-children grid w-full gap-3 sm:grid-cols-3">
          {ASSURANCES.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="flex gap-3 rounded-xl bg-surface/70 px-5 py-5"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Icon className="size-4" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-sm font-semibold text-fg">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{body}</p>
              </div>
            </li>
          ))}
        </ul>

        {(concern || service) && (
          <div className="w-full rounded-xl border border-accent/20 bg-accent/5 px-5 py-4 text-sm text-muted">
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
              Pre-filled for speed. Edit anything before you submit.
            </p>
          </div>
        )}

        <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 xl:gap-16">
          <aside className="space-y-8 lg:pt-1">
            <div>
              <h2 className="font-display text-xl font-semibold tracking-tight">
                How we deliver
              </h2>
              <ol className="mt-5 space-y-4">
                {[
                  "You submit this brief — five minutes is enough.",
                  `We reply ${COMPANY.responseSla} with fit and direction.`,
                  "Written proposal. Deposit and build only after your approval.",
                  "Handoff with a system your team can operate.",
                ].map((line, i) => (
                  <li key={line} className="flex gap-3 text-sm text-muted">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent/15 font-mono text-[11px] font-medium text-accent">
                      {i + 1}
                    </span>
                    <span className="pt-1 leading-relaxed">{line}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-xl bg-surface/50 px-5 py-5">
              <p className="flex items-center gap-2 text-sm font-medium text-fg">
                <Check className="size-4 text-accent" strokeWidth={2} />
                Why operators brief us
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                We only accept work we can own end-to-end. If the problem sits
                outside automation delivery, we say so — so budget is not spent
                on the wrong path.
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
            <p className="text-xs text-subtle">
              <Link to="/services" className="hover:text-accent">
                Browse services
              </Link>
              <span className="mx-2">·</span>
              <Link to="/concerns" className="hover:text-accent">
                Name a concern
              </Link>
            </p>
          </aside>

          <div className="w-full rounded-2xl bg-surface/80 p-6 sm:p-8 lg:p-10">
            <h2 className="font-display text-xl font-semibold tracking-tight text-fg">
              Your private brief
            </h2>
            <p className="mt-1 text-sm text-muted">
              Required: identity, a contact channel, detail, and privacy consent.
            </p>
            <div className="mt-8">
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
