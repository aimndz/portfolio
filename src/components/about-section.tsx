import { about, experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section className="grid gap-9 md:grid-cols-[minmax(0,1fr)_270px] md:gap-5">
      <div>
        <SectionHeading>About</SectionHeading>
        <div className="mt-5 space-y-4 text-sm leading-6 text-secondary sm:text-[15px] sm:leading-7">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <aside>
        <SectionHeading>Experience</SectionHeading>
        <div className="mt-5 divide-y divide-border">
          {experiences.map((experience) => (
            <article className="py-4 first:pt-0" key={experience.company}>
              <h3 className="text-sm font-semibold text-foreground sm:text-base">
                {experience.company}
              </h3>
              <p className="mt-1 text-sm leading-5 text-foreground">
                {experience.role}
              </p>
              <p className="mt-1 font-mono text-sm text-secondary">
                {experience.year}
              </p>
            </article>
          ))}
        </div>
      </aside>
    </section>
  );
}
