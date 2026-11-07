import { Moon } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

/** Crescent moon control — switches pitch-black ↔ light. */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggle } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      title={isLight ? "Dark" : "Light"}
      className={cn(
        "group flex size-10 items-center justify-center rounded-full text-subtle transition-colors duration-200 hover:text-accent",
        className,
      )}
    >
      <Moon
        className={cn(
          "size-4 transition-transform duration-300 ease-out",
          isLight ? "rotate-[-25deg] fill-accent text-accent" : "rotate-0",
        )}
        strokeWidth={1.5}
      />
    </button>
  );
}
