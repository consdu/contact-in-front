import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../components/App/App";
import {
  LazyContactsPage,
  LazyLoginPage,
  LazyNotFoundPage,
} from "../lazyPages/lazyPages";
import { paths } from "../../constants";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import AddContactPage from "../../pages/AddContactPage/AddContactPage";
import ContactDetailsPage from "../../pages/ContactDetailsPage/ContactDetailsPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <LazyNotFoundPage />,
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
            <AddContactPage />
          </ProtectedRoute>
        ),
      },
      {
        path: `${paths.contacts}/:contactId`,
        element: (
          <ProtectedRoute>
            <ContactDetailsPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
