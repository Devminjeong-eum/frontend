import { createPortal } from 'react-dom';

type Props = {
  handleBackModalOpen: () => void;
  handleBack: () => void;
};

export default function QuizBackModal({
  handleBackModalOpen,
  handleBack,
}: Props) {
  return createPortal(
    <div className="flex justify-center items-center fixed inset-0 max-w-[430px] mx-auto bg-black/70">
      <div className="flex flex-col items-center bg-white w-full mx-[34px] rounded-[16px]">
        <p className="mt-[34px] mb-[10px] text-[16px] font-semibold">
          퀴즈를 중단하시나요?
        </p>
        <p className="mb-[33px] text-[15px] text-center text-[#5E5E5E]">
          중간에 퀴즈를 중단하면 지금까지 <br />
          풀었던 내역이 모두 사라져요. <br />
          정말 중단하시겠어요?
        </p>
        <div className="w-full flex space-x-[8px] px-[12px] mb-[12px]">
          <button
            className="flex-1 text-[16px] font-medium text-[#383697] bg-[#F2F4F9] rounded-[16px] h-[46px]"
            onClick={handleBackModalOpen}
          >
            취소
          </button>
          <button
            className="flex-1 text-[16px] font-medium text-[#FFFFFF] bg-[#4057DB] rounded-[16px] h-[46px]"
            onClick={handleBack}
          >
            확인
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
