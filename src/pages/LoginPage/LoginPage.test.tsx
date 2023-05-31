import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginPage from "./LoginPage";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import { userLoginDataMock } from "../../mocks/user/userMocks";

describe("Given a LoginPage component", () => {
  describe("When rendered", () => {
    test("Then it should show the title and logo of the app", () => {
      const appName = "contact";
      const appLogoText = "in";

      renderWithProviders(wrapWithRouter(<LoginPage />));

      const appTitle = screen.getByText(appName);
      const appLogo = screen.getByText(appLogoText);

      expect(appTitle).toBeInTheDocument();
      expect(appLogo).toBeInTheDocument();
    });
  });

  describe("When the rendered and the user logs in with invalid credentials", () => {
    const usernameLabel = "Username:";
    const passwordLabel = "Password:";
    const buttonText = "Login";

    test("Then it should redirect the user to the contacts page", async () => {
      const expectedNewPath = "/contacts";

      const routes = [
        {
          path: "/",
          element: <LoginPage />,
        },
        {
          path: "/contacts",
          element: <p>Contacts page</p>,
        },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const usernameInput = screen.getByLabelText(usernameLabel);
      const passwordInput = screen.getByLabelText(passwordLabel);
      const loginbutton = screen.getByRole("button", {
        name: buttonText,
      });

      await userEvent.type(usernameInput, userLoginDataMock.username);
      await userEvent.type(passwordInput, userLoginDataMock.password);
      await userEvent.click(loginbutton);

      expect(router.state.location.pathname).toBe(expectedNewPath);
    });
  });
});
