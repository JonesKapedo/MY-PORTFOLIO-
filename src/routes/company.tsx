import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { Button } from "@/components/ui/button";
import { COMPANY, ENGAGEMENT_STEPS, PRINCIPLES } from "@/lib/site";

export const Route = createFileRoute("/company")({
  component: CompanyPage,
  head: () => ({
    meta: [
      { title: `Company — ${COMPANY.name}` },
      {
        name: "description",
        content: `${COMPANY.name} — ${COMPANY.subtitle}. Scoped automation for operators.`,
      },
    ],
  }),
});

function CompanyPage() {
  return (
    <PageFrame className="page-enter">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end">
        <Logo size="lg" className="shrink-0" />
        <div>
          <Eyebrow>Company</Eyebrow>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {COMPANY.name}
          </h1>
          <p className="mt-2 text-sm tracking-[0.16em] text-accent uppercase">
            {COMPANY.subtitle}
          </p>
        </div>
      </div>

      <p className="mt-10 max-w-2xl text-xl leading-relaxed text-muted">
        Automation with ambition — websites, bots, workflows, documents, and AI
        on <em className="text-fg not-italic">your</em> information. Scope first.
        Build second.
      </p>

      <section className="mt-16">
        <Eyebrow>What we do</Eyebrow>
        <p className="mt-4 max-w-xl text-muted">
          We install practical automation where repetition burns time and money.
          Clear categories. Written scope. Deposit before build.
        </p>
        <Link
          to="/services"
          className="mt-4 inline-block text-sm text-accent underline-offset-4 hover:underline"
        >
          View services →
        </Link>
      </section>

      <section className="mt-16">
        <Eyebrow>How we engage</Eyebrow>
        <ol className="mt-6 flex flex-wrap gap-2">
          {ENGAGEMENT_STEPS.map((step, i) => (
            <li
              key={step}
              className="rounded-full border border-line bg-raised px-4 py-2 text-sm"
            >
              <span className="text-accent">{i + 1}</span>
              <span className="ml-2 text-fg">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <Eyebrow>Focus</Eyebrow>
        <p className="mt-4 max-w-xl text-muted">
          Operator and organisation problems — desks, floors, and field work.
          Based in {COMPANY.location}; work follows the brief.
        </p>
      </section>

      <section className="mt-16">
        <Eyebrow>Principles</Eyebrow>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="rounded-xl bg-surface p-5 hairline">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-xl bg-surface p-8 hairline">
        <Eyebrow>Contact</Eyebrow>
        <p className="mt-4 text-muted">
          We reply {COMPANY.responseSla}.
        </p>
        <p className="mt-4">
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-accent underline-offset-4 hover:underline"
          >
            {COMPANY.email}
          </a>
        </p>
        <p className="mt-2 text-sm text-muted">{COMPANY.phone}</p>
        <Button asChild className="mt-6" size="lg">
          <Link to="/brief">Start a brief</Link>
        </Button>
      </section>
    </PageFrame>
  );
}
