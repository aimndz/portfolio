import { content, Project } from "@/lib/constants";
import { notFound } from "next/navigation";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";

export function generateStaticParams() {
  const allProjects = [...content.featuredProjects, ...content.otherProjects];
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // We need to handle this synchronously for static generation
  return params.then(({ slug }) => {
    const allProjects = [...content.featuredProjects, ...content.otherProjects];
    const project = allProjects.find((p) => p.slug === slug);

    if (!project) {
      return { title: "Project Not Found" };
    }

    return {
      title: `${project.name} — Amiel Ian Mendoza`,
      description: project.description,
    };
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const allProjects: Project[] = [
    ...content.featuredProjects,
    ...content.otherProjects,
  ];
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectCaseStudy project={project} />;
}
