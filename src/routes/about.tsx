import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Users, Award, Globe, TrendingUp } from "lucide-react";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { Button } from "@/components/ui/button";
import { COMPANY, QUOTE, STATS } from "@/lib/site";

export const Route = createFileRoute("/about")(({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: `About Us — ${COMPANY.name}` },
      {
        name: "description",
        content:
          "GREAT TURBINEZ is a global enterprise AI consulting firm delivering transformative solutions to Fortune 500 companies and industry leaders worldwide since 2024.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <PageFrame className="page-enter">
      <Eyebrow>About {COMPANY.name}</Eyebrow>
      <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl">
        Building the Intelligent
        <br />
        Enterprise of Tomorrow.
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Founded in {COMPANY.year}, {COMPANY.name} emerged from a singular vision: 
        to help organizations harness artificial intelligence not as an experiment, 
        but as a strategic imperative that drives measurable business outcomes.
      </p>

      <section className="mt-12 rounded-xl bg-surface p-8 hairline sm:p-10">
        <blockquote className="border-l-4 border-accent pl-6 italic leading-relaxed text-fg">
          {QUOTE.text}
        </blockquote>
        <p className="mt-4 text-sm font-medium text-subtle">
          — {QUOTE.attribution}
        </p>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl font-semibold tracking-tight">
          Our Story
        </h2>
        <div className="mt-6 grid gap-6 text-sm leading-relaxed text-muted md:grid-cols-2">
          <div className="space-y-4">
            <p>
              In an era where artificial intelligence is reshaping every industry, 
              we saw a critical gap: enterprise organizations needed more than 
              point solutions or academic research—they needed strategic partners 
              who could translate AI potential into operational reality.
            </p>
            <p>
              We built {COMPANY.name} on three fundamental principles: deep industry 
              expertise, rigorous technical excellence, and an unwavering commitment 
              to measurable business outcomes. Not innovation for innovation's sake, 
              but transformation that appears on the balance sheet.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              Today, we serve Fortune 500 companies and industry leaders across six 
              continents, delivering AI transformations that range from strategic 
              roadmaps to full-scale enterprise implementations. Our engagements have 
              generated billions in value, automated millions of hours, and positioned 
              our clients at the forefront of their industries.
            </p>
            <p>
              But we measure success not just by technology deployed, but by businesses 
              transformed, teams empowered, and competitive advantages sustained.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl font-semibold tracking-tight">
          By the Numbers
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-surface px-5 py-6">
              <p className="font-display text-3xl font-semibold tracking-tight text-fg tabular-nums sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs tracking-wide text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl font-semibold tracking-tight">
          What Sets Us Apart
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-xl bg-surface p-6 hairline">
            <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10">
              <Users className="size-6 text-accent" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Elite Team</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Our consultants combine advanced degrees in AI/ML with deep industry 
              experience, bringing both technical depth and business acumen to 
              every engagement.
            </p>
          </article>

          <article className="rounded-xl bg-surface p-6 hairline">
            <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10">
              <Award className="size-6 text-accent" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Proven Methodology</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Our transformation framework has been battle-tested across hundreds 
              of engagements, de-risking AI adoption while accelerating time to value.
            </p>
          </article>

          <article className="rounded-xl bg-surface p-6 hairline">
            <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10">
              <Globe className="size-6 text-accent" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Global Scale</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Operating across 28 countries with distributed teams, we deliver 
              enterprise-grade solutions with seamless coordination across time zones.
            </p>
          </article>

          <article className="rounded-xl bg-surface p-6 hairline">
            <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10">
              <TrendingUp className="size-6 text-accent" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">ROI Focus</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Every initiative begins with clear success metrics and business 
              outcomes. We don't build technology—we deliver competitive advantage.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-16 rounded-xl bg-raised p-8 hairline sm:p-10">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Our Commitment to Excellence
        </h2>
        <div className="mt-6 grid gap-6 text-sm leading-relaxed md:grid-cols-3">
          <div>
            <h3 className="font-medium text-fg">Security & Compliance</h3>
            <p className="mt-2 text-muted">
              SOC 2 Type II certified with ISO 27001 compliance. We meet the 
              stringent security requirements of regulated industries worldwide.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-fg">Ethical AI</h3>
            <p className="mt-2 text-muted">
              Our AI Ethics Board ensures every solution we build prioritizes 
              fairness, transparency, and accountability—technology that serves humanity.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-fg">Continuous Innovation</h3>
            <p className="mt-2 text-muted">
              We invest 15% of revenue in R&D, ensuring our clients benefit from 
              cutting-edge AI advances before they become industry standard.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 p-8 hairline sm:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Partner With Us
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Join the world's most innovative enterprises in building intelligent 
            operations that anticipate, adapt, and accelerate.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/contact">
                Start a Conversation
                <ArrowUpRight className="size-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/portfolio">Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
