'use client';

import BlackBackSpaceSVG from '@/components/svg-component/BlackBackSpaceSVG';
import QuizScore from './QuizScore';
import { useState } from 'react';
import ShareButton from '@/components/svg-component/ShareButton';
import Quiz from '.';
import useLoadKakaoScript from '@/hooks/useLoadKakaoScript';
import QuizResultDetail from './QuizResultDetail';

type Props = {
  score: number;
  correctWords: string[];
  incorrectWords: string[];
};

export default function QuizResult({
  score,
  correctWords,
  incorrectWords,
}: Props) {
  const [isShow, setisShow] = useState(false);
  const { handleShare } = useLoadKakaoScript();

  if (isShow) return <Quiz />;

  return (
    <div className="relative px-5">
      <header className="flex items-center h-[68px]">
        <button
          className="ml-2 cursor-pointer"
          onClick={() => setisShow(!isShow)}
        >
          <BlackBackSpaceSVG />
        </button>
        <div className=" m-auto font-medium pr-3">TEST 결과</div>
        <button onClick={handleShare}>
          <ShareButton />
        </button>
      </header>
      <QuizScore score={score} />
      <QuizResultDetail
        correctWords={correctWords}
        incorrectWords={incorrectWords}
      />
      <button
        className="bg-[#4057DB] rounded-[16px] mt-[24px] mb-[48px] h-[50px] font-semibold text-white w-full text-[16px]"
        onClick={() => setisShow(!isShow)}
      >
        다시 도전하러 가기
      </button>
    </div>
  );
}
