import { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { PropsWithChildren } from "react";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { RootState, setupStore, store } from "../store";
import theme from "../styles/theme/theme";

export const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
    return (
      <Provider store={testStore}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    );
  };

  render(ui, { wrapper: Wrapper });
};

export const wrapWithRouter = (ui: React.ReactElement) => {
  const routes = [
    {
      path: "/",
      element: ui,
    },
  ];

  const router = createMemoryRouter(routes);

  return <RouterProvider router={router} />;
};

export const wrapWithProviders = ({
  children,
}: PropsWithChildren): React.ReactElement => (
  <Provider store={store}>{children}</Provider>
);

export const fillContactForm = async () => {
  const nameLabels = ["Name", "Surname"];
  const phoneLabel = "Phone number";
  const avatarLabel = "Image";
  const otherLabels = ["Email", "Address"];

  const inputTextSamples = [
    "John",
    "example@example.com",
    "+34 667 876 545",
    "https://www.example.com/image.jpg",
  ];

  for (const nameLabel of nameLabels) {
    const input = screen.getByLabelText(nameLabel);
    await userEvent.type(input, inputTextSamples[0]);
  }

  for (const inputLabel of otherLabels) {
    const input = screen.getByLabelText(inputLabel);
    await userEvent.type(input, inputTextSamples[1]);
  }

  const phoneInput = screen.getByLabelText(phoneLabel);
  await userEvent.type(phoneInput, inputTextSamples[2]);

  const avatarInput = screen.getByLabelText(avatarLabel);
  await userEvent.type(avatarInput, inputTextSamples[3]);
};
