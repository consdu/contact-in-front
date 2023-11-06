import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { store } from "./store";
import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";
import theme from "./styles/theme/theme";
import appRouter from "./routers/appRouter/appRouter";
import "react-toastify/dist/ReactToastify.min.css";
import "./fonts";
import Loading from "./components/Loading/Loading";

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
