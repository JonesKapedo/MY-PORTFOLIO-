import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { BackgroundAtmosphere } from "@/components/background-atmosphere";
import { SiteFooter } from "@/components/site-footer";
import { SiteSidebar } from "@/components/site-sidebar";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-dvh max-h-dvh overflow-hidden bg-canvas text-fg">
      <BackgroundAtmosphere />
      <a
        href="#main"
        className="sr-only rounded-md bg-fg px-4 py-2 text-sm font-medium text-accent-fg focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50"
      >
        Skip to content
      </a>
      <div className="relative z-10 flex h-full min-h-0 w-full overflow-hidden">
        <SiteSidebar />
        <div className="flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden md:pl-20">
          <main
            id="main"
            className="flex min-h-0 flex-1 flex-col overflow-hidden pb-20 md:pb-0"
          >
            {children}
          </main>
          <SiteFooter />
        </div>
      </div>
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "var(--color-raised)",
            border: "1px solid var(--color-line)",
            color: "var(--color-fg)",
            boxShadow: "var(--shadow-elevated)",
          },
        }}
      />
    </div>
  );
}
