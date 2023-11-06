import { contactsMock } from "../../factories/contacts/contactsFactory";
import { ContactStructure, ContactsStateStructure } from "../../types";

export const emptyContactsStateMock: ContactsStateStructure = {
  contactsData: [],
  limit: 10,
  totalCount: 0,
  selectedContact: {} as ContactStructure,
};

export const fullContactsStateMock: ContactsStateStructure = {
  ...emptyContactsStateMock,
  contactsData: contactsMock,
};
