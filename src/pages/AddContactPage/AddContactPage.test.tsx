import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { paths } from "@/constants";
import {
  fillContactForm,
  renderWithProviders,
  wrapWithRouter,
} from "@/testUtils/testUtils";
import ContactsPage from "../ContactsPage/ContactsPage";
import AddContactPage from "./AddContactPage";

const routes = [
  {
    path: "/",
    element: <AddContactPage />,
  },
  {
    path: paths.contacts,
    element: <ContactsPage />,
  },
];

const spyScroll = vi.fn();
Object.defineProperty(global.window, "scroll", { value: spyScroll });

describe("Given a AddContactPage component", () => {
  describe("When rendered", () => {
    test("Then it should show a heading with 'new contact' inside", () => {
      const headingText = "new contact";

      renderWithProviders(wrapWithRouter(<AddContactPage />));

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When rendered and the user adds a contact", () => {
    test("Then it should show the contacts page", async () => {
      const buttonText = "create";

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      await fillContactForm();

      const createButton = screen.getByRole("button", {
        name: buttonText,
      });
      await userEvent.click(createButton);

      expect(router.state.location.pathname).toBe(paths.contacts);
    });
  });
});
