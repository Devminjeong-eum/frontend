'use client';

import KakaoIconSvg from '@/components/svg-component/KakaoIconSvg.tsx';
import LinkShareIconSvg from '@/components/svg-component/LinkShareIconSvg.tsx';
import ModalXSvg from '@/components/svg-component/ModalXSvg.tsx';
import useLoadKakaoScript from '@/hooks/useLoadKakaoScript.ts';
import useCopyClipboard from '@/hooks/useCopyClipboard.ts';
import { CopiedNotice } from '@/components/common/CopiedNotice.tsx';
import { useRouter } from 'next/navigation';

export default function ShareModal() {
  const { handleShare } = useLoadKakaoScript();
  const router = useRouter();
  const { isCopied, onCopyClipboard } = useCopyClipboard();

  return (
    <div className="fixed max-w-[430px] top-0 w-full h-full flex justify-center items-center bg-[#17192470] px-[46px]">
      <div className="relative w-full h-[172px] bg-white rounded-[16px] flex flex-col justify-center items-center">
        <button onClick={router.back} className="absolute top-4 right-4">
          <ModalXSvg />
        </button>
        <h3 className="font-semibold text-[18px] text-[#181818]">
          퀴즈 결과 공유하기
        </h3>
        <div className="flex justify-center gap-[37px]">
          <div className="flex flex-col items-center">
            <button onClick={handleShare}>
              <div className="w-[52px] h-[52px] rounded-full bg-kakao m-2 flex justify-center items-center">
                <KakaoIconSvg />
              </div>
              <span>카카오톡</span>
            </button>
          </div>
          <div className="flex flex-col items-center">
            <button onClick={onCopyClipboard}>
              <div className="w-[52px] h-[52px] rounded-full bg-[#F2F4F9] m-2 flex justify-center items-center">
                <LinkShareIconSvg />
              </div>
              <span>URL 복사</span>
            </button>
          </div>
        </div>
      </div>
      {isCopied && <CopiedNotice />}
    </div>
  );
}
