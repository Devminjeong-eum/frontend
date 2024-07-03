import CheckSvg from '@/components/svg-component/CheckSvg.tsx';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

export function CopiedNotice({ isOpen, handleClose }: Props) {
  if (!isOpen) return null;

  return (
    <div
      className="w-full h-screen fixed top-0 left-0 flex justify-center items-center z-10"
      onClick={handleClose}
    >
      <div className="w-full h-screen flex justify-center items-center max-w-[430px] bg-[#000000] opacity-70 mix-blend-multiply" />
      <div className="absolute flex gap-1.5 py-4 px-[22px] rounded-[16px] bg-[#05050555]">
        <CheckSvg />
        <span className="font-semibold text-white">링크 복사 완료</span>
      </div>
    </div>
  );
}
