import { Link } from "@tanstack/react-router";
import { COMPANY } from "@/lib/site";

const YEAR = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="shrink-0 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2 text-[11px] text-subtle sm:px-6">
        <p>
          © {YEAR} {COMPANY.name}
          <span className="mx-2 text-line">·</span>
          <span className="text-accent">{COMPANY.subtitle}</span>
        </p>
        <p className="flex flex-wrap items-center gap-x-3">
          <Link to="/company" className="hover:text-fg">
            Company
          </Link>
          <a href={`mailto:${COMPANY.email}`} className="hover:text-fg">
            Contact
          </a>
          <span>If it isn’t listed, describe it.</span>
        </p>
      </div>
    </footer>
  );
}
