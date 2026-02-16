import SectionTitle from "../SectionTitle";
import { content } from "@/lib/constants";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import ProjectCard from "../ProjectCard";

function FeaturedProjects() {
  const { featuredProjects } = content;

  return (
    <section className="font-montserrat z-10 mx-5 mt-48 mb-20 max-w-4xl">
      <div className="mb-12 flex gap-3 md:flex-row md:items-center md:justify-between">
        <SectionTitle title="Featured Projects" />
        <Link
          href="/projects"
          aria-label="View all projects"
          className="text-accent-100 hover:border-accent-100 group flex items-center gap-3 border-b border-transparent transition-all"
        >
          <p className="hidden sm:block">View All Projects</p>
          <ChevronsRight
            size={20}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 gap-12">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} priority={index === 0} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;
