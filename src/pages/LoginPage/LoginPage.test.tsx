import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { paths } from "@/constants";
import { contactsMock } from "@/factories/contacts/contactsFactory";
import { errorHandlers } from "@/mocks/handlers";
import { server } from "@/mocks/server";
import {
  emptyUserStateMock,
  loggedUserStateMock,
} from "@/mocks/user/userMocks";
import { correctCredentialsMock } from "@/mocks/user/userMocks";
import { incorrectCredentialsMock } from "@/mocks/user/userMocks";
import { renderWithProviders, wrapWithRouter } from "@/testUtils/testUtils";
import { UserCredentials } from "@/types";
import ContactsPage from "../ContactsPage/ContactsPage";
import LoginPage from "./LoginPage";

beforeEach(() => {
  localStorage.clear();
});

const loginUser = async (credentials: UserCredentials) => {
  const usernameLabel = "Username:";
  const passwordLabel = "Password:";
  const buttonText = "Login";

  const usernameInput = screen.getByLabelText(usernameLabel);
  const passwordInput = screen.getByLabelText(passwordLabel);
  const loginbutton = screen.getByRole("button", {
    name: buttonText,
  });

  await userEvent.type(usernameInput, credentials.username);
  await userEvent.type(passwordInput, credentials.password);
  await userEvent.click(loginbutton);
};

describe("Given a LoginPage component", () => {
  const appName = "contact";
  const appLogoText = "in";

  const routes = [
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: paths.contacts,
      element: <ContactsPage />,
    },
  ];

  describe("When rendered", () => {
    test("Then it should show the title and logo of the app", () => {
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

      await loginUser(correctCredentialsMock);

      expect(router.state.location.pathname).toBe(paths.contacts);
    });

    test("Then it should show the user's collection of contacts", async () => {
      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        user: emptyUserStateMock,
      });

      await loginUser(correctCredentialsMock);

      contactsMock.forEach((contact) => {
        const contactName = screen.getByRole("heading", {
          name: `${contact.name} ${contact.surname}`,
        });

        expect(contactName).toBeInTheDocument();
      });
    });
  });

  describe("When rendered and the user logs in with invalid credentials", () => {
    test("Then it should stay on the login page", async () => {
      server.resetHandlers(...errorHandlers);
      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        user: emptyUserStateMock,
      });

      await loginUser(incorrectCredentialsMock);

      expect(router.state.location.pathname).toBe("/");
    });

    test("Then it should show the title and the logo of the app", async () => {
      server.resetHandlers(...errorHandlers);
      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        user: emptyUserStateMock,
      });

      await loginUser(incorrectCredentialsMock);

      const appTitle = screen.getByText(appName);
      const appLogo = screen.getByText(appLogoText);

      expect(appTitle).toBeInTheDocument();
      expect(appLogo).toBeInTheDocument();
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
});
