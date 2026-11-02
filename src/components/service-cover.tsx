import type { ReactNode } from "react";
import type { ServiceId } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  id: ServiceId;
  name: string;
  className?: string;
  size?: "card" | "hero";
};

const gold = "#c9a227";
const mute = "#2a2a2a";

/** Gold-on-black cover art — fully inline so deploys never depend on missing /public files. */
export function ServiceCover({ id, name, className, size = "card" }: Props) {
  const h = size === "hero" ? "h-32 sm:h-40" : "h-28";
  const art = ART[id] ?? ART.discovery;

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#080808] ring-1 ring-white/5",
        h,
        className,
      )}
      role="img"
      aria-label={name}
    >
      <svg
        viewBox="0 0 320 140"
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id={`cover-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={gold} stopOpacity="0.32" />
            <stop offset="100%" stopColor={gold} stopOpacity="0.04" />
          </linearGradient>
        </defs>
        <rect width="320" height="140" fill="#080808" />
        <rect width="320" height="140" fill={`url(#cover-${id})`} />
        {art}
      </svg>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}

const ART: Record<ServiceId, ReactNode> = {
  discovery: (
    <>
      <circle cx="90" cy="70" r="32" stroke={gold} strokeWidth="2" fill="none" />
      <circle cx="90" cy="70" r="8" fill={gold} />
      <path d="M112 92 L150 128" stroke={gold} strokeWidth="4" strokeLinecap="round" />
      <rect x="190" y="45" width="100" height="8" rx="2" fill={mute} />
      <rect x="190" y="62" width="70" height="8" rx="2" fill={mute} />
      <rect x="190" y="79" width="90" height="8" rx="2" fill={gold} opacity="0.45" />
    </>
  ),
  websites: (
    <>
      <rect x="40" y="28" width="140" height="90" rx="6" stroke={gold} strokeWidth="2" fill="none" />
      <rect x="40" y="28" width="140" height="16" fill={mute} />
      <circle cx="52" cy="36" r="3" fill={gold} />
      <rect x="55" y="55" width="50" height="40" rx="2" fill={mute} />
      <rect x="115" y="55" width="50" height="18" rx="2" fill={gold} opacity="0.4" />
      <rect x="200" y="40" width="80" height="70" rx="8" stroke={gold} strokeWidth="1.5" fill="none" />
    </>
  ),
  chatbots: (
    <>
      <rect x="50" y="35" width="100" height="55" rx="12" fill={mute} stroke={gold} strokeWidth="1.5" />
      <circle cx="75" cy="62" r="4" fill={gold} />
      <circle cx="95" cy="62" r="4" fill={gold} />
      <circle cx="115" cy="62" r="4" fill={gold} />
      <path d="M70 90 L60 110 L90 90" fill={mute} stroke={gold} strokeWidth="1" />
      <rect x="170" y="50" width="90" height="40" rx="10" fill="none" stroke={gold} strokeWidth="1.5" opacity="0.5" />
    </>
  ),
  automation: (
    <>
      <path d="M40 70 H100 L120 40 H180 L200 70 H280" stroke={gold} strokeWidth="2.5" fill="none" strokeLinejoin="round" />
      <circle cx="100" cy="70" r="6" fill={gold} />
      <circle cx="180" cy="70" r="6" fill={gold} />
      <circle cx="120" cy="40" r="5" fill={mute} stroke={gold} />
    </>
  ),
  documents: (
    <>
      <rect x="60" y="25" width="70" height="95" rx="4" stroke={gold} strokeWidth="2" fill="none" />
      <path d="M105 25 V50 H130" stroke={gold} strokeWidth="2" fill="none" />
      <rect x="72" y="60" width="46" height="4" fill={mute} />
      <rect x="72" y="72" width="40" height="4" fill={mute} />
      <rect x="72" y="84" width="46" height="4" fill={gold} opacity="0.45" />
      <rect x="160" y="45" width="100" height="12" rx="2" fill={mute} />
      <rect x="160" y="65" width="80" height="12" rx="2" fill={mute} />
    </>
  ),
  "ai-knowledge": (
    <>
      <circle cx="120" cy="70" r="36" stroke={gold} strokeWidth="1.5" fill="none" opacity="0.4" />
      <circle cx="120" cy="70" r="22" stroke={gold} strokeWidth="2" fill="none" />
      <circle cx="120" cy="70" r="6" fill={gold} />
      <path d="M120 34 V48 M120 92 V106 M84 70 H98 M142 70 H156" stroke={gold} strokeWidth="2" />
    </>
  ),
  dashboards: (
    <>
      <rect x="40" y="30" width="240" height="90" rx="4" stroke={mute} strokeWidth="2" fill="none" />
      <rect x="55" y="90" width="24" height="20" fill={gold} opacity="0.7" />
      <rect x="90" y="70" width="24" height="40" fill={gold} opacity="0.5" />
      <rect x="125" y="55" width="24" height="55" fill={gold} />
      <path d="M200 95 L220 60 L245 80 L270 50" stroke={gold} strokeWidth="2" fill="none" />
    </>
  ),
  inbox: (
    <>
      <path d="M50 45 H250 L270 70 V110 H50 V45 Z" stroke={gold} strokeWidth="2" fill="none" />
      <path d="M50 45 L160 85 L270 45" stroke={gold} strokeWidth="2" fill="none" />
    </>
  ),
  booking: (
    <>
      <rect x="70" y="30" width="160" height="95" rx="6" stroke={gold} strokeWidth="2" fill="none" />
      <rect x="70" y="30" width="160" height="22" fill={mute} />
      <rect x="90" y="62" width="12" height="10" rx="1" fill={gold} />
      <rect x="122" y="62" width="12" height="10" rx="1" fill={mute} />
      <rect x="154" y="76" width="12" height="10" rx="1" fill={gold} opacity="0.5" />
      <rect x="186" y="90" width="12" height="10" rx="1" fill={mute} />
    </>
  ),
  pipeline: (
    <>
      <rect x="50" y="35" width="70" height="80" rx="4" stroke={gold} strokeWidth="1.5" fill="none" />
      <rect x="58" y="48" width="54" height="14" rx="2" fill={gold} opacity="0.45" />
      <rect x="135" y="35" width="70" height="80" rx="4" stroke={gold} strokeWidth="1.5" fill="none" opacity="0.85" />
      <rect x="143" y="48" width="54" height="14" rx="2" fill={mute} />
      <rect x="220" y="35" width="70" height="80" rx="4" stroke={gold} strokeWidth="1.5" fill="none" opacity="0.65" />
    </>
  ),
  alerts: (
    <>
      <path d="M160 30 C175 30 190 50 190 70 L200 95 H120 L130 70 C130 50 145 30 160 30 Z" stroke={gold} strokeWidth="2" fill="none" />
      <circle cx="160" cy="108" r="8" fill={gold} />
      <circle cx="210" cy="40" r="10" fill={gold} opacity="0.35" />
    </>
  ),
  onboarding: (
    <>
      <circle cx="90" cy="55" r="18" stroke={gold} strokeWidth="2" fill="none" />
      <path d="M60 110 C60 85 120 85 120 110" stroke={gold} strokeWidth="2" fill="none" />
      <path d="M150 50 H260" stroke={mute} strokeWidth="3" />
      <circle cx="170" cy="50" r="8" fill={gold} />
      <circle cx="210" cy="50" r="8" fill={mute} stroke={gold} />
      <circle cx="250" cy="50" r="8" fill={mute} stroke={gold} />
    </>
  ),
  integrations: (
    <>
      <circle cx="90" cy="70" r="28" stroke={gold} strokeWidth="2" fill="none" />
      <circle cx="210" cy="70" r="28" stroke={gold} strokeWidth="2" fill="none" />
      <path d="M118 70 H182" stroke={gold} strokeWidth="3" strokeLinecap="round" />
      <circle cx="150" cy="70" r="6" fill={gold} />
    </>
  ),
  "internal-forms": (
    <>
      <rect x="80" y="25" width="160" height="100" rx="6" stroke={gold} strokeWidth="2" fill="none" />
      <rect x="100" y="45" width="120" height="10" rx="2" fill={mute} />
      <rect x="100" y="65" width="120" height="10" rx="2" fill={mute} />
      <rect x="100" y="85" width="60" height="20" rx="3" fill={gold} opacity="0.55" />
    </>
  ),
  reminders: (
    <>
      <circle cx="150" cy="70" r="40" stroke={gold} strokeWidth="2" fill="none" />
      <circle cx="150" cy="70" r="4" fill={gold} />
      <path d="M150 40 V70 L175 85" stroke={gold} strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  catalogs: (
    <>
      <rect x="50" y="40" width="60" height="70" rx="4" stroke={gold} strokeWidth="1.5" fill="none" />
      <rect x="120" y="40" width="60" height="70" rx="4" stroke={gold} strokeWidth="1.5" fill={mute} opacity="0.5" />
      <rect x="190" y="40" width="60" height="70" rx="4" stroke={gold} strokeWidth="1.5" fill="none" />
      <rect x="60" y="55" width="40" height="25" fill={gold} opacity="0.35" />
    </>
  ),
  "handover-kits": (
    <>
      <path d="M80 30 H150 L170 50 V120 H80 Z" stroke={gold} strokeWidth="2" fill="none" />
      <path d="M150 30 V50 H170" stroke={gold} strokeWidth="2" />
      <rect x="95" y="65" width="50" height="4" fill={mute} />
      <path d="M200 50 L240 70 L200 90 Z" fill={gold} opacity="0.4" stroke={gold} />
    </>
  ),
};
