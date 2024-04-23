import { ErrorHandlingMarkup } from '@/components/common/ErrorHandlingMarkup';
import ErrorSvg from '@/components/svg-component/ErrorSvg';

export default function Error() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full max-w-[430px] border-1 border-x border-gray-200 shadow-xl">
        <ErrorHandlingMarkup
          title="일시적인 오류입니다."
          description="잠시 후에 다시 시도해 주세요."
          svg={<ErrorSvg />}
        />
      </div>
    </div>
  );
}
