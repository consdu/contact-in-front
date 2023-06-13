import { contactsMock } from "../../factories/contacts/contactsFactory";
import { ContactStructure, ContactsStateStructure } from "../../types";

export const emptySelectedContact: ContactStructure = {
  id: "",
  user: "",
  address: "",
  avatar: "",
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

export const emptyContactsStateMock: ContactsStateStructure = {
  contactsData: [],
  limit: 10,
  totalCount: 0,
  selectedContact: emptySelectedContact,
};

export const fullContactsStateMock: ContactsStateStructure = {
  ...emptyContactsStateMock,
  contactsData: contactsMock,
};
