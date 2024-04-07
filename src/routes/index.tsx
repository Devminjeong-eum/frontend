import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import Main from '../pages/Main';
import Detail from '../pages/Detail';
import { Suspense } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
        index: true,
      },
      {
        path: '/words/:wordId',
        element: (
          <Suspense fallback={<div />}>
            <Detail />
          </Suspense>
        ),
        index: true,
      },
    ],
  },
]);

export default router;
