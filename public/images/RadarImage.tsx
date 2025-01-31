function RadarImage() {
  return (
    <svg
      className="w-full"
      viewBox="0 0 900 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="449.5"
        cy="456.5"
        r="405"
        fill="#128199"
        fillOpacity="0.03"
        stroke="#0C3741"
      />
      <circle
        cx="449.5"
        cy="456.5"
        r="286"
        fill="#1FD7FF"
        fillOpacity="0.03"
        stroke="#0C3741"
      />
      <circle
        cx="449"
        cy="457"
        r="180.5"
        fill="#1FD7FF"
        fillOpacity="0.03"
        stroke="#0C3741"
      />
      <g filter="url(#filter0_f_63_69)">
        <circle
          cx="450"
          cy="450"
          r="399"
          fill="url(#paint0_radial_63_69)"
          fillOpacity="0.1"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_63_69"
          x="0.200001"
          y="0.200001"
          width="899.6"
          height="899.6"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="25.4"
            result="effect1_foregroundBlur_63_69"
          />
        </filter>
        <radialGradient
          id="paint0_radial_63_69"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(450 450) rotate(90) scale(399)"
        >
          <stop stopColor="#17D6FF" />
          <stop offset="1" stopColor="#062B33" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default RadarImage;
