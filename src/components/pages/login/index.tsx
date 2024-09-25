'use client';

import KakaotalkSvg from '@/components/svg-component/KakaotalkSvg';
import { WORD_LIST_PATH } from '@/routes/path.ts';
import Link from 'next/link';
import Carousel from './Carousel';

export default function Login() {
  const handleKakaoLogin = () => {
    window.location.href = '/api/auth/kakao';
  };

  return (
    <div className="flex flex-col items-center justify-between gap-[1.125rem] pt-[1.375rem] pb-[2.375rem] w-full h-full bg-landing-gradient">
      <Carousel />
      <div className="w-full flex flex-col gap-2 pb-7 px-5">
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
