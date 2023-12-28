import { screen } from "@testing-library/react";
import { contactsMock } from "@/factories/contacts/contactsFactory";
import { renderWithProviders, wrapWithRouter } from "@/testUtils/testUtils";
import ContactList from "./ContactList";

describe("Given a ContactList component", () => {
  describe("When it receives a collection of contacts and it's rendered", () => {
    test("Then it should show a collection of contacts", () => {
      const contactNames = contactsMock.map(
        (contact) => `${contact.name} ${contact.surname}`
      );

      renderWithProviders(
        wrapWithRouter(<ContactList contacts={contactsMock} />)
      );

      contactNames.forEach((contactName) => {
        const contact = screen.getByRole("heading", {
          name: contactName,
        });

        expect(contact).toBeInTheDocument();
      });
    });
  });
});
