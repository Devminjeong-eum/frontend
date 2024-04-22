import { useState } from 'react';
import { quizData } from '@/components/pages/Quiz/quizData';
import { useEffect } from 'react';
import OSVG from '@/components/svgComponent/OSVG';
import XSVG from '@/components/svgComponent/XSVG';
import BlackBackSpaceSVG from '@/components/svgComponent/BlackBackSpaceSVG';
import QuizResult from './QuizResult';
import { QUIZ_PATH } from '@/routes/path.ts';
import Spinner from '@/components/common/Spinner';
import Link from 'next/link';

export default function StartQuiz() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [selectOption, setSelectOption] = useState<string | null>(null);
  const [isShowScore, setIsShowScore] = useState(false);
  const [isShowSpinner, setIsShowSpinner] = useState(false);
  const [isButtonsDisabled, setIsButtonsDisabled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isShowScore) {
      const timer = setTimeout(() => {
        setIsShowSpinner(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isShowScore]);

  const nextQuiz = () => {
    setTimeout(() => {
      if (currentQuiz < quizData.length - 1) {
        setCurrentQuiz(currentQuiz + 1);
        setSelectOption(null);
        setIsButtonsDisabled(false);
      } else {
        setIsShowScore(true);
        setIsShowSpinner(true);
      }
    }, 1000);
  };

  const handleAnswerOptionClick = (selectedOption: string) => {
    setProgress(((currentQuiz + 1) / quizData.length) * 100);

    if (selectedOption === quizData[currentQuiz].correctAnswer) {
      setScore(score + 1);
    }
    setSelectOption(selectedOption);
    setIsButtonsDisabled(true);
    nextQuiz();
  };

  if (isShowScore) {
    if (isShowSpinner) {
      return <Spinner />;
    }
    return <QuizResult score={score} />;
  }

  return (
    <div className="flex justify-center min-h-screen text-main-black">
      <div className="flex flex-col items-center w-full max-w-[430px] border-1 border-x border-gray-200 shadow-xl">
        <div className="w-full items-center bg-[#fbfcfe] relative">
          <header className="flex items-center h-[68px]">
            <Link href={QUIZ_PATH} className="ml-6 cursor-pointer">
              <BlackBackSpaceSVG />
            </Link>
            <div className=" m-auto font-blod pr-6">TEST 중이에요.</div>
          </header>
          <div className={`w-full bg-[#ECEFF5] flex`}>
            <div
              className="bg-[#0C3FC1] h-[2px] transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-[14px] flex flex-col items-center mt-[73px]">
            <p className="text-main-gray">아래 단어의 발음은?</p>
            <div className={`text-[30px] font-semibold mb-10`}>
              {quizData[currentQuiz].question}
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            {quizData[currentQuiz].options.map((option) => (
              <button
                key={option}
                disabled={isButtonsDisabled}
                onClick={() => handleAnswerOptionClick(option)}
                className={`shadow-quiz-button w-[90%] font-medium h-[56px] 
                rounded-[16px] mb-4 ${
                  selectOption === option
                    ? option === quizData[currentQuiz].correctAnswer
                      ? 'bg-[#0C3FC1] text-white'
                      : 'bg-[#912828] text-white'
                    : 'bg-white'
                }
                border-px
                border-[#F2F4F9]
                `}
              >
                <div className="flex justify-center items-center relative">
                  {selectOption === option &&
                    (selectOption === quizData[currentQuiz].correctAnswer ? (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
