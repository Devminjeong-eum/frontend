import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export default function CustomButton({
  children,
  onClick,
  disabled,
  className,
}: Props) {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
}
