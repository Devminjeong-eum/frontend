'use client';

import useDeviceType from '@/hooks/useDeviceType';
import clsx from 'clsx';
import SpeakerSvg from '../svg-component/SpeakerSvg';
import useAudioPlayer from '@/hooks/useAudioPlayer';
import { getTTSUrl } from '@/fetcher';
import { useQueryClient } from '@tanstack/react-query';
import QUERY_KEYS from '@/constants/queryKey';

type Props = {
  id: string;
  diacritic: string;
};

export default function TTSPlayer({ diacritic, id }: Props) {
  const deviceType = useDeviceType();
  const queryClient = useQueryClient();
  const { audioRef, startAudio, isPlaying } = useAudioPlayer(id);

  const handleClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    try {
      // Fixme: 타입 추론되도록 만들고 싶어요
      const audioUrl = await queryClient.fetchQuery({
        queryKey: [QUERY_KEYS.TTS_KEY, id],
        queryFn: () => getTTSUrl(id),
      });
      if (audioUrl) {
        startAudio(audioUrl);
      }
    } catch {
      // Note: 오디오 에러는 서비스에 큰 지장을 주지 않기 때문에 에러 전파 X
      // Todo: 추후 여러번 발생할 때 리포팅 할 수 있는 Sentry를 연동하면 좋겠다.
      console.error('오디오 url 생성 중 에러');
    }
  };

  return (
    <div
      onClick={handleClick}
      className={clsx(
        'flex items-center px-[6px] py-[3px] gap-1 bg-[#F6F8FA] hover:bg-[#EFF2F6] h-[19px] text-[#69699C] rounded-3xl',
        isPlaying && 'ring-main-gradient-full ring-1 animate-pulse',
      )}
    >
      <audio ref={audioRef} loop={false} />
      <div
        className={clsx(
          'w-[12px] h-[12px]',
          deviceType === 'PC' &&
            'hover:ring-[#EFF2F7] hover:bg-[#F1F4FA] hover:ring-2',
        )}
      >
        <SpeakerSvg />
      </div>
      <p className="leading-[13px] text-[11px]">{diacritic}</p>
    </div>
  );
}
