import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { ContactForm } from "@/components/contact-form";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { COMPANY, getConcern, getService, type ServiceId } from "@/lib/site";

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
          "Tell us what is costing time or money. We reply within two business days.",
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
    <PageFrame className="page-enter">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div>
          <Eyebrow>Brief</Eyebrow>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Tell us what is broken.
          </h1>
          <p className="mt-4 max-w-md text-muted">
            Describe the concern in your words. We reply {COMPANY.responseSla}.
          </p>
          {concern ? (
            <p className="mt-6 rounded-lg border border-line bg-raised px-4 py-3 text-sm text-muted">
              Context: <span className="text-fg">{concern.title}</span>
              {service ? (
                <>
                  {" "}
                  · Category:{" "}
                  <span className="text-accent">{service.name}</span>
                </>
              ) : null}
            </p>
          ) : service ? (
            <p className="mt-6 rounded-lg border border-line bg-raised px-4 py-3 text-sm text-muted">
              Service: <span className="text-accent">{service.name}</span>
            </p>
          ) : (
            <p className="mt-6 text-sm text-subtle">
              If it isn’t listed, describe it.
            </p>
          )}
        </div>
        <ContactForm
          initialService={initialService}
          initialMessage={
            concern
              ? `Concern: ${concern.title}\n\n`
              : undefined
          }
        />
      </div>
    </PageFrame>
  );
}
