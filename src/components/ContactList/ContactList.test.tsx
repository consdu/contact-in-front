import { screen } from "@testing-library/react";
import ContactList from "./ContactList";
import { contactsMock } from "../../factories/contacts/contactsFactory";
import { renderWithProviders } from "../../testUtils/testUtils";

describe("Given a ContactList component", () => {
  describe("When it receives a collection of contacts and it's rendered", () => {
    test("Then it should show a collection of contacts", () => {
      const contactNames = contactsMock.map(
        (contact) => `${contact.name} ${contact.surname}`
      );

      renderWithProviders(<ContactList contacts={contactsMock} />);

      contactNames.forEach((contactName) => {
        const contact = screen.getByRole("heading", {
          name: contactName,
        });

        expect(contact).toBeInTheDocument();
      });
    });
  });
});
