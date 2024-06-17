'use client';

import BackButton from '@/components/common/BackButton.tsx';
import URLShareButton from '@/components/pages/detail/URLShareButton.tsx';

export default function DetailHeader() {
  return (
    <div className="bg-[#2341BE] h-12 flex flex-col px-[16px]">
      <div className="w-full h-full flex justify-between  items-center">
        <BackButton />
        <h1 className="text-white">개발 용어</h1>
        <URLShareButton />
      </div>
      <div className="w-full border-b border-[#4152C1]"></div>
    </div>
  );
}
