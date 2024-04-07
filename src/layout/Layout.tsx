import { Outlet } from 'react-router-dom';
import Header from '@/Layout/Header.tsx';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
