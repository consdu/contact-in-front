import { screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";

describe("Given a NotFoundPage component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Page Not Found' in a heading", () => {
      const headingText = "Page Not Found";

      renderWithProviders(wrapWithRouter(<NotFoundPage />));

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show an empty papers image", () => {
      const imageAltText = "page not found";

      renderWithProviders(wrapWithRouter(<NotFoundPage />));

      const image = screen.getByAltText(imageAltText);

      expect(image).toBeInTheDocument();
    });

    test("Then it should show back home link", () => {
      const linkText = "Back home";

      renderWithProviders(wrapWithRouter(<NotFoundPage />));

      const link = screen.getByRole("link", {
        name: linkText,
      });

      expect(link).toBeInTheDocument();
    });
  });
});
