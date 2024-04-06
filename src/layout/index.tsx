import Header from './Header.tsx';
import Footer from './Footer.tsx';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const { pathname } = useLocation();
  const hideHeaderPaths = ['/notice', '/error'];

  return (
    <div className="flex justify-center min-h-screen ">
      <div className="w-full max-w-[430px] border-1 border-x border-gray-200 shadow-xl">
        {!hideHeaderPaths.includes(pathname) && <Header />}
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
