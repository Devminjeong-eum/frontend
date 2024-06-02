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
        <div className="flex flex-col items-center py-[43px] gap-[10px]">
          <p className="text-[#4568E0] font-medium text-[15px]">OPEN 예정일</p>
          <p className=" text-[24px] font-medium text-main-black">
            2024년 0월 0일
          </p>
          <p className=" text-main-black">여기 들어갈 문장 고민중고민중.</p>
        </div>
      </div>
    </div>
  );
}
