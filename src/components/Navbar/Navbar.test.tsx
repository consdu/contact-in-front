import { screen } from "@testing-library/react";
import { vi } from "vitest";
import Navbar from "./Navbar";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";

const handleLogoutClick = vi.fn();

describe("Given a Navbar Component", () => {
  describe("When rendered", () => {
    test("Then it should show a 'contacts' link", () => {
      const linkName = "contacts";

      renderWithProviders(
        wrapWithRouter(<Navbar onLogoutClick={handleLogoutClick} />)
      );

      const contactsLink = screen.getByRole("link", {
        name: linkName,
      });

      expect(contactsLink).toBeInTheDocument();
    });

    test("Then it should show a 'add contact' link", () => {
      const linkName = "add contact";

      renderWithProviders(
        wrapWithRouter(<Navbar onLogoutClick={handleLogoutClick} />)
      );

      const addContactLink = screen.getByRole("link", {
        name: linkName,
      });

      expect(addContactLink).toBeInTheDocument();
    });

    test("Then it should show a 'logout' button", () => {
      const buttonText = "logout";

      renderWithProviders(
        wrapWithRouter(<Navbar onLogoutClick={handleLogoutClick} />)
      );

      const logoutButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(logoutButton).toBeInTheDocument();
    });
  });
});
