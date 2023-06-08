import {
  contactMock,
  contactsMock,
} from "../../factories/contacts/contactsFactory";
import {
  emptyContactsStateMock,
  fullContactsStateMock,
} from "../../mocks/contacts/contactsStateMocks";
import { ContactsStateStructure } from "../../types";
import {
  addContactActionCreator,
  addMoreActionCreator,
  clearContactsActionCreator,
  contactsReducer,
  deleteContactActionCreator,
  loadContactsActionCreator,
  resetLimitActionCreator,
} from "./contactsSlice";

describe("Given a contactsReducer", () => {
  describe("When it receives an empty state and a loadContacts action with 3 contacts", () => {
    test("Then it should return a new state with the 3 contacts", () => {
      const currentContactsState: ContactsStateStructure =
        emptyContactsStateMock;

      const expectedContactsState: ContactsStateStructure =
        fullContactsStateMock;

      const newContactsState = contactsReducer(
        currentContactsState,
        loadContactsActionCreator(contactsMock)
      );

      expect(newContactsState).toStrictEqual(expectedContactsState);
    });
  });

  describe("When it receives a current state and a clearContacts action", () => {
    test("Then it should return a new empty state", () => {
      const currentContactsState: ContactsStateStructure =
        fullContactsStateMock;

      const expectedContactsState: ContactsStateStructure =
        emptyContactsStateMock;

      const newContactsState = contactsReducer(
        currentContactsState,
        clearContactsActionCreator()
      );

      expect(newContactsState).toStrictEqual(expectedContactsState);
    });
  });

  describe("When it receives a current state and a deleteContact action with one id as payload", () => {
    test("Then it should return a new state without the contact who's matching the id", () => {
      const id = fullContactsStateMock.contactsData[0].id;

      const currentContactsState: ContactsStateStructure =
        fullContactsStateMock;

      const expectedContactsState: ContactsStateStructure = {
        ...fullContactsStateMock,
        contactsData: fullContactsStateMock.contactsData.filter(
          (contact) => contact.id !== id
        ),
      };

      const newContactsState = contactsReducer(
        currentContactsState,
        deleteContactActionCreator(id as string)
      );

      expect(newContactsState).toStrictEqual(expectedContactsState);
    });
  });

  describe("When it receives a current state and an addContact action with a contact as payload", () => {
    test("Then it should return a new state with the payload's contact included", () => {
      const currentContactsState: ContactsStateStructure =
        fullContactsStateMock;

      const expectedContactsState: ContactsStateStructure = {
        ...fullContactsStateMock,
        contactsData: [...contactsMock, contactMock],
      };

      const newContactsState = contactsReducer(
        currentContactsState,
        addContactActionCreator(contactMock)
      );

      expect(newContactsState).toStrictEqual(expectedContactsState);
    });
  });

  describe("When it receives a current state and an addMore action", () => {
    test("Then it should return a new state with limit incremented by 10", () => {
      const currentContactsState: ContactsStateStructure =
        fullContactsStateMock;

      const expectedContactsState: ContactsStateStructure = {
        ...fullContactsStateMock,
        limit: fullContactsStateMock.limit + 10,
      };

      const newContactsState = contactsReducer(
        currentContactsState,
        addMoreActionCreator()
      );

      expect(newContactsState).toStrictEqual(expectedContactsState);
    });
  });

  describe("When it receives a current state and an resetLimit action", () => {
    test("Then it should return a new state with limit value to 11", () => {
      const currentContactsState: ContactsStateStructure =
        fullContactsStateMock;

      const expectedContactsState: ContactsStateStructure = {
        ...fullContactsStateMock,
        limit: 11,
      };

      const newContactsState = contactsReducer(
        currentContactsState,
        resetLimitActionCreator()
      );

      expect(newContactsState).toStrictEqual(expectedContactsState);
    });
  });
});
