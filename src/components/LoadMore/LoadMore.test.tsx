import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { renderWithProviders } from "@/testUtils/testUtils";
import LoadMore from "./LoadMore";

const handleButtonClick = vi.fn();

describe("Given a LoadMore component", () => {
  const buttonText = "Load more";

  describe("When rendered", () => {
    test("Then it should show a 'LOAD MORE...' button", () => {
      renderWithProviders(<LoadMore handleButtonClick={handleButtonClick} />);

      const loadMoreButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(loadMoreButton).toBeInTheDocument();
    });
  });

  describe("When rendered and the user clicks it", () => {
    test("Then it should call the received function", async () => {
      renderWithProviders(<LoadMore handleButtonClick={handleButtonClick} />);

      const loadMoreButton = screen.getByRole("button", {
        name: buttonText,
      });

      await userEvent.click(loadMoreButton);

      expect(handleButtonClick).toHaveBeenCalled();
    });
  });
});
