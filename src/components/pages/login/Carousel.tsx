import LogoSvg from '@/components/svg-component/LogoSvg';
import LandingCarouselSecond from '@/components/svg-component/LandingCarouselSecond';
import LandingCarouselThird from '@/components/svg-component/LandingCarouselThird';
import { Fragment, useState } from 'react';

const slides = [
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
  </div>,
  <div className="flex flex-col items-center justify-center w-full h-full rounded-[30px] bg-landing-first-illust-gradient mx-5">
    <div className="w-[17.5rem] h-[15.6rem]">
      <LandingCarouselSecond className="w-full h-full" />
    </div>
    <span className="text-main-black text-xl leading-[1.125rem] tracking-tight font-semibold pt-7">
      궁금한 IT 용어를 검색해 보세요.
    </span>
    <span className="text-[#52535B] text-base leading-6 text-center tracking-tight font-medium pt-3 pb-[43px]">
      해당 용어의
      <span className="text-[#4046E4] font-semibold">올바른/잘못된 발음</span>을
      알려주고
      <br />
      용어의 의미와 예문까지 볼 수 있어요.
    </span>
  </div>,
  <div className="flex flex-col items-center justify-center w-full h-full rounded-[30px] bg-landing-first-illust-gradient mx-5">
    <div className="w-[17.5rem] h-[15.8rem]">
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
  </div>,
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative overflow-hidden w-full h-full">
      {/* 캐러셀 슬라이드 */}
      <div
        className="flex flex-row items-center transition-transform duration-300 h-full"
        style={{
          transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <Fragment key={index}>{slide}</Fragment>
        ))}
      </div>

      {/*페이징 인디케이터*/}
      <div className="flex justify-center mb-[1.375rem] space-x-2 w-full z-10 absolute bottom-1">
        {Array.from({ length: 3 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'w-4 bg-[#4B4AC5]' : 'w-1.5 bg-[#D6DDF6]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
