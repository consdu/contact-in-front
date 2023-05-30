import { screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { renderWithProviders } from "../../testUtils/testUtils";

describe("Given a Login Form component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Login to acces your contacts' in a heading", () => {
      const headingText = "Login to access your contacts";

      renderWithProviders(<LoginForm />);

      const formHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(formHeading).toBeInTheDocument();
    });

    test("Then it should show a username and password inputs", () => {
      const usernameLabel = "Username:";
      const passwordLabel = "Password:";

      renderWithProviders(<LoginForm />);

      const usernameInput = screen.getByLabelText(usernameLabel);
      const passwordInput = screen.getByLabelText(passwordLabel);

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show a 'Login' button", () => {
      const loginButtonText = "Login";

      renderWithProviders(<LoginForm />);

      const loginButton = screen.getByRole("button", {
        name: loginButtonText,
      });

      expect(loginButton).toBeInTheDocument();
    });
  });
});
