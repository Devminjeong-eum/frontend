'use client';

import MagnifierSvg from '@/components/svg-component/MagnifierSvg';
import useScroll from '@/hooks/useScroll';
import { useRouter, usePathname } from 'next/navigation';
import { useRef, useState, useEffect } from 'react';
import ClearSearchBarSvg from '../svg-component/ClearSearchBarSvg';
import clsx from 'clsx';

export default function SearchBar() {
  const isScrolled = useScroll();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInputFocus, setIsInputFocus] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [search, setSearch] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const handleClick = (e: PointerEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(e.target as HTMLElement) &&
        search.trim() === ''
      )
        setIsInputFocus(false);
    };

    document.addEventListener('pointerdown', handleClick);

    return () => document.removeEventListener('pointerdown', handleClick);
  }, [search]);

  const navigateToSearch = () => {
    search.trim() && router.push(`/word/search?keyword=${search}`);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigateToSearch();
    }
  };

  const handleInputClearAndFocus = () => {
    if (search) {
      setSearch('');
      inputRef.current?.focus();
    }
  };

  const handleInputFocusChange = () => {
    setIsInputFocus(true);
  };

  const handleInputShakeAndUrlChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const isHangeul = /[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(e.target.value);

    if (isHangeul) {
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 200);
    }

    if (pathname !== '/home') {
      const params = new URLSearchParams(window.location.search);
      params.set('keyword', e.target.value);
      window.history.replaceState({}, '', `?${params}`);
    }
    setSearch(e.target.value);
  };

  return (
    <div
      className={`z-20 bg-main-gradient-bottom top-0 ${isScrolled ? 'sticky h-[64px] py-2 px-5' : 'h-[104px] p-5'}`}
    >
      <div
        className={clsx('relative', isShaking && 'animate-shake')}
        ref={searchBarRef}
      >
        <input
          ref={inputRef}
          value={search}
          onChange={handleInputShakeAndUrlChange}
          type="text"
          placeholder={`${isInputFocus ? '' : '궁금한 IT용어를 검색해 보세요.'}`}
          className={clsx(
            'w-full h-[48px] rounded-[16px] ring-1 ring-white/26 pl-5 py-4 outline-none',
            !isInputFocus &&
              'bg-white/20 ring-white/40 text-white placeholder:text-[#C8CAEB]',
          )}
          onKeyDown={handleSearchKeyDown}
          onFocus={handleInputFocusChange}
        />
        {isInputFocus ? (
          <button onClick={handleInputClearAndFocus}>
            <ClearSearchBarSvg className="absolute right-[20px] top-[12px]" />
          </button>
        ) : (
          <MagnifierSvg className="absolute right-[20px] top-[12px]" />
        )}
      </div>
    </div>
  );
}
