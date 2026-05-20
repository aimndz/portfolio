import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

export function ProfileHero() {
  return (
    <section className="relative flex flex-col items-center pt-7 text-center" id="home">
      <Button
        className="absolute left-0 top-7 h-9 rounded-none border-border px-6 font-mono text-[11px] uppercase text-secondary hover:text-foreground max-[420px]:static max-[420px]:mb-6"
        variant="outline"
      >
        Themes
      </Button>

      <div className="relative size-28 overflow-hidden border border-border bg-primary">
        <Image
          alt={profile.name}
          className="object-cover object-[50%_18%]"
          fill
          priority
          sizes="128px"
          src={profile.image}
        />
      </div>

      <div className="mt-5">
        <h1 className="text-2xl font-semibold leading-none tracking-[-0.04em] sm:text-3xl">
          {profile.name}
        </h1>
        <p className="mt-2 font-mono text-sm text-foreground sm:text-base">
          {profile.role}
        </p>
        <p className="mt-2 flex items-center justify-center gap-2 font-mono text-sm text-secondary">
          <MapPin aria-hidden="true" className="size-4 text-foreground" />
          {profile.location}
        </p>
      </div>

      <nav
        aria-label="Social links"
        className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 font-mono text-[11px] uppercase text-secondary sm:gap-x-3"
      >
        {profile.socials.map((link, index) => (
          <div className="flex items-center gap-x-2 sm:gap-x-3" key={link.href}>
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            <Link
              className="transition-colors hover:text-foreground"
              href={link.href}
              target="_blank"
            >
              {link.label}
            </Link>
          </div>
        ))}
      </nav>
    </section>
  );
}
