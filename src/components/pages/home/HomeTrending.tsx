import CrownLinearSvg from '@/components/svg-component/CrownLinearSvg';
import FillArrowSvg from '@/components/svg-component/FillArrowSvg';
import clsx from 'clsx';

export default function HomeTrending() {
  return (
    <>
      {/* TEXT_ZONE */}
      <div className="ml-[26px] mt-[40px]">
        <p className="text-main-charcoal text-[18px] leading-[16px]">
          사람들이 이번 주에
        </p>
        <p className="text-main-balck text-[22px] leading-[16px] mt-3 font-semibold">
          이 용어를 가장 많이 찾아봤어요!
        </p>
        <p className="text-main-charcoal/50 text-[12px] leading-[16px] mt-[16px]">
          * 매주 월요일 업데이트 예정
        </p>
      </div>

      {/* 1,2,3 */}
      <div className="mt-[28px] w-full">
        {/* rank 1,2,3 */}
        <div className="-mx-[22px] min-h-[219px] ">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className={clsx(
                'h-[72px] rounded-r-[100px] flex items-center pl-[34px]',
                {
                  'mt-[4px]': index !== 0,
                  'w-[360px] bg-rank-gradiant-one': index === 0,
                  'w-[304px] bg-rank-gradiant-two': index === 1,
                  'w-[268px] bg-rank-gradiant-three h-[67px]': index === 2,
                },
              )}
            >
              {/* 아이콘 */}
              <div className="relative ">
                <CrownLinearSvg />
                <p
                  className={clsx(
                    'absolute text-[10px] left-[10px] top-3',
                    index !== 2 ? 'text-white' : 'text-main-blue',
                  )}
                >
                  {index + 1}
                </p>
              </div>
              {/* 텍스트 */}
              <div className="ml-[20px] flex-1">
                <p className="text-white text-[18px] font-semibold">
                  Application
                </p>
                <span className="flex items-center gap-[3px] text-[15px] leading-[14px]">
                  <p className="text-white font-normal">애플리케이션</p>
                  <p className="text-white/50 font-light">[application]</p>
                </span>
              </div>

              {/* UP_DOWN */}
              <div className="mr-[22px] bg-white/20 rounded-xl w-[34px] h-[17px] px-[3px] text-white flex items-center justify-center">
                <FillArrowSvg />
                <p className="text-[10px]">1</p>
              </div>
            </div>
          ))}
        </div>

        {/* 4~ */}
        <div className="w-full mt-[26px]">
          {Array.from({ length: 7 }, (_, index) => (
            <div
              key={index}
              className={clsx(
                'h-[54px] border-[#ECEEF5] border-b-[1px] w-full flex items-center ',
                { 'border-none': index === 6 },
              )}
            >
              {/* 순위 */}
              <p className="font-semibold text-[#AAB2D0] text-[11px] ml-[20px]">
                {index + 4}
              </p>

              {/* WORD_ZONE */}
              <span className="flex ml-[29px] gap-[6px] flex-1">
                <p className="text-[16px] text-main-black">Devword</p>
                <span className="text-[#F2F4F9]">|</span>
                <p className="text-[#6F6F80] text-[14px]">개발 용어</p>
              </span>

              {/* UP_DOWN */}
              <div className="mr-[22px] bg-[#F4F6FB] rounded-xl w-[34px] h-[17px] px-[3px] text-main-blue flex items-center justify-center">
                <FillArrowSvg />
                <p className="text-[10px]">1</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
