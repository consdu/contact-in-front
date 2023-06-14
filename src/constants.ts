import { ContactStructure } from "./types";

export const paths = {
  userLogin: "/user/login",
  login: "/login",
  contacts: "/contacts",
  addContact: "/add-contact",
  search: "/search",
  updateContact: "/update-contact",
};

export const feedbacks = {
  wrongCredentials: "Invalid username or password",
  logoutSuccesful: "You've been logged out correctly",
  deleteSuccesful: "Contact deleted correctly",
  addSuccesful: "Contact added correctly",
  updateSuccesful: "Contact updated correctly",
  errorGettingContacts: "Error while getting contacts",
  errorDeletingContact: "Error while deleting contact",
  errorAddingContact: "Error while adding contact",
  errorUpdatingContact: "Error while updating contact",
};

export const responseErrors = {
  missingToken: "Missing token",
  wrongCredentials: "Wrong Credentials",
  contactNotFound: "Contact not found",
  serverError: "Server internal error",
};

export const responseMesssages = {
  deleteSuccessful: "Contact deleted succesfully",
  updateSuccessful: "Contact updated succesfully",
};

export const emptySelectedContact: ContactStructure = {
  id: "",
  user: "",
  address: "",
  avatar:
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBvcGFjaXR5PSIwLjIiIGN4PSI0MCIgY3k9IjQwIiByPSI0MCIgZmlsbD0iI0YxRjhGNCIvPgo8L3N2Zz4K",
  birthday: "01-01-2000",
  email: "",
  name: "",
  surname: "",
  phoneNumber: {
    mobile: "",
  },
  socials: {
    twitter: "",
    instagram: "",
    linkedin: "",
  },
};
