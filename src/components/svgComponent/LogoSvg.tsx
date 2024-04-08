export default function LogoSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 102 102">
      <path
        fill="url(#a)"
        d="M80 13c10.493 0 19 8.507 19 19v34.472C99 79.466 88.466 90 75.472 90H61V32c0-10.493 8.507-19 19-19Z"
      />
      <rect
        width="77"
        height="38"
        x="78"
        y="13"
        fill="url(#b)"
        rx="19"
        transform="rotate(90 78 13)"
      />
      <path
        fill="#4D71E8"
        d="M23.512 13C34.827 13 44 22.173 44 33.488V90H25.457C12.502 90 2 79.498 2 66.543v-32.03C2 22.63 11.631 13 23.512 13Z"
      />
      <path
        fill="#4D71E8"
        d="M2 35c0-12.15 9.85-22 22-22h13c11.046 0 20 8.954 20 20v4c0 11.046-8.954 20-20 20H21C10.507 57 2 48.493 2 38v-3Z"
      />
      <mask
        id="c"
        width="51"
        height="45"
        x="6"
        y="13"
        maskUnits="userSpaceOnUse"
        style={{ maskType: 'alpha' }}
      >
        <path
          fill="#516AEF"
          d="M6 33c0-11.046 8.954-20 20-20h11c11.046 0 20 8.954 20 20v5c0 11.046-8.954 20-20 20H26C14.954 58 6 49.046 6 38v-5Z"
        />
      </mask>
      <g mask="url(#c)">
        <rect
          width="43.582"
          height="30"
          x="31.036"
          y="24"
          fill="url(#d)"
          rx="15"
        />
      </g>
      <path
        fill="#4D71E8"
        d="M2 54h58c9.941 0 18 8.059 18 18s-8.059 18-18 18H27C13.193 90 2 78.807 2 65V54Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1="80"
          x2="80"
          y1="13"
          y2="90"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7F71EF" />
          <stop offset="1" stop-color="#4537B9" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="78"
          x2="155"
          y1="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5D6DFF" />
          <stop offset="1" stop-color="#3B2887" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="44.018"
          x2="43.995"
          y1="34"
          y2="67.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#4D71E8" />
          <stop offset="1" stop-color="#4B4BC6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
