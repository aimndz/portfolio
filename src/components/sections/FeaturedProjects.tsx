import Image from "next/image";
import SectionTitle from "../SectionTitle";
import { content } from "@/lib/constants";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
// import Github from "../../../public/icons/Github";
// import Link from "next/link";

function FeaturedProjects() {
  const { featuredProjects } = content;

  return (
    <section className="mt-48 max-w-4xl mx-10 mb-20 z-10">
      <div className="flex justify-between ">
        <SectionTitle title="Featured Projects" />
        <Link href="/projects">
          <Button className="bg-transparent hover:bg-s-default transition-all delay-75 ease-linear rounded-full">
            View More <ArrowRight />{" "}
          </Button>
        </Link>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 gap-10">
        {featuredProjects.map((project, index) => (
          <Link key={index} href={project.route} target="_blank">
            <div>
              <div className="bg-s-muted rounded-lg border border-s-default overflow-hidden">
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
                  <h3 className="font-bold text-xl">{project.name}</h3>
                  <p className="text-accent-100">{project.role}</p>
                  <p className="text-p-muted mt-4">{project.description}</p>
                  <div className="mt-4 flex gap-3">
                    {project.stack.map((stack, index) => (
                      <div
                        key={index}
                        className="py-1 px-3 text-xs rounded-full bg-s-default border border-s-default overflow-hidden inline-block"
                      >
                        {stack}
                      </div>
                    ))}
                  </div>
                  {/* <div className="absolute bottom-4 right-4">
                  <Link href="https://github.com/aimndz/blissnflair">
                    <Github />
                  </Link>
                </div> */}

                  {/* Background glow */}
                  <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-full z-10 aspect-square rounded-full blur-2xl bg-white opacity-10"></div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;
