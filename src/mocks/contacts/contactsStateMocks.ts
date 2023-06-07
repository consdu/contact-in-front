import { contactsMock } from "../../factories/contacts/contactsFactory";
import { ContactsStateStructure } from "../../types";

export const emptyContactsStateMock: ContactsStateStructure = {
  contactsData: [],
  limit: 10,
};

export const fullContactsStateMock: ContactsStateStructure = {
  contactsData: contactsMock,
  limit: 10,
};
