import Header from './Header.tsx';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex justify-center min-h-screen bg-[#FBFCFE]">
      <div className="w-full max-w-[430px] border-1 border-x border-gray-200 shadow-xl">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
