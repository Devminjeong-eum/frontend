export function isServer() {
  return typeof window === 'undefined';
}

export const PRODUCTION_URL = 'https://dev-malssami.site';

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? PRODUCTION_URL
    : process.env.NEXT_PUBLIC_BASE_URL;
