import { useCallback, useEffect, useState } from 'react';

async function copyURL(url?: string) {
  const targetUrl = url ? url : window.document.location.href;
  await navigator.clipboard.writeText(targetUrl);
}
interface Props {
  ms?: number;
  url?: string;
}

const DEFAULT_COPIED_ALERT_TIME = 600;

export default function useCopyClipboard(props?: Props) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let id: NodeJS.Timeout | null;
    if (isCopied) {
      id = setTimeout(
        () => setIsCopied(false),
        props?.ms ?? DEFAULT_COPIED_ALERT_TIME,
      );
    }

    return () => {
      if (id) clearTimeout(id);
    };
  }, [isCopied, props?.ms]);

  const onCopyClipboard = useCallback(async () => {
    await copyURL(props?.url);
    setIsCopied(true);
  }, [props?.url]);

  const onCloseCopyClipboard = useCallback(() => {
    setIsCopied(false);
  }, []);

  return { isCopied, setIsCopied, onCopyClipboard, onCloseCopyClipboard };
}
