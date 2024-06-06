import CheckSvg from '@/components/svg-component/CheckSvg.tsx';

export function CopiedNotice() {
  return (
    <div className="w-screen h-screen fixed left-0 top-0 flex justify-center items-center">
      <div className="w-full h-screen flex justify-center items-center max-w-[430px] bg-[#000000] opacity-70 mix-blend-multiply" />
      <div className="absolute flex gap-1.5 py-4 px-[22px] rounded-[16px] bg-[#05050555]">
        <CheckSvg />
        <span className="font-semibold text-white">링크 복사 완료</span>
      </div>
    </div>
  );
}
