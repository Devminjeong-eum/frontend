'use client';

import { isMobile, isDvhSupported } from '@/utils';
import { useEffect, useState } from 'react';

const HEIGHTS = {
  DVH: { minHeight: '100dvh' },
  VH: { minHeight: '100vh' },
};

export default function HeightWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [height, setHeight] = useState(HEIGHTS.DVH);

  useEffect(() => {
    if (isDvhSupported()) {
      setHeight(HEIGHTS.DVH);
    } else if (isMobile()) {
      setHeight({ minHeight: `${window.innerHeight}px` });
    } else {
      setHeight(HEIGHTS.VH);
    }
  }, []);

  return (
    <div className="flex justify-center scrollbar-hide" style={height}>
      {children}
    </div>
  );
}
