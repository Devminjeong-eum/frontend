import { ErrorHandlingMarkup } from '@/components/common/ErrorHandlingMarkup';
import ErrorSvg from '@/components/svgComponent/ErrorSvg';

export default function Error() {
  return (
    <ErrorHandlingMarkup
      title="일시적인 오류입니다."
      description="잠시 후에 다시 시도해 주세요."
      svg={<ErrorSvg />}
    />
  );
}
