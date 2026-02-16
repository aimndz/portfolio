"use client";
import { motion, Variants } from "motion/react";

interface TextbyTextAnimateProps {
  text: string;
  className?: string;
  size?: string;
  type?: "letter" | "word";
  animateAlways?: boolean;
}

function TextbyTextAnimate({
  text,
  className,
  size = "text-base",
  type = "word",
  animateAlways = false,
}: TextbyTextAnimateProps) {
  const items = type === "letter" ? text.split("") : text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: type === "letter" ? 0.05 : 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={animateAlways ? "visible" : undefined}
      whileInView={!animateAlways ? "visible" : undefined}
      viewport={{ once: true, amount: 0.2 }}
      className={`flex flex-wrap ${size} ${className}`}
    >
      {items.map((item, index) => (
        <motion.span
          variants={child}
          key={index}
          className={`${type === "word" ? "mr-[0.3em]" : ""} inline-block`}
        >
          {item === " " ? "\u00A0" : item === "" ? "\u00A0" : item}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default TextbyTextAnimate;
