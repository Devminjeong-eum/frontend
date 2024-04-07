import { useNavigate } from 'react-router-dom';
import ScoreSVG from '@/components/svgComponent/ScoreSvg';
import BackSpaceSVG from '@/components/svgComponent/BackSpaceSvg';

export default function Quiz() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex flex-col justify-center items-center w-full max-w-[430px] border-1 border-x border-gray-200 shadow-xl bg-main-gradiant-top h-13 relative">
        <header
          className="absolute top-6 left-5 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <BackSpaceSVG />
        </header>
        <div className="absolute top-12 right-0">
          <ScoreSVG />
        </div>
        <div className="flex flex-col items-center mb-[100px]">
          <div className="mb-8 font-test text-white text-[40px] text-center w-[190px]">
            개발 용어 발음 테스트
          </div>
          <p className="text-white">나의 개발 용어 발음 지식은?</p>
        </div>
        <button
          onClick={() => navigate('/startQuiz')}
          className="w-[90%] h-[48px] rounded-[16px] absolute bottom-10 bg-white/20 ring-1 ring-white/40 focus:ring-white/60 outline-none text-white"
        >
          테스트 시작하기
        </button>
      </div>
    </div>
  );
}
