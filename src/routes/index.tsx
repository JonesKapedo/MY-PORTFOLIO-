import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame } from "@/components/page-frame";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: `${COMPANY.name} — ${COMPANY.subtitle}` },
      {
        name: "description",
        content:
          "GREAT TURBINEZ Automation Services. The repeated work ends here — scoped, priced, delivered.",
      },
    ],
  }),
});

function HomePage() {
  return (
    <PageFrame className="page-enter relative justify-center gap-8 sm:gap-10">
      <div className="hero-glow max-w-3xl">
        <p className="text-[11px] font-medium tracking-[0.28em] text-accent uppercase">
          {COMPANY.name}
        </p>
        <h1 className="mt-4 font-display text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          The repeated
          <br />
          work <span className="text-accent">ends.</span>
        </h1>
        <p className="mt-6 max-w-md text-base text-muted sm:text-lg">
          Automation Services. One process at a time.
          <span className="text-fg"> Named. Scoped. Delivered.</span>
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button asChild size="lg">
          <Link to="/brief">Start a brief</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/services">What we build</Link>
        </Button>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] tracking-wide text-subtle uppercase">
        <Link to="/concerns" className="hover:text-accent">
          Name the problem
        </Link>
        <Link to="/work" className="hover:text-accent">
          See the work
        </Link>
        <Link to="/company" className="hover:text-accent">
          Company
        </Link>
      </div>

      <p className="absolute right-0 bottom-0 hidden text-[10px] tracking-[0.2em] text-subtle uppercase sm:block">
        {COMPANY.city}
      </p>
    </PageFrame>
  );
}
