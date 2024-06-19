import ArrowDownSvg from '@/components/svg-component/ArrowDownSvg';
import { dropdownOptions } from '@/constants/sortingOptions';
import clsx from 'clsx';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
}

export default function WordbookDropdown({
  selectedOption,
  setSelectedOption,
}: Props) {
  return (
    <div className="relative inline-block ml-auto mr-5 group cursor-pointer">
      <button className="w-[93px] text-white text-[15px] tracking-tight py-1 pr-1 flex items-center justify-end hover:bg-[#5360D4] focus:rounded-lg hover:rounded-lg">
        {selectedOption}
        <ArrowDownSvg className="stroke-white" />
      </button>
      <ul className="hidden p-1.5 group-hover:block absolute z-10 w-[93px] right-0 rounded-md shadow-[3px_3px_14px_rgba(46,66,118,0.14)] bg-white text-main-black text-sm leading-[18px]">
        {dropdownOptions.map((option, index) => (
          <li
            key={index}
            className={clsx(
              'p-1 hover:bg-[#F1F4FA] focus:bg-[#F1F4FA] focus:rounded-lg hover:rounded-lg',
              selectedOption === option
                ? 'text-main-blue font-semibold'
                : 'font-normal',
            )}
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
