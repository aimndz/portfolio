import { content } from "@/lib/constants";
import SectionTitle from "../SectionTitle";
import { motion } from "motion/react";

function Technologies() {
  const { technologies } = content;

  return (
    <div className="mt-48 max-w-4xl mx-5">
      <SectionTitle title="Technologies" />
      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-4 gap-3 ">
        {technologies.map((tech, index) => {
          return (
            <motion.div
              key={index}
              className="flex items-center space-x-4 bg-s-muted md:p-4 p-2 rounded-lg border border-s-default relative overflow-hidden"
              initial={{ opacity: 0, y: 100, filter: "blur(2px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.1 }}
            >
              <div className="glow-top"></div>
              <i>{tech.icon}</i>
              <p className="text-p-default">{tech.name}</p>
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[150%] aspect-square rounded-full blur-lg bg-white opacity-10"></div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Technologies;
