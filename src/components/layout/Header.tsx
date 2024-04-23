'use client';

import MenuSvg from '@/components/svgComponent/MenuSvg';
import LogoTextSvg from '@/components/svgComponent/LogoTextSvg';
import SearchBar from './SearchBar';

import QuizButton from '@/components/pages/home/QuizButton';
import ToolTip from '@/components/common/ToolTip';
import { useState } from 'react';
import useScroll from '@/hooks/useScroll';
import { useEffect } from 'react';
import { NOTICE_PATH, QUIZ_PATH, WORD_LIST_PATH } from '@/routes/path.ts';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(true);
  const isScrolled = useScroll();

  useEffect(() => {
    if (sessionStorage.getItem('isOpen')) setIsOpen(false);
    if (!isOpen) sessionStorage.setItem('isOpen', 'false');
  }, [isOpen]);

  return (
    <>
      <div className="bg-main-gradiant-top h-[48px] flex items-center p-6 justify-between border-none">
        <div className="flex-1">
          <Link href={WORD_LIST_PATH}>
            <LogoTextSvg />
          </Link>
        </div>
        <Link href={QUIZ_PATH}>
          <QuizButton />
        </Link>
        <Link href={NOTICE_PATH}>
          <MenuSvg />
        </Link>
      </div>
      <SearchBar />
      {!isScrolled && (
        <ToolTip isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />
      )}
    </>
  );
}