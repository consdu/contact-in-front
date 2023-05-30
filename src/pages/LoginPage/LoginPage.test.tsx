import { screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import { renderWithProviders } from "../../testUtils/testUtils";

describe("Given a LoginPage", () => {
  describe("When rendered", () => {
    test("Then it should show the title and logo of the app", () => {
      const appName = "contact";
      const appLogoText = "in";

      renderWithProviders(<LoginPage />);

      const appTitle = screen.getByText(appName);
      const appLogo = screen.getByText(appLogoText);

      expect(appTitle).toBeInTheDocument();
      expect(appLogo).toBeInTheDocument();
    });
  });
});
