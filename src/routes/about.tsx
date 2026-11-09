import { createFileRoute, redirect } from "@tanstack/react-router";

/** Canonical About content lives at `/company`. */
export const Route = createFileRoute("/about")({
  beforeLoad: () => {
    throw redirect({ to: "/company" });
  },
});
