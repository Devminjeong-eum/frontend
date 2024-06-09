import LockSmallSvg from '@/components/svg-component/LockSmallSvg';
import clsx from 'clsx';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import { LOGIN_PATH } from '@/routes/path.ts';

type Props = {
  isOpen: boolean;
};

export default function LoginAlertModal({ isOpen }: Props) {
  if (!isOpen) return null;

  return createPortal(
    <div
      className={clsx(
        'fixed bottom-0 left-1/2 -translate-x-1/2',
        'w-[320px] xs:w-[390px] h-[54px] rounded-lg bg-[#3D4FF3]/95',
        'flex justify-between items-center text-white',
        'text-[14px]',
        isOpen && 'animate-slideUpBounce',
      )}
    >
      <div className="flex gap-[4px] pl-[14px]">
        <LockSmallSvg />
        <p>로그인이 필요한 서비스에요.</p>
      </div>
      <Link
        href={LOGIN_PATH}
        className="font-semibold hover:underline underline-offset-[3px] pr-[18px]"
      >
        로그인하기
      </Link>
    </div>,
    document.body,
  );
}
