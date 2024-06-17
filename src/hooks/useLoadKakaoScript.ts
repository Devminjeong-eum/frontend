'use client';

import { useEffect } from 'react';
import useAuthQuery from './query/useAuthQuery';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

export default function useLoadKakaoScript() {
  const { Kakao } = window;
  const { data } = useAuthQuery();
  const userName = data?.data?.name;
  const title = `${userName}님의 개발 용어 점수는?`;
  const desc = `${userName}님의 개발 용어 점수는 몇 점일까요? 클릭해서 확인해보고, 함께 도전해보세요!`;

  // FIXME: 나중에 엔드포인트 수정 필요
  const urlEndPoint = window.location.href.split('/')[3];
  const path = urlEndPoint;

  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init(process.env.NEXT_PUBLIC_KAKAO_SHARE_KEY);
    }
  }, [Kakao]);

  const handleShare = () => {
    Kakao.Share.sendCustom({
      templateId: Number(process.env.NEXT_PUBLIC_KAKAO_SHARE_TEMPLATE_ID),
      templateArgs: {
        title: title,
        desc: desc,
        path: path,
        url: '${path}',
      },
    });
  };

  return { handleShare };
}
