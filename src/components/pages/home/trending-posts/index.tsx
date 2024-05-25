import TopRanking from './TopRanking';
import TrendingDescription from './TrendingDescription';
import GeneralRanking from './GeneralRanking';

export default function TrendingPosts() {
  return (
    <>
      <TrendingDescription />
      <TopRanking />
      <GeneralRanking />
    </>
  );
}
