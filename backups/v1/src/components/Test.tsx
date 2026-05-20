"use client";

import { motion } from "motion/react";

function Test() {
  return (
    <motion.div
      className="h-32 w-32 bg-red-500"
      initial={{ backgroundColor: "rgb(0, 255, 0)", scale: 0 }}
      whileInView={{ backgroundColor: "rgb(255, 0, 0)", scale: 1 }}
    />
  );
}

export default Test;
