import { render, screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import ProtectedRoute from "./ProtectedRoute";
import { userTokenMock } from "../../mocks/user/userMocks";
import { paths } from "../../constants";
import LoginPage from "../../pages/LoginPage/LoginPage";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

describe("Given a Protected Route components", () => {
  const text = "Example";

  describe("When rendered with a children and a token exist in localStorage", () => {
    test("Then it should return the children received", () => {
      localStorage.setItem("token", userTokenMock);

      render(
        wrapWithRouter(
          <ProtectedRoute>
            <p>{text}</p>
          </ProtectedRoute>
        )
      );

      const paragraph = screen.getByText(text);

      expect(paragraph).toBeInTheDocument();
    });
  });

  describe("When rendered with a children and no user token exists", () => {
    test("Then it should show the login page", () => {
      localStorage.clear();
      const appName = "contact";
      const appLogoText = "in";

      const routes = [
        {
          path: "/",
          element: (
            <ProtectedRoute>
              <p>{text}</p>
            </ProtectedRoute>
          ),
        },
        {
          path: paths.login,
          element: <LoginPage />,
        },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const appTitle = screen.getByText(appName);
      const appLogo = screen.getByText(appLogoText);

      expect(appTitle).toBeInTheDocument();
      expect(appLogo).toBeInTheDocument();
    });
  });
});
