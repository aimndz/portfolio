import { ExternalLink } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projs", href: "#projects" },
];

export function SiteHeader() {
  return (
    <header className="mx-auto grid w-full max-w-[840px] grid-cols-3 border-x border-border font-mono text-xs uppercase text-secondary">
      {navItems.map((item) => (
        <Link
          className="flex h-12 items-center justify-center border-b border-r border-border transition-colors hover:bg-muted hover:text-foreground"
          href={item.href}
          key={item.href}
        >
          {item.label}
        </Link>
      ))}
      <Button
        asChild
        className="h-12 rounded-none border-0 bg-primary px-2 text-xs text-primary-foreground hover:bg-primary/90"
      >
        <Link href={profile.resumeUrl} target="_blank">
          <span className="hidden sm:inline">Contact Me</span>
          <span className="sm:hidden">Contact</span>
          <ExternalLink aria-hidden="true" className="size-3" />
        </Link>
      </Button>
    </header>
  );
}
