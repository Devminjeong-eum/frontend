import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="max-w-[430px] min-h-screen absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full flex justify-center items-center bg-white/50 z-30">
      <div className="flex flex-col justify-center items-center">
        <svg
          className="circle-spin"
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.95">
            <g filter="url(#filter0_d_150_5052)">
              <circle cx="36" cy="22" r="10" fill="#DDE1FF" />
              <circle cx="36" cy="22" r="9.5" stroke="#D7DDFF" />
            </g>
            <circle opacity="0.9" cx="18" cy="51" r="10" fill="#8595EB" />
            <g style={{ mixBlendMode: 'multiply' }}>
              <circle cx="54" cy="51" r="10" fill="#465DDA" />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_150_5052"
              x="24"
              y="10"
              width="26"
              height="26"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.238571 0 0 0 0 0.265323 0 0 0 0 0.41071 0 0 0 0.11 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_150_5052"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_150_5052"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <p className="text-main-gray mt-4">잠시만 기다려주세요...</p>
      </div>
    </div>
  );
};

export default Spinner;
