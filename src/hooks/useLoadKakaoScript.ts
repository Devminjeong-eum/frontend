'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

export default function useLoadKakaoScript() {
  const { Kakao } = window;
  console.log(Kakao);
  /**
   * NOTE: title, description을 어떻게 처리할지 고민 필요
   * 현재는 props로 내려받는다고 가정하고 동적으로 처리되도록 구현해두었음
   * */
  const title = 'testTitle';
  const desc = 'testDescription, 타이틀은 ${title}이고, 이렇게 넣으면 됨';

  // FIXME: 나중에 엔드포인트가 quiz/quizID와 같이 바뀔텐데 아직 정해진게 없는것 같아서 추후 수정 예정
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
