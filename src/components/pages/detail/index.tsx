'use client';

import CorrectSvg from '@/components/svg-component/CorrectSvg.tsx';
import WrongSvg from '@/components/svg-component/WrongSvg.tsx';

import useWordDetail from '@/hooks/query/useWordDetail.ts';
import DetailHeader from './DetailHeader.tsx';
import LikeButton from '@/components/pages/detail/LikeButton.tsx';
import ReportButton from '@/components/pages/detail/ReportButton.tsx';

type Props = {
  wordId: number;
};

export default function WordDetailClientPage({ wordId }: Props) {
  const {
    data: {
      wordName,
      wordDescription,
      wordSpeak,
      wrongSpeak,
      wordExample,
      wordDiacritic,
    },
  } = useWordDetail(wordId);

  return (
    <div>
      <div className="bg-main-gradiant-full px-[16px]">
        <header className="w-full">
          <DetailHeader />
        </header>
        <div className="pt-6 pb-[22px]">
          <div className="flex justify-between">
            <div className="flex items-end mb-[8px] gap-2.5">
              <h1 className="text-[30px] align-bottom font-semibold text-white">
                {wordName}
              </h1>
              <span className="text-[#E1E2F8] font-medium pb-[6px]">
                {wordSpeak}
              </span>
            </div>
            <LikeButton />
          </div>
          <div className="inline-flex flex-col gap-2.5">
            <div className="flex flex-shrink">
              <div className="h-[25px] bg-[#4068D0] rounded-[8px] flex items-center gap-2.5 px-2">
                <CorrectSvg />
                <span className="text-[13px] font-semibold text-white">
                  올바른 발음
                </span>
                <span className="text-[13px] text-[#EAEEF8]">
                  {wordSpeak} {wordDiacritic}
                </span>
              </div>
            </div>
            <div className="flex flex-shrink">
              <div className="h-[25px] bg-[#6264A8] rounded-[8px] flex items-center gap-2.5 px-2">
                <WrongSvg />
                <span className="text-[13px] font-semibold text-white">
                  잘못된 발음
                </span>
                <span className="text-[13px] text-[#EBEBF5]">{wrongSpeak}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="p-5 flex flex-col gap-2">
        <div className="p-[18px] rounded-[16px] border border-[#F2F4F9] shadow-base bg-white">
          <h3 className="font-semibold text-main-black pb-1.5">의미</h3>
          <p className="text-main-gray">{wordDescription}</p>
        </div>
        {wordExample && (
          <div className="p-[18px] rounded-[16px] border border-[#F2F4F9] shadow-base bg-white">
            <h3 className="font-semibold text-main-black pb-1.5">예문</h3>
            {wordExample
              .split('$')
              .filter((example) => example.trim())
              .map((example, idx) => (
                <div
                  className="text-main-gray flex items-center gap-2"
                  key={idx}
                >
                  <div className="w-1 h-1 rounded-full bg-main-charcoal self-start mt-2.5 flex-shrink-0" />
                  <p className="text-main-gray">{example}</p>
                </div>
              ))}
          </div>
        )}
        <ReportButton />
      </main>
    </div>
  );
}
