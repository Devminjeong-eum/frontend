import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layout';
import Main from '@/pages/Main';
import SystemCheckNotice from '@/pages/SystemCheckNotice';
import Error from '@/pages/Error';

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
        path: '/notice',
        element: <SystemCheckNotice />,
      },
      {
        path: '/error',
        element: <Error />,
      },
    ],
  },
]);

export default router;
