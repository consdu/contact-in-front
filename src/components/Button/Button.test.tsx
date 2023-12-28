import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/testUtils/testUtils";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When rendered with a text 'Login'", () => {
    test("Then it should show a 'Login' button", () => {
      const buttonText = "Login";
      renderWithProviders(<Button text={buttonText} />);

      const button = screen.getByRole("button", {
        name: buttonText,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
