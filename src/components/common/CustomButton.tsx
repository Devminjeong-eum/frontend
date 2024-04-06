import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function CustomButton({ children, onClick, className }: Props) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
