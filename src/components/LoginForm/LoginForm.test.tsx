import { screen } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";
import { renderWithProviders } from "../../testUtils/testUtils";
import { userLoginDataMock } from "../../mocks/user/userMocks";

const handleLoginFormSubmit = vi.fn();

describe("Given a Login Form component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Login to acces your contacts' in a heading", () => {
      const headingText = "Login to access your contacts";

      renderWithProviders(
        <LoginForm onLoginFormSubmit={handleLoginFormSubmit} />
      );

      const formHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(formHeading).toBeInTheDocument();
    });

    test("Then it should show a username and password inputs", () => {
      const usernameLabel = "Username:";
      const passwordLabel = "Password:";

      renderWithProviders(
        <LoginForm onLoginFormSubmit={handleLoginFormSubmit} />
      );

      const usernameInput = screen.getByLabelText(usernameLabel);
      const passwordInput = screen.getByLabelText(passwordLabel);

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show a 'Login' button", () => {
      const loginButtonText = "Login";

      renderWithProviders(
        <LoginForm onLoginFormSubmit={handleLoginFormSubmit} />
      );

      const loginButton = screen.getByRole("button", {
        name: loginButtonText,
      });

      expect(loginButton).toBeInTheDocument();
    });
  });

  describe("When rendered and the user types 'admin' in the username input and 'admin' in the password input", () => {
    test("Then it should show admin in the username field", async () => {
      const usernameLabel = "Username:";

      renderWithProviders(
        <LoginForm onLoginFormSubmit={handleLoginFormSubmit} />
      );

      const usernameInput = screen.getByLabelText(usernameLabel);

      await userEvent.type(usernameInput, userLoginDataMock.username);

      expect(usernameInput).toHaveValue(userLoginDataMock.username);
    });

    test("Then it should show admin hidden in the password field", async () => {
      const passwordLabel = "Password:";

      renderWithProviders(
        <LoginForm onLoginFormSubmit={handleLoginFormSubmit} />
      );

      const passwordInput = screen.getByLabelText(passwordLabel);

      await userEvent.type(passwordInput, userLoginDataMock.password);

      expect(passwordInput).toHaveValue(userLoginDataMock.password);
    });
  });
});
