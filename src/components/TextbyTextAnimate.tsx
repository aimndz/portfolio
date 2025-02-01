import { motion } from "motion/react";

function TextbyTextAnimate({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <p className={`flex text-p-muted tracking-custom uppercase ${className}`}>
      {text.split("").map((letter, index) => {
        if (letter === " ") {
          return <span key={index}>&nbsp;</span>;
        }

        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: index * 0.1,
              },
            }}
          >
            {letter}
          </motion.span>
        );
      })}
    </p>
  );
}

export default TextbyTextAnimate;
