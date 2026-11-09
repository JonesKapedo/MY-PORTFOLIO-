/**
 * Lightweight brief CRM for the marketing site.
 * Stores submissions in localStorage so the operator can review the funnel
 * on this browser without standing up auth/DB. Server durability still
 * comes from FormSubmit / WhatsApp / email.
 */

export type BriefRecord = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  organisation: string;
  service: string;
  serviceId: string;
  concern: string;
  message: string;
  marketingConsent: boolean;
  channel: "form" | "whatsapp-intent";
  status: "submitted" | "replied" | "proposal" | "won" | "lost";
};

const STORAGE_KEY = "gt-brief-crm-v1";
const MAX_RECORDS = 100;

function canUseStorage(): boolean {
  try {
    return typeof window !== "undefined" && !!window.localStorage;
  } catch {
    return false;
  }
}

export function listBriefs(): BriefRecord[] {
  if (!canUseStorage()) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as BriefRecord[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveBrief(
  input: Omit<BriefRecord, "id" | "createdAt" | "status"> &
    Partial<Pick<BriefRecord, "status">>,
): BriefRecord {
  const record: BriefRecord = {
    id: `br_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    status: input.status ?? "submitted",
    name: input.name,
    email: input.email,
    phone: input.phone,
    organisation: input.organisation,
    service: input.service,
    serviceId: input.serviceId,
    concern: input.concern,
    message: input.message,
    marketingConsent: input.marketingConsent,
    channel: input.channel,
  };

  if (!canUseStorage()) return record;

  try {
    const next = [record, ...listBriefs()].slice(0, MAX_RECORDS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* quota / private mode — ignore */
  }

  return record;
}

export function updateBriefStatus(
  id: string,
  status: BriefRecord["status"],
): void {
  if (!canUseStorage()) return;
  try {
    const next = listBriefs().map((b) => (b.id === id ? { ...b, status } : b));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* ignore */
  }
}

export function exportBriefsJson(): string {
  return JSON.stringify(listBriefs(), null, 2);
}

export type BriefConfirmation = {
  record: BriefRecord;
  replySla: string;
};
