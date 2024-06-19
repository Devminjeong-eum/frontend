import Image from 'next/image';
import DefaultProfileIconSvg from '@/components/svg-component/DefaultProfileIconSvg.tsx';
import { useState } from 'react';

type Props = {
  profileImage: string;
  name: string;
};

export default function ProfileInfo({ profileImage, name }: Props) {
  const [isImageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div className="mt-[8px] mb-[16px]">
        {isImageError ? (
          <DefaultProfileIconSvg />
        ) : (
          <Image
            src={profileImage}
            alt="Profile Image"
            width={88}
            height={88}
            className="w-[88px] h-[88px] rounded-[31px]"
            priority
            onError={() => {
              setImageError(true);
            }}
          />
        )}
      </div>
      <div className="font-semibold text-[22px] mb-[8px]">
        {name}
        <span className="font-normal">님</span>
      </div>

      <div className="bg-[#FBFCFE] text-[12px] text-center text-[#5E5E5E] rounded-[61px] ring-1 px-[14px] ring-[#F2F4F9] py-[8px] w-[86px]">
        내 정보 수정
      </div>
    </div>
  );
}
