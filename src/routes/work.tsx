import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/site";
import { WORK_CASES } from "@/lib/work-cases";

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () => ({
    meta: [
      { title: `Work — ${COMPANY.name}` },
      {
        name: "description",
        content:
          "Selected case studies: situation, what was installed, and observed results from GREAT TURBINEZ Automation Services.",
      },
    ],
  }),
});

function WorkPage() {
  return (
    <PageFrame className="page-enter !overflow-y-auto overscroll-contain pb-12">
      <div className="flex w-full flex-col gap-12">
        <header className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>Work · {WORK_CASES.length} cases</Eyebrow>
            <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Selected outcomes
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Each case is scoped work with a clear before, an install, and
              results you can recognise on the floor — not a slogan deck.
              Status is labelled honestly.
            </p>
          </div>
          <Button asChild size="lg">
            <Link to="/brief">
              Brief similar work
              <ArrowRight className="size-4 opacity-80" />
            </Link>
          </Button>
        </header>

        <div className="stagger-children flex flex-col gap-6">
          {WORK_CASES.map((c) => (
            <article
              key={c.id}
              className="grid gap-6 rounded-2xl bg-surface/60 p-6 sm:p-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] text-subtle">
                    {c.code}
                  </span>
                  <Badge variant={c.status === "Live" ? "live" : "default"}>
                    {c.status}
                  </Badge>
                  <span className="text-[11px] text-subtle">
                    {c.sector} · {c.place}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-[1.65rem]">
                  {c.name}
                </h2>
                <p className="mt-1 text-sm text-accent">{c.headline}</p>
                <p className="mt-2 text-xs text-subtle">
                  {c.clientType} · {c.timeline}
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-[10px] font-medium tracking-[0.16em] text-subtle uppercase">
                      Situation
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {c.situation}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-medium tracking-[0.16em] text-subtle uppercase">
                      What we installed
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-fg">
                      {c.installed}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="text-[10px] font-medium tracking-[0.16em] text-accent uppercase">
                  Observed results
                </h3>
                <ul className="mt-3 space-y-3">
                  {c.results.map((r) => (
                    <li
                      key={r}
                      className="flex gap-3 text-sm leading-relaxed text-fg"
                    >
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 border-t border-line/60 pt-4 text-xs leading-relaxed text-subtle">
                  Scope: {c.scopeNote}
                </p>

                <Link
                  to="/brief"
                  search={{ service: c.serviceId }}
                  className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-accent transition-opacity hover:opacity-80"
                >
                  Brief this kind of work
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <section className="border-t border-line/60 pt-10">
          <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            Need something in this shape?
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Tell us the situation. We reply {COMPANY.responseSla}. Written
            scope before any deposit.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/brief">
                Start a brief
                <ArrowRight className="size-4 opacity-80" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link to="/services">View services</Link>
            </Button>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
