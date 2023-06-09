import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ContactStructure, ContactsStateStructure } from "../../types";

const initialContactsState: ContactsStateStructure = {
  contactsData: [],
  limit: 10,
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
    addMore: (currentContactsState: ContactsStateStructure) => ({
      ...currentContactsState,
      limit: currentContactsState.limit + 10,
    }),
    resetLimit: (currentContactsState: ContactsStateStructure) => ({
      ...currentContactsState,
      limit: 10,
    }),
    clearLimit: (currentContactsState: ContactsStateStructure) => ({
      ...currentContactsState,
      limit: 0,
    }),
  },
});

export const {
  loadContacts: loadContactsActionCreator,
  resetContactsState: resetContactsStateActionCreator,
  deleteContact: deleteContactActionCreator,
  addContact: addContactActionCreator,
  addMore: addMoreActionCreator,
  resetLimit: resetLimitActionCreator,
  clearLimit: clearLimitActionCreator,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
