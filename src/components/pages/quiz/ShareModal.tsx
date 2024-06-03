import { createPortal } from 'react-dom';
import useLoadKakaoScript from '@/hooks/useLoadKakaoScript';
import KakaoShareSvg from '@/components/svg-component/KakaoShareSvg';
import LinkShareSvg from '@/components/svg-component/LinkShareSvg';
import CloseSvg1 from '@/components/svg-component/CloseSvg1';
import { CopiedNotice } from '../detail/URLShareButton';
import { useState } from 'react';

interface Props {
  isOpen: boolean;
  handleModalClick: () => void;
}

export default function ShareModal({ isOpen, handleModalClick }: Props) {
  const { handleShare } = useLoadKakaoScript();
  const [isCopy, setIsCopy] = useState(false);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
      handleModalClick();
    }, 1000);
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center max-w-[430px] mx-auto">
      <div className="bg-white rounded-[16px] mx-[45px] h-[200px] w-full flex flex-col items-center justify-center">
        <div className="w-[90%] flex mb-[20px] -mt-[20px]">
          <div className="w-full text-[20px] font-semibold text-center mt-[14px] ml-[20px]">
            퀴즈 결과 공유하기
          </div>
          <button
            className="flex flex-row-reverse mt-[6px]"
            onClick={handleModalClick}
          >
            <CloseSvg1 />
          </button>
        </div>
        <div className="flex">
          <div className="mr-[20px]">
            <button onClick={handleShare}>
              <KakaoShareSvg />
            </button>
            <div className="text-center">카카오톡</div>
          </div>
          <div className="ml-[20px]">
            <button onClick={handleCopyUrl}>
              <LinkShareSvg />
            </button>
            <div>URL 복사</div>
          </div>
        </div>
      </div>
      {isCopy && <CopiedNotice />}
    </div>,
    document.body,
  );
}
