import { motion } from "motion/react";

function TextbyTextAnimate({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <p
      className={`flex md:tracking-widest tracking-widest  uppercase ${className}`}
    >
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
