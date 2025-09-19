import { content } from "@/lib/constants";
import SectionTitle from "../SectionTitle";
import { motion } from "motion/react";

function Technologies() {
  const { technologies } = content;

  return (
    <div className="mx-5 mt-48 max-w-4xl">
      <SectionTitle title="Technologies" />
      <div className="grid grid-cols-1 gap-3 min-[500px]:grid-cols-2 md:grid-cols-4">
        {technologies.map((tech, index) => {
          return (
            <motion.div
              key={index}
              className="relative flex items-center space-x-4 overflow-hidden rounded-lg border border-s-default bg-s-muted p-2 md:p-3"
              initial={{ opacity: 0, y: 100, filter: "blur(2px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.1 }}
            >
              {/* <div className="glow-top"></div> */}
              <i>{tech.icon}</i>
              <p className="text-p-default">{tech.name}</p>
              {/* <div className="absolute left-1/2 top-10 aspect-square w-[150%] -translate-x-1/2 transform rounded-full bg-white opacity-10 blur-lg"></div> */}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Technologies;
