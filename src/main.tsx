import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import Loading from "./components/Loading/Loading";
import appRouter from "./routers/appRouter/appRouter";
import { store } from "./store";
import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";
import theme from "./styles/theme/theme";
import "./fonts";
import "react-toastify/dist/ReactToastify.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={appRouter} />
        </Suspense>
        <GlobalStyle />
        <ToastContainer
          hideProgressBar={true}
          position="top-center"
          autoClose={1500}
        />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
