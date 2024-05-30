import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import process from 'process';

export async function GET(
  request: NextRequest,
  { params }: { params: { url: string[] } },
) {
  const accessToken = cookies().get('accessToken')?.value;
  const refreshToken = cookies().get('refreshToken')?.value;

  console.log(request.headers);
  console.log('request url:', params.url.join('/'));
  console.log(accessToken, refreshToken);
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_BASE_URL + '/' + params.url.join('/'),
    {
      ...request,
      headers: {
        ...request.headers,
        Cookie: `accessToken=${accessToken}; refreshToken=${refreshToken}`,
      },
    },
  );

  console.log(res.headers.get('set-cookie'));

  const setCookieHeader = res.headers.get('set-cookie');

  if (setCookieHeader) {
    const cookiesArray = setCookieHeader.split('; ');
    cookiesArray.forEach((cookie) => {
      const [name, value] = cookie.split('=');
      if (name === 'accessToken' || name === 'refreshToken') {
        cookies().set(name, value);
      }
    });
  }

  console.log(cookies().getAll());

  const responseBody = await res.text();
  console.log(res.headers);

  return new NextResponse(responseBody, {
    status: res.status,
    statusText: res.statusText,
  });
}
