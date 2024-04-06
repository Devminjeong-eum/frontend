import { useState, useEffect } from 'react';
import CustomButton from '@/components/common/CustomButton';
import MagnifierSvg from '@/components/svgComponent/MagnifierSvg';

export default function SearchBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={` bg-brandBottom top-0  ${isScrolled ? 'sticky h-[64px] py-2 px-5' : 'h-[104px] p-5'}`}
    >
      <div className="relative ">
        <input
          type="text"
          placeholder="궁금한 IT용어를 검색해 보세요."
          className="w-full h-[48px] rounded-[16px] bg-white/10 ring-1 ring-gray-50/30 pl-5 py-4 outline-none text-white"
        />

        <CustomButton>
          <MagnifierSvg className="absolute right-[20px] top-[12px]" />
        </CustomButton>
      </div>
    </div>
  );
}
