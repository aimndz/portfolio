import CornerAccent from "../../public/icons/CornerAccent";
import { motion } from "motion/react";

function SectionTitle({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="relative z-50 mb-2 inline-block p-4 font-montserrat text-xl font-extrabold text-accent-100 md:mb-3 md:p-8 md:text-3xl">
        <CornerAccent className="absolute left-0 top-0" />
        <p>{title}</p>
        <div>
          <CornerAccent className="absolute bottom-0 right-0 rotate-180" />
        </div>
      </h2>
    </motion.div>
  );
}

export default SectionTitle;
