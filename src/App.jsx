import ErrorPage from "@pages/ErrorPage";
import MainPage from "@pages/MainPage";
import UserStatisticsPage from "@pages/UserStatisticsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainPage />,
    },
    {
      path: '/users/stats',
      element: <UserStatisticsPage />,
    },
    {
      path: '*',
      element: <ErrorPage />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

const App = () => <RouterProvider router={router} />;

export default App
