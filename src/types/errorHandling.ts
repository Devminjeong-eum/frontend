import { ReactNode } from 'react';

export type ErrorHandlingProps = {
  title: string;
  description: string | ReactNode;
  svg: ReactNode;
};
