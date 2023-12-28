import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { paths } from "@/constants";
import {
  contactMock,
  contactsMock,
} from "@/factories/contacts/contactsFactory";
import { fullContactsStateMock } from "@/mocks/contacts/contactsStateMocks";
import { renderWithProviders, wrapWithRouter } from "@/testUtils/testUtils";
import ContactsPage from "../ContactsPage/ContactsPage";
import UpdateContactPage from "./UpdateContactPage";

const routes = [
  {
    path: "/",
    element: <UpdateContactPage />,
  },
  {
    path: paths.contacts,
    element: <ContactsPage />,
  },
];

const spyScroll = vi.fn();
Object.defineProperty(global.window, "scroll", { value: spyScroll });

describe("Given a UpdateContactPage component", () => {
  describe("When rendered", () => {
    test("Then it should show a heading with 'update contact' inside", () => {
      const headingText = "update contact";

      renderWithProviders(wrapWithRouter(<UpdateContactPage />), {
        contacts: {
          ...fullContactsStateMock,
          selectedContact: contactMock,
        },
      });

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a button with 'Update' inside", () => {
      const buttonText = "Update";

      renderWithProviders(wrapWithRouter(<UpdateContactPage />), {
        contacts: {
          ...fullContactsStateMock,
          selectedContact: contactMock,
        },
      });

      const button = screen.getByRole("button", {
        name: buttonText,
      });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When rendered and the user updates a contact", () => {
    test("Then it should show the contacts page with 10 contacts", async () => {
      const buttonText = "Update";

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        contacts: {
          ...fullContactsStateMock,
          selectedContact: contactMock,
        },
      });

      const updateButton = screen.getByRole("button", {
        name: buttonText,
      });
      await userEvent.click(updateButton);

      contactsMock.forEach((contact) => {
        const contactName = screen.getByRole("heading", {
          name: `${contact.name} ${contact.surname}`,
        });

        expect(contactName).toBeInTheDocument();
      });
    });
  });
});
