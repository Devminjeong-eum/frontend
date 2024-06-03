import FillArrowSvg from '@/components/svg-component/FillArrowSvg';
import clsx from 'clsx';

export default function GeneralRanking() {
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
