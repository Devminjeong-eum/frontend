import ScoreResultSvg from '@/components/svg-component/ScoreResultSvg';

type QuizScoreProps = {
  resultScore: number;
};

export default function QuizScore({ resultScore }: QuizScoreProps) {
  return (
    <div className="w-full aspect-square relative flex justify-center">
      <div className="absolute top-[30%] text-center">
        <p>
          <span className="font-semibold text-[#313140] text-[18px] mr-1">
            사용자
          </span>
          <span className="text-[#313140] font-medium">
            님의 <br />
            개발 용어 발음 실력은
          </span>
        </p>
        <div
          className={`font-gugi text-main-blue ${resultScore.toString().length > 2 ? `text-[64px]` : `text-[70px]`}`}
        >
          {resultScore}점
        </div>
      </div>
      <ScoreResultSvg />
    </div>
  );
}
