import BlackBackSpaceSVG from '@/components/svg-component/BlackBackSpaceSVG';
import { QUIZ_PATH } from '@/routes/path.ts';
import Link from 'next/link';
import QuizScore from './QuizScore';
import type { UserAnswer } from '@/types/quiz';
import QuizResultDetail from './QuizResultDetail';
import { Dispatch, SetStateAction } from 'react';
import ShareButton from '@/components/svg-component/ShareButton';

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
  const resultScore = score ? score * 10 : 0;

  return (
    <div className="relative px-5">
      <header className="flex items-center h-[68px]">
        <Link className="ml-2 cursor-pointer" href={QUIZ_PATH}>
          <BlackBackSpaceSVG />
        </Link>
        <div className=" m-auto font-medium pr-3">TEST 결과</div>
        <ShareButton />
      </header>
      <QuizScore resultScore={resultScore} />
      <QuizResultDetail userAnswer={userAnswer} setUserAnswer={setUserAnswer} />
      <Link href={QUIZ_PATH}>
        <button className="bg-[#4057DB] rounded-[16px] mt-[24px] mb-[48px] h-[50px] font-semibold text-white w-full text-[16px]">
          다시 도전하러 가기
        </button>
      </Link>
    </div>
  );
}
