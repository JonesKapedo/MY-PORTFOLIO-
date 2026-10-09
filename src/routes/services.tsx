import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowUpRight } from "lucide-react";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { Button } from "@/components/ui/button";
import { COMPANY, SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services")(({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: `Enterprise AI Solutions & Services — ${COMPANY.name}` },
      {
        name: "description",
        content:
          "Comprehensive AI transformation services for global enterprises—strategic consulting, intelligent automation, custom AI solutions, data intelligence, and managed services with proven ROI.",
      },
    ],
  }),
});

function ServicesPage() {
  return (
    <PageFrame className="page-enter">
      <Eyebrow>Enterprise AI Solutions</Eyebrow>
      <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl">
        Strategic Solutions. Measurable Impact.
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        From AI strategy to full-scale enterprise transformation, our comprehensive 
        services are designed to deliver tangible business outcomes. Every engagement 
        begins with a thorough discovery phase to ensure alignment with your strategic 
        objectives and measurable ROI.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {SERVICES.map((service) => (
          <article
            key={service.id}
            id={service.id}
            className="flex scroll-mt-24 flex-col rounded-xl bg-surface p-6 hairline sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl font-medium">{service.name}</h2>
              <p className="shrink-0 text-right">
                <span className="block text-base font-semibold text-accent">
                  {service.price}
                </span>
                <span className="text-xs text-subtle">{service.unit}</span>
              </p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {service.blurb}
            </p>
            <div className="mt-5 flex-1">
              <p className="text-xs font-medium uppercase tracking-wide text-subtle">
                What's Included
              </p>
              <ul className="mt-3 space-y-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-fg">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button asChild variant="outline" className="mt-6 w-full">
              <Link to="/contact" search={{ service: service.id }}>
                Request Consultation
              </Link>
            </Button>
          </article>
        ))}
      </div>

      <section className="mt-16 grid gap-8 rounded-xl bg-raised p-8 hairline sm:p-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">Discovery-Driven Approach</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Every engagement begins with strategic discovery—we assess your current 
            state, identify high-impact opportunities, and design solutions aligned 
            with your business objectives before any implementation begins.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Flexible Engagement Models</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Choose from project-based implementations, ongoing retainers, or hybrid 
            models. We structure engagements to match your organization's needs, 
            timeline, and transformation velocity.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Global Delivery Excellence</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Our teams operate across time zones with on-site and remote capabilities. 
            We deliver enterprise-grade solutions with rigorous security, compliance, 
            and governance standards.
          </p>
        </div>
      </section>

      <section className="mt-16 rounded-xl bg-surface p-8 hairline sm:p-10">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          How We Deliver Value
        </h2>
        <div className="mt-8 grid gap-6 text-sm leading-relaxed md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex size-10 items-center justify-center rounded-lg bg-accent/10 font-mono text-sm font-semibold text-accent">
              01
            </div>
            <h3 className="mt-4 font-medium text-fg">Strategic Alignment</h3>
            <p className="mt-2 text-muted">
              We begin with your business strategy—understanding objectives, 
              challenges, and success metrics before proposing any technology solution.
            </p>
          </div>
          <div>
            <div className="flex size-10 items-center justify-center rounded-lg bg-accent/10 font-mono text-sm font-semibold text-accent">
              02
            </div>
            <h3 className="mt-4 font-medium text-fg">Phased Implementation</h3>
            <p className="mt-2 text-muted">
              Rapid pilots prove value quickly, then scale systematically. We de-risk 
              transformation through incremental delivery with clear milestones.
            </p>
          </div>
          <div>
            <div className="flex size-10 items-center justify-center rounded-lg bg-accent/10 font-mono text-sm font-semibold text-accent">
              03
            </div>
            <h3 className="mt-4 font-medium text-fg">Change Management</h3>
            <p className="mt-2 text-muted">
              Technology is only half the equation. We enable your teams through 
              training, communication, and adoption strategies that ensure lasting change.
            </p>
          </div>
          <div>
            <div className="flex size-10 items-center justify-center rounded-lg bg-accent/10 font-mono text-sm font-semibold text-accent">
              04
            </div>
            <h3 className="mt-4 font-medium text-fg">Continuous Optimization</h3>
            <p className="mt-2 text-muted">
              Post-deployment, we monitor performance, optimize models, and evolve 
              solutions based on real-world feedback and changing business needs.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 p-8 hairline sm:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Let's Discuss Your Transformation
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Schedule a confidential consultation with our enterprise AI experts to 
            explore how we can drive measurable business outcomes for your organization.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/contact">
                Schedule Consultation
                <ArrowUpRight className="size-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/portfolio">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
