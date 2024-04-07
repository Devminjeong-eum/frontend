import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layout';
import Main from '@/pages/Main';
import SystemCheckNotice from '@/pages/SystemCheckNotice';
import Error from '@/pages/Error';
import LayoutWrapper from '@/layout/LayoutWrapper';
import Login from '@/pages/Login';
import Detail from '@/pages/Detail';
import { Suspense } from 'react';

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

      {
        path: '/words/:wordId',
        element: (
          <Suspense fallback={<div />}>
            <Detail />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  { path: '/notice', element: <SystemCheckNotice /> },
]);

export default router;
