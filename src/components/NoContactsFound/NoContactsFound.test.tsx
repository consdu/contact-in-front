import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import NoContactsFound from "./NoContactsFound";

describe("Given a NoContactsFound component", () => {
  describe("When rendered", () => {
    test("Then it should show a 'no contacts found' heading", () => {
      const expectedHeading = /no contacts found/i;

      renderWithProviders(<NoContactsFound />);

      const heading = screen.getByRole("heading", {
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
