import Header from './Header.tsx';
import { Outlet } from 'react-router-dom';
import Footer from './Footer.tsx';

export default function Layout() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full max-w-[430px] border-1 border-x border-gray-200">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
