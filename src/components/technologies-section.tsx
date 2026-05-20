import { SectionHeading } from "@/components/section-heading";
import { technologies } from "@/data/portfolio";

export function TechnologiesSection() {
  return (
    <section>
      <SectionHeading>Technologies</SectionHeading>
      <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 md:grid-cols-4">
        {technologies.map((technology) => (
          <div
            className="flex min-w-0 items-center gap-2 text-sm text-secondary"
            key={technology.name}
          >
            <span className="flex h-5 min-w-5 items-center justify-center border border-border font-mono text-[10px] leading-none text-foreground">
              {technology.token}
            </span>
            <span className="truncate">{technology.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
