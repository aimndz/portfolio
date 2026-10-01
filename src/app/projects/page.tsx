import { ProjectCard } from "@/components/project-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/data/portfolio";

export const metadata = {
  title: "Projects - Amiel Ian Mendoza",
  description: "All projects by Amiel Ian Mendoza.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-background text-foreground flex min-h-screen flex-col">
      <SiteHeader />
      <div className="mx-auto w-full max-w-210 px-4 pt-10 pb-12 sm:px-6 flex-1 flex flex-col">
        <div className="mb-8 flex items-baseline justify-between border-b border-border/80 pb-4">
          <h1 className="text-2xl font-semibold sm:text-3xl">Projects</h1>
          <span className="text-muted-foreground font-mono text-xs">
            [{projects.length.toString().padStart(2, "0")} REPOSITORIES]
          </span>
        </div>

        <section className="mb-12">
          <div className="grid pt-px pl-px sm:grid-cols-2">
            {[...projects]
              .sort((a, b) => b.year.localeCompare(a.year))
              .map((project) => (
                <ProjectCard key={project.name} project={project} showStack />
              ))}
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
