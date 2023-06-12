import { lazy } from "react";

export const LazyLoginPage = lazy(
  () => import("../../pages/LoginPage/LoginPage")
);

export const LazyContactsPage = lazy(
  () => import("../../pages/ContactsPage/ContactsPage")
);

export const LazyNotFoundPage = lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage")
);

export const LazyAddContactPage = lazy(
  () => import("../../pages/AddContactPage/AddContactPage")
);

export const LazyContactDetailsPage = lazy(
  () => import("../../pages/ContactDetailsPage/ContactDetailsPage")
);

export const LazyUpdateContactPage = lazy(
  () => import("../../pages/UpdateContactPage/UpdateContactPage")
);
