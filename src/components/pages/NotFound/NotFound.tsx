import { ErrorHandlingMarkup } from '@/components/common/ErrorHandlingMarkup';
import NotFoundSvg from '@/components/svgComponent/NotFoundSvg';
export default function NotFound() {
  return (
    <div className="flex justify-center min-h-screen ">
      <div className="w-full max-w-[430px] border-1 border-x border-gray-200 shadow-xl">
        <ErrorHandlingMarkup
          title="해당 페이지를 찾을 수 없어요."
          description={
            <div className="text-main-charcoal flex flex-col items-center">
              <p>주소가 잘못 입력되거나 변경 혹은 삭제되어</p>
              <p>페이지를 찾을 수 없어요.</p>
            </div>
          }
          svg={<NotFoundSvg />}
        />
      </div>
    </div>
  );
}
