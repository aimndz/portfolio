import CornerAccent from "../../public/icons/CornerAccent";
import { motion } from "motion/react";

function SectionTitle({ title }: { title: string }) {
  return (
    <motion.h2
      className="glowing-gradient-text relative mb-10 inline-block p-4 font-montserrat text-xl font-extrabold md:mb-20 md:p-8 md:text-3xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CornerAccent className="absolute left-0 top-0" />
      <motion.p>{title}</motion.p>
      <motion.div layout>
        <CornerAccent className="absolute bottom-0 right-0 rotate-180" />
      </motion.div>
    </motion.h2>
  );
}

export default SectionTitle;
