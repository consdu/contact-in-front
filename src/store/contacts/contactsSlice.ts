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
  },
});

export const { loadContacts: loadContactsActionCreator } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
