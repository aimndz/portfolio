import { content } from "@/lib/constants";
import ArrowDown from "../../../public/icons/ArrowDown";
import CrossHair from "../../../public/icons/CrossHair";
import Github from "../../../public/icons/Github";
import Instagram from "../../../public/icons/Instagram";
import LinkedIn from "../../../public/icons/LinkedIn";
import MapPin from "../../../public/icons/MapPin";
import RadarImage from "../../../public/images/RadarImage";
import TextbyTextAnimate from "../TextbyTextAnimate";
import { motion } from "motion/react";

function Hero() {
  const { country, fullName, position } = content;

  return (
    <div className="flex flex-col items-center h-screen space-y-4 ">
      <div className="z-30 text-center mt-48">
        <div className="flex gap-3 items-center text-p-muted tracking-custom justify-center uppercase -mb-11 mt-3">
          <MapPin />
          <TextbyTextAnimate text={country} />
        </div>
        <h1 className="flex justify-center font-montserrat font-extrabold text-[10rem] gradient-text">
          {["A", "I", "M"].map((letter, index) => (
            <motion.span
              key={index}
              className={index === 2 ? "ml-[-12px]" : "mr-[-4px]"}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.3,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <div className="flex justify-center tracking-custom uppercase text-heading -mt-10">
          <TextbyTextAnimate text={fullName} className="text-accent-100" />
        </div>
        <div className="flex text-p-muted tracking-custom uppercase mt-3">
          <TextbyTextAnimate text={position} />
        </div>
        <div className="flex justify-center gap-3 mt-3">
          <Github />
          <Instagram />
          <LinkedIn />
        </div>
      </div>
      <div className="absolute top-40 flex justify-center items-center w-full">
        <div className="max-w-5xl w-full ">
          <RadarImage />
        </div>
        <div className="absolute inset-0">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-s-default"></div>
        </div>
        <div className="absolute bottom-72 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            animate={{
              y: [0, 15, 0],
              transition: { duration: 2, repeat: Infinity },
            }}
            className="cursor-pointer"
          >
            <ArrowDown />
          </motion.div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center z-50">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{
              scale: [0.8, 1, 0.8],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
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
