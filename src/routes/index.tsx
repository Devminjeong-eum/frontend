import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout';
import Main from '../pages/Main';
import Detail from '../pages/Detail';

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
        element: <Detail />,
        index: true,
      },
    ],
  },
]);

export default router;
