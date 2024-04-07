import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layout';
import Main from '@/pages/Main';
import SystemCheckNotice from '@/pages/SystemCheckNotice';
import LayoutWrapper from '@/layout/LayoutWrapper';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutWrapper />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Main />,
            index: true,
          },
        ],
      },
      { path: '/notice', element: <SystemCheckNotice /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
