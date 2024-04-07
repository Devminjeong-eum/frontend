import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import Main from '../pages/Main';
import Detail from '../pages/Detail';
import { Suspense } from 'react';
import LayoutWrapper from '@/Layout/LayoutWrapper.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutWrapper />,
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
]);

export default router;
