import ArrowDownSvg from '@/components/svg-component/ArrowDownSvg';
import ArrowUpSvg from '@/components/svg-component/ArrowUpSvg';
import { useState } from 'react';
import type { QuizResultWordData } from '@/fetcher/types';
import QuizResultDetailWord from './QuizResultDetailWord';

type Props = {
  correctWords: QuizResultWordData[];
  incorrectWords: QuizResultWordData[];
};

export default function QuizResultDetail({
  correctWords,
  incorrectWords,
}: Props) {
  const [isDetail, setIsDetail] = useState(true);
  const words = [...correctWords, ...incorrectWords];

  const handleIsDetailChange = () => {
    setIsDetail(!isDetail);
  };

  return (
    <>
      {isDetail ? (
        <button
          className="w-full h-[60px] mt-[-10px] bg-[#F2F4F9] rounded-b-[16px] flex justify-center items-center text-[16px] text-[#383697] font-semibold"
          onClick={handleIsDetailChange}
        >
          퀴즈 결과 자세히 보기
          <ArrowDownSvg />
        </button>
      ) : (
        <>
          <div className="w-full bg-[#F2F4F9]">
            <div className="relative flex justify-between px-[34px] mt-[-20px] z-9999">
              <span className="h-[24px] border border-l-[6px] border-[#ABB9D5] rounded-md"></span>
              <span className="h-[24px] mr-[224px] border border-l-[6px] border-[#ABB9D5] rounded-md"></span>
              <span className="h-[24px] border border-l-[6px] border-[#ABB9D5] rounded-md"></span>
              <span className="h-[24px] border border-l-[6px] border-[#ABB9D5] rounded-md"></span>
            </div>
            <div className="flex justify-between items-center px-5 pt-[40px]">
              <span className="text-[20px] font-semibold">
                퀴즈 정답이에요!
              </span>
              <div className="inline-block space-x-1">
                <span className="inline-block h-2 w-2 rounded-full bg-quiz-blue"></span>
                <span className="text-[11px] pr-2">맞았어요</span>
                <span className="inline-block h-2 w-2 rounded-full bg-quiz-red"></span>
                <span className="text-[11px]">틀렸어요</span>
              </div>
            </div>
            {words.map((data) => (
              <QuizResultDetailWord
                key={data.wordId}
                data={data}
                correctWords={correctWords}
              />
            ))}
          </div>
          <button
            className="w-full h-[64px] bg-[#F2F4F9] rounded-b-[16px] flex justify-center items-center text-[16px] text-[#383697] font-semibold"
            onClick={handleIsDetailChange}
          >
            퀴즈 결과 접기 <ArrowUpSvg />
          </button>
        </>
      )}
    </>
  );
}
