import BlackBackSpaceSVG from '@/components/svgComponent/BlackBackSpaceSVG';
import ResultScoreSVG from '@/components/svgComponent/ResultScoreSVG';
import { useNavigate } from 'react-router-dom';
import GoodSVG from '@/components/svgComponent/GoodSVG';

type QuizResultProps = {
  score: number;
};

export default function QuizResult({ score }: QuizResultProps) {
  const navigate = useNavigate();
  const resultScore = score ? score * 10 : '';

  return (
    <div className="relative">
      <header
        className="absolute top-7 left-7 cursor-pointer"
        onClick={() => navigate('/quiz')}
      >
        <BlackBackSpaceSVG />
      </header>
      <header className="flex justify-center items-center h-[68px] font-bold">
        TEST 결과
      </header>
      <div className="relative flex justify-center">
        <div className="absolute top-[150px] mr-[54px] text-[#313140] text-[22px]">
          사용자
        </div>
        <div className="absolute top-[80px] left-[70px]">
          <GoodSVG />
        </div>
        <div className="absolute top-[100px]">
          <ResultScoreSVG />
        </div>
        <div className="absolute top-[210px] text-[48px] text-[#0C3FC1]">
          {`${resultScore} 점`}
        </div>
      </div>
    </div>
  );
}
