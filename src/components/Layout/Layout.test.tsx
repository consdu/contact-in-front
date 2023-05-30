import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import Layout from "./Layout";

describe("Given a Layout Component", () => {
  describe("When rendered", () => {
    test("Then it should show a 'contacts', an 'add contact' and a 'logout' link", () => {
      const linkNames = ["contacts", "add contact", "logout"];

      renderWithProviders(wrapWithRouter(<Layout />));

      linkNames.forEach((linkName) => {
        const link = screen.getByRole("link", {
          name: linkName,
        });

        expect(link).toBeInTheDocument();
      });
    });
  });
});