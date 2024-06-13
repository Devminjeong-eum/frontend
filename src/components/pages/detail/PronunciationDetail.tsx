'use client';

import clsx from 'clsx';
import React, { useState } from 'react';
import DetailPronunciationCorrectSvg from '@/components/svg-component/DetailPronunciationCorrectSvg.tsx';
import DetailPronunciationWrongSvg from '@/components/svg-component/DetailPronunciationWrongSvg.tsx';
import DetailPronunciationShowArrowSvg from '@/components/svg-component/DetailPronunciationShowArrowSvg.tsx';
import DetailPronunciationCloseArrowSvg from '@/components/svg-component/DetailPronunciationCloseArrowSvg.tsx';

interface Props {
  pronunciation: string[];
  diacritic: string[];
  wrongPronunciation: string[];
}

const PronunciationDetail = ({
  pronunciation,
  diacritic,
  wrongPronunciation,
}: Props) => {
  const [isShowDetail, setIsShowDetail] = useState(true);

  const correctWordLen = Math.min(pronunciation.length, diacritic.length);

  return (
    <div className="relative pb-4">
      <div
        className={`flex flex-col gap-2 transition-all overflow-hidden ${clsx(isShowDetail ? 'max-h-[100vh]' : 'max-h-[0px]')}`}
      >
        <div className="px-3.5 rounded-[14px] bg-[#D9E6FF] pt-3.5 pb-3">
          <span className="flex gap-1 items-center font-medium text-main-blue text-sm">
            <DetailPronunciationCorrectSvg />
            올바른 발음
          </span>
          <div className="text-[15px]">
            {new Array(correctWordLen).fill(0).map((_, idx) => (
              <span key={idx}>
                {pronunciation[idx]} {diacritic[idx]}
                {idx !== correctWordLen - 1 ? ' , ' : ''}
              </span>
            ))}
          </div>
        </div>
        <div className="px-3.5 rounded-[14px] bg-[#FFE5F5] pt-3.5 pb-3">
          <span className="flex gap-1 items-center font-medium text-[#912828] text-sm">
            <DetailPronunciationWrongSvg />
            잘못된 발음
          </span>
          <div className="text-[15px]">
            {wrongPronunciation.map((wrong, idx) => (
              <span key={idx}>
                {wrong}
                {idx !== wrongPronunciation.length - 1 ? ' , ' : ''}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div
        className="bottom-0 absolute left-[-22px] w-[calc(100%+44px)] h-[58px] bg-[#575ADA] flex items-center px-[22px] text-white justify-between cursor-pointer"
        onClick={() => setIsShowDetail((prev) => !prev)}
      >
        용어발음 자세히 보기
        {isShowDetail ? (
          <DetailPronunciationCloseArrowSvg />
        ) : (
          <DetailPronunciationShowArrowSvg />
        )}
      </div>
      <div className="h-[58px]" />
    </div>
  );
};

export default PronunciationDetail;
