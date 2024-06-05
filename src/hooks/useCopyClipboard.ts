import { useEffect, useState } from 'react';

async function copyURL() {
  const url = window.document.location.href;
  await navigator.clipboard.writeText(url);
}

export default function useCopyClipboard(ms = 600) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let id: NodeJS.Timeout | null;
    if (isCopied) {
      id = setTimeout(() => setIsCopied(false), ms ?? 600);
    }

    return () => {
      if (id) clearTimeout(id);
    };
  }, [isCopied, ms]);

  const onCopyClipboard = async () => {
    await copyURL();
    setIsCopied(true);
  };

  return { isCopied, onCopyClipboard };
}
