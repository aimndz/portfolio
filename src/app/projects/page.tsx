import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
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
      <div className="mx-auto w-full max-w-[840px] px-4 pt-10 pb-12 sm:px-6 flex-1 flex flex-col">
        <div className="mb-8">
          <h1 className="mt-3 text-3xl font-semibold">All Projects</h1>
        </div>

        <section className="mb-8">
          <SectionHeading>Selected work</SectionHeading>
          <div className="mt-5 grid pt-px pl-px sm:grid-cols-2">
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
