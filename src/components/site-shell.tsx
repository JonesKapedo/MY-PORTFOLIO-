import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-canvas text-fg">
      {/* First focusable element on the page: lets keyboard users bypass the
          nav straight to the content instead of tabbing through every link. */}
      <a
        href="#main"
        className="sr-only rounded-md bg-fg px-4 py-2 text-sm font-medium text-accent-fg focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
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
