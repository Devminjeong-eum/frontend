'use client';

import useDeviceType from '@/hooks/useDeviceType';
import clsx from 'clsx';
import SpeakerSvg from '../svg-component/SpeakerSvg';
import useAudioPlayer from '@/hooks/useAudioPlayer';
import { useEffect } from 'react';
import useGetTTSUrl from '@/hooks/query/useGetTTSUrl';

type Props = {
  id: string;
  diacritic: string;
};

export default function TTSPlayer({ diacritic, id }: Props) {
  const deviceType = useDeviceType();
  const { data: audioUrl } = useGetTTSUrl(id);
  const { audioRef, startAudio, isPlaying } = useAudioPlayer();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (audioUrl) {
      startAudio(audioUrl);
    }
  };

  useEffect(() => {
    const currentAudio = audioRef.current;

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  }, [audioRef, id]);

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
