import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects">
      <SectionHeading>Projects</SectionHeading>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Card
            className="group min-h-28 overflow-hidden transition-colors hover:border-primary"
            key={project.name}
          >
            <Link
              aria-label={`${project.name} project`}
              className="block h-full"
              href={project.href}
              target="_blank"
            >
              <CardContent className="relative flex min-h-28 flex-col justify-between overflow-hidden p-4">
                {project.featured ? (
                  <div className="absolute inset-0 opacity-70 transition-opacity group-hover:opacity-90">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(250,251,248,0.18),transparent_24%),radial-gradient(circle_at_70%_30%,rgba(145,36,91,0.62),transparent_42%),linear-gradient(135deg,#1b1018_0%,#090909_72%)]" />
                    <div className="absolute right-0 top-0 h-16 w-16 border-l border-border bg-[#3e1632]" />
                  </div>
                ) : null}

                <div className="relative flex items-start justify-between gap-4">
                  <h3 className="max-w-[13rem] text-sm font-semibold leading-5 text-foreground sm:text-base">
                    {project.name}
                  </h3>
                  <span className="font-mono text-sm text-foreground">
                    {project.year}
                  </span>
                </div>
                <p className="relative mt-3 text-xs leading-5 text-secondary">
                  {project.description}
                </p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
