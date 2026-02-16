import { content } from "@/lib/constants";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

function AllProjects() {
  const { featuredProjects, otherProjects } = content;

  const allProjects = [...featuredProjects, ...otherProjects];

  return (
    <section className="font-montserrat z-10 mx-5 mt-28 mb-20 max-w-4xl">
      <div className="mb-14 md:mb-20">
        <h1 className="text-accent-100 text-center text-4xl font-bold md:text-6xl">
          Projects
        </h1>
        <p className="font-dm-mono text-p-muted mx-auto mt-3 max-w-lg text-center">
          These are some of my projects that, honestly, I still don’t know how I
          pulled off.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12">
        {allProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100, filter: "blur(2px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              aria-label={`View project details for ${project.name}`}
            >
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
                    <div className="mt-4 flex flex-wrap gap-3">
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

export default AllProjects;
