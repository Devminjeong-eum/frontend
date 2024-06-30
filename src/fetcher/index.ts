import { notFound } from 'next/navigation';
import type {
  DefaultRes,
  SearchWord,
  LoginData,
  likedWord,
  UserData,
  UserInfo,
  ErrorResponse,
  AutoCompleteWord,
  QuizData,
  QuizResultUserIdData,
} from './types.ts';
import { PaginationRes, MainItemType } from '@/types/main.ts';
import { backendFetch } from '@/fetcher/backendFetch.ts';
import { FetchRes } from './types.ts';

export const getWordSearch = async (wordName: string) => {
  try {
    const res = await backendFetch<FetchRes<DefaultRes<SearchWord>>>(
      `/search/keyword`,
      {
        params: { keyword: wordName, page: 1, limit: 50 },
      },
    );
    return res.data;
  } catch (e) {
    // NOTE: 상황에 맞는 페이지 보여줘야 함.
    notFound();
  }
};

export const login = async (code: string) => {
  try {
    return await backendFetch<FetchRes<DefaultRes<LoginData>>>(`/auth/kakao`, {
      params: { code },
    });
  } catch (e) {
    console.error('login error: ', e);
    throw e;
  }
};

// NOTE: for client side fetch
export const updateLike = async (wordId: string) => {
  try {
    await backendFetch<FetchRes<DefaultRes<never>>>(`/like/${wordId}`, {
      method: 'PATCH',
    });
  } catch (e) {
    // if (e instanceof Error) {
    //   console.error(e.message);
    // }
    // 401 => 권한 없음 => 로그인 모달
    // 500 => 서버 에러
  }
};

// NOTE: for client side fetch
export const deleteLike = async (wordId: string) => {
  try {
    await backendFetch<FetchRes<DefaultRes<never>>>(`/like/${wordId}`, {
      method: 'DELETE',
    });
  } catch (e) {
    // if (e instanceof Error) {
    //   console.error(e.message);
    // }
    // NOTE: 발생할 수 있는 에러
    // 401 => 권한 없음 => 로그인 모달
    // 500 => 서버 에러
  }
};

export const getAllPostsClient = async (currentPage: number) => {
  try {
    const res = await backendFetch<
      FetchRes<DefaultRes<PaginationRes<MainItemType[]>>>
    >(`/word/list`, {
      params: {
        page: currentPage,
        limit: 16,
      },
    });

    return res.data;
  } catch (e) {
    notFound();
  }
};

export const getLikedWord = async (
  page: number,
  limit: number,
  selectedOption: string,
) => {
  try {
    return await backendFetch<FetchRes<DefaultRes<likedWord>>>(`/word/like`, {
      params: {
        page,
        limit,
        sorting: selectedOption,
      },
    });
  } catch (e) {
    notFound();
  }
};

export const getUserInfo = async () => {
  try {
    return await backendFetch<FetchRes<DefaultRes<UserData>>>(`/user`);
  } catch (e) {
    console.log('error', e);
    notFound();
  }
};

export const checkUserAuthentication = async (): Promise<
  DefaultRes<UserInfo> | ErrorResponse
> => {
  try {
    const res = await backendFetch<FetchRes<DefaultRes<UserInfo>>>(`/user`);
    return res.data;
  } catch (error) {
    return { error: true };
  }
};

export const getQuizData = async () => {
  try {
    return await backendFetch<FetchRes<DefaultRes<QuizData[]>>>(
      '/quiz/selection',
    );
  } catch (e) {
    console.log('error', e);
    notFound();
  }
};

export const postQuizResult = async (
  correctWordIds: string[],
  incorrectWordIds: string[],
) => {
  return await backendFetch<FetchRes<DefaultRes<QuizResultUserIdData>>>(
    '/quiz/result',
    {
      method: 'POST',
      body: JSON.stringify({ correctWordIds, incorrectWordIds }),
    },
  );
};

export const logout = async () => {
  try {
    return await backendFetch('/auth/logout', {
      method: 'DELETE',
    });
  } catch (e) {
    console.log('error', e);
    notFound();
  }
};

export const deleteAccount = async (userId: string) => {
  try {
    return await backendFetch(`/user/${userId}`, {
      method: 'DELETE',
    });
  } catch (e) {
    console.log('error', e);
    notFound();
  }
};

export const getAutoCompleteWord = async (wordName: string) => {
  try {
    const res = await backendFetch<FetchRes<DefaultRes<AutoCompleteWord>>>(
      `/search/related`,
      {
        params: { page: 1, limit: 50, keyword: wordName },
      },
    );
    return res.data;
  } catch (e) {
    console.log('error', e);
    notFound();
  }
};

export const postFeedback = async (question1: string, question2: string) => {
  try {
    return await backendFetch('research/before-quit', {
      method: 'POST',
      body: JSON.stringify({ question1, question2 }),
    });
  } catch (e) {
    console.log('error', e);
    notFound();
  }
};
