'use client';

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import ProfileHeader from './ProfileHeader';
import BigEmailSvg from '@/components/svg-component/BigEmailSvg';
import DeleteAccountModal from './Modal/DeleteAccountModal';
import SubmitFeedback from './SubmitFeedback';
import { postFeedback } from '@/fetcher';

type Props = {
  userId: string;
};

export default function DeleteAccount({ userId }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [text, setText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const options = [
    '평소에 사용을 잘 안하게 돼요.',
    '원하는 정보가 존재하지 않아요.',
    '정보가 정확하지 않아요.',
    '사용하기가 불편하고 어려워요.',
    '기능이 다양하지 않아요.',
    '기타',
  ];

  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postFeedback(selectedOption, text);
    setIsSubmit(true);
  };

  const handleModalClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (ref.current && selectedOption !== '') {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedOption]);

  if (isSubmit) return <SubmitFeedback />;

  return (
    <div className="bg-[#ffffff]">
      <ProfileHeader text={'회원탈퇴'} userId={userId} />

      <div className="flex flex-col items-center mt-[15px]">
        <BigEmailSvg />
        <div className="font-semibold text-[22px] mt-[5px] mb-[26px] text-center text-[#181818]">
          왜 떠나시는지 <br /> 이야기를 듣고 싶어요.
        </div>

        <form onSubmit={handleSubmit} className="w-[90%]">
          {options.map((option, idx) => (
            <label key={idx}>
              <div className="flex items-center h-[38px] mb-[4px] ">
                <input
                  type="radio"
                  name="test"
                  value={option}
                  onChange={handleOptionChange}
                  checked={
                    selectedOption === option ||
                    (selectedOption === '' && idx === 0)
                  }
                  className="w-[19px] h-[19px] accent-[#4057DB]"
                />
                <span className="ml-[10px] text-[17px] font-medium text-[#181818]">
                  {option}
                </span>
              </div>
            </label>
          ))}

          <div
            className="text-[17px] font-medium mt-[32px] mb-[10px] text-[#181818]"
            ref={ref}
          >
            (선택) 이외에 하고 싶은 말이 있다면 남겨주세요.
          </div>
          <textarea
            value={text}
            onChange={handleTextChange}
            className="resize-none focus:outline-none focus:border-2 focus:border-[#616FE8] border border-[#F1F4FA] w-full h-[90px] p-[10px] bg-[#F1F4FA] rounded-[10px] mb-[80px] focus:ring-blue-500"
            placeholder="여러분의 하고 싶은 말이나 불편했던 부분이 있다면 편하게 이야기 해주세요."
          />

          <div className="font-gugi mb-[10px] text-[18px] text-[#181818]">
            <span className="text-[#4057DB] text-[18px]">잠깐! </span>
            데브말싸미는요.
          </div>

          <div className="text-[#858596] mb-[23px] font-medium">
            여러분의 이야기를 듣고 수렴하여 지속적으로 업데이트를 하고 있어요!
            여러분의 솔직한 의견은 서비스 개선에큰 도움이 될 거에요!
          </div>

          <div className="text-[#0C3FC1] text-[14px] mb-[36px] font-medium">
            아래
            <span className="bg-[#E7EBF8] py-[4px] px-[6px] mx-[4px] rounded-[4px] font-semibold">
              의견 보내기
            </span>
            버튼을 통하여 여러분이 위에 작성하신 의견을 우선 보내보는건
            어떨까요?
          </div>

          <div className="w-full flex space-x-[8px] mb-[36px]">
            <button
              className="flex-1 bg-[#E7EBF8] text-[#383697] text-[16px] rounded-[16px] font-semibold h-[54px]"
              type="submit"
            >
              의견 보내기
            </button>
            <button
              type="button"
              className="flex-1 bg-[#4057DB] text-[#FFFFFF] text-[16px] rounded-[16px] font-semibold h-[54px]"
              onClick={handleModalClick}
            >
              탈퇴하기
            </button>
          </div>
        </form>
      </div>
      {isOpen && (
        <DeleteAccountModal
          isOpen={isOpen}
          handleModalClick={handleModalClick}
          userId={userId}
          text={text}
          selectedOption={selectedOption}
        />
      )}
    </div>
  );
}
