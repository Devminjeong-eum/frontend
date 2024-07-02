import SubmitFeedbackSvg from '@/components/svg-component/SubmitFeedbackSvg';
import { WORD_LIST_PATH } from '@/routes/path';
import Link from 'next/link';

export default function SubmitFeedback() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex-grow flex flex-col items-center justify-center">
        <SubmitFeedbackSvg />
        <div className="text-[18px] text-[#313140] font-semibold mt-[27px]">
          의견을 전달했어요.
        </div>
        <div className="text-center mt-[9px] text-[#737374]">
          여러분의 소중한 의견을 통해 <br />더 나은 데브말싸미가 되도록
          노력할게요.
        </div>
      </div>
      <Link href={WORD_LIST_PATH} className="flex w-full">
        <div className="h-[54px] w-full mb-12 bg-[#E7EBF8] mx-[20px] flex justify-center items-center rounded-[16px] font-semibold text-[#383697]">
          홈으로 돌아가기
        </div>
      </Link>
    </div>
  );
}
