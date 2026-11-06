import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { COMPANY } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${COMPANY.name}` },
      {
        name: "description",
        content: `How ${COMPANY.name} collects, uses, and protects personal data when you use this site or submit a brief.`,
      },
    ],
  }),
});

function PrivacyPage() {
  return (
    <PageFrame className="page-enter !overflow-y-auto overscroll-contain pb-14">
      <article className="mx-auto w-full max-w-3xl space-y-8 text-sm leading-relaxed text-muted">
        <header>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-subtle">
            Last updated: 6 November 2026 · {COMPANY.name}
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-fg">1. Who we are</h2>
          <p>
            {COMPANY.name} ("we") provides automation services and operates this
            website. Contact:{" "}
            <a href={`mailto:${COMPANY.email}`} className="text-accent hover:underline">
              {COMPANY.email}
            </a>
            , {COMPANY.phone}.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-fg">2. Data we collect</h2>
          <p>When you submit a brief or contact us, we may process:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Name, organisation, email, and phone or WhatsApp number</li>
            <li>Message content, service interest, and related context</li>
            <li>Consent choices (privacy and optional marketing)</li>
            <li>Technical data such as browser type and approximate location derived from IP (via hosting or form providers)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-fg">3. Why we process data</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>To respond to briefs and discuss potential engagements</li>
            <li>To send proposals, contracts, and payment instructions you request</li>
            <li>To improve our service and secure the website</li>
            <li>With your optional consent, to send practice updates and invitations</li>
          </ul>
          <p>
            Legal bases include performance of steps prior to a contract, our
            legitimate interest in operating a professional practice, and consent
            where required (including marketing).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-fg">4. Email and processors</h2>
          <p>
            Brief submissions may be delivered via FormSubmit or equivalent form
            email relay to {COMPANY.email}. Those providers process data solely
            to deliver messages. We do not sell personal data.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-fg">5. Retention</h2>
          <p>
            Brief and correspondence records are kept as long as needed for the
            enquiry, engagement, legal, or accounting purposes, then deleted or
            anonymised where practicable.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-fg">6. Your rights</h2>
          <p>
            Depending on applicable law, you may request access, correction,
            deletion, or restriction of your personal data, and withdraw
            marketing consent at any time by emailing {COMPANY.email}.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-fg">7. Security</h2>
          <p>
            We use reasonable technical and organisational measures to protect
            information. No method of transmission over the internet is fully
            secure; please avoid sending highly sensitive credentials in a brief.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-fg">8. Children</h2>
          <p>
            This site is directed at business users. We do not knowingly collect
            data from children under 16.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-fg">9. Changes</h2>
          <p>
            We may update this Policy; the “Last updated” date will change. Material
            changes to marketing practices will be communicated where required.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-fg">10. Related terms</h2>
          <p>
            Use of the site is also governed by our{" "}
            <Link to="/terms" className="text-accent hover:underline">
              Terms of Service
            </Link>
            .
          </p>
        </section>
      </article>
    </PageFrame>
  );
}
