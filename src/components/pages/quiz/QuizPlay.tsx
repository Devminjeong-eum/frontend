import { useState, useEffect } from 'react';
import OSVG from '@/components/svg-component/OSVG';
import XSVG from '@/components/svg-component/XSVG';
import BlackBackSpaceSVG from '@/components/svg-component/BlackBackSpaceSVG';
import Quiz from '.';
import { useGetQuizData } from '@/hooks/query/useGetQuizData';
import { postQuizData } from '@/fetcher';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

export default function QuizPlay() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectOption, setSelectOption] = useState<string | null>(null);
  const [isButtonsDisabled, setIsButtonsDisabled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const [correctWordIds, setCorrectWordIds] = useState<string[]>([]);
  const [incorrectWordIds, setIncorrectWordIds] = useState<string[]>([]);
  const router = useRouter();

  const {
    data: {
      data: { data },
    },
  } = useGetQuizData();

  const fetchQuizResultData = async () => {
    const {
      data: {
        data: { quizResultId },
      },
    } = await postQuizData(correctWordIds, incorrectWordIds);
    router.push(`/quiz/result/${quizResultId}`);
  };

  useEffect(() => {
    if (currentQuiz === data.length - 1) {
      fetchQuizResultData();
    }
  }, [correctWordIds, incorrectWordIds]);

  const handleNextQuiz = () => {
    setTimeout(() => {
      if (currentQuiz < data.length - 1) {
        setCurrentQuiz(currentQuiz + 1);
        setSelectOption(null);
        setIsButtonsDisabled(false);
      }
    }, 1000);
  };

  const handleAnswerOptionClick = (wordId: string, selectedOption: string) => {
    setProgress(((currentQuiz + 1) / data.length) * 100);

    const isAnswer = selectedOption === data[currentQuiz].correct;

    if (isAnswer) {
      setCorrectWordIds((prevWordId) => [...prevWordId, wordId]);
    } else {
      setIncorrectWordIds((prevWordId) => [...prevWordId, wordId]);
    }
    setSelectOption(selectedOption);
    setIsButtonsDisabled(true);
    handleNextQuiz();
  };

  if (isShow) return <Quiz />;

  return (
    <div className="flex justify-center min-h-screen text-main-black">
      <div className="flex flex-col items-center w-full max-w-[430px] border-1 border-x border-gray-200 shadow-xl">
        <div className="w-full items-center bg-[#fbfcfe] relative">
          <header className="flex items-center h-[68px]">
            <button
              onClick={() => setIsShow(!isShow)}
              className="ml-6 cursor-pointer"
            >
              <BlackBackSpaceSVG />
            </button>
            <div className=" m-auto font-medium pr-6">TEST 중이에요.</div>
          </header>
          <div className={`w-full bg-[#ECEFF5] flex`}>
            <div
              className="bg-[#0C3FC1] h-[2px] transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-[14px] flex flex-col items-center mt-[73px]">
            <p className="text-main-gray">아래 단어의 발음은?</p>
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
                    'shadow-quiz-button w-[90%] font-medium h-[54px] rounded-[16px] mb-[8px] border-px border-[#F2F4F9]',
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
    </div>
  );
}
