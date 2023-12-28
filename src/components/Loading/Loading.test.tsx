import { act, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Loading from "./Loading";

describe("Given a Loading Component", () => {
  describe("When rendered", () => {
    test("Then it should show a loading animation", () => {
      vi.useFakeTimers();

      const loadingAnimationName = "loading animation";

      render(<Loading />);

      act(() => vi.advanceTimersByTime(300));

      const loadingAnimation = screen.getByLabelText(loadingAnimationName);

      expect(loadingAnimation).toBe;
    });
  });
});
