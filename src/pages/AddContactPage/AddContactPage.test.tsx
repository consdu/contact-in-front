import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import AddContactPage from "./AddContactPage";
import { paths } from "../../constants";
import ContactsPage from "../ContactsPage/ContactsPage";

const routes = [
  {
    path: "/",
    element: <AddContactPage />,
  },
  {
    path: paths.contacts,
    element: <ContactsPage />,
  },
];

describe("Given a AddContactPage component", () => {
  describe("When rendered", () => {
    test("Then it should show a heading with 'new contact' inside", () => {
      const headingText = "new contact";

      renderWithProviders(wrapWithRouter(<AddContactPage />));

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When rendered and the user adds a contact", () => {
    test("Then it should show the contacts page", async () => {
      const buttonText = "create";
      const inputTextSample = "example@example.com";
      const requiredInputLabels = [
        "Name",
        "Surname",
        "Phone number",
        "Email",
        "Address",
        "Image",
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      for (const inputLabel of requiredInputLabels) {
        if (inputLabel !== "Date of birth") {
          const input = screen.getByLabelText(inputLabel);
          await userEvent.type(input, inputTextSample);
        }
      }

      const createButton = screen.getByRole("button", {
        name: buttonText,
      });
      await userEvent.click(createButton);

      expect(router.state.location.pathname).toBe(paths.contacts);
    });
  });
});
