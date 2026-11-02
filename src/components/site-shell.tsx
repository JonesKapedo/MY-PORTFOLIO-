import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { LogoCircle } from "@/components/logo-circle";
import { SiteFooter } from "@/components/site-footer";
import { SiteSidebar } from "@/components/site-sidebar";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh bg-canvas text-fg">
      <a
        href="#main"
        className="sr-only rounded-md bg-fg px-4 py-2 text-sm font-medium text-accent-fg focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50"
      >
        Skip to content
      </a>
      <SiteSidebar />
      <div className="flex min-h-dvh min-w-0 flex-1 flex-col">
        <main id="main" className="flex-1 pt-14 md:pt-0">
          {children}
        </main>
        <SiteFooter />
      </div>
      <LogoCircle />
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "var(--color-raised)",
            border: "1px solid var(--color-line)",
            color: "var(--color-fg)",
          },
        }}
      />
    </div>
  );
}
