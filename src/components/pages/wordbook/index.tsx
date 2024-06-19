'use client';

import Link from 'next/link';
import WordbookHeader from '@/components/pages/wordbook/WordbookHeader';
import QuizBanner from '@/components/pages/wordbook/QuizBanner';
import WordItem from '@/components/common/WordItem';
import Pagination from '@/components/common/Pagination';
import NoWordSvg from '@/components/svg-component/NoWordSvg';
import { WORD_LIST_PATH } from '@/routes/path';
import WordbookDropdown from '@/components/pages/wordbook/WordbookDropdown';
import useGetLikedWord from '@/hooks/query/useGetLikedWord';
import useDropdown from '@/hooks/useDropdown';
import {
  DROPDOWN_DEFAULT_OPTION,
  sortOptionMapping,
} from '@/constants/sortingOptions';

export default function Wordbook() {
  const { selectedOption, setSelectedOption, currentPage, setCurrentPage } =
    useDropdown(DROPDOWN_DEFAULT_OPTION);
  const { data } = useGetLikedWord(
    currentPage,
    10,
    sortOptionMapping[selectedOption],
  );

  const { data: wordData, totalCount } = data.data.data;

  return (
    <div>
      <div className="bg-wordbook-gradient h-32">
        <WordbookHeader />
      </div>
      <div className="flex flex-col justify-between">
        <div className="relative bottom-16 flex flex-col">
          <div className="flex">
            <div className="w-[calc(46%+30px)] h-9 overflow-hidden rounded-tl-xl relative top-px">
              <div className="bg-[#FBFCFE] [transform:rotateY(180deg)_skew(-30deg)_translate(30px,0px)] h-full rounded-tl-md flex justify-center items-center">
                <div className="[transform:rotateY(180deg)_skew(-30deg)_translate(-40px,0px)] pl-2.5 text-[#313140] font-medium text-[15px] leading-[18px] tracking-[-0.02em] opacity-90">
                  총 {totalCount}개
                </div>
              </div>
            </div>
            <WordbookDropdown
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </div>
          {totalCount === 0 ? (
            <div className="bg-[#FBFCFE] h-[calc(100vh-23rem)] flex flex-col justify-center items-center gap-2.5">
              <NoWordSvg />
              <span className="text-[#A8AEBC] font-medium text-center tracking-[-0.02em]">
                좋아요를 누른 단어가 없어요.
              </span>
            </div>
          ) : (
            <div className="p-5 rounded-tr-[24px] bg-[#FBFCFE] flex flex-col gap-[8px]">
              {wordData &&
                wordData.map((item) => (
                  <WordItem
                    diacritic={item.diacritic}
                    description={item.description}
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    pronunciation={item.pronunciation}
                    isLike={true}
                    likeCount={0}
                    setIsOpenModal={() => {}}
                  />
                ))}
            </div>
          )}
        </div>
        <div className="flex flex-col items-center gap-8 relative top-[-2rem]">
          {totalCount === 0 ? (
            <Link
              href={WORD_LIST_PATH}
              className="flex items-center justify-center w-10/12 h-14 bg-[#E7EBF8] rounded-2xl "
            >
              <p className="text-[#383697] font-semibold">단어 검색하러 가기</p>
            </Link>
          ) : (
            <Pagination
              viewPaginationNums={4}
              total={totalCount || 0}
              limit={10}
              setCurrent={setCurrentPage}
              current={currentPage}
            />
          )}
          <QuizBanner />
        </div>
      </div>
    </div>
  );
}
