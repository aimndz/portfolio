"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ObfuscatedEmail } from "@/components/obfuscated-email";
import { ThemeDropdown } from "@/components/theme-dropdown";
import { profile } from "@/data/portfolio";

export function ProfileHero() {
  return (
    <section
      className="relative flex flex-col items-center pt-8 text-center"
      id="home"
    >
      <div className="absolute top-6 right-0">
        <ThemeDropdown align="end" />
      </div>

      {/* Avatar with Perimeter Crop Marks */}
      <div className="group relative p-2 select-none">
        {/* 8 Perimeter Drafting Crop Marks with Interactive Tension */}
        <span
          aria-hidden="true"
          className="bg-muted-foreground absolute top-2 left-0 h-px w-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
        />
        <span
          aria-hidden="true"
          className="bg-muted-foreground absolute top-0 left-2 h-2 w-px transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
        />
        <span
          aria-hidden="true"
          className="bg-muted-foreground absolute top-2 right-0 h-px w-2 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5"
        />
        <span
          aria-hidden="true"
          className="bg-muted-foreground absolute top-0 right-2 h-2 w-px transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5"
        />
        <span
          aria-hidden="true"
          className="bg-muted-foreground absolute bottom-2 left-0 h-px w-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
        <span
          aria-hidden="true"
          className="bg-muted-foreground absolute bottom-0 left-2 h-2 w-px transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
        <span
          aria-hidden="true"
          className="bg-muted-foreground absolute right-0 bottom-2 h-px w-2 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
        />
        <span
          aria-hidden="true"
          className="bg-muted-foreground absolute right-2 bottom-0 h-2 w-px transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
        />

        {/* Image Frame */}
        <div className="bg-primary relative size-32 overflow-hidden border border-border/80 transition-colors duration-300 group-hover:border-foreground sm:size-36">
          <Image
            alt={profile.name}
            className="object-cover object-[50%_18%] filter contrast-[1.03] transition-transform duration-500 ease-out group-hover:scale-105"
            fill
            priority
            sizes="144px"
            src={profile.image}
          />
        </div>
      </div>

      {/* Identity & Headings */}
      <div className="mt-4">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {profile.name}
        </h1>
        <p className="text-foreground/90 mt-1 font-mono text-xs sm:text-sm tracking-wide uppercase">
          {profile.role}
        </p>

        {/* Contact Coordinates */}
        <div className="text-secondary mt-2.5 flex flex-col items-center justify-center gap-1.5 font-mono text-xs sm:flex-row sm:gap-x-4 sm:text-sm">
          <p className="flex items-center gap-1.5">
            <MapPin
              aria-hidden="true"
              className="size-3.5 shrink-0 text-muted-foreground"
            />
            {profile.location}
          </p>
          <span
            className="hidden text-muted-foreground sm:inline"
            aria-hidden="true"
          >
            /
          </span>
          <ObfuscatedEmail
            className="hover:text-foreground flex items-center gap-1.5 transition-colors"
            email={profile.email}
          />
        </div>
      </div>

      {/* Social Links */}
      <nav
        aria-label="Social links"
        className="text-secondary mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 font-mono text-[11px] uppercase sm:gap-x-3"
      >
        {profile.socials.map((link, index) => (
          <div className="flex items-center gap-x-2 sm:gap-x-3" key={link.href}>
            {index > 0 ? (
              <span className="text-muted-foreground" aria-hidden="true">
                /
              </span>
            ) : null}
            <Link
              className="hover:text-foreground inline-block py-1 transition-colors"
              href={link.href}
              rel="noopener noreferrer"
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
