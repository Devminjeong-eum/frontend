import BlackBackSpaceSVG from '@/components/svg-component/BlackBackSpaceSVG';
import { QUIZ_PATH } from '@/routes/path.ts';
import Link from 'next/link';
import QuizScore from './QuizScore';

type QuizResultProps = {
  score: number;
};

export default function QuizResult({ score }: QuizResultProps) {
  const resultScore = score ? score * 10 : 0;

  return (
    <div className="relative px-4">
      <header className="flex items-center h-[68px]">
        <Link className="ml-2 cursor-pointer" href={QUIZ_PATH}>
          <BlackBackSpaceSVG />
        </Link>
        <div className=" m-auto font-blod pr-3">TEST 결과</div>
      </header>
      <QuizScore resultScore={resultScore} />
      <Link href={QUIZ_PATH}>
        <button className="bg-[#4057DB] rounded-[16px] mt-[28px] h-[52px] font-semibold text-white w-full">
          다시 도전하러 가기
        </button>
      </Link>
    </div>
  );
}
