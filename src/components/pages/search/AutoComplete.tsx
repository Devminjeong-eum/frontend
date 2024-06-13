import { AutoCompleteWord } from '@/fetcher/types';
import clsx from 'clsx';

type Props = {
  wordData: AutoCompleteWord | null;
  setIsDropdown: (data: boolean) => void;
  navigateToSearch: (data: string) => void;
  setSelectedIndex: (data: number) => void;
  selectedIndex: number;
};

export default function AutoComplete({
  wordData,
  setIsDropdown,
  navigateToSearch,
  setSelectedIndex,
  selectedIndex,
}: Props) {
  if (!wordData) return null;
  const handleMouseEnter = (idx: number) => {
    setSelectedIndex(idx);
  };

  const handleMouseLeave = () => {
    setSelectedIndex(-1);
  };

  return (
    <ul
      tabIndex={0}
      className="absolute z-30 w-full h-[500px] bg-[#FFFFFF] ring-1 ring-[#0C3FC1]"
    >
      <div className="pt-[12px] pb-[14px] px-5 text-[14px] text-[#858596]">
        검색은 영어로만 가능해요.
      </div>
      {wordData &&
        wordData.data.map((data, idx) => (
          <li
            key={data.id}
            className={clsx(
              'py-2 px-5 text-[18px]',
              selectedIndex === idx && 'bg-gray-200',
            )}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              setIsDropdown(false);
              navigateToSearch(data.name);
            }}
          >
            {data.name}
          </li>
        ))}
    </ul>
  );
}
