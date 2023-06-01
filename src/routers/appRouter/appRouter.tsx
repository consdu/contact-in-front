import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../components/App/App";
import { LazyContactsPage, LazyLoginPage } from "../lazyPages/lazyPages";
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
        element: <LazyLoginPage />,
      },
      {
        path: paths.contacts,
        element: <LazyContactsPage />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
