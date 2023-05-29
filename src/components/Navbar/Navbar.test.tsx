import { screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";

describe("Given a Navbar Component", () => {
  describe("When rendered", () => {
    test("Then it should show a 'contacts' link", () => {
      const linkName = "contacts";

      renderWithProviders(wrapWithRouter(<Navbar />));

      const contactsLink = screen.getByRole("link", {
        name: linkName,
      });

      expect(contactsLink).toBeInTheDocument();
    });

    test("Then it should show a 'add contact' link", () => {
      const linkName = "add contact";

      renderWithProviders(wrapWithRouter(<Navbar />));

      const addContactLink = screen.getByRole("link", {
        name: linkName,
      });

      expect(addContactLink).toBeInTheDocument();
    });

    test("Then it should show a 'logout' link", () => {
      const linkName = "logout";

      renderWithProviders(wrapWithRouter(<Navbar />));

      const logoutLink = screen.getByRole("link", {
        name: linkName,
      });

      expect(logoutLink).toBeInTheDocument();
    });
  });
});
