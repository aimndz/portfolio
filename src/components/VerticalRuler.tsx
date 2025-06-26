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
        : "left-1/2 top-0 h-full w-[1px] bg-s-default -z-10";
  const textClass = position === "left" ? "left-16" : "right-16";

  return (
    <>
      {/* Vertical Line */}
      <div
        className={`fixed ${lineClass} top-0 h-full w-[1px] bg-s-default`}
      ></div>
      <div
        className={`font-dm_mono absolute hidden min-[900px]:block ${textClass} top-0 mt-8 h-full w-[1px] space-y-8 text-s-default`}
      >
        {rulerNumbers.map((number, index) => (
          <div
            key={index}
            className={`transform ${
              position === "left" ? "-rotate-90" : "rotate-90"
            }`}
          >
            {number}
          </div>
        ))}
      </div>
    </>
  );
}

export default VerticalRuler;
