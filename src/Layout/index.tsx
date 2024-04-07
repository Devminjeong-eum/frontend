import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex justify-center min-h-screen ">
      <div className="w-full max-w-[430px] border-1 border-x border-gray-200 shadow-xl">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
