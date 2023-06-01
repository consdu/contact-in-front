import { contactsMock } from "../../factories/contacts/contactsFactory";
import {
  emptyContactsStateMock,
  fullContactsStateMock,
} from "../../mocks/contacts/contactsStateMocks";
import { ContactsStateStructure } from "../../types";
import { contactsReducer, loadContactsActionCreator } from "./contactsSlice";

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
});
