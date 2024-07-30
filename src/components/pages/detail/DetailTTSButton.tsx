'use client';

import useGetTTSUrl from '@/hooks/query/useGetTTSUrl.ts';
import DetailSoundIconSvg from '@/components/svg-component/DetailSoundIconSvg.tsx';

import React from 'react';
import clsx from 'clsx';
import useAudioPlayer from '@/hooks/useAudioPlayer.ts';

interface Props {
  id: string;
}
export default function DetailTTSButton({ id }: Props) {
  const { data: audioUrl } = useGetTTSUrl(id);
  const { audioRef, startAudio, isPlaying } = useAudioPlayer(id);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (audioUrl) {
      startAudio(audioUrl);
    }
  };

  return (
    <div
      className="ml-2 flex items-center justify-center w-[34px] h-[34px]"
      onClick={handleClick}
    >
      <DetailSoundIconSvg />
      <audio ref={audioRef} loop={false} />
      <div
        className={clsx(
          'absolute opacity-25 w-[34px] h-[34px] rounded-full cursor-pointer border bg-[#6C71E2] hover:bg-[#A19AF9]',
          isPlaying ? 'border-[#FFFFFF]' : 'border-[#A19AF9]',
        )}
      />
    </div>
  );
}
