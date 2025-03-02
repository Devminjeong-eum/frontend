'use client';

import BlackBackSpaceSVG from '@/components/svg-component/BlackBackSpaceSVG';
import QuizScore from './QuizScore';
import QuizResultDetail from './QuizResultDetail';
import type { QuizResultWordData } from '@/fetcher/types';
import {
  getQuizResultSharePath,
  QUIZ_PATH,
  WORD_LIST_PATH,
} from '@/routes/path';
import { useRouter } from 'next/navigation';
import ShareButtonSvg from '@/components/svg-component/ShareButtonSvg.tsx';
import useAuthQuery from '@/hooks/query/useAuthQuery.ts';
import { useEffect, useState } from 'react';
import LoginAlertModal from '@/components/common/LoginAlertModal.tsx';
import Link from 'next/link';
import QuizShareTooltip from './QuizShareTooltip';
import useScroll from '@/hooks/useScroll';

type Props = {
  quizResultId: string;
  userName: string;
  score: number;
  correctWords: QuizResultWordData[];
  incorrectWords: QuizResultWordData[];
};

export default function QuizResult({
  quizResultId,
  userName,
  score,
  correctWords,
  incorrectWords,
}: Props) {
  const router = useRouter();
  const { data } = useAuthQuery();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const isLoggedIn = data?.error ?? false;
  const isGuest = quizResultId === 'guest';
  const isScrolled = useScroll();
  const [isOpen, setIsOpen] = useState(
    () =>
      typeof window !== 'undefined' &&
      sessionStorage.getItem('isQuizShareOpen') !== 'false',
  );

  useEffect(() => {
    if (sessionStorage.getItem('isQuizShareOpen')) setIsOpen(false);
    if (!isOpen) sessionStorage.setItem('isQuizShareOpen', 'false');
  }, [isOpen]);

  const handleNeedLogin = () => {
    setIsOpenModal(true);
    setTimeout(() => {
      setIsOpenModal(false);
    }, 2000);
  };

  const handleShare = () => {
    if (!isLoggedIn) {
      handleNeedLogin();
    } else {
      router.push(getQuizResultSharePath(quizResultId));
    }
  };

  return (
    <div className="relative px-5">
      <header className="flex items-center h-[68px]">
        <button
          className="ml-2 cursor-pointer"
          onClick={() => router.replace(QUIZ_PATH)}
        >
          <BlackBackSpaceSVG />
        </button>
        <div className="m-auto font-medium">퀴즈 결과</div>
        <button onClick={handleShare}>
          <ShareButtonSvg />
        </button>
      </header>
      <QuizScore score={score} userName={userName} />
      <QuizResultDetail
        correctWords={correctWords}
        incorrectWords={incorrectWords}
      />
      <button
        onClick={() => router.replace(QUIZ_PATH)}
        className="bg-[#4057DB] rounded-[16px] mt-[24px] mb-[8px] h-[54px] font-semibold text-white w-full text-[16px]"
      >
        {data?.error && !isGuest ? (
          <span>나도 도전하러 가기</span>
        ) : (
          <span>다시 도전하러 가기</span>
        )}
      </button>
      <Link href={WORD_LIST_PATH}>
        <button className="rounded-[16px] mb-[31px] h-[54px] font-semibold text-[#4057DB] w-full text-[16px] border-[1px] border-[#EAEDFF]">
          홈으로 가기
        </button>
      </Link>
      <LoginAlertModal isOpen={isOpenModal} />
      {!isScrolled && (
        <QuizShareTooltip isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </div>
  );
}
