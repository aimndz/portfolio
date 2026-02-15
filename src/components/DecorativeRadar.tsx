import { motion } from "motion/react";

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
        {/* Radar Sweep Beam */}
        <motion.div
          className="bg-conic-from-90 absolute inset-0 rounded-full from-[#1FD7FF]/10 to-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Middle Circle */}
        <div className="flex h-[66%] w-[66%] items-center justify-center rounded-full border border-[#1FD7FF]/50 bg-[#1FD7FF]/2">
          {/* Inner Circle */}
          <div className="flex h-[50%] w-[50%] items-center justify-center rounded-full border border-[#1FD7FF]/50 bg-[#1FD7FF]/2">
            {/* Center Point */}
            <div className="h-1 w-1 rounded-full bg-[#1FD7FF]/40 shadow-[0_0_10px_#1FD7FF]" />
          </div>
        </div>

        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 h-full w-full opacity-10">
          <div className="absolute top-1/2 left-0 h-px w-full bg-[#1FD7FF]" />
          <div className="absolute top-0 left-1/2 h-full w-px bg-[#1FD7FF]" />
        </div>
      </motion.div>
    </div>
  );
}
