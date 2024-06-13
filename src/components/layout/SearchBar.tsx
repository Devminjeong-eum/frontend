'use client';

import MagnifierSvg from '@/components/svg-component/MagnifierSvg';
import useScroll from '@/hooks/useScroll';
import { useRouter } from 'next/navigation';
import React, { useRef, useState, useEffect } from 'react';
import ClearSearchBarSvg from '../svg-component/ClearSearchBarSvg';
import clsx from 'clsx';
import { getAutoCompleteWord } from '@/fetcher';
import { AutoCompleteWord } from '@/fetcher/types';
import AutoComplete from '../pages/search/AutoComplete';

export default function SearchBar() {
  const isScrolled = useScroll();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInputFocus, setIsInputFocus] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState('');
  const [isDropdown, setIsDropdown] = useState(false);
  const [wordData, setWordData] = useState<AutoCompleteWord | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  useEffect(() => {
    const handleClick = (e: PointerEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(e.target as HTMLElement) &&
        search.trim() === ''
      )
        setIsInputFocus(false);

      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(e.target as HTMLElement) &&
        search.trim() !== ''
      )
        setIsDropdown(false);
    };

    document.addEventListener('pointerdown', handleClick);

    return () => document.removeEventListener('pointerdown', handleClick);
  }, [search]);

  // FIXME: 숫자 허용되면 정규식에 추가하기, 세글자 이상으로 받기
  useEffect(() => {
    const searchRegex = /^[a-zA-Z]*$/;
    if (search.trim() !== '' && searchRegex.test(search)) {
      setIsDropdown(true);
      fetchAutoCompleteWord();
    } else {
      setIsDropdown(false);
    }
  }, [search]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!wordData) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prevIndex: number) =>
        prevIndex < wordData.data.length - 1 ? prevIndex + 1 : prevIndex,
      );
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prevIndex: number) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex,
      );
    }
    if (e.key === 'Enter' && selectedIndex >= 0) {
      setIsDropdown(false);
      navigateToSearch(wordData.data[selectedIndex].name);
    }
  };

  const fetchAutoCompleteWord = async () => {
    const { data } = await getAutoCompleteWord(search);
    setWordData(data);
  };

  const navigateToSearch = (wordData: string) => {
    search.trim() && router.push(`/word/search?keyword=${wordData}`);
    setIsDropdown(false);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigateToSearch(search);
      setIsDropdown(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleInputClickDropdownOpen = () => {
    if (search) setIsDropdown(true);
  };

  return (
    <div
      className={`z-20 bg-main-gradient-bottom top-0 ${isScrolled ? 'sticky h-[64px] py-2 px-5' : 'h-[104px] p-5'}`}
    >
      <div
        className={
          'relative border-[2px] border-[#4357DB] rounded-[16px] bg-[#ffffff] z-20'
        }
        ref={searchBarRef}
      >
        <input
          type="text"
          ref={inputRef}
          value={search}
          placeholder={`${isInputFocus ? '' : '궁금한 IT용어를 검색해 보세요.'}`}
          onChange={handleInputChange}
          onKeyDown={(event) => {
            handleSearchKeyDown(event);
            handleKeyDown(event);
          }}
          onFocus={handleInputFocusChange}
          onClick={handleInputClickDropdownOpen}
          className={clsx(
            'w-full h-[48px] rounded-[16px] pl-5 py-4 outline-none',
            !isInputFocus &&
              'bg-white/20 ring-white/40 text-white placeholder:text-[#C8CAEB]',
            isDropdown && 'rounded-b-[0px]',
          )}
        />
        {isInputFocus ? (
          <button onClick={handleInputClearAndFocus}>
            <ClearSearchBarSvg className="absolute right-[20px] top-[12px]" />
          </button>
        ) : (
          <MagnifierSvg className="absolute right-[20px] top-[12px]" />
        )}
        {isDropdown && (
          <AutoComplete
            wordData={wordData}
            setIsDropdown={setIsDropdown}
            navigateToSearch={navigateToSearch}
            setSelectedIndex={setSelectedIndex}
            selectedIndex={selectedIndex}
            search={search}
          />
        )}
      </div>
    </div>
  );
}
