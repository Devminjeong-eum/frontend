/*
fetch Type
    function fetch(
        input: string | URL | Request,
        init?: RequestInit,
    ): Promise<Response>;
*/

type FetchParameters = Parameters<typeof fetch>;
type Promiseable<T> = T | Promise<T>;

type Params = {
  params?: Record<string, number | boolean | string | null | undefined>;
};

type ValueOf<T> = T[keyof T];

type Options = NonNullable<FetchParameters[1]> & Params;

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

  let url = null;

  if (typeof baseUrl === 'string') {
    url = new URL(baseUrl);
  } else if (typeof baseUrl === 'object' && 'url' in baseUrl) {
    url = new URL(baseUrl.url);
  } else if (baseUrl instanceof URL) {
    url = baseUrl;
  } else {
    throw new Error('Invalid baseUrl type');
  }

  Object.keys(params).forEach((key) => {
    if (params[key] !== null && params[key] !== undefined) {
      url.searchParams.append(key, String(params[key]));
    }
  });

  return url;
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
