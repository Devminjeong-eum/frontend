import LockSmallSvg from '@/components/svg-component/LockSmallSvg';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  isOpen: boolean;
};

export default function LoginAlertModal({ isOpen }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();

  if (!isOpen) return null;

  return createPortal(
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push('/')}
      className={clsx(
        'fixed bottom-0 left-1/2 -translate-x-1/2 cursor-pointer',
        'w-[calc(100%-40px)] max-w-[390px]',
        'h-[54px] rounded-lg bg-[#3D4FF3]/95',
        'flex justify-between items-center text-white',
        'text-[14px] px-[20px]',
        isOpen ? 'animate-slideUpBounce opacity-100' : 'opacity-0',
      )}
    >
      <div className="flex gap-[4px]">
        <LockSmallSvg />
        <p>로그인이 필요한 서비스에요.</p>
      </div>
      <button
        className={clsx(
          'font-semibold underline-offset-[3px] focus:outline-none',
          isHovered ? 'underline' : '',
        )}
      >
        로그인하기
      </button>
    </div>,
    document.body,
  );
}
