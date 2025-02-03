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
    <div className="flex flex-col items-center h-screen space-y-4 ">
      <div className="z-30 text-center mt-48">
        <div className="flex gap-3 items-center text-p-muted tracking-custom justify-center uppercase -mb-11 mt-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <MapPin />
          </motion.div>
          <TextbyTextAnimate text={country} />
        </div>
        <h1 className="flex justify-center font-montserrat font-extrabold text-[10rem] ">
          {["A", "I", "M"].map((letter, index) => (
            <motion.span
              key={index}
              className={
                index === 2
                  ? "ml-[-12px] gradient-text"
                  : "mr-[-4px] gradient-text"
              }
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
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
        <div className="flex justify-center tracking-custom uppercase text-heading -mt-10">
          <TextbyTextAnimate
            text={fullName}
            className="text-accent-100 font-bold"
          />
        </div>
        <div className="flex text-p-muted tracking-custom uppercase mt-3">
          <TextbyTextAnimate text={position} className="font-bold" />
        </div>
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
      <div className="absolute flex justify-center items-center w-full">
        <Radar />
        <div className="absolute inset-0">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-s-default"></div>
        </div>
        <div className="absolute bottom-72 left-1/2 transform -translate-x-1/2 z-10">
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
  );
}

export default Hero;
