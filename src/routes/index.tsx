import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout';
import Main from '../pages/Main';

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
]);

export default router;
