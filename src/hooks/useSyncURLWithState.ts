import { type TrendingType } from '@/components/pages/home';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const isTrendingType = (value: unknown): value is TrendingType => {
  return value === 'trend' || value === 'all';
};

export default function useSyncURLWithState() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const view = searchParams.get('view');

  const [currentPage, setCurrentPage] = useState(() => {
    return page ? Number(page) : 1;
  });

  const [isTrending, setIsTrending] = useState<TrendingType>(() => {
    return isTrendingType(view) ? view : 'trend';
  });

  useEffect(() => {
    router.push(`/home?view=${isTrending}&page=${currentPage}`);
  }, [currentPage, isTrending, router]);

  useEffect(() => {
    const nextPage = page ? Number(page) : 1;
    const nextView: TrendingType = isTrendingType(view) ? view : 'trend';

    setCurrentPage(nextPage);
    setIsTrending(nextView);
  }, [page, view]);

  return { currentPage, setCurrentPage, isTrending, setIsTrending };
}
