import { AutoCompleteWordData } from '@/fetcher/types';
import clsx from 'clsx';

type Props = {
  searchWordResult: AutoCompleteWordData[] | null;
  setSelectedIndex: (data: number) => void;
  selectedIndex: number;
  searchInput: string;
  handleSearch: (data: string) => void;
};

export default function AutoComplete({
  searchWordResult,
  setSelectedIndex,
  selectedIndex,
  searchInput,
  handleSearch,
}: Props) {
  const isSearchResultEmpty =
    searchInput && Array.isArray(searchWordResult) && !searchWordResult.length;

  const getSearchFeedbackMessage = () => {
    if (isSearchResultEmpty) return '검색 결과가 없습니다.';
    if (!searchWordResult) return '검색 중입니다...';
  };

  const searchFeedback = getSearchFeedbackMessage();

  return (
    <ul className="relative w-full pb-[10px] overflow-y-auto bg-[#ffffff] rounded-b-[16px]">
      <div
        className={clsx(
          'pt-[12px] mx-5 text-[14px] text-[#858596] border-t border-[#E3E6F6]',
          (isSearchResultEmpty || !searchWordResult) && 'pb-[6px]',
        )}
      >
        {searchFeedback}
      </div>
      {searchWordResult?.slice(0, 6).map((word, idx) => (
        <li
          key={word.id}
          className={clsx(
            'py-[8px] px-5 text-[16px]',
            selectedIndex === idx && 'bg-gray-100',
          )}
          onPointerEnter={() => setSelectedIndex(idx)}
          onPointerLeave={() => setSelectedIndex(-1)}
          onClick={() => {
            handleSearch(word.name);
          }}
        >
          {word.name.split('').map((alphabet, idx) => (
            <span
              key={idx}
              className={clsx(
                idx < searchInput.length &&
                  alphabet.toLowerCase() === searchInput[idx].toLowerCase() &&
                  'text-[#0C3FC1] font-semibold',
              )}
            >
              {alphabet}
            </span>
          ))}
        </li>
      ))}
    </ul>
  );
}
