import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/Layout';
import Main from '@/pages/Main';
import Login from '@/pages/Login';

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
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
