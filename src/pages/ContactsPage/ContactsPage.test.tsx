import { screen, render } from "@testing-library/react";
import ContactsPage from "./ContactsPage";

describe("Given a Contacts Page component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Contacts Page' text", () => {
      const expectedText = /Contacts Page/i;

      render(<ContactsPage />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
