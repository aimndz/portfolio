import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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

export function ProjectCard({ project, showStack = false }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "group hover:border-primary min-h-28 overflow-hidden transition-colors",
        showStack && "min-h-36",
      )}
    >
      <Link
        aria-label={`${project.name} project`}
        className="block h-full"
        href={project.href}
        target="_blank"
      >
        <CardContent
          className={cn(
            "relative flex min-h-28 flex-col justify-between overflow-hidden p-4",
            showStack && "min-h-36",
          )}
        >
          {project.featured ? (
            <div className="absolute inset-0 opacity-70 transition-opacity group-hover:opacity-90">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(250,251,248,0.18),transparent_24%),radial-gradient(circle_at_70%_30%,rgba(145,36,91,0.62),transparent_42%),linear-gradient(135deg,#1b1018_0%,#090909_72%)]" />
              <div className="border-border absolute top-0 right-0 h-16 w-16 border-l bg-[#3e1632]" />
            </div>
          ) : null}

          <div className="relative">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-foreground max-w-60 text-sm leading-5 font-semibold sm:text-base">
                {project.name}
              </h3>
              <span className="text-foreground font-mono text-sm">
                {project.year}
              </span>
            </div>
            <p className="text-secondary mt-3 text-xs leading-5">
              {project.description}
            </p>
          </div>

          {showStack && project.stack ? (
            <div className="text-secondary relative mt-5 flex flex-wrap gap-2 font-mono text-[10px] uppercase">
              {project.stack.map((item) => (
                <span className="border-border border px-2 py-1" key={item}>
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </CardContent>
      </Link>
    </Card>
  );
}
