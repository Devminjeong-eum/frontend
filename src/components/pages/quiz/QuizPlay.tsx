import { useState } from 'react';
import { quizData } from '@/components/pages/quiz/quizData';
import OSVG from '@/components/svg-component/OSVG';
import XSVG from '@/components/svg-component/XSVG';
import BlackBackSpaceSVG from '@/components/svg-component/BlackBackSpaceSVG';
import QuizResult from './QuizResult';
import type { UserAnswer } from '@/types/quiz';
import Quiz from '.';
// import { useEffect } from 'react';
// import Spinner from '@/components/common/Spinner';

export default function QuizPlay() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [selectOption, setSelectOption] = useState<string | null>(null);
  const [isShowScore, setIsShowScore] = useState(false);
  const [isButtonsDisabled, setIsButtonsDisabled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [userAnswer, setUserAnswer] = useState<UserAnswer[]>([]);
  const [id, setId] = useState(0);
  const [isShow, setIsShow] = useState(false);
  // const [isShowSpinner, setIsShowSpinner] = useState(false);

  // useEffect(() => {
  //   if (isShowScore) {
  //     const timer = setTimeout(() => {
  //       setIsShowSpinner(false);
  //     }, 2000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [isShowScore]);

  const handleNextQuiz = () => {
    setTimeout(() => {
      if (currentQuiz < quizData.length - 1) {
        setCurrentQuiz(currentQuiz + 1);
        setSelectOption(null);
        setIsButtonsDisabled(false);
      } else {
        setIsShowScore(true);
        // setIsShowSpinner(true);
      }
    }, 1000);
  };

  const handleAnswerOptionClick = (selectedOption: string) => {
    setProgress(((currentQuiz + 1) / quizData.length) * 100);

    const isAnswer = selectedOption === quizData[currentQuiz].correctAnswer;
    setUserAnswer((prevAnswer) => [
      ...prevAnswer,
      {
        id,
        answer: quizData[currentQuiz].question,
        wordDiacritic: quizData[currentQuiz].wordDiacritic,
        isLike: false,
        isAnswer,
      },
    ]);

    if (isAnswer) {
      setScore(score + 1);
    }
    setSelectOption(selectedOption);
    setIsButtonsDisabled(true);
    setId((prev) => prev + 1);
    handleNextQuiz();
  };

  if (isShow) return <Quiz />;

  if (isShowScore) {
    // if (isShowSpinner) {
    //   return <Spinner />;
    // }
    return (
      <QuizResult
        score={score}
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer}
      />
    );
  }

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
              {quizData[currentQuiz].question}
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            {quizData[currentQuiz].options.map((option) => (
              <button
                key={option}
                disabled={isButtonsDisabled}
                onClick={() => handleAnswerOptionClick(option)}
                className={`shadow-quiz-button w-[90%] font-medium h-[54px] 
                rounded-[16px] mb-[8px] ${
                  selectOption === option
                    ? option === quizData[currentQuiz].correctAnswer
                      ? 'bg-quiz-blue text-white'
                      : 'bg-quiz-red text-white'
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
