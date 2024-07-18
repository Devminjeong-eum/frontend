import BigMagnifierSvg from '@/components/svg-component/BigMagnifierSvg';

export default function NotFoundWord() {
  return (
    <div className="flex flex-col justify-center items-center pt-[200px] h-full">
      <BigMagnifierSvg />
      <div className="mt-5 text-[#A8AEBC] text-center">
        앗! 찾으시는 검색 결과가 없어요. <br />
        영문 검색만 가능합니다.
      </div>
    </div>
  );
}
