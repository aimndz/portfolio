import Image from "next/image";
import { motion } from "motion/react";

function Radar() {
  return (
    <div className="relative max-w-5xl w-full">
      {/* Radar Glow */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Image
          src="/images/radar/radarGlow.svg"
          alt="radar image"
          width={0}
          height={0}
          className="w-full max-w-5xl h-auto"
        />
      </motion.div>

      {/* Animated Radar Circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center items-center w-full aspect-square bg-[#1FD7FF] bg-opacity-[0.03] border border-s-default rounded-full"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center items-center w-[66%] aspect-square bg-[#1FD7FF] bg-opacity-[0.03] border border-s-default rounded-full"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-[50%] aspect-square bg-[#1FD7FF] bg-opacity-[0.03] border border-s-default rounded-full"
          ></motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Radar;
