import Image from 'next/image';
import NonLoginImage from '@/components/svg-component/NonLoginImage';
import Link from 'next/link';
import { LOGIN_PATH } from '@/routes/path';

/**
 * NOTE:
 * 1. 토큰 or id를 여부를 확인하고 get 요청 후 Image src 바꾸기
 * 2. 내 정보 수정 링크 이동
 */

export default function ProfileInfo() {
  const token = 1;

  return (
    <div className="flex flex-col items-center">
      {token ? (
        <Image
          src={
            'http://t1.kakaocdn.net/account_images/default_profile.jpeg.twg.thumb.R640x640'
          }
          alt="Profile Image"
          width={88}
          height={88}
          priority
          className="rounded-[31px] mt-[8px] mb-[16px]"
        />
      ) : (
        <div className="mt-[8px] mb-[16px]">
          <NonLoginImage />
        </div>
      )}

      {token ? (
        <div className="font-semibold text-[22px] mb-[8px]">김데브</div>
      ) : (
        <div className="text-[20px] mb-[8px] h-[33px]">
          <span className="font-semibold">로그인</span>이 필요해요.
        </div>
      )}

      {token ? (
        <div className="bg-[#FBFCFE] text-[12px] text-center text-[#5E5E5E] rounded-[61px] ring-1 px-[14px] ring-[#F2F4F9] py-[8px] w-[86px]">
          내 정보 수정
        </div>
      ) : (
        <Link href={LOGIN_PATH}>
          <div className="bg-[#4057DB] text-[12px] text-center text-white rounded-[61px] ring-1 px-[14px] ring-[#F2F4F9] py-[8px] w-[86px]">
            로그인하기
          </div>
        </Link>
      )}
    </div>
  );
}
