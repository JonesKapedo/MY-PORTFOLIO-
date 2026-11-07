import { Moon } from "lucide-react";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

/**
 * Site is dark-only. Control remains for layout consistency but does not
 * switch to light (chrome / light backgrounds removed site-wide).
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
  return (
    <button
      type="button"
      aria-label="Dark theme (locked)"
      title="Dark theme"
      disabled
      className={cn(
        "group flex size-10 items-center justify-center rounded-full text-accent opacity-90",
        className,
      )}
    >
      <Moon className="size-4 rotate-0 fill-accent text-accent" strokeWidth={1.5} />
    </button>
  );
}
