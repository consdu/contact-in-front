import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { contactsMock } from "../../factories/contacts/contactsFactory";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import ContactsPage from "./ContactsPage";
import { fullContactsStateMock } from "../../mocks/contacts/contactsStateMocks";

describe("Given a ContactsPage component", () => {
  beforeEach(() => {
    renderWithProviders(wrapWithRouter(<ContactsPage />), {
      contacts: fullContactsStateMock,
    });
  });
  describe("When it rendered and there are contacts in the store", () => {
    test("Then it should show a collection of contacts", () => {
      const contactNames = contactsMock.map(
        (contact) => `${contact.name} ${contact.surname}`
      );

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
      const deleteButton = screen.getAllByRole("button", {
        name: deleteButtonName,
      })[0];

      const heading = screen.getAllByRole("heading")[0];

      await userEvent.click(deleteButton);

      expect(heading).not.toBeInTheDocument();
    });
  });

  describe("When rendered and the user types 'a' in the search field", () => {
    test("Then it should show all contacts with name or surname that include 'a' ", async () => {
      const searchTerm = "a";
      const placeholderText = "Search";
      const expectedContacts = contactsMock.filter(
        (contact) =>
          contact.name.includes(searchTerm) ||
          contact.surname.includes(searchTerm)
      );

      const searchInput = screen.getByPlaceholderText(placeholderText);

      await userEvent.type(searchInput, searchTerm);

      expectedContacts.forEach((contact) => {
        const contactName = screen.getByRole("heading", {
          name: `${contact.name} ${contact.surname}`,
        });

        expect(contactName).toBeInTheDocument();
      });
    });
  });

  describe("When rendered and the user types 'a' in the search field and deletes 'a'", () => {
    test("Then it should show all 10 contacts of the store", async () => {
      const searchTerm = "a";
      const placeholderText = "Search";

      const searchInput = screen.getByPlaceholderText(placeholderText);

      await userEvent.type(searchInput, searchTerm);
      await userEvent.type(searchInput, "{backspace}");
      await userEvent.type(searchInput, " ");

      contactsMock.forEach((contact) => {
        const contactName = screen.getByRole("heading", {
          name: `${contact.name} ${contact.surname}`,
        });

        expect(contactName).toBeInTheDocument();
      });
    });
  });
});
