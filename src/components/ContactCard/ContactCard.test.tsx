import { screen } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import ContactCard from "./ContactCard";
import { contactMock } from "../../factories/contacts/contactsFactory";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";

const handleDeleteClick = vi.fn();
describe("Given a ContactCard component", () => {
  const deleteButtonName = "delete contact";

  beforeEach(() => {
    renderWithProviders(
      wrapWithRouter(
        <ContactCard contact={contactMock} onDeleteClick={handleDeleteClick} />
      )
    );
  });

  describe("When it receives a contact", () => {
    test("Then it should show the full name of the contact in a heading", () => {
      const fullName = `${contactMock.name} ${contactMock.surname}`;

      const heading = screen.getByRole("heading", {
        name: fullName,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show the avatar of the contact", () => {
      const altText = `Avatar of ${contactMock.name} ${contactMock.surname}`;

      const avatar = screen.getByAltText(altText);

      expect(avatar).toBeInTheDocument();
    });

    test("Then it should show the phone number of the contact", () => {
      const expectedPhoneNumber = contactMock.phoneNumber.mobile;

      const phoneNumber = screen.getByText(expectedPhoneNumber);

      expect(phoneNumber).toBeInTheDocument();
    });

    test("Then it should show the a delete button", () => {
      const deleteButton = screen.getByRole("button", {
        name: deleteButtonName,
      });

      expect(deleteButton).toBeInTheDocument();
    });
  });

  describe("When it receives a contact, a handleDeleteClick function and the user clicks the delete button", () => {
    test("Then it should call the received function with the contact's id", async () => {
      const expectedContactId = contactMock.id;

      const deleteButton = screen.getByRole("button", {
        name: deleteButtonName,
      });
      await userEvent.click(deleteButton);

      expect(handleDeleteClick).toHaveBeenCalledWith(expectedContactId);
    });
  });
});
