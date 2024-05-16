'use client';

import MagnifierSvg from '@/components/svg-component/MagnifierSvg';
import useScroll from '@/hooks/useScroll';
import { useRouter } from 'next/navigation';
import { useRef, useState, useEffect } from 'react';
import ClearSearchBarSvg from '../svg-component/ClearSearchBarSvg';

export default function SearchBar() {
  const isScrolled = useScroll();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInputFocus, setIsInputFocus] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(e.target as HTMLElement)
      )
        setIsInputFocus(false);
    };

    document.addEventListener('mousedown', handleClick);

    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const navigateToSearch = (): void => {
    inputRef.current?.value.trim() &&
      router.push(`/word/search/${inputRef.current.value}`);
    // router.push(`/word/search?keyword=${inputRef.current.value}`);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigateToSearch();
    }
  };

  const handleInputClearAndFocus = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };

  const handleInputFocusChange = () => {
    setIsInputFocus(true);
  };

  return (
    <div
      className={`z-10 bg-main-gradient-bottom top-0 ${isScrolled ? 'sticky h-[64px] py-2 px-5' : 'h-[104px] p-5'}`}
    >
      <div className="relative" ref={searchBarRef}>
        <input
          ref={inputRef}
          type="text"
          placeholder={`${isInputFocus ? '' : '궁금한 IT용어를 검색해 보세요.'}`}
          className={`${
            isInputFocus
              ? 'w-full h-[48px] rounded-[16px] ring-1 ring-white/40 pl-5 py-4 outline-none'
              : 'w-full h-[48px] rounded-[16px] bg-white/20 ring-1 ring-white/40 focus:ring-white/60 pl-5 py-4 outline-none text-white placeholder:text-[#C8CAEB]'
          }`}
          onKeyDown={handleSearchKeyDown}
          onFocus={handleInputFocusChange}
        />
        {isInputFocus ? (
          <button onClick={handleInputClearAndFocus}>
            <ClearSearchBarSvg className="absolute right-[20px] top-[12px]" />
          </button>
        ) : (
          <MagnifierSvg className="absolute right-[20px] top-[12px] cursor-pointer" />
        )}
      </div>
    </div>
  );
}
