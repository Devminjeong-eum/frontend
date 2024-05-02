import BlackBackSpaceSVG from '@/components/svg-component/BlackBackSpaceSVG';
import QuizScore from './QuizScore';
import type { UserAnswer } from '@/types/quiz';
import QuizResultDetail from './QuizResultDetail';
import { Dispatch, SetStateAction, useState } from 'react';
import ShareButton from '@/components/svg-component/ShareButton';
import Quiz from '.';

type QuizResultProps = {
  score: number;
  userAnswer: UserAnswer[];
  setUserAnswer: Dispatch<SetStateAction<UserAnswer[]>>;
};

export default function QuizResult({
  score,
  userAnswer,
  setUserAnswer,
}: QuizResultProps) {
  const [isShoww, setIsShoww] = useState(false);
  const resultScore = score ? score * 10 : 0;

  if (isShoww) return <Quiz />;

  return (
    <div className="relative px-5">
      <header className="flex items-center h-[68px]">
        <button
          className="ml-2 cursor-pointer"
          onClick={() => setIsShoww(!isShoww)}
        >
          <BlackBackSpaceSVG />
        </button>
        <div className=" m-auto font-medium pr-3">TEST 결과</div>
        <ShareButton />
      </header>
      <QuizScore resultScore={resultScore} />
      <QuizResultDetail userAnswer={userAnswer} setUserAnswer={setUserAnswer} />
      <button
        className="bg-[#4057DB] rounded-[16px] mt-[24px] mb-[48px] h-[50px] font-semibold text-white w-full text-[16px]"
        onClick={() => setIsShoww(!isShoww)}
      >
        다시 도전하러 가기
      </button>
    </div>
  );
}
