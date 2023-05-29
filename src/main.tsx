import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { store } from "./store";
import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";
import theme from "./styles/theme/theme";
import appRouter from "./routers/appRouter/appRouter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={appRouter} />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
