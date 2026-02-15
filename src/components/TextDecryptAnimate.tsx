"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "motion/react";

interface TextDecryptAnimateProps {
  text: string;
  className?: string;
  size?: string;
  delay?: number;
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+";

export default function TextDecryptAnimate({
  text,
  className = "",
  size = "text-base",
  delay = 0,
}: TextDecryptAnimateProps) {
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const decrypt = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (char === " ") return " ";
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join(""),
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  }, [text]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      decrypt();
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [decrypt, delay]);

  return (
    <motion.div
      className={`${size} ${className} font-dm-mono`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isAnimating ? 1 : 0 }}
    >
      {displayText ||
        text
          .split("")
          .map((c) => (c === " " ? " " : " "))
          .join("")}
    </motion.div>
  );
}
