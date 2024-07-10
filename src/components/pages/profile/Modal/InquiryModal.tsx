import { createPortal } from 'react-dom';
import InquirySvg from '@/components/svg-component/InquirySvg';
import CloseSvg from '@/components/svg-component/CloseSvg';
import { OTHER_INQUIRY_FORM_URL, WORD_INQUIRY_FORM_URL } from '@/routes/path';
import Link from 'next/link';

interface Props {
  isOpen: boolean;
  handleModalClick: () => void;
}

export default function InquiryModal({ isOpen, handleModalClick }: Props) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center max-w-[430px] mx-auto">
      <div className="bg-white rounded-[16px] mx-[34px] w-full flex flex-col items-center justify-center">
        <div className="flex w-full justify-between">
          <div className="mt-[28px] ml-[42%]">
            <InquirySvg width={58} height={58} />
          </div>
          <div
            className="m-4 cursor-pointer h-[24px]"
            onClick={handleModalClick}
          >
            <CloseSvg />
          </div>
        </div>
        <div className="text-[18px] text-[#181818] font-semibold mb-[24px] mt-[6px]">
          원하시는 문의를 선택해주세요.
        </div>

        <div className="w-full mb-[20px] flex flex-col gap-[8px]">
          <Link href={WORD_INQUIRY_FORM_URL} target="_blank">
            <div className="p-5 text-[14px] text-[#737374] font-medium mx-[20px] bg-[#E7EBF8] rounded-[17px] hover:cursor-pointer hover:ring-[#435ADF] hover:ring-[1.5px] h-20">
              <span className="text-[16px] text-[#2D45D1] font-semibold">
                잘못된 정보 문의하기
              </span>
              <br />
              잘못된 용어 정보가 있나요?
            </div>
          </Link>

          {/* // TODO: 용어 제보 폼 링크 추가하기 */}
          <Link href={''} target="blank">
            <div className="ring-[1px] ring-[#F2F4F9] p-5 text-[14px] text-[#737374] font-medium mx-[20px] bg-[#FBFCFE] rounded-[17px] hover:cursor-pointer hover:ring-[#435ADF] hover:ring-[1.5px] h-20">
              <span className="text-[16px] text-[#2D45D1] font-semibold">
                용어 제보하기
              </span>
              <br />
              내가 아는 용어를 제보해 보세요.
            </div>
          </Link>

          <Link href={OTHER_INQUIRY_FORM_URL} target="blank">
            <div className="ring-[1px] ring-[#F2F4F9] p-5 text-[14px] text-[#737374] font-medium mx-[20px] bg-[#FBFCFE] rounded-[17px] hover:cursor-pointer hover:ring-[#435ADF] hover:ring-[1.5px] h-20">
              <span className="text-[16px] text-[#2D45D1] font-semibold">
                기타 문의하기
              </span>
              <br />
              그밖에 문의할 사항이 있나요?
            </div>
          </Link>
        </div>
      </div>
    </div>,
    document.body,
  );
}
