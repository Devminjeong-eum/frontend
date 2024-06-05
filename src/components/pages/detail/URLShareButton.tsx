import ExternalSvg from '@/components/svg-component/ExternalSvg';
import useCopyClipboard from '@/hooks/useCopyClipboard.ts';
import { CopiedNotice } from '@/components/common/CopiedNotice.tsx';

export default function URLShareButton() {
  const { isCopied, onCopyClipboard } = useCopyClipboard();

  return (
    <div>
      <button onClick={() => onCopyClipboard()}>
        <ExternalSvg />
      </button>
      {isCopied && <CopiedNotice />}
    </div>
  );
}
