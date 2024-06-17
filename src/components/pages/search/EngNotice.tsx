import WarningBellSvg from '@/components/svg-component/WarningBellSvg';

export default function EngNotice() {
  return (
    <div className="w-[50%] h-[34px] px-[12px] mt-[6px] mx-[8px] bg-[#FFE5F5] ring-1 ring-[#FFD4EE] rounded-[8px] flex items-center relative z-20">
      <span>
        <WarningBellSvg />
      </span>
      <span className="pl-[4px] text-[#414149] text-[14px] font-medium">
        검색은 <span className="text-[#912828] font-bold">영어</span>로만
        가능해요.
      </span>
    </div>
  );
}
