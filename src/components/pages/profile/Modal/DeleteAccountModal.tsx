import { deleteAccount } from '@/fetcher';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { postFeedback } from '@/fetcher';
import { PROFILE_PATH } from '@/routes/path';

interface Props {
  isOpen: boolean;
  handleModalClick: () => void;
  userId: string;
  text: string;
  selectedOption: string;
}

export default function DeleteAccountModal({
  isOpen,
  handleModalClick,
  userId,
  text,
  selectedOption,
}: Props) {
  const router = useRouter();

  const handleDeleteAccount = async () => {
    await postFeedback(selectedOption, text);
    await deleteAccount(userId);
    handleModalClick();
    router.push(PROFILE_PATH);
    router.refresh();
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center max-w-[430px] mx-auto">
      <div className="bg-white rounded-[16px] mx-[34px] w-full flex flex-col items-center justify-center">
        <div className="text-[18px] font-semibold mt-[34px] mb-[10px] text-[#181818]">
          탈퇴 전 확인
        </div>
        <div className="text-[16px] text-[#5E5E5E] text-center mx-[26px] mb-[33px]">
          탈퇴 시 계정 및 이용 기록은 모두 삭제되며, <br />
          삭제된 데이터는 복구가 불가능합니다. <br />
          정말로 탈퇴를 진행하시겠습니까?
        </div>

        <div className="w-full flex space-x-[8px] px-[12px] mb-[12px]">
          <button
            className="flex-1 text-[16px] font-medium text-[#383697] bg-[#F2F4F9] rounded-[16px] h-[46px]"
            onClick={handleModalClick}
          >
            취소
          </button>
          <button
            className="flex-1 text-[16px] font-medium text-[#FFFFFF] bg-[#4057DB] rounded-[16px] h-[46px]"
            onClick={handleDeleteAccount}
          >
            확인
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
