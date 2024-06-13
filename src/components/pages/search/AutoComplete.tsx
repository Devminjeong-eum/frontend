import { AutoCompleteWord } from '@/fetcher/types';
import clsx from 'clsx';

type Props = {
  wordData: AutoCompleteWord | null;
  setIsDropdown: (data: boolean) => void;
  navigateToSearch: (data: string) => void;
  setSelectedIndex: (data: number) => void;
  selectedIndex: number;
  search: string;
};

export default function AutoComplete({
  wordData,
  setIsDropdown,
  navigateToSearch,
  setSelectedIndex,
  selectedIndex,
  search,
}: Props) {
  if (!wordData) return null;
  const handleMouseEnter = (idx: number) => {
    setSelectedIndex(idx);
  };

  const handleMouseLeave = () => {
    setSelectedIndex(-1);
  };

  return (
    <ul className="relative w-full pb-[10px] overflow-y-auto">
      <div className="pt-[12px] pb-[6px] mx-5 text-[14px] text-[#858596] border-t border-[#E3E6F6]">
        검색은 영어로만 가능해요.
      </div>
      {wordData &&
        wordData.data.map((data, idx) => (
          <li
            key={data.id}
            className={clsx(
              'py-[8px] px-5 text-[16px]',
              selectedIndex === idx && 'bg-gray-100',
            )}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              setIsDropdown(false);
              navigateToSearch(data.name);
            }}
          >
            {data.name.split('').map((word, idx) => (
              <span
                key={idx}
                className={clsx(
                  idx < search.length &&
                    word.toLowerCase() === search[idx].toLowerCase() &&
                    'text-[#0C3FC1]',
                )}
              >
                {word}
              </span>
            ))}
          </li>
        ))}
    </ul>
  );
}