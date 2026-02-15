function VerticalRuler({ position = "left" }) {
  const rulerNumbers = createRuler();

  function createRuler() {
    const result = [];
    for (let i = 0; i <= 1000; i += 50) {
      result.push(i);
    }
    return result;
  }

  const lineClass =
    position === "left"
      ? "min-[900px]:left-20"
      : position === "right"
        ? "min-[900px]:right-20"
        : "left-1/2 top-0 h-[calc(100vh+500px)] w-[1px] bg-s-default -z-10";
  const textClass = position === "left" ? "left-16" : "right-16";

  return (
    <>
      {/* Vertical Line - only visible on hero section with opacity fade */}
      <div
        className={`absolute ${lineClass} top-0 h-[calc(100vh+500px)] w-px`}
        style={{
          background:
            "linear-gradient(to bottom, rgba(12, 55, 65, 1) 0%, rgba(12, 55, 65, 0.5) 50%, rgba(12, 55, 65, 0) 100%)",
        }}
      ></div>
      {/* Numbers - extended fade over more numbers */}
      <div
        className={`font-dm-mono absolute hidden min-[900px]:block ${textClass} text-s-default top-0 mt-8 h-[calc(100vh+500px)] w-px space-y-8`}
      >
        {rulerNumbers.slice(0, 20).map((number, index) => (
          <div
            key={index}
            className={`transform ${
              position === "left" ? "-rotate-90" : "rotate-90"
            }`}
            style={{
              opacity: Math.max(0, 1 - index * 0.05),
            }}
          >
            {number}
          </div>
        ))}
      </div>
    </>
  );
}

export default VerticalRuler;
