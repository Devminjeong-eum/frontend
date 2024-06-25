'use client';

import KakaotalkSvg from '@/components/svg-component/KakaotalkSvg';
import { WORD_LIST_PATH } from '@/routes/path.ts';
import LogoSvg from '@/components/svg-component/LogoSvg';
import Link from 'next/link';

export default function Login() {
  const handleKakaoLogin = () => {
    window.location.href = '/api/auth/kakao';
  };

  return (
    <div className="flex flex-col items-center justify-between px-5 pt-44 pb-[2.375rem] h-full">
      <div className="flex flex-col items-center">
        <div className="w-[102px] h-[102px]">
          <LogoSvg />
        </div>
        <span className="font-gugi text-[#4B4AC5] text-2xl font-normal tracking-wide pt-1.5">
          데브말싸미
        </span>
        <span className="text-main-black text-base leading-5 font-normal pt-1">
          당신의 개발용어 발음을 도와드릴게요!
        </span>
      </div>
      <div className="w-full flex flex-col gap-2 pb-7">
        <button
          className="relative flex items-center justify-center bg-[#FFE34E] rounded-2xl p-3.5 w-full"
          onClick={handleKakaoLogin}
        >
          <div className="absolute left-6">
            <KakaotalkSvg />
          </div>
          <span className="text-center text-base font-semibold text-[#442E2E]">
            카카오톡으로 시작하기
          </span>
        </button>
        <Link href={WORD_LIST_PATH}>
          <button className="w-full text-base font-normal text-main-black opacity-60 p-3.5 bg-orange-500">
            비로그인으로 이용하기
          </button>
        </Link>
      </div>
    </div>
  );
}
