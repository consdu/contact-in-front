import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";
import { renderWithProviders } from "../../testUtils/testUtils";

describe("Given a Contact Form component", () => {
  const buttonText = "create";
  const inputLabels = [
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

  describe("When it receives 'create' as a text and it's rendered", () => {
    test("Then it should show Name, Surname, Phone, Email, Address, DOB, Image, Socials inputs", () => {
      renderWithProviders(<ContactForm buttonText={buttonText} />);

      inputLabels.forEach((inputName) => {
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

  describe("When is rendered and the user types 'example' in the inputs", () => {
    test("Then the inputs should show 'example'", () => {
      const textSample = "example";

      renderWithProviders(<ContactForm buttonText={buttonText} />);

      inputLabels.forEach(async (inputName) => {
        if (inputName !== "Date of birth") {
          const input = screen.getByLabelText(inputName);

          await userEvent.type(input, textSample);

          expect(input).toHaveValue(textSample);
        }
      });
    });
  });
});
