import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ContactStructure, ContactsStateStructure } from "../../types";
import { emptySelectedContact } from "../../mocks/contacts/contactsStateMocks";

const initialContactsState: ContactsStateStructure = {
  contactsData: [],
  limit: 10,
  totalCount: 0,
  selectedContact: emptySelectedContact,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContactsState,
  reducers: {
    loadContacts: (
      currentContactsState: ContactsStateStructure,
      action: PayloadAction<ContactStructure[]>
    ) => ({
      ...currentContactsState,
      contactsData: action.payload,
    }),
    resetContactsState: () => initialContactsState,
    deleteContact: (
      currentContactsState: ContactsStateStructure,
      action: PayloadAction<string>
    ) => ({
      ...currentContactsState,
      contactsData: currentContactsState.contactsData.filter(
        (contact) => contact.id !== action.payload
      ),
    }),
    addContact: (
      currentContactsState: ContactsStateStructure,
      action: PayloadAction<ContactStructure>
    ) => ({
      ...currentContactsState,
      contactsData: [...currentContactsState.contactsData, action.payload],
    }),
    loadMoreContacts: (currentContactsState: ContactsStateStructure) => ({
      ...currentContactsState,
      limit: currentContactsState.limit + 10,
    }),
    loadSelectedContact: (
      currentContactsState: ContactsStateStructure,
      action: PayloadAction<ContactStructure>
    ) => ({
      ...currentContactsState,
      selectedContact: action.payload,
    }),
    resetLimit: (currentContactsState: ContactsStateStructure) => ({
      ...currentContactsState,
      limit: 10,
    }),
    clearLimit: (currentContactsState: ContactsStateStructure) => ({
      ...currentContactsState,
      limit: 0,
    }),
    setTotalCount: (
      currentContactsState: ContactsStateStructure,
      action: PayloadAction<number>
    ) => ({
      ...currentContactsState,
      totalCount: action.payload,
    }),
  },
});

export const {
  loadContacts: loadContactsActionCreator,
  resetContactsState: resetContactsStateActionCreator,
  deleteContact: deleteContactActionCreator,
  addContact: addContactActionCreator,
  loadMoreContacts: loadMoreContactsActionCreator,
  loadSelectedContact: loadSelectedContactActionCreator,
  resetLimit: resetLimitActionCreator,
  clearLimit: clearLimitActionCreator,
  setTotalCount: setTotalCountActionCreator,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
