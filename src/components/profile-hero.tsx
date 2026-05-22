import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ObfuscatedEmail } from "@/components/obfuscated-email";
import { profile } from "@/data/portfolio";
import { ThemeDropdown } from "@/components/theme-dropdown";

export function ProfileHero() {
  return (
    <section
      className="relative flex flex-col items-center pt-7 text-center"
      id="home"
    >
      <div className="absolute top-7 right-0">
        <ThemeDropdown align="end" />
      </div>

      <div className="relative p-2">
        <span className="bg-muted-foreground absolute top-2 left-0 h-px w-2" />
        <span className="bg-muted-foreground absolute top-0 left-2 h-2 w-px" />
        <span className="bg-muted-foreground absolute top-2 right-0 h-px w-2" />
        <span className="bg-muted-foreground absolute top-0 right-2 h-2 w-px" />
        <span className="bg-muted-foreground absolute bottom-2 left-0 h-px w-2" />
        <span className="bg-muted-foreground absolute bottom-0 left-2 h-2 w-px" />
        <span className="bg-muted-foreground absolute right-0 bottom-2 h-px w-2" />
        <span className="bg-muted-foreground absolute right-2 bottom-0 h-2 w-px" />

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
        <div className="text-secondary mt-2 flex flex-col items-center justify-center gap-1.5 font-mono text-xs sm:flex-row sm:gap-x-4 sm:text-sm">
          <p className="flex items-center gap-1.5">
            <MapPin aria-hidden="true" className="size-3.5 text-muted-foreground shrink-0" />
            {profile.location}
          </p>
          <span className="text-muted-foreground hidden sm:inline" aria-hidden="true">
            /
          </span>
          <ObfuscatedEmail
            email={profile.email}
            className="hover:text-foreground flex items-center gap-1.5 transition-colors"
          />
        </div>
      </div>

      <nav
        aria-label="Social links"
        className="text-secondary mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 font-mono text-[11px] uppercase sm:gap-x-3"
      >
        {profile.socials.map((link, index) => (
          <div className="flex items-center gap-x-2 sm:gap-x-3" key={link.href}>
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
      </nav>
    </section>
  );
}
