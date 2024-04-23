export default function LockSvg() {
  return (
    <svg
      width="156"
      height="156"
      viewBox="0 0 156 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="52"
        y="24"
        width="52"
        height="80"
        rx="25"
        stroke="#465DDA"
        strokeWidth="10"
      />
      <rect x="29" y="60" width="98" height="84" rx="10" fill="#EEF0F8" />
      <g filter="url(#filter0_d_112_4517)">
        <rect x="72" y="94" width="12" height="26" rx="6" fill="#465DDA" />
        <ellipse cx="78" cy="96" rx="10" ry="10" fill="#465DDA" />
      </g>
      <defs>
        <filter
          id="filter0_d_112_4517"
          x="63"
          y="81"
          width="32"
          height="46"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.132726 0 0 0 0 0.147765 0 0 0 0 0.270085 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_112_4517"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_112_4517"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
