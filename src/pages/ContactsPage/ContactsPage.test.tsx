import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { contactsMock } from "../../factories/contacts/contactsFactory";
import { renderWithProviders } from "../../testUtils/testUtils";
import ContactsPage from "./ContactsPage";

describe("Given a ContactPage component", () => {
  const limit = 10;

  describe("When it rendered and there are contacts in the store", () => {
    test("Then it should show a collection of contacts", () => {
      const contactNames = contactsMock.map(
        (contact) => `${contact.name} ${contact.surname}`
      );

      renderWithProviders(<ContactsPage />, {
        contacts: {
          contactsData: contactsMock,
          limit,
        },
      });

      contactNames.forEach((contactName) => {
        const contact = screen.getByRole("heading", {
          name: contactName,
        });

        expect(contact).toBeInTheDocument();
      });
    });
  });

  describe("When rendered with 10 contacts and the user deletes one", () => {
    test("Then it should show 9 contacts", async () => {
      const deleteButtonName = "delete contact";

      renderWithProviders(<ContactsPage />, {
        contacts: {
          contactsData: contactsMock,
          limit,
        },
      });

      const deleteButton = screen.getAllByRole("button", {
        name: deleteButtonName,
      })[0];

      const heading = screen.getAllByRole("heading")[0];

      await userEvent.click(deleteButton);

      expect(heading).not.toBeInTheDocument();
    });
  });
});
