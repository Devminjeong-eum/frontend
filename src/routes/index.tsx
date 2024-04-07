import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layout';
import Main from '@/pages/Main';
import SystemCheckNotice from '@/pages/SystemCheckNotice';
import Error from '@/pages/Error';
import LayoutWrapper from '@/layout/LayoutWrapper';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutWrapper />,
    errorElement: <Error />,
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
]);

export default router;
