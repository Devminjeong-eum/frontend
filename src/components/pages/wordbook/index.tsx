'use client';

import { useState } from 'react';
import Link from 'next/link';
import WordbookHeader from '@/components/pages/wordbook/WordbookHeader';
import QuizBanner from '@/components/pages/wordbook/QuizBanner';
import usePosts from '@/hooks/query/usePosts';
import WordItem from '@/components/common/WordItem';
import Pagination from '@/components/common/Pagination';
import NoWordSvg from '@/components/svg-component/NoWordSvg';
import { WORD_LIST_PATH } from '@/routes/path';
import WordbookDropdown from '@/components/pages/wordbook/WordbookDropdown';

export default function Wordbook() {
  const [current, setCurrent] = useState(1);
  const { data: { data: wordData, totalItems } = {} } = usePosts(current);

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
                <div className="[transform:rotateY(180deg)_skew(-30deg)_translate(-40px,0px)] text-[#313140] font-medium text-sm leading-[18px] tracking-[-0.02em] opacity-90">
                  총 {totalItems}개
                </div>
              </div>
            </div>
            <WordbookDropdown />
          </div>
          {totalItems === 0 ? (
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
                    wordDiacritic={item.wordDiacritic}
                    wordDescription={item.wordDescription}
                    key={item.wordId}
                    wordId={item.wordId}
                    wordName={item.wordName}
                    wordSpeak={item.wordSpeak}
                    wordLike={item.wordLike}
                  />
                ))}
            </div>
          )}
        </div>
        <div className="flex flex-col items-center gap-8 relative top-[-2rem]">
          {totalItems === 0 ? (
            <Link
              href={WORD_LIST_PATH}
              className="flex items-center justify-center w-10/12 h-14 bg-[#E7EBF8] rounded-2xl "
            >
              <p className="text-[#383697] font-semibold">단어 검색하러 가기</p>
            </Link>
          ) : (
            <Pagination
              viewPaginationNums={4}
              total={totalItems || 0}
              limit={10}
              setCurrent={setCurrent}
              current={current}
            />
          )}
          <QuizBanner />
        </div>
      </div>
    </div>
  );
}