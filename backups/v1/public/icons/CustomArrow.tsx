interface CustomArrowProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

function CustomArrow({
  width = 42,
  height = 58,
  color = "white",
  strokeWidth = 1,
  className,
}: CustomArrowProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 42 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M40.8908 38.0919L27.3915 51.5912C26.2916 52.6911 23.4222 54.8215 20.7442 54.5433C18.0662 54.2652 15.7543 52.5534 14.9332 51.7322L1.99998 38.799"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M39.8908 19.0919L26.3915 32.5912C25.2916 33.6911 22.4222 35.8215 19.7442 35.5433C17.0662 35.2652 14.7543 33.5534 13.9332 32.7322L0.999975 19.799"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default CustomArrow;
