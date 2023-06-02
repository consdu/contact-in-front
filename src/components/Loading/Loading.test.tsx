import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Given a Loading Component", () => {
  describe("When rendered", () => {
    test("Then it should show a loading animation", () => {
      const loadingAnimationName = "loading animation";

      render(<Loading />);

      const loadingAnimation = screen.getByLabelText(loadingAnimationName);

      expect(loadingAnimation).toBe;
    });
  });
});
