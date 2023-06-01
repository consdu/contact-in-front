import { contactsMock } from "../../factories/contacts/contactsFactory";
import { ContactsStateStructure } from "../../types";

export const emptyContactsStateMock: ContactsStateStructure = {
  contactsData: [],
};

export const fullContactsStateMock: ContactsStateStructure = {
  contactsData: contactsMock,
};
