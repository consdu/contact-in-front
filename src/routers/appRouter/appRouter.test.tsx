import { RouterProvider } from "react-router-dom";
import { renderWithProviders } from "../../testUtils/testUtils";
import appRouter from "./appRouter";
import { userTokenMock } from "../../mocks/user/userMocks";
import { screen } from "@testing-library/react";

localStorage.setItem("token", userTokenMock);

describe("Given a appRouter", () => {
  describe("When rendered and a token exists in local storage", () => {
    test("Then it should show the 'contacts' and 'add contact' links", () => {
      const linkNames = ["contacts", "add contact"];

      renderWithProviders(<RouterProvider router={appRouter} />);

      linkNames.forEach((linkName) => {
        const link = screen.getByRole("link", {
          name: linkName,
        });

        expect(link).toBeInTheDocument();
      });
    });
  });
});
