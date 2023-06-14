import { emptySelectedContact } from "../../constants";
import { contactsMock } from "../../factories/contacts/contactsFactory";
import { ContactsStateStructure } from "../../types";

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
