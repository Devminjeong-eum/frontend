import { ComponentProps } from 'react';

export default function FillArrowSvg(props: ComponentProps<'svg'>) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.09038 3.58517C5.28943 3.30081 5.71057 3.30081 5.90962 3.58517L8.44929 7.21327C8.68126 7.54466 8.44418 8 8.03967 8H2.96033C2.55582 8 2.31874 7.54466 2.55071 7.21327L5.09038 3.58517Z"
        fill="currentColor"
      />
    </svg>
  );
}
