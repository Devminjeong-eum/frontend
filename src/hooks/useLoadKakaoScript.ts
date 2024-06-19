'use client';

import { useEffect } from 'react';
import useAuthQuery from './query/useAuthQuery';
import { DefaultRes, UserInfo } from '@/fetcher/types';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

function isDefaultRes<TData>(response: unknown): response is DefaultRes<TData> {
  return (response as DefaultRes<TData>).data !== undefined;
}

export default function useLoadKakaoScript() {
  const { Kakao } = window;
  const { data } = useAuthQuery();

  const userName = isDefaultRes<UserInfo>(data) ? data.data.name : '사용자';

  const title = `${userName}님의 개발 용어 점수는?`;
  const desc = `${userName}님의 개발 용어 점수는 몇 점일까요? 클릭해서 확인해보고, 함께 도전해보세요!`;

  // FIXME: 나중에 엔드포인트가 quiz/quizID와 같이 바뀔텐데 아직 정해진게 없는것 같아서 추후 수정 예정
  const urlEndPoint = window.location.href.split('/').slice(3).join('/');
  const path = urlEndPoint;

  console.log(path);
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
