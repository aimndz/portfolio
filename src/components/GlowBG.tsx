function GlowBG() {
  return (
    <div>
      <div
        className="fixed left-0 top-0 -z-30 h-full w-full"
        style={{
          background: "linear-gradient(rgb(6, 26, 31) 20%, rgb(0, 0, 0) 100%)",
        }}
      ></div>
      <div
        className="fixed left-1/2 top-1/2 -z-30 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgb(6, 26, 31), transparent 100%)",
        }}
      ></div>
    </div>
  );
}

export default GlowBG;
