import { createFileRoute, redirect } from "@tanstack/react-router";

/** Company story now lives on the intro page at `/`. */
export const Route = createFileRoute("/company")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
