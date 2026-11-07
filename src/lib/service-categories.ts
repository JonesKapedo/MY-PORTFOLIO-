import type { ServiceId } from "./services-catalog";

export type ServiceCategory = {
  id: string;
  label: string;
  description: string;
  serviceIds: ServiceId[];
};

/** Browse order for the services catalogue. */
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "orient",
    label: "Orient",
    description: "Clarify what to automate first and what it should cost.",
    serviceIds: ["discovery"],
  },
  {
    id: "presence",
    label: "Presence & intake",
    description: "Sites, portals, and paths that turn attention into work.",
    serviceIds: ["websites"],
  },
  {
    id: "conversations",
    label: "Conversations",
    description: "WhatsApp, chat, and inbox flows that answer and route.",
    serviceIds: ["chatbots", "inbox"],
  },
  {
    id: "process",
    label: "Process automation",
    description: "Repeated paths, documents, and connections between tools.",
    serviceIds: [
      "automation",
      "documents",
      "integrations",
      "internal-forms",
      "reminders",
    ],
  },
  {
    id: "knowledge",
    label: "Knowledge",
    description: "Answers from your materials — with a human escape path.",
    serviceIds: ["ai-knowledge"],
  },
  {
    id: "visibility",
    label: "Visibility",
    description: "Dashboards, reports, and alerts when something needs a person.",
    serviceIds: ["dashboards", "alerts"],
  },
  {
    id: "growth-ops",
    label: "Growth operations",
    description: "Booking, pipeline, onboarding, catalogues, and handovers.",
    serviceIds: ["booking", "pipeline", "onboarding", "catalogs", "handover-kits"],
  },
];
