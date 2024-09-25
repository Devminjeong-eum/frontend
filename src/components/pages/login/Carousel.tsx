import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';
import ThirdSlide from './ThirdSlide';

import { Fragment, useEffect, useState } from 'react';

const slides = [<FirstSlide />, <SecondSlide />, <ThirdSlide />];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

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
        {Array.from({ length: slides.length }).map((_, index) => (
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
