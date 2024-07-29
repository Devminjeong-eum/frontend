import BigMagnifierSvg from '@/components/svg-component/BigMagnifierSvg';
import { WORD_REPORT_FORM_URL } from '@/routes/path';
import Link from 'next/link';

export default function NotFoundWord() {
  return (
    <div className="flex flex-col justify-center items-center pt-[200px] h-full">
      <BigMagnifierSvg />
      <div className="mt-5 text-[#A8AEBC] text-center">
        앗! 찾으시는 검색 결과가 없어요.
        <Link
          href={WORD_REPORT_FORM_URL}
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="rounded-2xl bg-[#E7EBF8] w-[212px] h-14 py-4 mt-7 text-[#383697] text-[16px] font-semibold">
            용어 제보하러 가기
          </div>
        </Link>
      </div>
    </div>
  );
}
