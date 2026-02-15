import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface DecorativeRadarProps {
  className?: string;
  size?: string;
}

export default function DecorativeRadar({
  className = "",
  size = "w-[80vw] max-w-[1200px]",
}: DecorativeRadarProps) {
  return (
    <div
      className={`pointer-events-none absolute -z-10 flex items-center justify-center overflow-hidden opacity-20 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`relative flex aspect-square items-center justify-center rounded-full border border-[#1FD7FF]/50 bg-[#1FD7FF]/2 ${size}`}
      >
        {/* Middle Circle */}
        <div className="flex h-[66%] w-[66%] items-center justify-center rounded-full border border-[#1FD7FF]/50 bg-[#1FD7FF]/2">
          {/* Inner Circle */}
          <div className="flex h-[50%] w-[50%] items-center justify-center rounded-full border border-[#1FD7FF]/50 bg-[#1FD7FF]/2">
            {/* Center Point */}
            <div className="h-1 w-1 rounded-full bg-[#1FD7FF]/40 shadow-[0_0_10px_#1FD7FF]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
