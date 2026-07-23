import ErrorPage from "@pages/ErrorPage";
import MainPage from "@pages/MainPage";
import UserStatisticsPage from "@pages/UserStatisticsPage";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
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
]);

const App = () => <RouterProvider router={router} />;

export default App
