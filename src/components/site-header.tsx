"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const contactHref = mounted
    ? `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio inquiry")}`
    : "#";

  return (
    <header className="bg-background/95 backdrop-blur-xs border-border text-secondary sticky top-0 z-50 mx-auto grid w-full max-w-210 grid-cols-3 border-x font-mono text-xs uppercase">
      {navItems.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "border-border hover:bg-muted hover:text-foreground flex h-12 items-center justify-center border-r border-b transition-colors",
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
        className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-none border-0 px-2 text-xs"
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
