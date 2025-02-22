import Image from "next/image";
import { motion } from "motion/react";

function Radar() {
  return (
    <div className="mx-5 w-full md:-mt-[22rem]">
      <div className="relative">
        {/* Radar Glow */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Image
            src="/images/radar/radarGlow.svg"
            alt="radar image"
            width={0}
            height={0}
            className="h-auto w-full max-w-5xl"
          />
        </motion.div>

        {/* Animated Radar Circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex aspect-square w-full items-center justify-center rounded-full border border-s-default bg-[#1FD7FF] bg-opacity-[0.03]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex aspect-square w-[66%] items-center justify-center rounded-full border border-s-default bg-[#1FD7FF] bg-opacity-[0.03]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="aspect-square w-[50%] rounded-full border border-s-default bg-[#1FD7FF] bg-opacity-[0.03]"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Radar;
