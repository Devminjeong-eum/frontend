import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/Layout/Layout';
import Main from '@/pages/Main';
import Detail from '@/pages/Detail';
import { Suspense } from 'react';
import LayoutWrapper from '@/Layout/LayoutWrapper';
import SystemCheckNotice from '@/pages/SystemCheckNotice';
import Error from '@/pages/Error';
import Login from '@/pages/Login';

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
