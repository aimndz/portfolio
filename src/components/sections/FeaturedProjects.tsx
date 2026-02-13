import Image from "next/image";
import SectionTitle from "../SectionTitle";
import { content } from "@/lib/constants";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
// import { motion } from "motion/react";
// import Github from "../../../public/icons/Github";
// import Link from "next/link";

function FeaturedProjects() {
  const { featuredProjects } = content;

  return (
    <section className="font-montserrat z-10 mx-5 mt-48 mb-20 max-w-4xl">
      <div className="flex gap-3 md:flex-row md:items-center md:justify-between">
        <SectionTitle title="Featured Projects" />
        <Link
          href="/projects"
          className="text-accent-100 hover:border-accent-100 flex items-center gap-3 border-b border-transparent"
        >
          <p className="hidden sm:block">View More</p>
          <ChevronsRight size={20} />
        </Link>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 gap-6">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100, filter: "blur(2px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
          >
            <Link href={`/projects/${project.slug}`} className="relative">
              <div className="glow-top"></div>
              <div>
                <div className="group border-s-default bg-s-muted overflow-hidden rounded-lg border">
                  <div>
                    <Image
                      src={project.image}
                      alt="blissnflair"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="relative overflow-hidden p-4">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <p className="text-accent-100">{project.role}</p>
                    <p className="text-p-muted mt-4">
                      <span className="text-p-default">{project.date}</span> -{" "}
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((stack, index) => (
                        <div
                          key={index}
                          className="border-s-default bg-s-default inline-block overflow-hidden rounded-full border px-3 py-1 text-xs"
                        >
                          {stack}
                        </div>
                      ))}
                    </div>
                    {/* Background glow */}
                    <div className="absolute top-28 left-1/2 z-10 aspect-square w-full -translate-x-1/2 transform rounded-full bg-white opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-10">
                      <div className="absolute inset-0 rounded-full bg-white/30 blur-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;
