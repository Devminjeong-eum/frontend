import { TrendWord } from '@/fetcher/types';
import clsx from 'clsx';
import { RankChange } from './RankChange';

type Props = {
  generalRankingList: TrendWord[];
};

export default function GeneralRanking({ generalRankingList }: Props) {
  return (
    <div className="w-full mt-[22px] border-[#F2F4F9] border-[1px] rounded-2xl px-4 py-[22px]">
      {generalRankingList.map((trendWord, index) => (
        <div
          key={index}
          className={clsx(
            'h-[54px] border-[#ECEEF5] border-b-[1px] w-full flex items-center',
            index === 0 && '-mt-[6px]',
            index === 6 && 'border-none',
          )}
        >
          {/* 순위 */}
          <p className="font-semibold text-[#AAB2D0] text-[11px] ml-[20px]">
            {trendWord.rank}
          </p>

          {/* 영단어 컨테이너 */}
          <span className="flex ml-[29px] gap-[6px] flex-1 items-end ">
            <p className="text-[16px] text-main-black">{trendWord.name}</p>
            <span className="text-[#F2F4F9]">|</span>
            <p className="text-[#6F6F80] text-[14px]">
              {trendWord.pronunciation}
            </p>
          </span>

          {/* 순위 등락 컨테이너  */}
          <RankChange
            className="bg-[#F4F6FB] text-main-blue"
            rankChange={trendWord.rankChange}
          />
        </div>
      ))}
    </div>
  );
}
