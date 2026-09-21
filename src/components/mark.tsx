import { cn } from "@/lib/utils";

export function TurbineMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("size-7 text-accent", className)}
    >
      <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeWidth="1" />
      <path
        d="M16 16 L16 5.2 A10.8 10.8 0 0 1 25.4 21.4 Z"
        fill="currentColor"
        opacity="0.95"
      />
      <path
        d="M16 16 L25.4 21.4 A10.8 10.8 0 0 1 6.6 21.4 Z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M16 16 L6.6 21.4 A10.8 10.8 0 0 1 16 5.2 Z"
        fill="currentColor"
        opacity="0.28"
      />
      <circle cx="16" cy="16" r="2.15" fill="currentColor" />
    </svg>
  );
}
