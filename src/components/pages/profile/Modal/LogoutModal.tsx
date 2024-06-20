import { logout } from '@/fetcher';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

interface Props {
  isOpen: boolean;
  handleModalClick: () => void;
}

export default function LogoutModal({ isOpen, handleModalClick }: Props) {
  const router = useRouter();

  const handleLogout = () => {
    logout();
    handleModalClick();
    router.push('/profile/Non-login');
    router.refresh();
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center max-w-[430px] mx-auto">
      <div className="bg-white rounded-[16px] mx-[34px] w-full flex flex-col items-center justify-center">
        <div className="text-[18px] font-semibold mt-[34px] mb-[10px]">
          로그아웃
        </div>
        <div className="text-[16px] font-medium text-[#5E5E5E] text-center mx-[26px] mb-[33px]">
          정말 로그아웃 하시겠습니까?
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
            onClick={handleLogout}
          >
            확인
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
