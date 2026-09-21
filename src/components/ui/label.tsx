import type { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Label({
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "text-xs font-medium tracking-widest text-muted uppercase",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
