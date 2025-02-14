import Link from "next/link";
import Image from "next/image";
import { content } from "@/lib/constants";

function AllProjects() {
  const { featuredProjects, otherProjects } = content;

  const allProjects = [...featuredProjects, ...otherProjects];

  return (
    <section className="z-10 mx-5 mb-20 mt-28 max-w-4xl">
      <div className="mb-14 md:mb-20">
        <h1 className="glowing-gradient-text text-center font-montserrat text-4xl font-bold md:text-6xl">
          Projects
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-center text-p-muted">
          These are some of my projects that, honestly, I still don’t know how I
          pulled off.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10">
        {allProjects.map((project, index) => (
          <Link key={index} href={project.route} target="_blank">
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
                  <div className="mt-4 flex flex-wrap gap-3">
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
        ))}
      </div>
    </section>
  );
}

export default AllProjects;
