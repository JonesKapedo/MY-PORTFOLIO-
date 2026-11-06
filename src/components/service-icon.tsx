import {
  Bell,
  BookOpen,
  CalendarDays,
  ClipboardList,
  FileStack,
  FolderKanban,
  FormInput,
  GitBranch,
  LayoutDashboard,
  Link2,
  Mail,
  Package,
  Search,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { ComponentType } from "react";
import type { ServiceId } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Official-style WhatsApp glyph (brand green). */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

type IconProps = { className?: string };

const MAP: Record<
  ServiceId,
  { Icon: ComponentType<IconProps>; tone: string; label: string }
> = {
  discovery: { Icon: Search, tone: "text-accent", label: "Discovery" },
  websites: { Icon: LayoutDashboard, tone: "text-sky-400", label: "Web" },
  chatbots: { Icon: WhatsAppIcon, tone: "text-[#25D366]", label: "WhatsApp" },
  automation: { Icon: Workflow, tone: "text-amber-400", label: "Automation" },
  documents: { Icon: FileStack, tone: "text-orange-400", label: "Documents" },
  "ai-knowledge": { Icon: Sparkles, tone: "text-violet-400", label: "AI" },
  dashboards: {
    Icon: LayoutDashboard,
    tone: "text-emerald-400",
    label: "Dashboards",
  },
  inbox: { Icon: Mail, tone: "text-blue-400", label: "Email" },
  booking: { Icon: CalendarDays, tone: "text-rose-400", label: "Booking" },
  pipeline: { Icon: FolderKanban, tone: "text-cyan-400", label: "Pipeline" },
  alerts: { Icon: Bell, tone: "text-red-400", label: "Alerts" },
  onboarding: { Icon: ClipboardList, tone: "text-teal-400", label: "Onboarding" },
  integrations: { Icon: Link2, tone: "text-indigo-400", label: "Integrations" },
  "internal-forms": { Icon: FormInput, tone: "text-lime-400", label: "Forms" },
  reminders: { Icon: Bell, tone: "text-yellow-400", label: "Reminders" },
  catalogs: { Icon: BookOpen, tone: "text-fuchsia-400", label: "Catalog" },
  "handover-kits": { Icon: Package, tone: "text-stone-400", label: "Handover" },
};

export function ServiceIcon({
  id,
  className,
  size = "md",
}: {
  id: ServiceId;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const entry = MAP[id] ?? MAP.discovery;
  const { Icon, tone } = entry;
  const box =
    size === "lg"
      ? "size-14"
      : size === "sm"
        ? "size-9"
        : "size-11";
  const glyph = size === "lg" ? "size-7" : size === "sm" ? "size-4" : "size-5";

  return (
    <span
      className={cn(
        "service-icon-chip inline-flex items-center justify-center rounded-xl bg-raised/80",
        box,
        tone,
        className,
      )}
      aria-hidden
    >
      <Icon className={glyph} />
    </span>
  );
}

export function serviceIconLabel(id: ServiceId): string {
  return (MAP[id] ?? MAP.discovery).label;
}
