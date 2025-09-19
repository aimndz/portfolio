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
    <section className="z-10 mx-5 mb-20 mt-48 max-w-4xl font-montserrat">
      <div className="flex gap-3 md:flex-row md:items-center md:justify-between">
        <SectionTitle title="Featured Projects" />
        <Link
          href="/projects"
          className="flex items-center gap-3 border-b border-transparent text-accent-100 hover:border-accent-100"
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
            <Link href={project.route} target="_blank" className="relative">
              <div className="glow-top"></div>
              <div>
                <div className="group overflow-hidden rounded-lg border border-s-default bg-s-muted">
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
                    <p className="mt-4 text-p-muted">
                      <span className="text-p-default">{project.date}</span> -{" "}
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((stack, index) => (
                        <div
                          key={index}
                          className="inline-block overflow-hidden rounded-full border border-s-default bg-s-default px-3 py-1 text-xs"
                        >
                          {stack}
                        </div>
                      ))}
                    </div>
                    {/* Background glow */}
                    <div className="absolute left-1/2 top-28 z-10 aspect-square w-full -translate-x-1/2 transform rounded-full bg-white opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-10">
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
