import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Project } from "@/lib/constants";
import CornerAccent from "../../public/icons/CornerAccent";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({
  project,
  priority = false,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="border-s-default bg-s-muted group-hover:border-accent-100/50 relative overflow-hidden rounded-xl border transition-all duration-500 group-hover:shadow-[0_0_30px_-10px_rgba(31,215,255,0.2)]">
          {/* Top Edge Glow */}
          <div className="via-accent-100/30 absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Image Container */}
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              priority={priority}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-(--color-secondary-300) to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />

            {/* Tech Badges on Image (Mobile/Hover) */}
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {project.stack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-accent-100 font-dm-mono border-accent-100/20 rounded border bg-(--color-secondary-300)/80 px-2 py-0.5 text-[10px] backdrop-blur-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="relative p-6">
            {/* Corner Accents (Visible on Hover) */}
            <CornerAccent className="absolute -top-2 -left-2 rotate-12 opacity-0 transition-all duration-500 group-hover:rotate-0 group-hover:opacity-100" />
            <CornerAccent className="absolute -right-2 -bottom-2 -translate-x-1 translate-y-1 rotate-180 opacity-0 transition-all duration-500 group-hover:rotate-180 group-hover:opacity-100" />

            <div className="flex items-start justify-between">
              <div>
                <p className="font-dm-mono text-accent-100 mb-1 text-xs tracking-widest uppercase">
                  {project.role}
                </p>
                <h3 className="text-p-default group-hover:text-accent-100 text-xl font-bold transition-colors duration-300 md:text-2xl">
                  {project.name}
                </h3>
              </div>
              <span className="font-dm-mono text-p-muted text-xs">
                {project.date}
              </span>
            </div>

            <p className="text-p-muted mt-4 line-clamp-2 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="border-s-default bg-s-default text-p-muted group-hover:border-accent-100/20 group-hover:text-p-default rounded-full border px-3 py-1 text-[10px] font-medium transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Interactive indicator */}
            <div className="text-accent-100 mt-6 flex -translate-x-2 items-center gap-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
              <span className="font-dm-mono text-xs">View Case Study</span>
              <div className="bg-accent-100 h-px w-8" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
