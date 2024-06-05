'use client';

import BlackBackSpaceSVG from '@/components/svg-component/BlackBackSpaceSVG';
import QuizScore from './QuizScore';
import ShareButton from '@/components/svg-component/ShareButton';
import QuizResultDetail from './QuizResultDetail';
import type { QuizResultWordData } from '@/fetcher/types';
import { QUIZ_PATH } from '@/routes/path';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { RESULT_PATH } from '@/routes/path.ts';

type Props = {
  score: number;
  correctWords: QuizResultWordData[];
  incorrectWords: QuizResultWordData[];
};

export default function QuizResult({
  score,
  correctWords,
  incorrectWords,
}: Props) {
  const router = useRouter();

  return (
    <div className="relative px-5">
      <header className="flex items-center h-[68px]">
        <button
          className="ml-2 cursor-pointer"
          onClick={() => router.replace(`${QUIZ_PATH}`)}
        >
          <BlackBackSpaceSVG />
        </button>
        <div className=" m-auto font-medium pr-3">TEST 결과</div>
        <Link href={RESULT_PATH}>
          <ShareButton />
        </Link>
      </header>
      <QuizScore score={score} />
      <QuizResultDetail
        correctWords={correctWords}
        incorrectWords={incorrectWords}
      />
      <button
        onClick={() => router.replace(`${QUIZ_PATH}`)}
        className="bg-[#4057DB] rounded-[16px] mt-[24px] mb-[48px] h-[50px] font-semibold text-white w-full text-[16px]"
      >
        다시 도전하러 가기
      </button>
    </div>
  );
}
