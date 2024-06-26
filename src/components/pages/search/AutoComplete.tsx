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
  return (
    <ul
      className={clsx(
        'relative w-full bg-[#ffffff] rounded-b-[16px]',
        searchWordResult ? 'pb-[10px]' : 'pb-[0px]',
        searchWordResult && !searchWordResult.length && 'pb-0',
      )}
    >
      <div
        className={clsx(
          'mx-5',
          searchWordResult ? 'border-t border-[#E3E6F6]' : 'border-none',
          searchWordResult && !searchWordResult.length && 'border-none',
        )}
      ></div>
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
