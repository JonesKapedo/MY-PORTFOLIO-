import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Globe } from "lucide-react";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/site";

export const Route = createFileRoute("/contact")(({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: `Contact Us — ${COMPANY.name}` },
      {
        name: "description",
        content:
          "Connect with our enterprise AI consulting team to discuss your transformation journey. Schedule a strategic consultation or reach out to explore partnership opportunities.",
      },
    ],
  }),
});

function ContactPage() {
  return (
    <PageFrame className="page-enter">
      <Eyebrow>Get in Touch</Eyebrow>
      <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl">
        Let's Transform
        <br />
        Your Enterprise.
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Whether you're exploring AI strategy, planning a transformation program, 
        or seeking ongoing support—our team is ready to partner with you. Schedule 
        a confidential consultation to discuss your unique challenges and opportunities.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <section className="rounded-xl bg-surface p-8 hairline">
          <h2 className="text-2xl font-semibold tracking-tight">
            Schedule a Consultation
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Our enterprise consulting team will work with you to understand your 
            business objectives, assess opportunities, and design a tailored approach 
            to AI transformation.
          </p>

          <form className="mt-8 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-fg"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="mt-2 w-full rounded-lg bg-raised px-4 py-2.5 text-sm hairline focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-fg"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="mt-2 w-full rounded-lg bg-raised px-4 py-2.5 text-sm hairline focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-fg"
              >
                Business Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 w-full rounded-lg bg-raised px-4 py-2.5 text-sm hairline focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-fg"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="mt-2 w-full rounded-lg bg-raised px-4 py-2.5 text-sm hairline focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-fg"
              >
                Job Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="mt-2 w-full rounded-lg bg-raised px-4 py-2.5 text-sm hairline focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label
                htmlFor="interest"
                className="block text-sm font-medium text-fg"
              >
                Area of Interest
              </label>
              <select
                id="interest"
                name="interest"
                className="mt-2 w-full rounded-lg bg-raised px-4 py-2.5 text-sm hairline focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Select a service</option>
                <option value="strategy">AI Strategy & Roadmap</option>
                <option value="transformation">Enterprise AI Transformation</option>
                <option value="intelligent-automation">Intelligent Process Automation</option>
                <option value="ai-solutions">Custom AI Solutions</option>
                <option value="data-intelligence">Data & Analytics Intelligence</option>
                <option value="managed-services">AI Managed Services & Support</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-fg"
              >
                Tell Us About Your Challenge
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 w-full rounded-lg bg-raised px-4 py-2.5 text-sm hairline focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Describe your business objectives, current challenges, or specific questions..."
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Submit Inquiry
            </Button>

            <p className="text-xs text-subtle">
              By submitting this form, you agree to our privacy policy. We'll use 
              your information solely to respond to your inquiry and explore potential 
              partnership opportunities.
            </p>
          </form>
        </section>

        <aside className="space-y-6">
          <section className="rounded-xl bg-surface p-6 hairline">
            <h3 className="text-lg font-semibold">Global Presence</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {COMPANY.name} serves enterprise clients across North America, Europe, 
              Asia-Pacific, and the Middle East. Our distributed teams deliver 
              seamless support across time zones.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Globe className="mt-0.5 size-5 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-medium">Headquarters</p>
                  <p className="mt-1 text-sm text-muted">{COMPANY.headquarters}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-medium">Enterprise Sales</p>
                  <a
                    href={`mailto:${COMPANY.salesEmail}`}
                    className="mt-1 block text-sm text-accent hover:underline"
                  >
                    {COMPANY.salesEmail}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="mt-1 text-sm text-muted">{COMPANY.phone}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-xl bg-surface p-6 hairline">
            <h3 className="text-lg font-semibold">What to Expect</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                <span>Response within 24 business hours</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                <span>Initial discovery call (30-45 minutes)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                <span>Tailored proposal and engagement plan</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                <span>Transparent pricing and timeline</span>
              </li>
            </ul>
          </section>

          <section className="rounded-xl bg-surface p-6 hairline">
            <h3 className="text-lg font-semibold">Existing Clients</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              For support inquiries, system issues, or account management, please 
              contact your dedicated account team or reach out to:
            </p>
            <a
              href={`mailto:${COMPANY.supportEmail}`}
              className="mt-3 block text-sm font-medium text-accent hover:underline"
            >
              {COMPANY.supportEmail}
            </a>
          </section>
        </aside>
      </div>
    </PageFrame>
  );
}
