import LandingCarouselSecond from '@/components/svg-component/LandingCarouselSecond';

const SecondSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full rounded-[30px] bg-landing-first-illust-gradient mx-5">
      <div className="w-[17.5rem] h-[15.6rem]">
        <LandingCarouselSecond className="w-full h-full" />
      </div>
      <span className="text-main-black text-xl leading-[1.125rem] tracking-tight font-semibold pt-7">
        궁금한 IT 용어를 검색해 보세요.
      </span>
      <span className="text-[#52535B] text-base leading-6 text-center tracking-tight font-medium pt-3 pb-[43px]">
        해당 용어의
        <span className="text-[#4046E4] font-semibold">올바른/잘못된 발음</span>
        을 알려주고
        <br />
        용어의 의미와 예문까지 볼 수 있어요.
      </span>
    </div>
  );
};

export default SecondSlide;
