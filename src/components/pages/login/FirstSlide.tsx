import LogoSvg from '@/components/svg-component/LogoSvg';

const FirstSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full rounded-[30px] bg-landing-first-illust-gradient mx-5">
      <div className="w-[7.25rem] h-[7.25rem]">
        <LogoSvg />
      </div>
      <span className="font-gugi text-[#5b5bde] text-3xl leading-7 tracking-wide font-normal pt-5">
        데브말싸미
      </span>
      <span className="text-[#46474F] text-[1.063rem] leading-[1.625rem] text-center font-medium pt-3">
        개발 용어의 발음이 궁금할땐?
        <br />
        데브말싸미로 검색해 보세요!
      </span>
    </div>
  );
};

export default FirstSlide;
