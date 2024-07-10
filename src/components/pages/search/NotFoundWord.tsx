import BigMagnifierSvg from '@/components/svg-component/BigMagnifierSvg';
import Link from 'next/link';

export default function NotFoundWord() {
  return (
    <div className="flex flex-col justify-center items-center pt-[200px]">
      <BigMagnifierSvg />
      <div className="mt-5 text-[#A8AEBC] text-center">
        앗! 찾으시는 검색 결과가 없어요.
        {/* // TODO: 용어 제보 폼 링크 추가하기 */}
        <Link href={''}>
          <div className="rounded-2xl bg-[#E7EBF8] w-[212px] h-14 py-4 mt-7 text-[#383697] text-[16px] font-semibold">
            단어 제보하러 가기
          </div>
        </Link>
      </div>
    </div>
  );
}
