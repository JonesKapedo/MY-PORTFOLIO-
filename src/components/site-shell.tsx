import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { BackgroundAtmosphere } from "@/components/background-atmosphere";
import { FixedBriefRail } from "@/components/fixed-brief-rail";
import { PageTransition } from "@/components/page-transition";
import { SiteFooter } from "@/components/site-footer";
import { SiteSidebar } from "@/components/site-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";

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
      <div className="relative z-10 flex h-full min-h-0 w-full min-w-0 overflow-hidden">
        <SiteSidebar />
        <div className="flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden md:pl-16 lg:pl-20">
          <main
            id="main"
            className="flex min-h-0 min-w-0 flex-1 flex-col overflow-x-hidden overflow-y-hidden pb-[4.75rem] md:pb-0"
          >
            <PageTransition>{children}</PageTransition>
          </main>
          <SiteFooter />
        </div>
      </div>
      <FixedBriefRail />
      <ThemeToggle className="fixed top-3 right-3 z-50 size-10 rounded-full bg-surface/40 text-muted backdrop-blur-sm hover:text-accent sm:size-11 md:top-5 md:right-5" />
      <Toaster
        theme="dark"
        position="bottom-center"
        className="toaster-safe"
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
