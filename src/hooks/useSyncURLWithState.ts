import { type TrendingType } from '@/components/pages/home';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function useSyncURLWithState() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get('page')) || 1,
  );
  const [isTrending, setIsTrending] = useState<TrendingType>(
    (searchParams.get('view') as TrendingType) || 'all',
  );

  useEffect(() => {
    router.push(`/home?view=${isTrending}&page=${currentPage}`);
  }, [currentPage, isTrending, router]);

  return { currentPage, setCurrentPage, isTrending, setIsTrending };
}
