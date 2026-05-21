import Link from "next/link";

import { Card } from "@/components/ui/card";

type ProjectCardProps = {
  project: {
    name: string;
    year: string;
    description: string;
    href: string;
    featured: boolean;
    stack?: string[];
    github?: string;
    website?: string;
  };
  showStack?: boolean;
};

export function ProjectCard({ project, showStack = false }: ProjectCardProps) {
  const hasExternalLinks = !!(project.github || project.website);

  return (
    <Card className="group hover:bg-muted/50 relative -mt-px -ml-px flex min-h-36 flex-col justify-between transition-colors hover:z-10">
      {/* Card Link overlay */}
      <Link
        aria-label={`${project.name} project`}
        className="absolute inset-0 z-10"
        href={project.href}
        target="_blank"
      />

      {/* Card Content */}
      <div className="pointer-events-none relative z-10 flex flex-1 flex-col p-5 sm:p-6 pb-4">
        <span className="text-muted-foreground font-mono text-xs leading-none">
          {project.year}
        </span>
        <h3 className="text-foreground group-hover:text-primary mt-1.5 text-sm leading-5 font-semibold transition-colors">
          {project.name}
        </h3>
        <p className="text-secondary mt-1 flex-1 text-sm leading-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        {showStack && project.stack && project.stack.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="bg-muted text-muted-foreground px-1.5 py-0.5 font-mono text-[10px] tracking-wide uppercase"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* External links */}
      {hasExternalLinks && (
        <div className="relative z-20 flex gap-2 px-5 pt-0 pb-5 sm:px-6 sm:pb-6 pointer-events-none">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:border-primary hover:text-foreground border-border bg-card flex h-7 w-7 cursor-pointer items-center justify-center border transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 pointer-events-auto"
              title="View GitHub Repository"
              aria-label={`${project.name} GitHub Repository`}
            >
              {/* GitHub icon */}
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
              >
                <path
                  d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          )}

          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:border-primary hover:text-foreground border-border bg-card flex h-7 w-7 cursor-pointer items-center justify-center border transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 pointer-events-auto"
              title="View Live Website"
              aria-label={`${project.name} Live Website`}
            >
              {/* Website icon */}
              <svg
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
              >
                <path
                  d="M3.82538 18.6746C1.85625 16.7055 0.75 14.0348 0.75 11.25C0.75 8.46523 1.85625 5.79451 3.82538 3.82538C5.79451 1.85625 8.46523 0.75 11.25 0.75C14.0348 0.75 16.7055 1.85625 18.6746 3.82538C20.6438 5.79451 21.75 8.46523 21.75 11.25C21.75 14.0348 20.6438 16.7055 18.6746 18.6746C16.7055 20.6438 14.0348 21.75 11.25 21.75C8.46523 21.75 5.79451 20.6438 3.82538 18.6746Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.06802 3.82538C7.22411 5.79451 6.75 8.46523 6.75 11.25C6.75 14.0348 7.22411 16.7055 8.06802 18.6746C8.91193 20.6438 10.0565 21.75 11.25 21.75C12.4435 21.75 13.5881 20.6438 14.432 18.6746C15.2759 16.7055 15.75 14.0348 15.75 11.25C15.75 8.46523 15.2759 5.79451 14.432 3.82538C13.5881 1.85625 12.4435 0.75 11.25 0.75C10.0565 0.75 8.91193 1.85625 8.06802 3.82538Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.5 14.75H21M1.5 7.75H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          )}
        </div>
      )}
    </Card>
  );
}
