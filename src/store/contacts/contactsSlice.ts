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
    addMore: (currentContactsState: ContactsStateStructure) => ({
      ...currentContactsState,
      limit: currentContactsState.limit + 10,
    }),
  },
});

export const {
  loadContacts: loadContactsActionCreator,
  clearContacts: clearContactsActionCreator,
  deleteContact: deleteContactActionCreator,
  addContact: addContactActionCreator,
  addMore: addMoreActionCreator,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
