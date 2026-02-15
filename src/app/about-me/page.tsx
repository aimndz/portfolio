"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export default function AboutMePage() {
  return (
    <main className="font-montserrat text-p-default selection:bg-accent-100 selection:text-secondary-300 relative min-h-screen items-center justify-center overflow-hidden bg-(--color-secondary-300) px-6">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-accent-100/5 absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            sorry, still <span className="gradient-text">cooking</span>
          </h1>

          <Link
            href="/"
            className="group border-s-default bg-s-muted hover:border-accent-100 hover:text-accent-100 flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            <span>Go Back</span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
