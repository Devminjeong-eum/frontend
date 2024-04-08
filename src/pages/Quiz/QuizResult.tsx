import BlackBackSpaceSVG from '@/components/svgComponent/BlackBackSpaceSVG';
import { useNavigate } from 'react-router-dom';
import ScoreResultSvg from '@/components/svgComponent/ScoreResultSvg.tsx';
import { QUIZ_PATH } from '@/routes/path.ts';

type QuizResultProps = {
  score: number;
};

export default function QuizResult({ score }: QuizResultProps) {
  const navigate = useNavigate();
  const resultScore = score ? score * 10 : '';

  return (
    <div className="relative px-4">
      <header
        className="absolute top-7 left-7 cursor-pointer"
        onClick={() => navigate(QUIZ_PATH)}
      >
        <BlackBackSpaceSVG />
      </header>
      <header className="flex justify-center items-center h-[68px] font-bold">
        TEST 결과
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

      <button
        className="bg-[#4057DB] rounded-[16px] mt-[28px] h-[52px] font-semibold text-white w-full"
        onClick={() => navigate(QUIZ_PATH)}
      >
        다시 도전하러 가기
      </button>
    </div>
  );
}
