import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { COMPANY } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: `Terms of Service — ${COMPANY.name}` },
      {
        name: "description",
        content: `Terms governing use of the ${COMPANY.name} website and engagement for automation services.`,
      },
    ],
  }),
});

function TermsPage() {
  return (
    <PageFrame className="page-enter !overflow-y-auto overscroll-contain pb-14">
      <article className="mx-auto w-full max-w-3xl space-y-8 text-sm leading-relaxed text-muted">
        <header>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-xs text-subtle">
            Last updated: 6 November 2026 · Operated by {COMPANY.name}
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-fg">1. Acceptance</h2>
          <p>
            By accessing this website or submitting a brief, you agree to these
            Terms and our{" "}
            <Link to="/privacy" className="text-accent hover:underline">
              Privacy Policy
            </Link>
            . If you do not agree, do not use the site or submit information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-fg">2. Services described</h2>
          <p>
            Content on this site describes automation and related professional
            services offered by {COMPANY.name}. Descriptions, timeframes, and
            starting prices are indicative. Binding commercial terms exist only
            in a written proposal or contract that you approve.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-fg">3. Briefs and proposals</h2>
          <p>
            Submitting a brief is free and creates no obligation to purchase.
            We may decline work that falls outside our practice. Any deposit or
            payment is due only after you approve a written proposal specifying
            scope, fees, and timeline.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-fg">4. Acceptable use</h2>
          <p>
            You agree not to misuse the site: no automated scraping that impairs
            service, no submission of unlawful content, and no attempt to
            compromise security or other users’ data.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-fg">5. Intellectual property</h2>
          <p>
            Site design, copy, and brand marks belong to {COMPANY.name} or its
            licensors. Deliverables from paid engagements are governed by the
            applicable proposal (typically client ownership of commissioned work
            after full payment, unless stated otherwise).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-fg">6. No warranty on site content</h2>
          <p>
            The website is provided “as is.” We aim for accuracy but do not
            warrant uninterrupted access or that every example applies to your
            situation. Professional advice is given only under a formal
            engagement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-fg">7. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by applicable law, {COMPANY.name} is
            not liable for indirect or consequential loss arising from use of
            this website. Liability under a paid engagement is limited as set out
            in that engagement’s written terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-fg">8. Governing law</h2>
          <p>
            These Terms are governed by the laws of Kenya, without prejudice to
            mandatory consumer protections that may apply in your jurisdiction.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-fg">9. Contact</h2>
          <p>
            Questions about these Terms:{" "}
            <a href={`mailto:${COMPANY.email}`} className="text-accent hover:underline">
              {COMPANY.email}
            </a>
            {" "}
            · {COMPANY.phone}
          </p>
        </section>
      </article>
    </PageFrame>
  );
}
