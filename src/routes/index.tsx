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
import {
  LOGIN_PATH,
  NOTICE_PATH,
  QUIZ_PATH,
  SEARCH_PATH,
  START_QUIZ_PATH,
  WORD_DETAIL_PATH,
  WORD_LIST_PATH,
} from '@/routes/path.ts';

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
            path: WORD_LIST_PATH,
            element: <Main />,
            index: true,
          },
          {
            path: SEARCH_PATH,
            element: <Search />,
            index: true,
          },
        ],
      },
      {
        path: LOGIN_PATH,
        element: <Login />,
        index: true,
      },
      {
        path: QUIZ_PATH,
        element: <Quiz />,
        index: true,
      },
      {
        path: START_QUIZ_PATH,
        element: <StartQuiz />,
      },
      {
        path: WORD_DETAIL_PATH,
        element: (
          <Suspense fallback={<DetailLoading />}>
            <Detail />
          </Suspense>
        ),
      },
      { path: NOTICE_PATH, element: <SystemCheckNotice /> },
    ],
  },
]);

export default router;
