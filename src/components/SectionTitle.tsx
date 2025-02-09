import CornerAccent from "../../public/icons/CornerAccent";
import { motion } from "motion/react";

function SectionTitle({ title }: { title: string }) {
  return (
    <motion.h2
      className="relative text-xl md:text-3xl font-montserrat font-extrabold md:mb-20 mb-10 inline-block p-4 md:p-8 glowing-gradient-text"
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
    >
      <CornerAccent className="absolute top-0 left-0" />
      <motion.p>{title}</motion.p>
      <motion.div layout>
        <CornerAccent className="absolute right-0 bottom-0 rotate-180" />
      </motion.div>
    </motion.h2>
  );
}

export default SectionTitle;
