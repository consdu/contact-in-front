import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import UpdateContactPage from "./UpdateContactPage";
import { contactMock } from "../../factories/contacts/contactsFactory";
import { fullContactsStateMock } from "../../mocks/contacts/contactsStateMocks";

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
