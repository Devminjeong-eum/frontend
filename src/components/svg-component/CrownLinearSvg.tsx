type TCrownStyles = {
  [key: string]: {
    base: string[];
    stop: string[];
    id: string;
    fillUrl: string;
  };
};

const crownStyles: TCrownStyles = {
  '1': {
    base: ['#4F72EA', '#5072E7'],
    stop: ['#6583EE', '#6583EE'],
    id: 'paint0_linear_1110_2229',
    fillUrl: 'url(#paint0_linear_1110_2229)',
  },
  '2': {
    base: ['#878CFF', '#9296FF'],
    stop: ['#86A1FF', '#86A1FF'],
    id: 'paint0_linear_1110_2254',
    fillUrl: 'url(#paint0_linear_1110_2254)',
  },
  '3': {
    base: ['#B1C2FF', '#D2DCFF'],
    stop: ['#C6D3FF', '#C6D3FF'],
    id: 'paint0_linear_1319_2235',
    fillUrl: 'url(#paint0_linear_1319_2235)',
  },
};

type Props = {
  className?: string;
  rank: string;
};

export default function CrownLinearSvg({ className, rank }: Props) {
  return (
    <svg
      className={className}
      width="27"
      height="28"
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.4">
        <ellipse
          cx="13.5022"
          cy="3.76919"
          rx="3.76798"
          ry="3.76919"
          fill={crownStyles[rank].fillUrl}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7071 6.20589C13.0829 5.49712 14.0984 5.49712 14.4741 6.20589L18.8927 14.5399C19.1908 15.1022 19.9314 15.2466 20.419 14.8375L25.3578 10.694C26.0875 10.0817 27.1789 10.7399 26.978 11.671L23.6241 27.211C23.5247 27.6714 23.1176 28.0001 22.6466 28.0001H22.2721H4.73027H4.35577C3.88478 28.0001 3.47764 27.6714 3.37827 27.211L0.0244011 11.671C-0.176562 10.7399 0.914858 10.0817 1.64463 10.694L6.70726 14.9414C7.19481 15.3505 7.93538 15.206 8.2335 14.6438L12.7071 6.20589Z"
        fill={crownStyles[rank].fillUrl}
      />

      <defs>
        <linearGradient
          id={crownStyles[rank].id}
          x1="13.5022"
          y1="0"
          x2="13.5022"
          y2="9.94073"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={crownStyles[rank].base[0]} />
          <stop
            offset="1"
            stopColor={crownStyles[rank].base[1]}
            stopOpacity="0.4"
          />
        </linearGradient>
        <linearGradient
          id={crownStyles[rank].id}
          x1="13.5012"
          y1="5.67432"
          x2="13.5012"
          y2="29.0813"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={crownStyles[rank].stop[0]} />
          <stop
            offset="1"
            stopColor={crownStyles[rank].stop[1]}
            stopOpacity="0.12"
          />
        </linearGradient>
      </defs>
    </svg>
  );
}
