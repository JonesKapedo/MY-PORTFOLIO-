import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { Button } from "@/components/ui/button";
import { COMPANY, INDUSTRIES } from "@/lib/site";

export const Route = createFileRoute("/industries")(({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: `Industry Solutions — ${COMPANY.name}` },
      {
        name: "description",
        content:
          "Deep industry expertise across financial services, healthcare, manufacturing, retail, energy, and logistics—delivering AI solutions tailored to your sector's unique challenges.",
      },
    ],
  }),
});

function IndustriesPage() {
  return (
    <PageFrame className="page-enter">
      <Eyebrow>Industry Expertise</Eyebrow>
      <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl">
        Vertical Intelligence.
        <br />
        Horizontal Excellence.
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        We bring deep industry knowledge combined with cross-sector best practices 
        to deliver AI solutions that address your specific regulatory requirements, 
        operational challenges, and competitive dynamics.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {INDUSTRIES.map((industry) => (
          <article
            key={industry.id}
            id={industry.id}
            className="flex scroll-mt-24 flex-col rounded-xl bg-surface p-6 hairline sm:p-7"
          >
            <h2 className="text-2xl font-semibold tracking-tight">
              {industry.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {industry.description}
            </p>
            
            <div className="mt-6 flex-1">
              <p className="text-xs font-medium uppercase tracking-wide text-subtle">
                Key Capabilities
              </p>
              <ul className="mt-3 space-y-2">
                {industry.capabilities.map((capability) => (
                  <li key={capability} className="flex gap-2 text-sm text-fg">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      aria-hidden
                    />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button asChild variant="outline" className="mt-6 w-full">
              <Link to="/contact" search={{ industry: industry.id }}>
                Discuss Your Industry Needs
              </Link>
            </Button>
          </article>
        ))}
      </div>

      <section className="mt-16 rounded-xl bg-raised p-8 hairline sm:p-10">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Cross-Industry Innovation
        </h2>
        <div className="mt-6 grid gap-6 text-sm leading-relaxed md:grid-cols-3">
          <div>
            <h3 className="font-medium text-fg">Regulatory Compliance</h3>
            <p className="mt-2 text-muted">
              We navigate complex regulatory environments—from GDPR and HIPAA to 
              SOX and Basel III—ensuring AI solutions meet industry-specific 
              compliance requirements.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-fg">Domain Expertise</h3>
            <p className="mt-2 text-muted">
              Our consultants bring years of industry experience, understanding 
              your workflows, terminology, and unique challenges from day one.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-fg">Best Practice Transfer</h3>
            <p className="mt-2 text-muted">
              We leverage insights from across sectors, applying proven approaches 
              from adjacent industries to accelerate your competitive advantage.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl bg-surface p-8 hairline">
          <h3 className="text-xl font-semibold">Why Industry Matters</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Generic AI solutions rarely deliver transformative results. Success 
            requires understanding your industry's nuances—regulatory constraints, 
            market dynamics, operational realities, and competitive pressures.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Our teams combine AI expertise with deep vertical knowledge, ensuring 
            solutions that are not just technically sound, but strategically aligned 
            with how your industry operates.
          </p>
        </div>

        <div className="rounded-xl bg-surface p-8 hairline">
          <h3 className="text-xl font-semibold">Beyond These Six</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            While we highlight our deepest expertise areas, we've successfully 
            delivered AI transformations across telecommunications, media, 
            government, education, and professional services.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            If your industry isn't listed, we welcome the conversation. Our 
            methodology adapts to any sector's unique requirements.
          </p>
          <Button asChild variant="outline" className="mt-6">
            <Link to="/contact">
              Discuss Your Sector
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="mt-16 rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 p-8 hairline sm:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Industry-Specific Transformation
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Connect with our industry practice leaders to explore how AI can 
            address your sector's most pressing challenges and opportunities.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link to="/contact">
                Schedule Industry Consultation
                <ArrowUpRight className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
