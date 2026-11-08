import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import type { ServiceId } from "@/lib/site";

type Step = {
  id: string;
  question: string;
  options: {
    label: string;
    next?: string;
    result?: { serviceId?: ServiceId; concern?: string; hint: string };
  }[];
};

const STEPS: Record<string, Step> = {
  start: {
    id: "start",
    question: "Where does the friction show up most?",
    options: [
      { label: "WhatsApp / chat / front desk", next: "chat" },
      { label: "Data, files, or month-end", next: "data" },
      { label: "Leads and follow-up", next: "leads" },
      { label: "I am not sure yet", next: "unsure" },
    ],
  },
  chat: {
    id: "chat",
    question: "What is the chat problem?",
    options: [
      {
        label: "Same questions every day",
        result: {
          serviceId: "chatbots",
          concern: "whatsapp-same-questions",
          hint: "A scoped helper with human handoff.",
        },
      },
      {
        label: "Interest dies in unread threads",
        result: {
          serviceId: "pipeline",
          concern: "enquiries-die-in-chat",
          hint: "Capture, owner, and ageing — not a full CRM.",
        },
      },
    ],
  },
  data: {
    id: "data",
    question: "Which is closest?",
    options: [
      {
        label: "We retype between tools",
        result: {
          serviceId: "automation",
          concern: "retype-data-daily",
          hint: "One process end-to-end with visible exceptions.",
        },
      },
      {
        label: "Paper and PDFs pile up",
        result: {
          serviceId: "documents",
          concern: "invoices-pile-up",
          hint: "One document type into a sheet or system.",
        },
      },
      {
        label: "Numbers only at month-end",
        result: {
          serviceId: "dashboards",
          concern: "numbers-at-month-end",
          hint: "One agreed view on a useful rhythm.",
        },
      },
    ],
  },
  leads: {
    id: "leads",
    question: "What breaks after the enquiry?",
    options: [
      {
        label: "Quotes and jobs have no owner",
        result: {
          serviceId: "pipeline",
          concern: "enquiries-die-in-chat",
          hint: "A simple pipeline with ageing.",
        },
      },
      {
        label: "Website does not convert",
        result: {
          serviceId: "websites",
          concern: "website-does-not-convert",
          hint: "Focused pages and a working intake path.",
        },
      },
    ],
  },
  unsure: {
    id: "unsure",
    question: "Useful next step",
    options: [
      {
        label: "Map what to fix first",
        result: {
          serviceId: "discovery",
          concern: "dont-know-what-to-fix",
          hint: "Ranked opportunities and a first-build recommendation.",
        },
      },
      {
        label: "Just send a private brief",
        result: {
          hint: "Describe the friction — we map it to a category.",
        },
      },
    ],
  },
};

export function GuidedChooser() {
  const [stepId, setStepId] = useState("start");
  const [result, setResult] = useState<
    | { serviceId?: ServiceId; concern?: string; hint: string }
    | null
  >(null);

  const step = STEPS[stepId] ?? STEPS.start;

  function reset() {
    setStepId("start");
    setResult(null);
  }

  if (result) {
    return (
      <div className="rounded-2xl bg-surface/80 p-6 sm:p-8">
        <p className="type-label text-accent">Suggested path</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{result.hint}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {result.serviceId ? (
            <Link
              to="/services/$slug"
              params={{ slug: result.serviceId }}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-fg"
            >
              Open service
              <ArrowRight className="size-3.5" />
            </Link>
          ) : null}
          {result.concern ? (
            <Link
              to="/concerns/$slug"
              params={{ slug: result.concern }}
              className="inline-flex items-center gap-1.5 rounded-full bg-raised px-4 py-2 text-xs font-semibold text-fg"
            >
              View concern
            </Link>
          ) : null}
          <Link
            to="/brief"
            search={{
              ...(result.serviceId ? { service: result.serviceId } : {}),
              ...(result.concern ? { concern: result.concern } : {}),
            }}
            className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 px-4 py-2 text-xs font-semibold text-accent"
          >
            Private brief
          </Link>
          <button
            type="button"
            onClick={reset}
            className="text-xs text-subtle hover:text-fg"
          >
            Start over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-surface/80 p-6 sm:p-8">
      <p className="type-label text-accent">Guided path</p>
      <h2 className="mt-2 font-display text-xl font-semibold tracking-tight sm:text-2xl">
        {step.question}
      </h2>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {step.options.map((opt) => (
          <li key={opt.label}>
            <button
              type="button"
              onClick={() => {
                if (opt.result) setResult(opt.result);
                else if (opt.next) setStepId(opt.next);
              }}
              className="flex w-full items-center justify-between rounded-xl bg-raised/80 px-4 py-3 text-left text-sm text-fg transition-colors hover:bg-raised hover:text-accent"
            >
              <span>{opt.label}</span>
              <ArrowRight className="size-3.5 shrink-0 opacity-50" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
