import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import Layout from "./Layout";
import { paths } from "../../constants";
import LoginPage from "../../pages/LoginPage/LoginPage";
import { loggedUserStateMock } from "../../mocks/user/userMocks";

const appName = "contact";
const appLogoText = "in";
const logoutButtonText = "logout";

const routes = [
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: paths.login,
    element: <LoginPage />,
  },
];

describe("Given a Layout Component", () => {
  describe("When rendered", () => {
    test("Then it should show a 'contacts', an 'add contact' links", () => {
      const linkNames = ["contacts", "add contact"];
      renderWithProviders(wrapWithRouter(<Layout />));

      linkNames.forEach((linkName) => {
        const link = screen.getByRole("link", {
          name: linkName,
        });

        expect(link).toBeInTheDocument();
      });
    });

    test("Then it should show a 'logout' button", () => {
      const buttonText = "logout";

      renderWithProviders(wrapWithRouter(<Layout />));

      const logoutButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(logoutButton).toBeInTheDocument();
    });
  });

  describe("When rendered with a logged in user and the user clicks the logout button", () => {
    test("Then it should show the login page header", async () => {
      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        user: loggedUserStateMock,
      });

      const logoutButton = screen.getByRole("button", {
        name: logoutButtonText,
      });
      await userEvent.click(logoutButton);

      const appTitle = screen.getByText(appName);
      const appLogo = screen.getByText(appLogoText);

      expect(appTitle).toBeInTheDocument();
      expect(appLogo).toBeInTheDocument();
    });
  });
});
