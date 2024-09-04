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
    <div className="flex flex-col items-center justify-between gap-[1.125rem] px-5 pt-[1.375rem] pb-[2.375rem] w-full h-full bg-landing-gradient">
      <div className="flex flex-col items-center rounded-[30px] w-full h-full bg-landing-first-illust-gradient">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-[7.25rem] h-[7.25rem]">
            <LogoSvg />
          </div>
          <span className="font-gugi text-[#4B4AC5] text-3xl leading-7 tracking-wide font-normal pt-5">
            데브말싸미
          </span>
          <span className="text-[#46474F] text-[1.063rem] leading-[1.625rem] text-center font-medium pt-3">
            개발 용어의 발음이 궁금할땐?
            <br />
            데브말싸미로 검색해 보세요!
          </span>
        </div>
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
          <button className="w-full text-base font-normal text-main-black opacity-60 p-3.5">
            비로그인으로 이용하기
          </button>
        </Link>
      </div>
    </div>
  );
}
