import { content } from "@/lib/constants";
import ArrowDown from "../../../public/icons/CustomArrow";
import CrossHair from "../../../public/icons/CrossHair";
import Github from "../../../public/icons/Github";
import Instagram from "../../../public/icons/Instagram";
import LinkedIn from "../../../public/icons/LinkedIn";
import Logo from "../../../public/icons/Logo";
import MapPin from "../../../public/icons/MapPin";
import TextbyTextAnimate from "../TextbyTextAnimate";
import { motion, useMotionValue, useSpring } from "motion/react";
import Radar from "../Radar";
import Link from "next/link";
import { Paperclip } from "lucide-react";
import CornerAccent from "../../../public/icons/CornerAccent";
import { useEffect, useRef, useState } from "react";

function Hero() {
  const { country, fullName, position } = content;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse transformation for 3D Tilt (Grid + Radar)
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  // Mouse position for localized glow (0 to 100)
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const springTiltX = useSpring(tiltX, { stiffness: 100, damping: 20 });
  const springTiltY = useSpring(tiltY, { stiffness: 100, damping: 20 });

  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Rotate 5 degrees max for subtle effect
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    tiltX.set(rotateX);
    tiltY.set(rotateY);

    // Set relative mouse positions for glow
    mouseX.set((x / rect.width) * 100);
    mouseY.set((y / rect.height) * 100);

    if (!isHovered) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
    mouseX.set(50);
    mouseY.set(50);
    setIsHovered(false);
  };

  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("about-me");
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen w-full flex-col items-center overflow-x-clip"
      style={{
        perspective: isTouch ? "none" : "1200px",
        contain: "layout style",
      }}
    >
      {/* 3D Scene Layer (Grid + Radar) */}
      <motion.div
        className="pointer-events-none absolute inset-0 overflow-visible"
        style={{
          rotateX: isTouch ? 0 : springTiltX,
          rotateY: isTouch ? 0 : springTiltY,
          transformStyle: isTouch ? "flat" : "preserve-3d",
          willChange: isTouch ? "auto" : "transform",
        }}
      >
        {/* Background Grid */}
        <div
          className="absolute inset-x-0 top-0 h-full opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #1FD7FF 1px, transparent 1px), linear-gradient(to bottom, #1FD7FF 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            transform: isTouch ? "none" : "translateZ(-50px)",
          }}
        />

        {/* Radar & Crosshair Container */}
        <div className="absolute inset-0 flex items-center justify-center overflow-visible">
          <div
            className="group relative w-full max-w-4xl translate-y-[10%] cursor-crosshair overflow-visible md:translate-y-[10%]"
            style={{ transformStyle: isTouch ? "flat" : "preserve-3d" }}
          >
            <Radar mouseX={mouseX} mouseY={mouseY} isHovered={isHovered} />

            {/* Horizontal Line */}
            <div
              className="bg-s-default absolute top-1/2 left-1/2 -z-10 h-px w-screen -translate-x-1/2 opacity-30"
              style={{
                transform: isTouch ? "translateX(-50%)" : "translateZ(-10px)",
              }}
            ></div>

            {/* Crosshair — Centered */}
            <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center">
              <motion.div
                style={{ transform: isTouch ? "none" : "translateZ(30px)" }}
                initial={{ scale: 0.8, rotate: 135, opacity: 0 }}
                animate={{
                  scale: [0.8, 1, 0.8],
                  rotate: 0,
                  opacity: 1,
                  transition: {
                    scale: {
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "loop",
                    },
                    rotate: {
                      duration: 0.8,
                      delay: 1.3,
                      ease: "easeOut",
                    },
                    opacity: { duration: 0.8 },
                  },
                }}
              >
                <CrossHair />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 mx-5 mt-32 text-center md:mt-56"
        {...(!isTouch && {
          "data-scroll": true,
          "data-scroll-speed": "0.1",
        })}
        initial={{ y: 0 }}
        animate={{
          y: isTouch ? 0 : [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: isTouch ? 0 : Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Shadow Overlay for depth */}
        <div
          className={`absolute inset-0 -z-10 scale-150 transform-gpu rounded-full bg-black/5 opacity-50 ${isTouch ? "blur-xl" : "blur-3xl"}`}
        />

        {/* Corner Brackets Framing Content */}
        <div className="pointer-events-none absolute -inset-10 hidden md:block">
          <CornerAccent className="absolute top-0 left-0 opacity-20" />
          <CornerAccent className="absolute top-0 right-0 rotate-90 opacity-20" />
          <CornerAccent className="absolute bottom-0 left-0 -rotate-90 opacity-20" />
          <CornerAccent className="absolute right-0 bottom-0 rotate-180 opacity-20" />
        </div>

        {/* Country */}
        <div className="font-dm-mono text-p-muted mb-2 flex items-center justify-center gap-3 text-sm tracking-[0.2em] uppercase drop-shadow-sm md:text-base">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <MapPin />
          </motion.div>
          <TextbyTextAnimate text={country} />
        </div>

        {/* Logo */}
        <div className="relative mx-5 flex h-28 items-center justify-center drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] filter">
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8,
                delay: 0.6,
                ease: "easeOut",
              },
            }}
            style={{
              height: "100%",
              width: "auto",
            }}
          >
            {/* Logo Subtle Pulse */}
            <motion.div
              className="bg-accent-100/10 absolute inset-0 rounded-full blur-2xl"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <Logo className="relative z-10 h-full w-60 md:w-auto" />
          </motion.div>
        </div>

        {/* Full name */}
        <div className="font-montserrat text-heading mt-1 flex justify-center uppercase [text-shadow:0_4px_8px_rgba(0,0,0,0.5)] md:text-base">
          <TextbyTextAnimate
            text={fullName}
            size="text-3xl"
            className="text-accent-100 font-semibold tracking-tight uppercase"
          />
        </div>

        {/* Position */}
        <div className="font-dm-mono text-p-muted -mt-1 flex justify-center text-sm tracking-[0.2em] uppercase [text-shadow:0_2px_4px_rgba(0,0,0,0.3)] md:text-base">
          <TextbyTextAnimate
            text={position}
            className="text-p-muted uppercase"
          />
        </div>

        {/* Social Icons */}
        <motion.div
          className="mt-2 flex items-center justify-center gap-6 drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] filter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Link
            href={content.socialLinks.github}
            target="_blank"
            className="block transition-transform hover:scale-110"
          >
            <Github />
          </Link>
          <Link
            href={content.socialLinks.instagram}
            target="_blank"
            className="block transition-transform hover:scale-110"
          >
            <Instagram />
          </Link>
          <Link
            href={content.socialLinks.linkedin}
            target="_blank"
            className="block transition-transform hover:scale-110"
          >
            <LinkedIn />
          </Link>
          <Link
            href={content.socialLinks.resume}
            target="_blank"
            className="block transition-transform hover:scale-110 md:hidden"
          >
            <Paperclip className="text-p-muted" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Arrow Down */}
      <div className="z-20 mt-auto mb-20">
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, 10, 0],
            opacity: [0, 1, 1],
            transition: {
              opacity: {
                duration: 1,
                delay: 1.5,
              },
              y: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              },
            },
          }}
          onClick={scrollToAboutMe}
          className="group flex cursor-pointer flex-col items-center gap-2"
        >
          <span className="font-dm-mono text-p-muted text-[9px] tracking-widest uppercase opacity-0 transition-opacity group-hover:opacity-100">
            Discover More
          </span>
          <ArrowDown />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
