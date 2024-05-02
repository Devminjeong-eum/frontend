'use client';

import { useState } from 'react';
import MyWordbookHeader from '@/components/pages/my-wordbook/MyWordbookHeader';
import QuizBanner from '@/components/pages/my-wordbook/QuizBanner';
import usePosts from '@/hooks/query/usePosts';
import WordItem from '@/components/common/WordItem';
import Pagination from '../../common/Pagination';

export default function MyWordbook() {
  const [current, setCurrent] = useState(1);
  const { data } = usePosts(current);

  return (
    <div>
      <div className="bg-wordbook-gradient h-32">
        <MyWordbookHeader />
      </div>
      <div className="h-[calc(100%-8rem)] flex flex-col justify-between">
        <div className="relative bottom-16 flex flex-col">
          <div className="flex">
            <div className="w-[calc(46%+30px)] h-9 overflow-hidden rounded-tl-xl relative top-px">
              <div className="bg-[#FBFCFE] [transform:rotateY(180deg)_skew(-30deg)_translate(30px,0px)] h-full rounded-tl-md flex justify-center items-center">
                <div className="[transform:rotateY(180deg)_skew(-30deg)_translate(-40px,0px)] text-[#313140] font-medium text-sm leading-[18px] tracking-[-0.02em] opacity-90">
                  총 00개
                </div>
              </div>
            </div>
            <div>저장한 순</div>
          </div>
          <div className="p-5 rounded-tr-[24px] bg-[#FBFCFE] flex flex-col gap-[8px]">
            {data?.data.map((item) => (
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
        </div>
        <div className="flex flex-col items-center gap-9 pb-7 -mt-8">
          {data && (
            <Pagination
              viewPaginationNums={4}
              total={data?.totalItems || 0}
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
