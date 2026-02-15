"use client";

import { Project } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import CornerAccent from "../../public/icons/CornerAccent";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <main className="font-montserrat text-p-default bg---color-secondary-300) relative min-h-screen">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-accent-100/5 absolute -top-32 left-1/2 h-125 w-200 -translate-x-1/2 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-s-default/50 sticky top-0 z-50 border-b bg-(--color-secondary-300)/80 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-p-muted hover:text-accent-100 flex items-center gap-2 text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="font-dm-mono">Back to Home</span>
          </Link>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                className="border-s-default text-p-muted hover:border-accent-100 hover:text-accent-100 flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all"
              >
                <Github size={14} />
                <span className="hidden sm:inline">Source</span>
              </Link>
            )}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                className="bg-accent-100 hover:bg-accent-200 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-(--color-secondary-300) transition-all"
              >
                <ExternalLink size={14} />
                <span className="hidden sm:inline">Live Demo</span>
              </Link>
            )}
          </div>
        </div>
      </motion.nav>

      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16"
        >
          <div className="font-dm-mono text-p-muted mb-6 flex items-center gap-3 text-sm">
            <span>{project.date}</span>
            <span className="bg-accent-100 h-1 w-1 rounded-full" />
            <span>{project.role}</span>
          </div>

          <h1 className="text-p-default mb-4 text-3xl leading-tight font-bold md:text-5xl lg:text-6xl">
            {project.name}
          </h1>

          <p className="text-p-muted max-w-2xl text-lg md:text-xl">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="border-s-default bg-s-muted text-p-default rounded-full border px-4 py-1.5 text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.header>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="border-s-default relative mb-24 overflow-hidden rounded-xl border"
        >
          <div className="glow-top" />
          <Image
            src={project.image}
            alt={project.name}
            width={1200}
            height={675}
            sizes="100vw"
            className="w-full"
            priority
          />
        </motion.div>

        {/* Overview Section */}
        <motion.section
          {...fadeUp}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-6 inline-block p-4">
            <div className="relative">
              <CornerAccent className="absolute -top-4 -left-4" />
              <h2 className="text-p-default text-2xl font-semibold md:text-3xl">
                Overview
              </h2>
              <CornerAccent className="absolute -right-4 -bottom-4 rotate-180" />
            </div>
          </div>
          <p className="text-p-accent-100 max-w-3xl text-lg leading-relaxed">
            {project.longDescription}
          </p>
        </motion.section>

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-8 inline-block p-4">
            <div className="relative">
              <CornerAccent className="absolute -top-4 -left-4" />
              <h2 className="text-p-default text-2xl font-semibold md:text-3xl">
                Key Features
              </h2>
              <CornerAccent className="absolute -right-4 -bottom-4 rotate-180" />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="group border-s-default bg-s-muted relative overflow-hidden rounded-lg border p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="bg-accent-100/10 font-dm-mono text-accent-100 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <p className="text-p-default">{feature}</p>
                </div>
                <div className="absolute inset-0 rounded-lg bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-[0.02]" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Screenshots Gallery */}
        {project.screenshots.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="mb-8 inline-block p-4">
              <div className="relative">
                <CornerAccent className="absolute -top-4 -left-4" />
                <h2 className="text-p-default text-2xl font-semibold md:text-3xl">
                  Screenshots
                </h2>
                <CornerAccent className="absolute -right-4 -bottom-4 rotate-180" />
              </div>
            </div>
            <div className="grid gap-6">
              {project.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="border-s-default overflow-hidden rounded-xl border"
                >
                  <Image
                    src={screenshot}
                    alt={`${project.name} screenshot ${index + 1}`}
                    width={1200}
                    height={675}
                    sizes="100vw"
                    className="w-full"
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Challenges & Lessons */}
        <div className="mb-20 grid gap-8 md:grid-cols-2">
          {project.challenges && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border-s-default bg-s-muted rounded-xl border p-6 md:p-8"
            >
              <h3 className="font-dm-mono text-accent-100 mb-4 text-lg">
                {"// Challenges"}
              </h3>
              <p className="text-p-accent-100 leading-relaxed">
                {project.challenges}
              </p>
            </motion.section>
          )}
          {project.lessonsLearned && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="border-s-default bg-s-muted rounded-xl border p-6 md:p-8"
            >
              <h3 className="font-dm-mono text-accent-100 mb-4 text-lg">
                {"// Lessons Learned"}
              </h3>
              <p className="text-p-accent-100 leading-relaxed">
                {project.lessonsLearned}
              </p>
            </motion.section>
          )}
        </div>

        {/* CTA / Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-s-default flex flex-col items-center border-t pt-16 text-center"
        >
          <p className="font-dm-mono text-p-muted mb-6 text-sm">
            Want to see more?
          </p>
          <div className="flex gap-4">
            <Link
              href="/projects"
              className="border-s-default text-p-default hover:border-accent-100 hover:text-accent-100 rounded-full border px-6 py-3 text-sm transition-all"
            >
              All Projects
            </Link>
            <Link
              href="/"
              className="bg-accent-100 hover:bg-accent-200 rounded-full px-6 py-3 text-sm font-medium text-(--color-secondary-300) transition-all"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
