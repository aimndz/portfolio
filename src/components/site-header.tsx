"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projs", href: "/projects" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const contactHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    "Portfolio inquiry",
  )}`;

  return (
    <header className="sticky top-0 z-50 bg-background mx-auto grid w-full max-w-[840px] grid-cols-3 border-x border-border font-mono text-xs uppercase text-secondary">
      {navItems.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex h-12 items-center justify-center border-r border-b border-border transition-colors hover:bg-muted hover:text-foreground",
              isActive && "border-b-foreground text-foreground",
            )}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        );
      })}
      <Button
        asChild
        className="h-12 rounded-none border-0 bg-primary px-2 text-xs text-primary-foreground hover:bg-primary/90"
      >
        <Link
          aria-label={`Email ${profile.name}`}
          href={contactHref}
          rel="noopener noreferrer"
        >
          <span className="hidden sm:inline">Contact Me</span>
          <span className="sm:hidden">Contact</span>
          <ArrowUpRight aria-hidden="true" className="size-3.5" />
        </Link>
      </Button>
    </header>
  );
}
