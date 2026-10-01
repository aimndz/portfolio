import type { ReactNode } from "react";

import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section className="grid gap-9 md:grid-cols-[minmax(0,1fr)_280px] md:gap-6">
      <div>
        <SectionHeading>About</SectionHeading>
        <div className="text-secondary mt-5 space-y-4 text-sm leading-6 sm:leading-7">
          <p>
            I&apos;m a{" "}
            <AboutHighlight>full-stack developer / artist</AboutHighlight> who
            sees programming the same way I see art. I started out drawing
            before I ever wrote code, and that creative way of thinking still
            shapes how I build today. I see programming as another medium, one
            where{" "}
            <AboutHighlight>structure, clarity, and expression</AboutHighlight>{" "}
            matter.
          </p>
          <p>
            In my spare time, you&apos;ll probably find me learning something
            new in tech. Other than that, you&apos;ll find me drawing, playing
            basketball, or gaming. Whether it&apos;s art, code, or just figuring
            out a strategy, I&apos;m all about{" "}
            <AboutHighlight>creating and trying new things</AboutHighlight>.
          </p>
        </div>
      </div>

      <aside className="flex flex-col">
        <SectionHeading>Experience</SectionHeading>
        <div className="mt-5 flex flex-1 flex-col">
          <div className="relative flex flex-1 flex-col">
            {experiences.map((experience, index) => {
              const isLast = index === experiences.length - 1;
              const roleTag =
                experience.role.toLowerCase().includes("founder")
                  ? "FOUNDER"
                  : experience.role.toLowerCase().includes("intern")
                    ? "INTERN"
                    : "ROLE";

              return (
                <article
                  className={`group/exp relative z-10 grid grid-cols-[24px_minmax(0,1fr)] gap-4 cursor-default transition-colors ${
                    isLast ? "flex-1" : ""
                  }`}
                  key={experience.company}
                >
                  <div className="relative w-6">
                    {/* Vertical Line Segment with Hover Glow */}
                    <div
                      className={`bg-border group-hover/exp:bg-foreground/40 absolute left-[11.5px] z-0 w-px transition-colors duration-200 ${
                        index === 0 ? "top-3 bottom-0" : "top-0 bottom-0"
                      }`}
                    />
                    {/* Diamond Marker with Kinetic Rotation & Elevation */}
                    <div
                      aria-hidden="true"
                      className={`border-primary bg-background group-hover/exp:bg-primary group-hover/exp:rotate-90 group-hover/exp:scale-125 absolute left-1/2 z-20 size-2.5 -translate-x-1/2 rotate-45 border transition-all duration-300 ${
                        index === 0 ? "top-1.25" : "top-6.25"
                      }`}
                    />
                  </div>
                  <div
                    className={`${index === 0 ? "pt-0" : "pt-5"} ${
                      isLast ? "pb-0" : "border-border border-b pb-5"
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-foreground group-hover/exp:text-primary text-sm font-semibold transition-colors">
                        {experience.role}
                      </h3>
                      <span className="text-muted-foreground border border-border/80 bg-muted/40 px-1.5 py-0.5 font-mono text-[11px] uppercase tracking-wider">
                        {roleTag}
                      </span>
                    </div>
                    <p className="text-secondary mt-1 text-sm leading-5">
                      {experience.company}
                    </p>
                    <p className="text-muted-foreground mt-1 font-mono text-xs">
                      {experience.year}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </aside>
    </section>
  );
}

function AboutHighlight({ children }: { children: ReactNode }) {
  return (
    <span className="border-b border-border hover:border-foreground hover:bg-muted/70 text-foreground transition-all duration-150 px-1 -mx-0.5 cursor-text">
      {children}
    </span>
  );
}
