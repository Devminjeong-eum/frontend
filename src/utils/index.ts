export function isServer() {
  return typeof window === 'undefined';
}

export const PRODUCTION_URL = 'https://dev-malssami.site';

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? PRODUCTION_URL
    : process.env.NEXT_PUBLIC_BASE_URL;

export const isDvhSupported = () => {
  return (
    typeof CSS !== 'undefined' && CSS.supports && CSS.supports('height', '1dvh')
  );
};

export const isMobile = () => {
  return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|silk|fennec|bb10|tablet|webos/i.test(
    navigator.userAgent,
  );
};
