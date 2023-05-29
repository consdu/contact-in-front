import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "./store";
import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";
import theme from "./styles/theme/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
