import axios from "axios";
import { ContactStructure } from "../../types";
import { paths } from "../../constants";
import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";

const apiUrl = import.meta.env.VITE_API_URL;

const contactsApi = axios.create({
  baseURL: apiUrl,
});

const useContacts = () => {
  const token = useAppSelector((state) => state.user.token);
  const dispatch = useAppDispatch();

  const config = useMemo(
    () => ({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    [token]
  );

  const getContacts = useCallback(async (): Promise<ContactStructure[]> => {
    dispatch(showLoadingActionCreator());
    const { data } = await contactsApi.get<{ contacts: ContactStructure[] }>(
      `${apiUrl}${paths.contacts}`,
      config
    );
    dispatch(hideLoadingActionCreator());

    return data.contacts;
  }, [config, dispatch]);

  return {
    getContacts,
  };
};

export default useContacts;
