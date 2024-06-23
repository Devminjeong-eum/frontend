'use client';

import MagnifierSvg from '@/components/svg-component/MagnifierSvg';
import useScroll from '@/hooks/useScroll';
import { useRouter } from 'next/navigation';
import {
  useState,
  useEffect,
  useMemo,
  type ChangeEvent,
  type KeyboardEvent,
} from 'react';
import clsx from 'clsx';
import { getAutoCompleteWord } from '@/fetcher';
import type { AutoCompleteWord } from '@/fetcher/types';
import AutoComplete from '../pages/search/AutoComplete';
import EngNotice from '../pages/search/EngNotice';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { useDebounce } from '@/hooks/useDebounce';

type Props = {
  word: string;
};

export default function SearchBar({ word }: Props) {
  const isScrolled = useScroll();
  const router = useRouter();
  // const searchBarRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState(word || '');
  const [isInputFocus, setIsInputFocus] = useState(search && true);
  const [isDropdown, setIsDropdown] = useState(false);
  const [wordData, setWordData] = useState<AutoCompleteWord | null>(null);
  const [selectedIdx, setSelectedIdx] = useState<number>(-1);
  const [isEng, setIsEng] = useState(false);
  const [isIdxChange, setIsIdxChange] = useState(false);
  const [isInputChange, setIsInputChange] = useState(false);
  const searchRegex = useMemo(() => /^[a-zA-Z0-9]*$/, []);

  const handleSearchBarClick = () => {
    search.trim() === '' ? setIsInputFocus(false) : setIsDropdown(false);
  };

  const { targetRef: searchBarRef } = useOnClickOutside<HTMLDivElement>({
    onClickOutside: handleSearchBarClick,
  });

  const { debounce } = useDebounce();

  useEffect(() => {
    const fetchAutoCompleteWord = async () => {
      const { data } = await getAutoCompleteWord(search.toLowerCase());
      setWordData(data);
    };

    if (search.trim() === '') {
      setIsDropdown(false);
      setSelectedIdx(-1);
    }
    if (
      search.trim() !== '' &&
      searchRegex.test(search) &&
      isInputChange &&
      !isIdxChange
    ) {
      setIsDropdown(true);
      debounce(fetchAutoCompleteWord, 330)();
    }
  }, [search, isInputChange, isIdxChange, searchRegex, debounce]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!wordData) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIdx((prevIdx) =>
        prevIdx < wordData.data.length - 1 ? prevIdx + 1 : -1,
      );
      setIsDropdown(true);
      setIsIdxChange(true);
      setSearch(wordData.data[selectedIdx + 1]?.name || '');
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIdx((prevIdx) =>
        prevIdx > 0 ? prevIdx - 1 : wordData.data.length - 1,
      );
      setIsDropdown(true);
      setIsIdxChange(true);
      setSearch(wordData.data[selectedIdx - 1]?.name || '');
    }

    if (e.key === 'Enter' && selectedIdx >= 0) {
      setIsDropdown(false);
      handleSearch(wordData.data[selectedIdx].name);
    }
  };

  const navigateToSearch = (wordData: string) => {
    if (search.length < 3) return null;

    if (search.trim() && searchRegex.test(search))
      router.push(`/word/search?keyword=${wordData}`);
    setIsDropdown(false);
  };

  const handleSearch = (wordData: string) => {
    router.push(`/word/search?keyword=${wordData}`);
    setSelectedIdx(-1);
    setSearch(wordData || '');
    setIsDropdown(false);
    setIsInputChange(false);
  };

  const handleSearchKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigateToSearch(search);
    }
  };

  const handleInputFocusChange = () => {
    setIsInputFocus(true);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setIsEng(!searchRegex.test(e.target.value));
    setIsInputChange(true);
    setIsIdxChange(false);
  };

  const handleInputClickDropdownOpen = () => {
    if (search) setIsDropdown(true);
  };

  return (
    <div
      className={`z-50 bg-main-gradient-bottom top-0 ${isScrolled ? 'sticky h-[64px] py-2 px-5' : 'h-[104px] p-5'}`}
    >
      <div
        className={clsx(
          'relative rounded-[16px] z-[60]',
          isDropdown && 'bg-white ring-[2px] ring-[#4357DB]',
        )}
        ref={searchBarRef}
      >
        <input
          type="text"
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
            isDropdown ? 'ring-0' : 'ring-1 ring-white/60',
          )}
        />
        <button onClick={() => navigateToSearch(search)}>
          <MagnifierSvg
            className="absolute right-[20px] top-[12px]"
            color={isInputFocus ? '#0C3FC1' : '#FFFFFF'}
          />
        </button>
        {isDropdown && (
          <AutoComplete
            wordData={wordData}
            setSelectedIndex={setSelectedIdx}
            selectedIndex={selectedIdx}
            search={search}
            handleSearch={handleSearch}
          />
        )}
      </div>
      {isEng && <EngNotice />}
    </div>
  );
}
