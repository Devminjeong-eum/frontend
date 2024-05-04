'use client';
import CrownLinearSvg from '@/components/svg-component/CrownLinearSvg';
import FillArrowSvg from '@/components/svg-component/FillArrowSvg';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

function DescriptionZone() {
  return (
    <div className="ml-[26px] mt-[44px]">
      <p className="text-main-charcoal text-[18px] leading-[16px] font-medium">
        사람들이 이번 주에
      </p>
      <p className="text-main-balck text-[22px] leading-[16px] mt-3 font-semibold">
        이 용어를 가장 많이 찾아봤어요!
      </p>
      <p className="text-[#9E9EA3] text-[12px] leading-[16px] mt-[16px] font-medium">
        * 매주 월요일 업데이트 예정
      </p>
    </div>
  );
}

// FIXME: 아래의 주석 코드는 나중에 데이터 타입을 받게 되면 넣을 것들아래나중에 데이터 타입 의논 한 후
// function TopRanking({ items }) {
function TopRanking() {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMount(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const dummyItems = [1, 2, 3];

  return (
    <div className="mt-[28px] w-full ">
      <div className="-mx-[20px] min-h-[219px] overflow-x-hidden">
        {dummyItems.map((item, index) => (
          <div
            key={index}
            className={clsx(
              'h-[72px] rounded-r-[100px] flex items-center pl-[34px] transition-transform ',
              {
                'mt-[4px]': index !== 0,
                'w-[340px] bg-rank-gradient-one duration-700 ': index === 0,
                'w-[316px] bg-rank-gradient-two duration-1000': index === 1,
                'w-[292px] bg-rank-gradient-three h-[67px] duration-[1300ms]':
                  index === 2,
              },
              {
                '-translate-x-full': !isMount,
                'translate-x-0': isMount,
              },
            )}
          >
            {/* 크라운, 순위 컨테이너 */}
            <div className="relative">
              <CrownLinearSvg rank={String(index + 1)} />
              <p
                className={clsx(
                  'absolute text-[10px] top-3 font-bold  left-[10.5px]',
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
                  'text-white text-[18px] font-semibold',
                  item === 2 && 'text-[#334EAF]',
                )}
              >
                {item}
              </p>

              {/* 발음 및 발음 기호 */}
              <span className="flex items-center gap-[3px] text-[14px] leading-[14px]">
                <p
                  className={clsx(
                    index !== 2
                      ? 'text-white/80 font-medium line-clamp-1'
                      : 'text-[#5C6892]',
                  )}
                >
                  {item}
                </p>
                <p
                  className={clsx('font-light', {
                    'text-white/50 ': index !== 2,
                    'text-[#5C6892]/50': index === 2,
                  })}
                >
                  {item}
                </p>
              </span>
            </div>
            <div
              className={clsx(
                'mr-[22px] bg-white/20 rounded-xl w-[34px] h-[17px] px-[3px] text-white flex items-center justify-center',
                {
                  'text-[#495685]': index === 2,
                },
              )}
            >
              <FillArrowSvg />
              {/* <p className="text-[10px]">{item.rankChange}</p> */}
              <p className="text-[10px]">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// function GeneralRanking({ items }) {
function GeneralRanking() {
  const dummyItems = [4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="w-full mt-[22px] border-[#F2F4F9] border-[1px] rounded-2xl px-4 py-[22px]">
      {dummyItems.map((item, index) => (
        <div
          key={index}
          className={clsx(
            'h-[54px] border-[#ECEEF5] border-b-[1px] w-full flex items-center',
            index === 0 && '-mt-[6px]',
            index === dummyItems.length - 1 && 'border-none',
          )}
        >
          {/* 순위 */}
          <p className="font-semibold text-[#AAB2D0] text-[11px] ml-[20px]">
            {item}
          </p>

          {/* 영단어 컨테이너 */}
          <span className="flex ml-[29px] gap-[6px] flex-1 items-end ">
            <p className="text-[16px] text-main-black">{item}</p>
            <span className="text-[#F2F4F9]">|</span>
            <p className="text-[#6F6F80] text-[14px]">{item}</p>
          </span>

          {/* 순위 등락 컨테이너  */}
          <div className="mr-[22px] bg-[#F4F6FB] rounded-xl w-[34px] h-[17px] px-[3px] text-main-blue flex items-center justify-center">
            <FillArrowSvg />
            <p className="text-[10px]">{item}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HomeTrending() {
  // 추후 fetch logic 추가

  return (
    <>
      <DescriptionZone />
      <TopRanking />
      <GeneralRanking />
      {/* <TopRanking items={data.slice(0,3)} /> */}
      {/* <GeneralRanking items={data.slice(3)} /> */}
    </>
  );
}
