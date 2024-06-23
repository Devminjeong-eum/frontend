'use client';

import MagnifierSvg from '@/components/svg-component/MagnifierSvg';
import useScroll from '@/hooks/useScroll';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, type ChangeEvent } from 'react';
import clsx from 'clsx';
import { getAutoCompleteWord } from '@/fetcher';
import type { AutoCompleteWordData } from '@/fetcher/types';
import AutoComplete from '../pages/search/AutoComplete';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { useDebounce } from '@/hooks/useDebounce';
import { useRef } from 'react';

export default function SearchBar() {
  const isScrolled = useScroll();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { debounce } = useDebounce();

  const initialSearchInput = searchParams.get('keyword') ?? '';

  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [searchInput, setSearchInput] = useState(initialSearchInput);
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [searchWordResult, setWordSearchResult] = useState<
    AutoCompleteWordData[] | null
  >(null);

  const [isInputFocus, setIsInputFocus] = useState(!!searchInput);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearchBarOutsideClick = () => {
    if (searchInput.length) {
      setIsDropdownOpen(false);
      return;
    }
    setIsInputFocus(false);
    setWordSearchResult(null);
  };

  const { targetRef: searchBarRef } = useOnClickOutside<HTMLDivElement>({
    onClickOutside: handleSearchBarOutsideClick,
  });

  const fetchAutoCompleteWord = async () => {
    const currentSearchInput = searchInputRef.current?.value;

    if (currentSearchInput) {
      const { data } = await getAutoCompleteWord(
        currentSearchInput.toLowerCase(),
      );
      const searchResult = data?.data ?? [];
      setWordSearchResult(searchResult);
      return;
    }
    setWordSearchResult(null);
  };

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const typedKeyword = event.target.value.trim();
    const isKeywordTyped = typedKeyword.length > 0;

    setSearchInput(typedKeyword);
    setSelectedIdx(0);
    setWordSearchResult(null);

    if (isKeywordTyped) {
      setIsDropdownOpen(isKeywordTyped);
      debounce(fetchAutoCompleteWord, 330)();
      return;
    }
  };

  const handleInputFocusChange = () => {
    setIsInputFocus(true);
  };

  const handleSearchBarClick = () => {
    if (searchInput) setIsDropdownOpen(true);
  };

  const handleSearchButtonClick = () => {
    if (searchInput.length < 3) return;
    handleWordSearch(searchInput);
  };

  const handleWordSearch = (searchKeyword: string) => {
    router.push(`/word/search?keyword=${searchKeyword}`);
    setSearchInput(searchKeyword);
    setIsDropdownOpen(false);
  };

  const handleSearchInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (!searchWordResult?.length || !isDropdownOpen) return;

    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const updatedSelectedIndex = selectedIdx + (e.key === 'ArrowUp' ? -1 : 1);
      const maxAutoCompletions = Math.min(searchWordResult.length - 1, 5);

      if (
        updatedSelectedIndex >= 0 &&
        updatedSelectedIndex <= maxAutoCompletions
      ) {
        const selectedWord = searchWordResult[updatedSelectedIndex];
        setSelectedIdx(updatedSelectedIndex);
        setSearchInput(selectedWord.name);
        return;
      }

      setSearchInput('');
      setSelectedIdx(0);
      setIsDropdownOpen(false);
    }

    if (e.key === 'Enter') {
      setSelectedIdx(0);
      setIsDropdownOpen(false);
      handleWordSearch(searchInput);
    }
  };

  return (
    <div
      className={`z-50 bg-main-gradient-bottom top-0 ${isScrolled ? 'sticky h-[64px] py-2 px-5' : 'h-[104px] p-5'}`}
    >
      <div
        className={clsx(
          'relative rounded-[16px] z-[60]',
          isDropdownOpen && 'bg-white ring-[2px] ring-[#4357DB]',
        )}
        ref={searchBarRef}
      >
        <input
          type="text"
          ref={searchInputRef}
          value={searchInput}
          placeholder={`${isInputFocus ? '' : '궁금한 IT용어를 검색해 보세요.'}`}
          onChange={handleInputChange}
          onKeyDown={handleSearchInputKeyDown}
          onFocus={handleInputFocusChange}
          onClick={handleSearchBarClick}
          className={clsx(
            'w-full h-[48px] rounded-[16px] pl-5 py-4 outline-none',
            !isInputFocus &&
              'bg-white/20 ring-white/40 text-white placeholder:text-[#C8CAEB]',
            isDropdownOpen ? 'ring-0' : 'ring-1 ring-white/60',
          )}
        />
        <button onClick={handleSearchButtonClick}>
          <MagnifierSvg
            className="absolute right-[20px] top-[12px]"
            color={isInputFocus ? '#0C3FC1' : '#FFFFFF'}
          />
        </button>
        {isDropdownOpen && searchInput && (
          <AutoComplete
            wordData={searchWordResult}
            setSelectedIndex={setSelectedIdx}
            selectedIndex={selectedIdx}
            search={searchInput}
            handleSearch={handleWordSearch}
          />
        )}
      </div>
    </div>
  );
}
