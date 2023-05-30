import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { store } from "./store";
import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";
import theme from "./styles/theme/theme";
import appRouter from "./routers/appRouter/appRouter";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/sora/400.css";
import "@fontsource/sora/600.css";
import "@fontsource/sora/700.css";

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
