function GlowBG() {
  return (
    <div
      className="absolute left-1/2 top-[-20vh] -z-10 aspect-square w-full max-w-7xl -translate-x-1/2 transform rounded-full opacity-30 min-[300px]:top-[-30vh] min-[600px]:top-[-60vh] min-[750px]:top-[-70vh] min-[850px]:top-[-80vh] min-[1000px]:top-[-100vh]"
      style={{
        background:
          "radial-gradient(circle at center, rgba(23, 214, 255, 1) 0%, rgba(23, 214, 255, 0.3) 30%, rgba(23, 214, 255, 0) 70%)",
      }}
    />
  );
}

export default GlowBG;
