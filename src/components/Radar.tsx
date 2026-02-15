import Image from "next/image";
import { useEffect, useState } from "react";
import {
  motion,
  MotionValue,
  useTransform,
  useMotionValue,
} from "motion/react";

interface RadarProps {
  mouseX?: MotionValue<number>;
  mouseY?: MotionValue<number>;
  isHovered?: boolean;
}

function Radar({ mouseX, mouseY, isHovered = false }: RadarProps) {
  // Local fallbacks if props aren't provided
  const localX = useMotionValue(50);
  const localY = useMotionValue(50);

  const x = mouseX || localX;
  const y = mouseY || localY;

  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // Convert percentages to CSS strings
  const glowX = useTransform(x, (v) => `${v}%`);
  const glowY = useTransform(y, (v) => `${v}%`);

  // All useTransform hooks called unconditionally at the top level
  const outerMask = useTransform(
    [glowX, glowY],
    ([gx, gy]) =>
      `radial-gradient(150px circle at ${gx} ${gy}, black, transparent)`,
  );
  const innerMask = useTransform(
    [glowX, glowY],
    ([gx, gy]) =>
      `radial-gradient(120px circle at ${gx} ${gy}, black, transparent)`,
  );
  const centerMask = useTransform(
    [glowX, glowY],
    ([gx, gy]) =>
      `radial-gradient(80px circle at ${gx} ${gy}, black, transparent)`,
  );

  return (
    <div className="w-full">
      <div className="relative">
        {/* Radar Glow (Base Static Glow) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Image
            src="/images/radar/radarGlow.svg"
            alt="radar image"
            width={0}
            height={0}
            className="h-auto w-full max-w-5xl"
          />
        </motion.div>

        {/* Animated Radar Circles with Localized Border Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-s-default relative flex aspect-square w-full items-center justify-center rounded-full border bg-[#1FD7FF]/3"
        >
          {/* Mouse tracking border highlight layer */}
          {!isTouch && (
            <motion.div
              className="border-accent-100 absolute inset-0 rounded-full border-2 transition-opacity duration-300"
              style={{
                opacity: isHovered ? 1 : 0,
                maskImage: outerMask,
                WebkitMaskImage: outerMask,
              }}
            />
          )}

          {/* Radar Sweep Beam */}
          <motion.div
            className="bg-conic-from-90 absolute inset-0 transform-gpu rounded-full from-[#1FD7FF]/20 to-transparent"
            style={{ willChange: "transform" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="border-s-default relative z-10 flex aspect-square w-[66%] items-center justify-center rounded-full border bg-[#1FD7FF]/3"
          >
            {/* Inner highlight */}
            {!isTouch && (
              <motion.div
                className="border-accent-100 pointer-events-none absolute inset-0 rounded-full border-2 transition-opacity duration-300"
                style={{
                  opacity: isHovered ? 0.6 : 0,
                  maskImage: innerMask,
                  WebkitMaskImage: innerMask,
                }}
              />
            )}

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="border-s-default aspect-square w-[50%] rounded-full border bg-[#1FD7FF]/3"
            >
              {/* Center highlight */}
              {!isTouch && (
                <motion.div
                  className="border-accent-100 h-full w-full rounded-full border-2 transition-opacity duration-300"
                  style={{
                    opacity: isHovered ? 0.4 : 0,
                    maskImage: centerMask,
                    WebkitMaskImage: centerMask,
                  }}
                />
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Radar;
