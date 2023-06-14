import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { renderWithProviders } from "../../testUtils/testUtils";
import SearchBar from "./SearchBar";

const handleSearchInputChange = vi.fn();

describe("Given a Search component", () => {
  describe("When is rendered", () => {
    test("Then it should show a Search input", () => {
      const labelName = "search";

      renderWithProviders(
        <SearchBar onSearchInputChange={handleSearchInputChange} />
      );

      const searchInput = screen.getByLabelText(labelName);

      expect(searchInput).toBeInTheDocument();
    });
  });

  describe("When is rendered and the user types 'test' inside of it", () => {
    test("Then it should a inside the search field", async () => {
      const placeholder = "Search";
      const expectedText = "test";

      renderWithProviders(
        <SearchBar onSearchInputChange={handleSearchInputChange} />
      );

      const searchInput = screen.getByPlaceholderText(placeholder);

      await userEvent.type(searchInput, expectedText);

      expect(searchInput).toHaveValue(expectedText);
    });
  });
});
