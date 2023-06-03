import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { ContactStructure } from "../../types";
import { paths, feedbacks } from "../../constants";
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

  const getContacts = useCallback(async (): Promise<
    ContactStructure[] | undefined
  > => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      dispatch(showLoadingActionCreator());

      const { data } = await contactsApi.get<{
        contacts: ContactStructure[];
      }>(`${apiUrl}${paths.contacts}`, config);

      dispatch(hideLoadingActionCreator());

      return data.contacts;
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      toast.error(feedbacks.errorGettingContacts);
    }
  }, [dispatch, token]);

  return {
    getContacts,
  };
};

export default useContacts;
