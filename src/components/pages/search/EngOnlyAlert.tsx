import WarningBellSvg from '@/components/svg-component/WarningBellSvg';

export default function EngOnlyAlert() {
  return (
    <div className="w-[184px] h-[34px] py-[2px] px-[12px] mt-[6px] mx-[8px] bg-[#FFE5F5] ring-1 ring-[#FFD4EE] rounded-[8px] flex items-center justify-center relative z-20">
      <WarningBellSvg />
      <span className="pl-[4px] text-[#414149] text-[13px] font-medium">
        검색은 <span className="text-[#912828] font-bold">영어</span>로만
        가능해요.
      </span>
    </div>
  );
}
