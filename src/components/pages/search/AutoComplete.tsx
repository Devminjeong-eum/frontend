import RightArrowSvg from '@/components/svg-component/RightArrowSvg';
import { AutoCompleteWordData } from '@/fetcher/types';
import { WORD_REPORT_FORM_URL } from '@/routes/path';
import clsx from 'clsx';
import Link from 'next/link';

type Props = {
  searchWordResult: AutoCompleteWordData[] | null;
  setSelectedIndex: (data: number) => void;
  selectedIndex: number;
  searchInput: string;
  handleNavigateToDetailPage: (data: string) => void;
};

export default function AutoComplete({
  searchWordResult,
  setSelectedIndex,
  selectedIndex,
  searchInput,
  handleNavigateToDetailPage,
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
          isSearchWordEmpty && 'pb-[0px]',
        )}
      >
        {isSearchWordEmpty ? (
          <Link href={WORD_REPORT_FORM_URL} target="_blank">
            <p>검색 결과가 없어요.</p>
            <div className="flex items-center gap-2.5 pt-[15.5px]">
              <span className="font-semibold text-[15px] text-main-charcoal flex items-center">
                이 용어 제보하기
              </span>
              <div className="flex items-center">
                <RightArrowSvg />
              </div>
            </div>
          </Link>
        ) : (
          '검색어는 세 글자 이상 입력해 주세요.'
        )}
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
            handleNavigateToDetailPage(word.name);
          }}
        >
          {word.name.split('').map((alphabet, charIdx) => (
            <span
              key={`${alphabet}-${charIdx}`}
              className={clsx(
                charIdx < searchInput.length &&
                  alphabet.toLowerCase() ===
                    searchInput[charIdx].toLowerCase() &&
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
