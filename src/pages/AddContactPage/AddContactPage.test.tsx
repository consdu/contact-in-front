import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import AddContactPage from "./AddContactPage";

describe("Given a AddContactPage component", () => {
  describe("When rendered", () => {
    test("Then it should show a heading with 'new contact' inside", () => {
      const headingText = "new contact";

      renderWithProviders(<AddContactPage />);

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
