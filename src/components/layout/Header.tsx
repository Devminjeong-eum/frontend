'use client';

import LogoTextSvg from '@/components/svg-component/LogoTextSvg';
import SearchBar from './SearchBar';
import QuizButton from '@/components/pages/home/QuizButton';
import { useState } from 'react';
import useScroll from '@/hooks/useScroll';
import { useEffect } from 'react';
import { PROFILE_PATH, QUIZ_PATH, WORD_LIST_PATH } from '@/routes/path.ts';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import MypageIconSvg from '@/components/svg-component/MypageIconSvg.tsx';

const DynamicToolTip = dynamic(() => import('@/components/common/ToolTip'), {
  ssr: false,
});

export default function Header() {
  const isScrolled = useScroll();
  const [isOpen, setIsOpen] = useState(
    () =>
      typeof window !== 'undefined' &&
      sessionStorage.getItem('isOpen') !== 'false',
  );

  useEffect(() => {
    if (sessionStorage.getItem('isOpen')) setIsOpen(false);
    if (!isOpen) sessionStorage.setItem('isOpen', 'false');
  }, [isOpen]);

  return (
    <>
      <div className="bg-main-gradient-top h-[48px] flex items-center p-6 justify-between border-none">
        <Link href={WORD_LIST_PATH}>
          <LogoTextSvg />
        </Link>
        <div className="flex gap-[14px]">
          <Link href={QUIZ_PATH}>
            <QuizButton />
          </Link>
          <Link href={PROFILE_PATH}>
            <div className="pt-[2px]">
              <MypageIconSvg />
            </div>
          </Link>
        </div>
      </div>
      <SearchBar />
      {!isScrolled && <DynamicToolTip isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}
