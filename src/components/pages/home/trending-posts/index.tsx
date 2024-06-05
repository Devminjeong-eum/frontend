import TopRanking from './TopRanking';
import TrendingDescription from './TrendingDescription';
import GeneralRanking from './GeneralRanking';
import ComingSoonAlert from './ComingSoonAlert';

export default function TrendingPosts() {
  return (
    <div className="relative">
      <ComingSoonAlert />

      {/* FIXME: 트렌딩 단어 오픈 후에는 ComingSoonAlert, 최상위 div 및 아래 px-5 제거 후 Fragment만 남겨두기 */}
      <div className=" px-5">
        <TrendingDescription />
        <TopRanking />
        <GeneralRanking />
      </div>
    </div>
  );
}
