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
      ? "left-5 min-[900px]:left-20"
      : "right-5 min-[900px]:right-20";
  const textClass = position === "left" ? "left-16" : "right-16";

  return (
    <>
      {/* Vertical Line */}
      <div
        className={`fixed ${lineClass} top-0 h-full w-[1px] bg-s-default`}
      ></div>
      <div
        className={`absolute hidden min-[900px]:block ${textClass} top-0 h-full w-[1px] text-s-default space-y-8 mt-8`}
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
