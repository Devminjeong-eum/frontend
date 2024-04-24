'use client';

import BackButtonSvg from '@/components/svg-component/BackButtonSvg';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  return (
    <button onClick={router.back}>
      <BackButtonSvg />
    </button>
  );
}
