import BellSvg from '@/components/svg-component/BellSvg';
import clsx from 'clsx';

export default function ComingSoonAlert() {
  return (
    <div className="absolute w-full min-h-screen bg-[#FBFCFE]/20 backdrop-blur-[3px]  z-50">
      <div
        className={clsx(
          'absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2',
          'w-[274px] xs:w-[294px] h-[176px]',
          'rounded-2xl bg-white/60 ring-white ring-1 shadow-lg backdrop-blur-xs',
        )}
      >
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <BellSvg />
        </div>
        <div className="flex flex-col items-center py-[43px]">
          <p className="text-[#4568E0] font-medium text-[15px] leading-[14px]">
            트렌딩 단어 OPEN
          </p>
          <p className=" text-[25px] leading-[16px] mt-[16px] mb-[28px] font-medium text-main-black ">
            2024년 6월 19일
          </p>
          <p className=" text-main-black/80 px-10 text-center text-[15px] leading-[14px]">
            조회 기반 조회수 랭킹 페이지가 <br />
            오픈될 예정입니다! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
