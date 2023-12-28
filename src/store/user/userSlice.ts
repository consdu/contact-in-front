import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserStateStructure, UserActionPayloadStructure } from "@/types";

const initialUserState: UserStateStructure = {
  id: "",
  name: "",
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (
      _currentUserState: UserStateStructure,
      action: PayloadAction<UserActionPayloadStructure>
    ) => ({
      ...action.payload,
      isLogged: true,
    }),
    logoutUser: () => ({
      ...initialUserState,
    }),
  },
});

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
