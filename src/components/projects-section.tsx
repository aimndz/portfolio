import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  const homeProjects = projects.filter((project) => project.home);

  return (
    <section id="projects">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <SectionHeading>Projects</SectionHeading>
          <span className="text-muted-foreground font-mono text-[11px] tracking-wider uppercase hidden sm:inline">
            [{homeProjects.length.toString().padStart(2, "0")} SELECTED]
          </span>
        </div>
        <Button
          asChild
          className="border-border text-secondary hover:border-foreground hover:bg-muted hover:text-foreground h-8 shrink-0 cursor-pointer rounded-none px-3 font-mono text-[11px] uppercase transition-colors"
          variant="outline"
        >
          <Link href="/projects">
            View all [{projects.length}]
            <ArrowUpRight aria-hidden="true" className="size-3" />
          </Link>
        </Button>
      </div>
      <div className="mt-5 grid pt-px pl-px sm:grid-cols-2">
        {homeProjects.map((project) => (
          <ProjectCard key={project.name} project={project} showStack />
        ))}
      </div>
    </section>
  );
}
