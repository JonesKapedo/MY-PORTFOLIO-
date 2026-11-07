import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Eyebrow, FunnelClose, PageFrame } from "@/components/page-frame";
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
    <PageFrame className="page-enter !overflow-y-auto overscroll-contain pb-14">
      <div className="flex w-full flex-col gap-12">
        <header className="flex w-full flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <Eyebrow>Work · {WORK_CASES.length} delivered patterns</Eyebrow>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Proof we install automation that holds.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Situation. Install. Observed result. Every case is scoped delivery
              — the same standard you get when you brief us.
            </p>
          </div>
          <Button asChild size="lg">
            <Link to="/brief">
              Brief similar work
              <ArrowRight className="size-4 opacity-80" />
            </Link>
          </Button>
        </header>

        <div className="stagger-children flex w-full flex-col gap-5">
          {WORK_CASES.map((c) => (
            <article
              key={c.id}
              className="grid w-full gap-6 rounded-2xl bg-surface/60 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 xl:p-10"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] text-subtle">{c.code}</span>
                  <Badge variant={c.status === "Live" ? "live" : "default"}>
                    {c.status}
                  </Badge>
                  <span className="text-[11px] text-subtle">
                    {c.sector} · {c.place}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {c.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-accent">{c.headline}</p>
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
                  className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-accent transition-opacity hover:opacity-80"
                >
                  Get a quotation for this pattern
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <FunnelClose
          title="Ready for the same standard on your process?"
          body={`Private brief. We reply ${COMPANY.responseSla}. Written scope before any deposit — that is how we protect both sides and still ship.`}
          primary={
            <Button asChild size="lg">
              <Link to="/brief">
                Request a private brief
                <ArrowRight className="size-4 opacity-80" />
              </Link>
            </Button>
          }
          secondary={
            <Button asChild variant="ghost" size="lg">
              <Link to="/services">View services</Link>
            </Button>
          }
        />
      </div>
    </PageFrame>
  );
}
