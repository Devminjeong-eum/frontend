import { TrendWord } from '@/fetcher/types';
import clsx from 'clsx';
import { RankChange } from './RankChange';
import { getWordDetailPath } from '@/routes/path';
import Link from 'next/link';

type Props = {
  generalRankingList: TrendWord[];
};

export default function GeneralRanking({ generalRankingList }: Props) {
  return (
    <div className="w-full mt-[22px] border-[#F2F4F9] border-[1px] rounded-2xl py-[8px] ">
      {generalRankingList.map((trendWord, index) => (
        <div
          key={trendWord.id}
          className={clsx(
            'h-[54px] border-[#ECEEF5] border-b-[1px] w-full flex items-center ',
            index === 0 && '-mt-[6px]',
            index === 6 && 'border-none',
          )}
        >
          {/* 순위 */}
          <p className="font-semibold text-[#AAB2D0] text-[11px] ml-[20px]">
            {trendWord.rank}
          </p>

          {/* 영단어 컨테이너 */}
          <Link
            href={getWordDetailPath(trendWord.name)}
            className="flex ml-[29px] gap-[6px] flex-1 items-center group"
          >
            <p className="text-[16px] leading-[17px] font-medium text-main-black group-hover:underline underline-offset-2">
              {trendWord.name}
            </p>
            <p className="text-[#6F6F80] text-[14px] font-medium">
              {trendWord.pronunciation}
            </p>
          </Link>

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
