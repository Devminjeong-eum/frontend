'use client';

import CheckSvg from '@/components/svg-component/CheckSvg.tsx';
import { useEffect, useState } from 'react';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const getScrollbarWidth = () => {
  return window.innerWidth - document.documentElement.clientWidth;
};

export function CopiedNotice({ isOpen, handleClose }: Props) {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setScrollbarWidth(getScrollbarWidth());
    } else {
      setScrollbarWidth(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="w-screen h-screen fixed left-0 top-0 flex justify-center items-center z-10"
      style={{ paddingRight: `${scrollbarWidth}px` }}
      onClick={handleClose}
    >
      <div className="w-full h-screen flex justify-center items-center max-w-[430px] bg-[#000000] opacity-70 mix-blend-multiply" />
      <div className="absolute flex gap-1.5 py-4 px-[22px] rounded-[16px] bg-[#05050555]">
        <CheckSvg />
        <span className="font-semibold text-white">링크 복사 완료</span>
      </div>
    </div>
  );
}
