import { screen } from "@testing-library/react";
import ContactCard from "./ContactCard";
import { contactMock } from "../../factories/contacts/contactsFactory";
import { renderWithProviders } from "../../testUtils/testUtils";

describe("Given a ContactCard component", () => {
  describe("When it receives a contact", () => {
    test("Then it should show the full name of the contact in a heading", () => {
      const fullName = `${contactMock.name} ${contactMock.surname}`;

      renderWithProviders(<ContactCard contact={contactMock} />);

      const heading = screen.getByRole("heading", {
        name: fullName,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show the avatar of the contact", () => {
      const altText = `Avatar of ${contactMock.name} ${contactMock.surname}`;

      renderWithProviders(<ContactCard contact={contactMock} />);

      const avatar = screen.getByAltText(altText);

      expect(avatar).toBeInTheDocument();
    });

    test("Then it should show the phone number of the contact", () => {
      const expectedPhoneNumber = contactMock.phoneNumber.mobile;

      renderWithProviders(<ContactCard contact={contactMock} />);

      const phoneNumber = screen.getByText(expectedPhoneNumber);

      expect(phoneNumber).toBeInTheDocument();
    });
  });
});
