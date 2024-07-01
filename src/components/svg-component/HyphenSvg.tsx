import { ComponentProps } from 'react';

export default function HyphenSvg(props: ComponentProps<'svg'>) {
  return (
    <svg width="8" height="2" viewBox="0 0 8 2" fill="currentColor" {...props}>
      <path d="M1 1H7" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}
