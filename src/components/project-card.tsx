import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

type ProjectCardProps = {
  project: {
    name: string;
    year: string;
    description: string;
    href: string;
    featured: boolean;
    stack?: string[];
  };
  showStack?: boolean;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group relative hover:z-10 hover:border-primary -mt-px -ml-px min-h-36 transition-colors">
      <Link
        aria-label={`${project.name} project`}
        className="block h-full"
        href={project.href}
        target="_blank"
      >
        <CardContent className="flex min-h-36 flex-col p-5 sm:p-6">
          <span className="text-muted-foreground font-mono text-[11px] leading-none">
            {project.year}
          </span>
          <h3 className="text-foreground mt-1 text-sm leading-5 font-semibold">
            {project.name}
          </h3>
          <p className="text-secondary mt-1 text-sm leading-6">
            {project.description}
          </p>
        </CardContent>
      </Link>
    </Card>
  );
}
