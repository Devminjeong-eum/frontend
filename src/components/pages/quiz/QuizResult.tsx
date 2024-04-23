import BlackBackSpaceSVG from '@/components/svg-component/BlackBackSpaceSVG';
import ScoreResultSvg from '@/components/svg-component/ScoreResultSvg';
import { QUIZ_PATH } from '@/routes/path.ts';
import Link from 'next/link';

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
      <div className="w-full aspect-square relative pt-4 flex justify-center">
        <div className="absolute top-[35%] text-center">
          <p>
            <span className="font-semibold text-[#313140] text-[18px]">
              사용자
            </span>{' '}
            님의 <br />
            개발 용어 발음 실력은
          </p>
          <div
            className={`font-gugi text-main-blue ${resultScore.toString().length > 2 ? `text-[64px]` : `text-[70px]`}`}
          >
            {resultScore}점
          </div>
        </div>
        <ScoreResultSvg />
      </div>
      <Link href={QUIZ_PATH}>
        <button className="bg-[#4057DB] rounded-[16px] mt-[28px] h-[52px] font-semibold text-white w-full">
          다시 도전하러 가기
        </button>
      </Link>
    </div>
  );
}
