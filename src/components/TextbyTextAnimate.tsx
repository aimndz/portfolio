import { motion } from "motion/react";

function TextbyTextAnimate({
  text,
  className,
  size = "text-base",
}: {
  text: string;
  className?: string;
  size?: string;
}) {
  return (
    <p className={`flex ${size} ${className}`}>
      {text.split("").map((letter, index) => {
        if (letter === " ") {
          return <span key={index}>&nbsp;</span>;
        }

        return (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
                delay: index * 0.05,
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
