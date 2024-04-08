import { useNavigate } from 'react-router-dom';
import LogoColorSvg from '@/components/svgComponent/LogoColorSvg';
import KakaotalkSvg from '@/components/svgComponent/KakaotalkSvg';

export default function Login() {
  const navigate = useNavigate();

  const onClickNonMember = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-between mt-[30vh] h-[70vh] px-5">
      <div className="flex flex-col items-center">
        <LogoColorSvg />
        <div className="flex flex-col items-center justify-center gap-3 pt-16">
          <div className="text-lg font-semibold">
            <span className="text-[#183ECD] mr-0.5">개발용어 발음,</span>
            <span>어려우신가요?</span>
          </div>
          <span className="text-main-black text-sm opacity-60 font-normal">
            데브말싸미가 당신의 개발용어 발음을 도와드릴게요!
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 pb-9">
        <button className="relative flex items-center justify-center bg-[#FFE34E] text-base font-semibold rounded-2xl p-4 w-full">
          <div className="absolute left-6">
            <KakaotalkSvg />
          </div>
          <span className="text-center text-[#442E2E]">
            카카오톡으로 시작하기
          </span>
        </button>
        <button
          className="w-full text-base font-semibold text-main-black opacity-60 p-4"
          onClick={onClickNonMember}
        >
          비로그인으로 이용하기
        </button>
      </div>
    </div>
  );
}
