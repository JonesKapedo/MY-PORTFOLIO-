import { Link } from "@tanstack/react-router";
import { COMPANY, NAV } from "@/lib/site";

const YEAR = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-lg font-semibold">{COMPANY.name}</p>
          <p className="mt-1 text-[10px] tracking-[0.14em] text-accent uppercase">
            {COMPANY.subtitle}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Automation Services. Scope first. Build second.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
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
              <li>
                <Link
                  to="/company"
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  Company
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest text-subtle uppercase">
              Contact
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
            © {YEAR} {COMPANY.name}. All rights reserved.
          </p>
          <p>If it isn’t listed, describe it.</p>
        </div>
      </div>
    </footer>
  );
}
