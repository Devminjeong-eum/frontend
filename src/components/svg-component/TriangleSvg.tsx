import React from 'react';

export default function TriangleSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="9"
      height="10"
      viewBox="0 0 9 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.09038 3.08517C4.28943 2.80081 4.71057 2.80081 4.90962 3.08517L7.44929 6.71327C7.68126 7.04466 7.44418 7.5 7.03967 7.5H1.96033C1.55582 7.5 1.31874 7.04466 1.55071 6.71327L4.09038 3.08517Z"
        fill="#0C3FC1"
      />
    </svg>
  );
}
