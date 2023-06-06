import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ContactStructure, ContactsStateStructure } from "../../types";

const initialContactsState: ContactsStateStructure = {
  contactsData: [],
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
    clearContacts: () => initialContactsState,
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
  },
});

export const {
  loadContacts: loadContactsActionCreator,
  clearContacts: clearContactsActionCreator,
  deleteContact: deleteContactActionCreator,
  addContact: addContactActionCreator,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
