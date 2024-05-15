import KakaotalkSvg from '@/components/svg-component/KakaotalkSvg';
import { WORD_LIST_PATH } from '@/routes/path.ts';
import LogoSvg from '@/components/svg-component/LogoSvg';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-between mt-[30vh] h-[70vh] px-5">
      <div className="flex flex-col items-center">
        <div className="w-[102px] h-[102px]">
          <LogoSvg />
        </div>
        <span className="font-gugi text-[#4B4AC5] text-2xl font-normal tracking-wide pt-1.5">
          데브말싸미
        </span>
        <span className="text-main-black text-sm font-normal pt-1">
          당신의 개발용어 발음을 도와드릴게요!
        </span>
      </div>
      <div className="w-full flex flex-col gap-2 pb-7">
        <Link href="/api/auth/kakao">
          <button className="relative flex items-center justify-center bg-[#FFE34E] text-base font-semibold rounded-2xl p-3.5 w-full">
            <div className="absolute left-6">
              <KakaotalkSvg />
            </div>
            <span className="text-center text-[#442E2E]">
              카카오톡으로 시작하기
            </span>
          </button>
        </Link>
        <Link href={WORD_LIST_PATH}>
          <button className="w-full text-base font-semibold text-main-black opacity-60 p-3.5">
            비로그인으로 이용하기
          </button>
        </Link>
      </div>
    </div>
  );
}
