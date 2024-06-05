import { ReactNode } from 'react';

export default function Layout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  console.log(children);
  console.log(modal);
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
