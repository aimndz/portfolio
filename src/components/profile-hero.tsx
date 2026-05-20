import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { profile } from "@/data/portfolio";
import { ThemeDropdown } from "@/components/theme-dropdown";

export function ProfileHero() {
  return (
    <section
      className="relative flex flex-col items-center pt-7 text-center"
      id="home"
    >
      <div className="absolute top-7 left-0 max-[420px]:static max-[420px]:mb-6">
        <ThemeDropdown />
      </div>

      <div className="relative p-4">
        <span className="bg-secondary absolute top-4 left-0 h-px w-14" />
        <span className="bg-secondary absolute top-0 left-4 h-14 w-px" />
        <span className="bg-secondary absolute top-4 right-0 h-px w-14" />
        <span className="bg-secondary absolute top-0 right-4 h-14 w-px" />
        <span className="bg-secondary absolute bottom-4 left-0 h-px w-14" />
        <span className="bg-secondary absolute bottom-0 left-4 h-14 w-px" />
        <span className="bg-secondary absolute right-0 bottom-4 h-px w-14" />
        <span className="bg-secondary absolute right-4 bottom-0 h-14 w-px" />

        <div className="bg-primary relative size-32 overflow-hidden sm:size-36">
          <Image
            alt={profile.name}
            className="object-cover object-[50%_18%]"
            fill
            priority
            sizes="144px"
            src={profile.image}
          />
        </div>
      </div>

      <div className="mt-3">
        <h1 className="text-2xl leading-none font-semibold sm:text-3xl">
          {profile.name}
        </h1>
        <p className="text-foreground font-mono text-sm sm:text-base">
          {profile.role}
        </p>
        <p className="text-secondary flex items-center justify-center gap-2 font-mono text-sm">
          <MapPin aria-hidden="true" className="size-4" />
          {profile.location}
        </p>
      </div>

      <nav
        aria-label="Social links"
        className="text-secondary mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 font-mono text-[11px] uppercase sm:gap-x-3"
      >
        {profile.socials.map((link, index) => (
          <div className="flex items-center gap-x-2 sm:gap-x-3" key={link.href}>
            {index > 0 ? (
              <span className="text-border" aria-hidden="true">
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
      </nav>
    </section>
  );
}
