'use client';

import BlackBackSpaceSVG from '@/components/svg-component/BlackBackSpaceSVG';
import QuizScore from './QuizScore';
import QuizResultDetail from './QuizResultDetail';
import type { QuizResultWordData } from '@/fetcher/types';
import { getQuizResultSharePath, QUIZ_PATH } from '@/routes/path';
import { useRouter } from 'next/navigation';
import ShareButtonSvg from '@/components/svg-component/ShareButtonSvg.tsx';
import useAuthQuery from '@/hooks/query/useAuthQuery.ts';
import { useState } from 'react';
import LoginAlertModal from '@/components/common/LoginAlertModal.tsx';

type Props = {
  quizResultId: string;
  score: number;
  correctWords: QuizResultWordData[];
  incorrectWords: QuizResultWordData[];
};

export default function QuizResult({
  quizResultId,
  score,
  correctWords,
  incorrectWords,
}: Props) {
  const router = useRouter();
  const { data } = useAuthQuery();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const isLoggedIn = !data?.error ?? false;

  const handleNeedLogin = () => {
    // NOTE: 2초간 로그인 toast UI
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
        <div className="m-auto font-medium pr-3">TEST 결과</div>
        <button onClick={handleShare}>
          <ShareButtonSvg />
        </button>
      </header>
      <QuizScore score={score} />
      <QuizResultDetail
        correctWords={correctWords}
        incorrectWords={incorrectWords}
      />
      <button
        onClick={() => router.replace(QUIZ_PATH)}
        className="bg-[#4057DB] rounded-[16px] mt-[24px] mb-[48px] h-[50px] font-semibold text-white w-full text-[16px]"
      >
        다시 도전하러 가기
      </button>
      <LoginAlertModal isOpen={isOpenModal} />
    </div>
  );
}
