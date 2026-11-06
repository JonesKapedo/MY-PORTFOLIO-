import { Link } from "@tanstack/react-router";
import { COMPANY } from "@/lib/site";

const YEAR = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="relative z-10 shrink-0 border-t border-line/60 bg-canvas/50 backdrop-blur-sm">
      <div className="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-1 px-5 py-2.5 text-[11px] text-subtle sm:px-8 lg:px-10 xl:px-14">
        <p>
          © {YEAR} {COMPANY.name}
          <span className="mx-2 text-line">·</span>
          <span className="text-accent">{COMPANY.subtitle}</span>
        </p>
        <p className="flex flex-wrap items-center gap-x-4">
          <Link to="/company" className="hover:text-fg">
            Company
          </Link>
          <a href={`mailto:${COMPANY.email}`} className="hover:text-fg">
            Contact
          </a>
        </p>
      </div>
    </footer>
  );
}
