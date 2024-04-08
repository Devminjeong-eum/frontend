import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layout';
import Main from '@/pages/Main';
import SystemCheckNotice from '@/pages/SystemCheckNotice';
import LayoutWrapper from '@/layout/LayoutWrapper';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound/NotFound';
import Detail from '@/pages/Detail';
import { Suspense } from 'react';
import Search from '@/pages/Search';
import Quiz from '@/pages/Quiz';
import StartQuiz from '@/pages/Quiz/StartQuiz';
import DetailLoading from '@/pages/Detail/DetailLoading.tsx';

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
          {
            path: '/api/word/search/:wordName',
            element: <Search />,
            index: true,
          },
        ],
      },
      {
        path: '/quiz',
        element: <Quiz />,
        index: true,
      },
      {
        path: '/startQuiz',
        element: <StartQuiz />,
        index: true,
      },
      {
        path: '/words/:wordId',
        element: (
          <Suspense fallback={<DetailLoading />}>
            <Detail />
          </Suspense>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      { path: '/notice', element: <SystemCheckNotice /> },
    ],
  },
]);

export default router;
