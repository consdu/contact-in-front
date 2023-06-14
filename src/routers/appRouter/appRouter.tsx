import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../components/App/App";
import {
  LazyContactsPage,
  LazyLoginPage,
  LazyNotFoundPage,
  LazyAddContactPage,
  LazyContactDetailsPage,
  LazyUpdateContactPage,
} from "../lazyPages/lazyPages";
import { paths } from "../../constants";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={paths.contacts} replace />,
      },
      {
        path: paths.login,
        element: <LazyLoginPage />,
      },
      {
        path: paths.contacts,
        element: (
          <ProtectedRoute>
            <LazyContactsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: paths.addContact,
        element: (
          <ProtectedRoute>
            <LazyAddContactPage />
          </ProtectedRoute>
        ),
      },
      {
        path: `${paths.contacts}/id/:contactId`,
        element: (
          <ProtectedRoute>
            <LazyContactDetailsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: paths.updateContact,
        element: (
          <ProtectedRoute>
            <LazyUpdateContactPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <LazyNotFoundPage />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
