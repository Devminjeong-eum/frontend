/*
fetch Type
    function fetch(
        input: string | URL | Request,
        init?: RequestInit,
    ): Promise<Response>;
*/

type FetchParameters = Parameters<typeof fetch>;

type Promiseable<T> = T | Promise<T>;

type Nullable<T> = T | null;

type Params = Record<
  'params',
  Record<string, number | boolean | string | null | undefined>
>;

type ValueOf<T> = T[keyof T];

type Options = NonNullable<FetchParameters[1]> & Nullable<Params>;

export type HTTPClient<Res = Response> = ReturnType<typeof httpClient<Res>>;

export interface HTTPClientOption<T = Response>
  extends Omit<NonNullable<FetchParameters[1]>, 'body'> {
  baseUrl?: string;
  interceptors?: {
    request?(
      input: NonNullable<FetchParameters[0]>,
      init: NonNullable<FetchParameters[1]>,
    ): Promiseable<FetchParameters[1]>;
    response?(response: Response): Promiseable<T>;
  };
}

const applyBaseUrl = (input: FetchParameters[0], baseUrl?: string) => {
  if (!baseUrl) {
    return input;
  }

  if (typeof input === 'object' && 'url' in input) {
    return new URL(input.url, baseUrl);
  }

  return new URL(input, baseUrl);
};

const applyQueryParams = (
  baseUrl: ReturnType<typeof applyBaseUrl>,
  params: ValueOf<Params>,
) => {
  if (!params) {
    return baseUrl;
  }

  if (typeof baseUrl === 'string') {
    const url = new URL(baseUrl);

    Object.keys(params).forEach((key) => {
      if (params[key] !== null && params[key] !== undefined) {
        // NOTE: 이해하지 못함
        url.searchParams.append(key, params[key] as string);
      }
    });

    return url;
  }

  if (typeof baseUrl === 'object' && 'url' in baseUrl) {
    const url = new URL(baseUrl.url);

    Object.keys(params).forEach((key) => {
      url.searchParams.append(key, params[key] as string);
    });

    return url;
  }

  if (baseUrl instanceof URL) {
    Object.keys(params).forEach((key) => {
      baseUrl.searchParams.append(key, params[key] as string);
    });
    return baseUrl;
  }

  throw new Error('Invalid baseUrl type');
};

export default function httpClient<T = Response>({
  baseUrl,
  interceptors = {},
  ...requestInit
}: HTTPClientOption<T> = {}) {
  // fetch 함수 Return
  return async function <Res = T extends Response ? Response : T>(
    input: FetchParameters[0],
    init?: Options,
  ): Promise<Res> {
    let url = applyBaseUrl(input, baseUrl);
    if (init && init.params) {
      url = applyQueryParams(url, init.params);
    }

    // 기존 option 과 현재 받은 option을 합친다
    const option = { ...requestInit, ...init };

    const interceptorAppliedOption = interceptors.request
      ? await interceptors.request(url, option)
      : option;

    const response = await fetch(url, interceptorAppliedOption);

    if (interceptors.response) {
      return (await interceptors.response(response)) as Res;
    }

    return response as Res;
  };
}
