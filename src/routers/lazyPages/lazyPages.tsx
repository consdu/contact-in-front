import { lazy } from "react";

export const LazyLoginPage = lazy(
  () => import("../../pages/LoginPage/LoginPage")
);

export const LazyContactsPage = lazy(
  () => import("../../pages/ContactsPage/ContactsPage")
);
