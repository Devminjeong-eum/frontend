import CheckSvg from '@/components/svg-component/CheckSvg.tsx';

type Props = {
  isUser: boolean;
  isCopied: boolean;
};

export function CopiedNotice({ isUser, isCopied }: Props) {
  if (!isUser && !isCopied) {
    return null;
  }

  const text = isCopied ? `링크 복사 완료` : `로그인이 필요한 서비스입니다.`;

  return (
    <div className="w-screen h-screen fixed left-0 top-0 flex justify-center items-center z-10">
      <div className="w-full h-screen flex justify-center items-center max-w-[430px] bg-[#000000] opacity-70 mix-blend-multiply" />
      <div className="absolute flex gap-1.5 py-4 px-[22px] rounded-[16px] bg-[#05050555]">
        <CheckSvg />
        <span className="font-semibold text-white">{text}</span>
      </div>
    </div>
  );
}
