import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  PreloadedState,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { uiReducer } from "./ui/uiSlice";
import { userReducer } from "./user/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
  contacts: contactsReducer,
  ui: uiReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
