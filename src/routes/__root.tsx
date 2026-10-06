import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/site-shell";
import { AuthProvider } from "@/lib/auth/provider";
import { COMPANY } from "@/lib/site";
import appCss from "../styles.css?url";

const APP_NAME = COMPANY.name;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${APP_NAME} — AI & Automation Studio, Naivasha` },
      {
        name: "description",
        content:
          "Great Turbinez is an AI and automation studio in Naivasha, Kenya. We design and install systems that take repetition off the floor for farms, lodges, desks and operations.",
      },
      { name: "theme-color", content: "#090908" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Outfit:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument() {
  return (
    <html lang="en" suppressHydrationWarning className="antialiased">
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <SiteShell>
            <Outlet />
          </SiteShell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-medium tracking-widest text-accent uppercase">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">
        This page is not on the map.
      </h1>
      <p className="mt-3 text-sm text-muted">
        The route you asked for does not exist. Head back to the homepage and
        pick a live path.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex h-11 items-center rounded-md bg-fg px-5 text-sm font-medium text-accent-fg"
      >
        Back to homepage
      </Link>
    </div>
  );
}
