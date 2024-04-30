import Link from 'next/link';
import BackButtonSvg from '@/components/svg-component/BackButtonSvg';
import ScoreSVG from '@/components/svg-component/ScoreSvg';
import { WORD_LIST_PATH } from '@/routes/path';
import QuizStart from './QuizStart';
import { useState } from 'react';

export default function Quiz() {
  const [isShow, setIsShow] = useState(false);

  if (isShow) return <QuizStart />;

  return (
    <div className="px-5 h-screen flex flex-col justify-center items-center bg-main-gradiant-full relative">
      <header className="absolute top-6 left-5 cursor-pointer">
        <Link href={WORD_LIST_PATH}>
          <BackButtonSvg />
        </Link>
      </header>
      <div className="absolute top-12 right-0">
        <ScoreSVG />
      </div>
      <div className="flex flex-col items-center mb-[100px]">
        <div className="mb-[18px] font-gugi text-white text-[40px] text-center w-[220px]">
          개발 용어
          <br />
          발음 테스트
        </div>
        <p className="text-white font-medium">나의 개발 용어 발음 지식은?</p>
      </div>
      <button
        onClick={() => setIsShow && setIsShow(!isShow)}
        className="w-[calc(100%-40px)] flex justify-center items-center absolute bottom-[50px] h-12 rounded-[16px] bg-white/20 ring-1 ring-white/40 focus:ring-white/60 outline-none text-white
        shadow-quiz
        hover:cursor-pointer"
      >
        테스트 시작하기
      </button>
    </div>
  );
}
