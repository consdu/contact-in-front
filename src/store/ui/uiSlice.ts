import { createSlice } from "@reduxjs/toolkit";
import { UiStateStructure } from "../../types";

const initialUiState: UiStateStructure = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentUiState: UiStateStructure) => ({
      ...currentUiState,
      isLoading: true,
    }),
  },
});

export const { showLoading: showLoadingActionCreator } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
