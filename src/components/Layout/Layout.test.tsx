import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import Layout from "./Layout";

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
});
