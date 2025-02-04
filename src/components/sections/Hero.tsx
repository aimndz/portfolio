import { content } from "@/lib/constants";
import ArrowDown from "../../../public/icons/ArrowDown";
import CrossHair from "../../../public/icons/CrossHair";
import Github from "../../../public/icons/Github";
import Instagram from "../../../public/icons/Instagram";
import LinkedIn from "../../../public/icons/LinkedIn";
import MapPin from "../../../public/icons/MapPin";
import TextbyTextAnimate from "../TextbyTextAnimate";
import { motion } from "motion/react";
import Radar from "../Radar";

function Hero() {
  const { country, fullName, position } = content;

  return (
    <div className="flex flex-col items-center h-[calc(100vh-8rem)] space-y-4 relative">
      {/* Hero Content */}
      <div className="z-30 text-center md:mt-48 mt-32">
        {/* Country */}
        <div className="flex gap-3 items-center text-sm md:text-base text-p-muted justify-center uppercase -mb-11 mt-3">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <MapPin />
          </motion.div>
          <TextbyTextAnimate text={country} />
        </div>

        {/* AIM */}
        <h1 className="flex justify-center text-[8rem] md:text-[10rem] font-montserrat font-extrabold ">
          {["A", "I", "M"].map((letter, index) => (
            <motion.span
              key={index}
              className={
                index === 2
                  ? "ml-[-12px] gradient-text"
                  : "mr-[-4px] gradient-text"
              }
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: index * 0.5,
                },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* Full name */}
        <div className="flex justify-center text-sm md:text-base uppercase text-heading -mt-10">
          <TextbyTextAnimate
            text={fullName}
            className="text-accent-100 font-bold"
          />
        </div>

        {/* Position */}
        <div className="flex text-p-muted text-sm md:text-base justify-center uppercase mt-3">
          <TextbyTextAnimate text={position} className="text-p-default" />
        </div>

        {/* Socials Icon */}
        <motion.div
          className="flex justify-center gap-3 mt-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Github />
          <Instagram />
          <LinkedIn />
        </motion.div>
      </div>

      <div className="absolute bottom-28 min-[500px]:bottom-0 min-[750px]:-bottom-64 flex justify-center items-center w-full">
        <Radar />
        <div className="absolute inset-0">
          <div>
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[calc(100vw-10px)] h-[1px] bg-s-default -z-10"></div>

            {/* Crosshair */}
            <div className="absolute inset-0 flex justify-center items-center z-50">
              <motion.div
                initial={{ scale: 0.8, rotate: 135, opacity: 0 }}
                animate={{
                  scale: [0.8, 1, 0.8],
                  rotate: 0,
                  opacity: 1,
                  transition: {
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                    },
                    rotate: {
                      duration: 0.5,
                      delay: 1.3,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                <CrossHair />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="absolute bottom-10 min-[500px]:bottom-10 min-[750px]:bottom-60 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [0, 15, 0],
              opacity: 1,
              transition: {
                opacity: {
                  duration: 1,
                  delay: 1,
                },
                y: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                },
              },
            }}
            className="cursor-pointer"
          >
            <ArrowDown />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
