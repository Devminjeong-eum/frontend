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
  const isSearchWordEmpty = searchWordResult && !searchWordResult.length;

  if (!searchWordResult) return null;

  return (
    <ul
      className={clsx(
        'relative w-full bg-[#ffffff] rounded-b-[16px] pb-[10px]',
      )}
    >
      <div
        className={clsx(
          'pt-[12px] pb-[6px] mx-5 text-[14px] text-[#858596] border-t border-[#E3E6F6]',
        )}
      >
        {isSearchWordEmpty
          ? '검색 결과가 없어요.'
          : '검색은 3글자 이상 가능해요.'}
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
