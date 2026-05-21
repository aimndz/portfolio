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
      <div className="flex items-center gap-4">
        <div className="min-w-0 flex-1">
          <SectionHeading>Projects</SectionHeading>
        </div>
        <Button
          asChild
          className="border-border text-secondary hover:bg-muted hover:text-foreground h-8 shrink-0 cursor-pointer rounded-none px-3 font-mono text-[11px] uppercase"
          variant="outline"
        >
          <Link href="/projects">
            View all
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
