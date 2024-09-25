import LandingCarouselThird from '@/components/svg-component/LandingCarouselThird';

const ThirdSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full rounded-[30px] bg-landing-first-illust-gradient mx-5">
      <div className="w-[17.5rem] h-[15.6rem]">
        <LandingCarouselThird className="w-full h-full" />
      </div>
      <span className="text-main-black text-xl leading-[1.125rem] tracking-tight font-semibold pt-7">
        퀴즈를 풀고, 친구와 공유해요.
      </span>
      <span className="text-[#52535B] text-base leading-6 text-center tracking-tight font-medium pt-3 pb-[43px]">
        <span className="text-[#4046E4] font-semibold">IT 용어 발음 퀴즈</span>
        로 나의 실력을 확인하고
        <br />
        나의 점수를 친구에게 공유해 보세요.
      </span>
    </div>
  );
};

export default ThirdSlide;
