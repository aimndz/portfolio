import Link from "next/link";

import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-border text-secondary mt-auto border-t pt-6 pb-6 font-mono text-[11px]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {profile.name}</p>
        <div className="flex flex-wrap gap-x-3 gap-y-2 uppercase">
          {profile.socials.map((link, index) => (
            <div className="flex items-center gap-x-3" key={link.href}>
              {index > 0 ? (
                <span className="text-muted-foreground" aria-hidden="true">
                  /
                </span>
              ) : null}
              <Link
                className="hover:text-foreground transition-colors"
                href={link.href}
                target="_blank"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
