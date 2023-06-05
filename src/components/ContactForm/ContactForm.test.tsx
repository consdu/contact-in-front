import { screen } from "@testing-library/react";
import ContactForm from "./ContactForm";
import { renderWithProviders } from "../../testUtils/testUtils";

describe("Given a Contact Form component", () => {
  describe("When it receives 'create' as a text and it's rendered", () => {
    const buttonText = "create";

    test("Then it should show Name, Surname, Phone, Email, Address, DOB, Image, Socials inputs", () => {
      const inputNames = [
        "Name",
        "Surname",
        "Phone number",
        "Email",
        "Address",
        "Date of birth",
        "Image",
        "Twitter",
        "Instagram",
        "Linkedin",
      ];

      renderWithProviders(<ContactForm buttonText={buttonText} />);

      inputNames.forEach((inputName) => {
        const input = screen.getByLabelText(inputName);

        expect(input).toBeInTheDocument();
      });
    });

    test("Then it should show a create button", () => {
      renderWithProviders(<ContactForm buttonText={buttonText} />);

      const submitButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(submitButton).toBeInTheDocument();
    });
  });
});
