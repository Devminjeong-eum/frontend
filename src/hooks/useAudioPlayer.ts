import { useRef, useState, useEffect } from 'react';

const useAudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const startAudio = async (url: string) => {
    const currentAudioRef = audioRef.current;

    if (currentAudioRef) {
      if (currentAudioRef.src !== url) {
        currentAudioRef.src = url;
      }
      try {
        await currentAudioRef.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Error startAudio:', error);
      }
    }
  };

  useEffect(() => {
    const currentAudioRef = audioRef.current;
    const handleEnded = () => {
      setIsPlaying(false);
      if (currentAudioRef) {
        currentAudioRef.pause();
        currentAudioRef.currentTime = 0;
      }
    };

    if (currentAudioRef) {
      currentAudioRef.addEventListener('ended', handleEnded);
    }

    return () => {
      if (currentAudioRef) {
        currentAudioRef.removeEventListener('ended', handleEnded);
      }
    };
  }, [audioRef]);

  return {
    audioRef,
    isPlaying,
    startAudio,
  };
};

export default useAudioPlayer;
