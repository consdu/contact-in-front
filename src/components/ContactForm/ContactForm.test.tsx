import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import ContactForm from "./ContactForm";
import {
  fillContactForm,
  renderWithProviders,
} from "../../testUtils/testUtils";

const handleFormSubmit = vi.fn();

describe("Given a Contact Form component", () => {
  const inputTextSample = "example@example.com";
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
      renderWithProviders(
        <ContactForm buttonText={buttonText} onFormSubmit={handleFormSubmit} />
      );

      inputLabels.forEach((inputName) => {
        const input = screen.getByLabelText(inputName);

        expect(input).toBeInTheDocument();
      });
    });

    test("Then it should show a create button", () => {
      renderWithProviders(
        <ContactForm buttonText={buttonText} onFormSubmit={handleFormSubmit} />
      );

      const submitButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(submitButton).toBeInTheDocument();
    });
  });

  describe("When is rendered and the user types 'example' in the inputs", () => {
    test("Then the inputs should show 'example'", async () => {
      renderWithProviders(
        <ContactForm buttonText={buttonText} onFormSubmit={handleFormSubmit} />
      );

      for (const inputLabel of inputLabels) {
        if (inputLabel !== "Date of birth") {
          const input = screen.getByLabelText(inputLabel);
          await userEvent.type(input, inputTextSample);

          expect(input).toHaveValue(inputTextSample);
        }
      }
    });
  });

  describe("When is rendered and the user fills the form with correct data and submits", () => {
    test("Then it should call the received submit handler function", async () => {
      renderWithProviders(
        <ContactForm buttonText={buttonText} onFormSubmit={handleFormSubmit} />
      );

      await fillContactForm();

      const createButton = screen.getByRole("button", {
        name: buttonText,
      });
      await userEvent.click(createButton);

      expect(handleFormSubmit).toHaveBeenCalled();
    });
  });
});
