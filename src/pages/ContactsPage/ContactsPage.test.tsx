import { screen } from "@testing-library/react";
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
});
