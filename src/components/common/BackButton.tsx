import BackButtonSvg from '@/components/svgComponent/BackButtonSvg.tsx';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()}>
      <BackButtonSvg />
    </button>
  );
}
