import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { Portrait } from "@/components/portrait";
import { COMPANY, QUOTE, type ServiceId } from "@/lib/site";

const SERVICE_IDS: ServiceId[] = [
  "discovery",
  "workflow",
  "assistant",
  "documents",
  "dashboard",
  "retainer",
];

function parseSearch(search: Record<string, unknown>): { service?: ServiceId } {
  const value = search.service;
  if (typeof value === "string" && (SERVICE_IDS as string[]).includes(value)) {
    return { service: value as ServiceId };
  }
  return {};
}

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  validateSearch: parseSearch,
  head: () => ({
    meta: [
      { title: `Contact — ${COMPANY.name}` },
      {
        name: "description",
        content:
          "Tell us the process that is eating the week. Briefs are read by the studio and answered within two working days.",
      },
    ],
  }),
});

function ContactPage() {
  const { service } = Route.useSearch();

  return (
    <PageFrame className="page-enter">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <section className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Portrait size="lg" className="mx-auto lg:mx-0" />
          <blockquote className="mt-8 max-w-lg">
            <p className="font-display text-xl leading-snug font-medium tracking-tight text-fg italic sm:text-2xl">
              “{QUOTE.text}”
            </p>
            <footer className="mt-5 text-xs font-medium tracking-widest text-accent uppercase">
              — {QUOTE.attribution}
            </footer>
          </blockquote>
        </section>

        <section>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Write to the studio.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Tell us the process that is eating the week. We read every brief
            at{" "}
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-accent underline-offset-4 hover:underline"
            >
              {COMPANY.email}
            </a>
            .
          </p>
          <div className="mt-8">
            <ContactForm initialService={service} />
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
