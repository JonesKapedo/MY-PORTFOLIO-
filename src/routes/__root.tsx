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
import { ThemeProvider } from "@/lib/theme";
import appCss from "../styles.css?url";
import extrasCss from "../styles-extras.css?url";

/** Always boot dark — no light chrome / system preference override. */
const themeBootScript = `(function(){try{var r=document.documentElement;r.classList.remove("light");r.classList.add("dark");r.style.colorScheme="dark";localStorage.setItem("gt-theme","dark");}catch(e){document.documentElement.classList.add("dark");}})();
`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, viewport-fit=cover",
      },
      { title: `${COMPANY.name} — ${COMPANY.subtitle}` },
      {
        name: "description",
        content:
          "GREAT TURBINEZ — AI & Automation for Kenyan operators. Scoped process automation, written proposal first, deposit only after you approve.",
      },
      { name: "theme-color", content: "#030303" },
      { name: "color-scheme", content: "dark" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: extrasCss },
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
    scripts: [{ children: themeBootScript }],
  }),
  component: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument() {
  return (
    <html lang="en" suppressHydrationWarning className="dark antialiased">
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <ThemeProvider>
          <AuthProvider>
            <SiteShell>
              <Outlet />
            </SiteShell>
          </AuthProvider>
        </ThemeProvider>
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
        Head back and pick a live path.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex h-11 items-center rounded-md bg-accent px-5 text-sm font-medium text-accent-fg"
      >
        Home
      </Link>
    </div>
  );
}
