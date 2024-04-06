import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  onClick?: () => void;
};

export default function CustomButton({ children, onClick }: Props) {
  return <button onClick={onClick}>{children}</button>;
}
