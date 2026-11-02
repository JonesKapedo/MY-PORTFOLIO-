import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { ContactForm } from "@/components/contact-form";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import {
  COMPANY,
  ENGAGEMENT_STEPS,
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
          "Free brief. Reply within two business days with fit and rough scope. No deposit until you approve a written proposal.",
      },
    ],
  }),
});

function BriefPage() {
  const search = Route.useSearch();
  const service = search.service ? getService(search.service) : undefined;
  const concern = search.concern ? getConcern(search.concern) : undefined;
  const initialService = (service?.id ?? undefined) as ServiceId | undefined;

  return (
    <PageFrame className="page-enter gap-3">
      <div className="grid min-h-0 flex-1 gap-4 overflow-hidden lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="min-h-0 shrink-0 space-y-3">
          <div>
            <Eyebrow>Brief</Eyebrow>
            <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Tell us what is broken.
            </h1>
            <p className="mt-2 max-w-md text-sm text-muted">
              Free. We reply {COMPANY.responseSla} with fit and a rough next
              step. No deposit until you approve a written proposal.
            </p>
          </div>

          {(concern || service) && (
            <p className="rounded-lg border border-line bg-raised px-3 py-2 text-xs text-muted">
              {concern ? (
                <>
                  Context: <span className="text-fg">{concern.title}</span>
                </>
              ) : null}
              {concern && service ? " · " : null}
              {service ? (
                <>
                  Service: <span className="text-accent">{service.name}</span>
                </>
              ) : null}
            </p>
          )}

          <ol className="flex flex-wrap gap-1.5">
            {ENGAGEMENT_STEPS.map((step, i) => (
              <li
                key={step}
                className="rounded-full border border-line px-2.5 py-0.5 text-[10px] text-subtle"
              >
                <span className="text-accent">{i + 1}</span> {step}
              </li>
            ))}
          </ol>
          <p className="text-[11px] text-subtle">
            You are on step 1. Payment is step 4 — only after scope is written.
          </p>
        </div>

        <div className="min-h-0 overflow-hidden">
          <ContactForm
            initialService={initialService}
            initialMessage={
              concern ? `Concern: ${concern.title}\n\n` : undefined
            }
          />
        </div>
      </div>
    </PageFrame>
  );
}
