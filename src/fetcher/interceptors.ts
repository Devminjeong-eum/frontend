import { ErrorRes } from '@/fetcher/types.ts';
import { isServer } from '@/fetcher/index.ts';

export async function responseInterceptor(response: Response) {
  if (isServer()) {
    console.log('********* after sending request in server *********\n');
    console.log(response.status);
  }

  const data = await response.json();

  if (!response.ok) {
    // NOTE: 서버사이드에서 호출 시에는 로깅합니다.
    if (isServer()) {
      if (400 <= response.status && response.status < 500) {
        console.log('ClientError: ', response.status);
      } else {
        console.error('ServerError : ', response.status);
      }
    }

    //NOTE: 에러 시 내려오는 객체의 형식으로 type assertion 합니다.
    const res = data as ErrorRes;

    // NOTE: axios 기본 동작과 동일하게, response.ok가 아니면 Error 를 throw 합니다.
    throw new Error(
      JSON.stringify({
        statusCode: response.status,
        message: res.message,
      }),
    );
  }

  return {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
    data,
  };
}
