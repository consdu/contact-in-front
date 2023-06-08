import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import Search from "./Search";

describe("Given a Search component", () => {
  describe("When is rendered", () => {
    test("Then it should show a Search input", () => {
      const labelName = "search";

      renderWithProviders(<Search />);

      const searchInput = screen.getByLabelText(labelName);

      expect(searchInput).toBeInTheDocument();
    });
  });
});
