import { useRouter } from 'next/navigation';
import clsx from 'clsx';

import { useState, useRef } from 'react';

import OSVG from '@/components/svg-component/OSVG';
import XSVG from '@/components/svg-component/XSVG';
import BlackBackSpaceSVG from '@/components/svg-component/BlackBackSpaceSVG';
import Quiz from '.';
import { useGetQuizData } from '@/hooks/query/useGetQuizData';
import { getQuizResultPath } from '@/routes/path.ts';
import useQuizResult from '@/hooks/mutation/useQuizResult.ts';
import { useSetAtom } from 'jotai/react';
import { guestQuizAtom } from '@/store';
import QuizBackModal from './QuizBackModal';

export default function QuizPlay() {
  const router = useRouter();
  const quizMutation = useQuizResult();
  const setGuestQuizAtom = useSetAtom(guestQuizAtom);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectOption, setSelectOption] = useState<string | null>(null);
  const [isButtonsDisabled, setIsButtonsDisabled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const correctWordIdsRef = useRef<string[]>([]);
  const incorrectWordIdsRef = useRef<string[]>([]);
  const [isBackModalOpen, setIsBackModalOpen] = useState(false);

  const {
    data: {
      data: { data },
    },
  } = useGetQuizData();

  const handleNextQuiz = () => {
    setTimeout(() => {
      if (currentQuiz < data.length - 1) {
        setCurrentQuiz(currentQuiz + 1);
        setSelectOption(null);
        setIsButtonsDisabled(false);
      }
    }, 500);
  };

  const makeQuizResult = (
    correctWordIds: string[],
    incorrectWordIds: string[],
  ) => {
    quizMutation.mutate(
      {
        correctWordIds,
        incorrectWordIds,
      },
      {
        onSuccess: ({ data }) => {
          router.push(getQuizResultPath(data.data.quizResultId));
        },
        onError: (error) => {
          // 401 : 별도의 페이지 생성
          // FIXME : Error 처리 개선 필요
          if (Number(JSON.parse(error.message).statusCode) === 401) {
            router.push(getQuizResultPath('guest'));
          } else {
            // 500 : 서버에러 페이지
            throw error;
          }
        },
      },
    );
  };

  const handleAnswerOptionClick = (wordId: string, selectedOption: string) => {
    setProgress(((currentQuiz + 1) / data.length) * 100);

    const isAnswer = selectedOption === data[currentQuiz].correct;
    if (isAnswer) {
      correctWordIdsRef.current.push(wordId);
      setGuestQuizAtom((prev) => {
        return {
          ...prev,
          correctWordData: [...prev.correctWordData, data[currentQuiz]],
        };
      });
    } else {
      incorrectWordIdsRef.current.push(wordId);
      setGuestQuizAtom((prev) => {
        return {
          ...prev,
          incorrectWordData: [...prev.incorrectWordData, data[currentQuiz]],
        };
      });
    }

    setSelectOption(selectedOption);
    setIsButtonsDisabled(true);

    // NOTE: 퀴즈가 주어진 선지만큼 지났으면, 퀴즈 결과를 만든다. 아니면 다음 퀴즈를 제공한다.
    if (currentQuiz === data.length - 1) {
      makeQuizResult(
        [...correctWordIdsRef.current],
        [...incorrectWordIdsRef.current],
      );
    } else handleNextQuiz();
  };

  const handleBackModalOpen = () => {
    setIsBackModalOpen(!isBackModalOpen);
  };

  const handleBack = () => {
    setIsShow(!isShow);
  };

  if (isShow) return <Quiz />;

  return (
    <div className="flex justify-center min-h-screen text-main-black">
      <div className="flex flex-col items-center w-full max-w-[430px] border-1 border-x border-gray-200 shadow-xl">
        <div className="w-full h-full items-center bg-[#fbfcfe] relative">
          <header className="flex items-center h-[68px]">
            <button
              onClick={handleBackModalOpen}
              className="ml-6 cursor-pointer"
            >
              <BlackBackSpaceSVG />
            </button>
            <div className=" m-auto font-medium pr-6">개발 용어 발음 퀴즈</div>
          </header>
          <div className={`w-full bg-[#ECEFF5] flex`}>
            <div
              className="bg-[#0C3FC1] h-[2px] transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-[14px] flex flex-col items-center mt-[73px]">
            <p className="text-main-gray">아래 용어의 발음은?</p>
            <div className={`text-[32px] font-semibold mb-[42px]`}>
              {data?.[currentQuiz].name}
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            {data?.[currentQuiz].selections.map(
              (option: string, idx: number) => (
                <button
                  key={idx}
                  disabled={isButtonsDisabled}
                  onClick={() =>
                    handleAnswerOptionClick(data[currentQuiz].wordId, option)
                  }
                  className={clsx(
                    'shadow-quiz-button w-[90%] font-medium h-[56px] rounded-[16px] mb-[8px] border-px border-[#F2F4F9] ring-1 ring-[#F2F4F9]',
                    selectOption === option &&
                      (option === data[currentQuiz].correct
                        ? 'bg-quiz-blue text-white'
                        : 'bg-quiz-red text-white'),
                    selectOption !== option && 'bg-white',
                  )}
                >
                  <div className="flex justify-center items-center relative">
                    {selectOption === option &&
                      (selectOption === data[currentQuiz].correct ? (
                        <div className="absolute left-4">
                          <OSVG />
                        </div>
                      ) : (
                        <div className="absolute left-4 top-1">
                          <XSVG />
                        </div>
                      ))}
                    {option}
                  </div>
                </button>
              ),
            )}
          </div>
        </div>
      </div>
      {isBackModalOpen && (
        <QuizBackModal
          handleBackModalOpen={handleBackModalOpen}
          handleBack={handleBack}
        />
      )}
    </div>
  );
}
