"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Download, Mail, MapPin } from "lucide-react";
import CornerAccent from "../../../public/icons/CornerAccent";
import { Separator } from "@/components/ui/separator";
import { content } from "@/lib/constants";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
};

const drawings = [
  {
    src: "/images/drawings/drawing-1.png",
    title: "Sketch Study",
    medium: "Pencil on paper",
  },
  {
    src: "/images/drawings/drawing-2.png",
    title: "Portrait Study",
    medium: "Digital",
  },
  {
    src: "/images/drawings/drawing-3.png",
    title: "Character Art",
    medium: "Mixed media",
  },
  {
    src: "/images/drawings/drawing-4.png",
    title: "Illustration",
    medium: "Digital art",
  },
];

const timeline = [
  {
    year: "2024 — Present",
    title: "Full-Stack Developer",
    description:
      "Building production-level web applications with React, Next.js, Node.js, and PostgreSQL. Focused on creating intuitive user experiences and scalable architectures.",
  },
  {
    year: "2023",
    title: "Started Web Development",
    description:
      "Began learning front-end technologies and quickly fell in love with creating interactive web experiences. First projects with HTML, CSS, and JavaScript.",
  },
  {
    year: "Before Code",
    title: "Artist & Creative",
    description:
      "Drew portraits, characters, and illustrations. This creative foundation shaped how I approach design and user experience in every project I build.",
  },
];

const interests = [
  { emoji: "🏀", label: "Basketball" },
  { emoji: "🎨", label: "Drawing & Art" },
  { emoji: "🎮", label: "Video Games" },
  { emoji: "💻", label: "Learning Tech" },
  { emoji: "🎵", label: "Music" },
  { emoji: "📚", label: "Self-improvement" },
];

function AboutMePage() {
  return (
    <main className="font-montserrat text-p-default relative min-h-screen bg-(--color-secondary-300)">
      {/* Background accent glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-accent-100/3 absolute -top-40 left-1/4 h-150 w-150 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 h-100 w-100 rounded-full bg-[#1FD7FF]/3 blur-3xl" />
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
          <Link
            href={content.socialLinks.resume}
            target="_blank"
            className="border-s-default text-p-muted hover:border-accent-100 hover:text-accent-100 flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all"
          >
            <Download size={14} />
            <span className="hidden sm:inline">Resume</span>
          </Link>
        </div>
      </motion.nav>

      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Hero / Intro */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-20"
        >
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="shrink-0"
            >
              <div className="border-s-default bg-s-muted relative overflow-hidden rounded-2xl border p-3">
                <Image
                  src="/images/me-img.png"
                  alt="Amiel Ian Mendoza"
                  width={280}
                  height={280}
                  className="rounded-xl"
                  priority
                />
                <Separator className="bg-s-default my-3" />
                <div className="font-dm-mono text-p-muted flex items-center justify-center gap-2 text-sm">
                  <MapPin size={14} className="text-accent-100" />
                  <span>Cavite, Philippines</span>
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="flex-1">
              <p className="font-dm-mono text-accent-100 mb-2 text-sm">
                {"// let's get personal"}
              </p>
              <h1 className="mb-4 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
                Hey, I&apos;m <span className="gradient-text">Amiel</span>
              </h1>
              <p className="text-p-accent-100 mb-6 max-w-xl text-lg leading-relaxed">
                I&apos;m a{" "}
                <span className="text-p-default">
                  full-stack developer & artist
                </span>{" "}
                from the Philippines. I was an artist first before diving into
                development, so that creative mindset naturally carried over
                into everything I build. To me, programming is just another form
                of art — both require vision, patience, and a lot of
                problem-solving.
              </p>
              <p className="text-p-accent-100 max-w-xl text-lg leading-relaxed">
                I&apos;m driven by the satisfaction of{" "}
                <span className="text-p-default">
                  turning ideas into real, functional products
                </span>{" "}
                that people can actually use. Whether it&apos;s a complex
                booking system or a simple portfolio (like this one), I bring
                the same energy and attention to detail.
              </p>

              {/* Contact quick links */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="mailto:amiel.ian.mendoza@gmail.com"
                  className="border-s-default text-p-muted hover:border-accent-100 hover:text-accent-100 flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all"
                >
                  <Mail size={14} />
                  <span>amiel.ian.mendoza@gmail.com</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Timeline / Journey */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="mb-8 inline-block p-4">
            <div className="relative">
              <CornerAccent className="absolute -top-4 -left-4" />
              <h2 className="text-p-default text-2xl font-semibold md:text-3xl">
                My Journey
              </h2>
              <CornerAccent className="absolute -right-4 -bottom-4 rotate-180" />
            </div>
          </div>

          <div className="border-s-default relative ml-4 border-l pl-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="border-accent-100 absolute top-1 -left-10.25 h-3 w-3 rounded-full border-2 bg-(--color-secondary-300)" />
                <span className="font-dm-mono text-accent-100 mb-2 inline-block text-sm">
                  {item.year}
                </span>
                <h3 className="text-p-default mb-2 text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-p-accent-100 max-w-lg leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Interests & Hobbies */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="mb-8 inline-block p-4">
            <div className="relative">
              <CornerAccent className="absolute -top-4 -left-4" />
              <h2 className="text-p-default text-2xl font-semibold md:text-3xl">
                When I&apos;m Not Coding
              </h2>
              <CornerAccent className="absolute -right-4 -bottom-4 rotate-180" />
            </div>
          </div>

          <p className="text-p-accent-100 mb-8 max-w-2xl text-lg leading-relaxed">
            In my spare time, you&apos;ll probably find me learning something
            new about tech{" "}
            <span className="font-dm-mono text-p-muted italic">(lol nerd)</span>
            . But beyond code, I have a bunch of things that keep me sane and
            inspired.
          </p>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className="group border-s-default bg-s-muted hover:border-accent-100/30 flex flex-col items-center gap-2 rounded-xl border p-4 transition-all"
              >
                <span className="text-2xl">{interest.emoji}</span>
                <span className="text-p-muted group-hover:text-p-default text-center text-xs transition-colors">
                  {interest.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Art & Drawings Gallery */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="mb-4 inline-block p-4">
            <div className="relative">
              <CornerAccent className="absolute -top-4 -left-4" />
              <h2 className="text-p-default text-2xl font-semibold md:text-3xl">
                The Art Side
              </h2>
              <CornerAccent className="absolute -right-4 -bottom-4 rotate-180" />
            </div>
          </div>
          <p className="text-p-accent-100 mb-8 max-w-2xl text-lg leading-relaxed">
            Before I wrote my first line of code, I was sketching and drawing.
            Art taught me to observe details, think about composition, and
            iterate until things feel right —{" "}
            <span className="text-p-default">
              skills that translate directly into design and development
            </span>
            .
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {drawings.map((drawing, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group border-s-default bg-s-muted relative overflow-hidden rounded-xl border"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={drawing.src}
                    alt={drawing.title}
                    width={600}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-p-default font-semibold">
                    {drawing.title}
                  </h4>
                  <p className="font-dm-mono text-p-muted text-sm">
                    {drawing.medium}
                  </p>
                </div>
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-[0.02]" />
              </motion.div>
            ))}
          </div>

          <p className="font-dm-mono text-p-muted mt-6 text-center text-sm italic">
            Add your drawings to /public/images/drawings/ and they&apos;ll
            appear here.
          </p>
        </motion.section>

        {/* Philosophy / Closing */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-s-default bg-s-muted mb-20 rounded-xl border p-8 md:p-12"
        >
          <h3 className="font-dm-mono text-accent-100 mb-4 text-lg">
            {"// my philosophy"}
          </h3>
          <blockquote className="text-p-default text-xl leading-relaxed md:text-2xl">
            &ldquo;Whether it&apos;s art, code, or just figuring out a strategy
            — I&apos;m all about{" "}
            <span className="gradient-text font-semibold">
              creating, trying new things, and having fun with it
            </span>
            .&rdquo;
          </blockquote>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-s-default flex flex-col items-center border-t pt-16 text-center"
        >
          <p className="text-p-default mb-2 text-xl font-semibold">
            Let&apos;s work together
          </p>
          <p className="font-dm-mono text-p-muted mb-8 text-sm">
            Got a project in mind? I&apos;d love to hear about it.
          </p>
          <div className="flex gap-4">
            <Link
              href="mailto:amiel.ian.mendoza@gmail.com"
              className="bg-accent-100 hover:bg-accent-200 rounded-full px-6 py-3 text-sm font-medium text-(--color-secondary-300) transition-all"
            >
              Get in Touch
            </Link>
            <Link
              href="/"
              className="border-s-default text-p-default hover:border-accent-100 hover:text-accent-100 rounded-full border px-6 py-3 text-sm transition-all"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default AboutMePage;
