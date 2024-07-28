import NoticeIconSvg from '@/components/svg-component/NoticeIconSvg.tsx';
import RightArrowSvg from '@/components/svg-component/RightArrowSvg.tsx';
import { WORD_INQUIRY_FORM_URL } from '@/routes/path';

export default function ReportButton() {
  return (
    <a href={WORD_INQUIRY_FORM_URL} target="_blank" rel="noreferrer noopener">
      <div className="w-full h-[74px] mt-2 bg-[#F1F4FA] flex justify-between items-center rounded-[16px] px-[18px] shadow-base">
        <div className="flex gap-3">
          <NoticeIconSvg />
          <div>
            <p className="text-[#5E5E5E] text-[14px]">잘못된 정보가 있나요?</p>
            <span className="text-[#181818] font-semibold">문의하러 가기</span>
          </div>
        </div>
        <RightArrowSvg />
      </div>
    </a>
  );
}
