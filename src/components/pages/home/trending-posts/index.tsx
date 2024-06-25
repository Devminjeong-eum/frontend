import TopRanking from './TopRanking';
import TrendingDescription from './TrendingDescription';
import GeneralRanking from './GeneralRanking';
import { useGetTrendList } from '@/hooks/query/useGetTrendList';

export default function TrendingPosts() {

  const { data: currentWeekTrendList } = useGetTrendList();

  const topRankingList = currentWeekTrendList.slice(0, 3);
  const generalRankingList = currentWeekTrendList.slice(3);

  return (
    <div className='px-5'>
      <TrendingDescription />
      <TopRanking topRankingList={topRankingList} />
      <GeneralRanking generalRankingList={generalRankingList} />
    </div>
  );
}
