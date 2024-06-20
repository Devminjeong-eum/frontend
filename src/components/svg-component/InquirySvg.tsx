type Props = {
  width: number;
  height: number;
};
export default function InquirySvg({ width, height }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2220_3800)">
        <rect width="24" height="24" fill="white" />
        <path
          d="M18 6H19C21.7614 6 24 8.23858 24 11C24 13.7614 21.7614 16 19 16L18 6Z"
          fill="#BEC7FF"
        />
        <path
          d="M6 6H5C2.23858 6 0 8.23858 0 11C0 13.7614 2.23858 16 5 16L6 6Z"
          fill="#BEC7FF"
        />
        <path
          d="M19 16V10C19 6.13401 15.866 3 12 3V3C8.13401 3 5 6.13401 5 10V15C5.38889 16.0667 6.86667 18.36 9.66667 19"
          stroke="#7086FF"
          strokeWidth="1.5"
        />
        <rect x="8" y="17" width="5" height="3" rx="1.5" fill="#BEC7FF" />
      </g>
      <defs>
        <clipPath id="clip0_2220_3800">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
