'use client';

import DetailLikeSvg from '@/components/svg-component/DetailLikeSvg.tsx';

export default function LikeButton() {
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer">
      <DetailLikeSvg />
      <span className="text-xs text-[#E1E2F8]">123</span>
    </div>
  );
}
