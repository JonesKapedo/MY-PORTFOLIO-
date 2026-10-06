import { Link } from "@tanstack/react-router";
import { TurbineMark } from "@/components/mark";
import { COMPANY, NAV } from "@/lib/site";

// Evaluated once at module scope, on the server and again in the browser. Both
// reads happen from the same bundle, so they agree unless a deploy straddles
// New Year — in which case the page still hydrates and simply shows the build's
// year until the next deploy, which beats a hydration mismatch.
const YEAR = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2">
            <TurbineMark className="size-5" />
            <p className="font-display text-lg font-semibold">{COMPANY.name}</p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            AI and automation studio in {COMPANY.location}. We design systems
            that take repetition off the floor so operators can run the work
            that still needs a person.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <p className="text-xs font-medium tracking-widest text-subtle uppercase">
              Navigate
            </p>
            <ul className="mt-3 space-y-2">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest text-subtle uppercase">
              Studio
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>{COMPANY.location}</li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="break-all transition-colors hover:text-fg"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6">
          {/* Rendered from the clock on both server and client so the two never
              disagree (and a stale build can't pin last year's date). */}
          <p>
            © {YEAR} {COMPANY.name}. All rights reserved.
          </p>
          <p>Built for operators in the Rift.</p>
        </div>
      </div>
    </footer>
  );
}
