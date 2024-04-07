import ExternalSvg from '@/components/svgComponent/ExternalSvg.tsx';
import { useEffect, useState } from 'react';
import CheckSvg from '@/components/svgComponent/CheckSvg.tsx';

function copyURL() {
  const url = window.document.location.href;
  return navigator.clipboard.writeText(url);
}

export default function URLShareButton() {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let id: NodeJS.Timeout | null;
    if (isCopied) {
      id = setTimeout(() => setIsCopied(false), 600);
    }

    return () => {
      if (id) clearTimeout(id);
    };
  }, [isCopied]);

  const onClickButton = async () => {
    await copyURL();
    setIsCopied(true);
  };
  return (
    <div>
      <button onClick={() => onClickButton()}>
        <ExternalSvg />
      </button>
      {isCopied && <CopiedNotice />}
    </div>
  );
}

function CopiedNotice() {
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
