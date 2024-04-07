export default function TwoButtonSvg() {
  return (
    <svg
      calcMode={'customSvg'}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="27"
        height="27"
        rx="13.5"
        stroke="#ECF0F9"
        fill="var(--svg-fill-color)"
      />
      <path
        d="M13 10L9 14L13 18"
        stroke="var(--svg-stroke-color)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 10L14 14L18 18"
        stroke="var(--svg-stroke-color)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
