import { Link } from "@tanstack/react-router";
import { TurbineMark } from "@/components/mark";
import { COMPANY, NAV } from "@/lib/site";

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
          <p>
            © 2026 {COMPANY.name}. All rights reserved.
          </p>
          <p>Built for operators in the Rift.</p>
        </div>
      </div>
    </footer>
  );
}
