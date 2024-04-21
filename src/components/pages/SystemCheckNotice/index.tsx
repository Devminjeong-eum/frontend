import { ErrorHandlingMarkup } from '@/components/common/ErrorHandlingMarkup';
import LockSvg from '@/components/svgComponent/LockSvg';

export default function SystemCheckNotice() {
  return (
    <ErrorHandlingMarkup
      title="열심히 점검 중이에요."
      description="더 나은 서비스를 위해 점검 중이에요."
      svg={<LockSvg />}
    />
  );
}
