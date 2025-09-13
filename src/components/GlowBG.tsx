import Image from "next/image";

function GlowBG() {
  return (
    <div className="absolute right-0 top-0 -z-30 h-[60vh] w-full md:h-screen">
      <Image
        src="/images/bg-flare.webp"
        alt="Background flare"
        fill
        priority
        className="object-cover object-right"
      />
    </div>
  );
}

export default GlowBG;
