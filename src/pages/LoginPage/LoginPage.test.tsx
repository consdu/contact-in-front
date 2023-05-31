import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginPage from "./LoginPage";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import {
  emptyUserStateMock,
  loggedUserStateMock,
  userLoginDataMock,
} from "../../mocks/user/userMocks";
import { paths } from "../../constants";

beforeEach(() => {
  localStorage.clear();
});

describe("Given a LoginPage component", () => {
  const usernameLabel = "Username:";
  const passwordLabel = "Password:";
  const buttonText = "Login";

  const routes = [
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: paths.contacts,
      element: <p>Contacts page</p>,
    },
  ];
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

  describe("When rendered and the user logs in with valid credentials", () => {
    test("Then it should redirect the user to the contacts page", async () => {
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

      expect(router.state.location.pathname).toBe(paths.contacts);
    });
  });

  describe("When rendered and the user logs in with invalid credentials", () => {
    test("Then it should stay on the login page", async () => {
      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        user: emptyUserStateMock,
      });

      const usernameInput = screen.getByLabelText(usernameLabel);
      const passwordInput = screen.getByLabelText(passwordLabel);
      const loginbutton = screen.getByRole("button", {
        name: buttonText,
      });

      await userEvent.type(usernameInput, "wrong username");
      await userEvent.type(passwordInput, "wrong password");
      await userEvent.click(loginbutton);

      expect(router.state.location.pathname).toBe("/");
    });
  });

  describe("When rendered and a valid token already exists in store", () => {
    test("Then it should redirect the user to the contacts page", () => {
      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        user: loggedUserStateMock,
      });

      expect(router.state.location.pathname).toBe(paths.contacts);
    });
  });
  ``;
});
