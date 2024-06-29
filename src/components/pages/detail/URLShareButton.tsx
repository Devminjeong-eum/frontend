import ExternalSvg from '@/components/svg-component/ExternalSvg';
import useCopyClipboard from '@/hooks/useCopyClipboard.ts';
import { CopiedNotice } from '@/components/common/CopiedNotice.tsx';

export default function URLShareButton() {
  const { isCopied, onCopyClipboard, onCloseCopyClipboard } =
    useCopyClipboard();

  return (
    <div>
      <button onClick={onCopyClipboard}>
        <ExternalSvg />
      </button>
      {<CopiedNotice isOpen={isCopied} handleClose={onCloseCopyClipboard} />}
    </div>
  );
}
