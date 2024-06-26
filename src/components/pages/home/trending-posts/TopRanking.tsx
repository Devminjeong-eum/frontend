'use client';

import CrownLinearSvg from '@/components/svg-component/CrownLinearSvg';
import type { TrendWord } from '@/fetcher/types';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { RankChange } from './RankChange';

const TopRankingItem = ({
  trendWord,
  index,
  isMount,
}: {
  trendWord: TrendWord;
  index: number;
  isMount: boolean;
}) => {
  const gradientStyles = [
    'bg-rank-gradient-one duration-700 w-[340px] xs:w-[390px]',
    'bg-rank-gradient-two duration-1000 w-[316px] xs:w-[366px]',
    'bg-rank-gradient-three h-[67px] duration-[1300ms] w-[292px] xs:w-[342px]',
  ];

  const { rank, rankChange, name, pronunciation, diacritic } = trendWord;

  return (
    <div
      key={`item_${index}`}
      className={clsx(
        'h-[72px] rounded-r-[100px] flex items-center pl-[34px] transition-transform',
        index !== 0 && 'mt-[4px]',
        gradientStyles[index],
        isMount ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      {/* 크라운, 순위 컨테이너 */}
      <div className="relative">
        <CrownLinearSvg rank={String(rank)} />
        <p
          className={clsx(
            'absolute text-[10px] top-3 font-bold left-[10.5px]',
            {
              'text-[white]': index !== 2,
              'text-[#4969D5]': index === 2,
              'left-[11.1px]': index === 0,
            },
          )}
        >
          {index + 1}
        </p>
      </div>

      {/* 영단어, 발음, 발음기호 컨테이너 */}
      <div className="ml-[20px] flex-1 items-end">
        {/* 영단어 */}
        <p
          className={clsx(
            'text-[18px] font-semibold',
            index !== 2 && 'text-white',
            index === 2 && 'text-[#334EAF]',
          )}
        >
          {name}
        </p>

        {/* 발음 및 발음 기호 */}
        <span className="flex items-center gap-[3px] text-[14px] leading-[14px]">
          <p
            className={clsx(
              index !== 2 && 'text-white/80 font-medium line-clamp-1',
              index === 2 && 'text-[#5C6892]',
            )}
          >
            {pronunciation}
          </p>
          <p
            className={clsx(
              'font-light',
              index !== 2 ? 'text-white/50' : 'text-[#5C6892]/50',
            )}
          >
            {diacritic}
          </p>
        </span>
      </div>
      <RankChange
        className="bg-white/20 text-main-blue"
        innerClassName={clsx(index !== 2 ? 'text-white' : 'text-[#495685]')}
        rankChange={rankChange}
      />
    </div>
  );
};

type Props = {
  topRankingList: TrendWord[];
};

export default function TopRanking({ topRankingList }: Props) {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMount(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-[28px] w-full">
      <div className="-mx-[20px] min-h-[219px] overflow-x-hidden">
        {topRankingList.map((trendWord, index) => (
          <TopRankingItem
            key={trendWord.id}
            index={index}
            trendWord={trendWord}
            isMount={isMount}
          />
        ))}
      </div>
    </div>
  );
}
