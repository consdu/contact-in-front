import { screen } from "@testing-library/react";
import { contactMock } from "@/factories/contacts/contactsFactory";
import { fullContactsStateMock } from "@/mocks/contacts/contactsStateMocks";
import { loggedUserStateMock } from "@/mocks/user/userMocks";
import { renderWithProviders, wrapWithRouter } from "@/testUtils/testUtils";
import ContactDetailsPage from "./ContactDetailsPage";

describe("Given a ContactDetailsPage", () => {
  describe("When rendered and the user is logged in", () => {
    beforeEach(() => {
      renderWithProviders(wrapWithRouter(<ContactDetailsPage />), {
        user: loggedUserStateMock,
        contacts: {
          ...fullContactsStateMock,
          selectedContact: contactMock,
        },
      });
    });

    test("Then it should show a contact's image", () => {
      const altText = `Avatar of ${contactMock.name} ${contactMock.surname}`;

      const avatar = screen.getByAltText(altText);

      expect(avatar).toBeInTheDocument();
    });

    test("Then it should show a contact's full name", () => {
      const fullName = `${contactMock.name} ${contactMock.surname}`;

      const heading = screen.getByRole("heading", {
        name: fullName,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a contact's phone number", () => {
      const expectedPhoneNumber = contactMock.phoneNumber.mobile;

      const phoneNumber = screen.getByRole("link", {
        name: expectedPhoneNumber,
      });

      expect(phoneNumber).toBeInTheDocument();
    });

    test("Then it should show a contact's email", () => {
      const expectedEmail = contactMock.email;

      const email = screen.getByRole("link", {
        name: expectedEmail,
      });

      expect(email).toBeInTheDocument();
    });

    test("Then it should show a contact's address", () => {
      const expectedAddress = contactMock.address;

      const address = screen.getByText(expectedAddress);

      expect(address).toBeInTheDocument();
    });

    test("Then it should show a contact's birthday", () => {
      const birthdayDate = new Date(contactMock.birthday);

      const expectedBirthdayText = birthdayDate.toLocaleDateString("en-UK", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      const birthday = screen.getByText(expectedBirthdayText);

      expect(birthday).toBeInTheDocument();
    });

    test("Then it should show a button to update the contact", () => {
      const buttonText = "update contact";

      const button = screen.getByRole("button", {
        name: buttonText,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
