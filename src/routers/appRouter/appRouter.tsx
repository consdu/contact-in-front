import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../components/App/App";
import LoginPage from "../../pages/LoginPage/LoginPage";
import { paths } from "../../constants";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={paths.login} replace />,
      },
      {
        path: paths.login,
        element: <LoginPage />,
      },
      {
        path: paths.contacts,
        element: <p>Contacts page</p>,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
