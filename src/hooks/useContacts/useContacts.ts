import axios from "axios";
import { useCallback, useMemo } from "react";
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

  const config = useMemo(
    () => ({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    [token]
  );

  const getContacts = useCallback(
    async (limit: number): Promise<ContactStructure[] | undefined> => {
      try {
        dispatch(showLoadingActionCreator());

        const { data } = await contactsApi.get<{
          contacts: ContactStructure[];
        }>(`${apiUrl}${paths.contacts}?limit=${limit}`, config);

        dispatch(hideLoadingActionCreator());

        return data.contacts;
      } catch (error) {
        dispatch(hideLoadingActionCreator());

        toast.error(feedbacks.errorGettingContacts);
      }
    },
    [config, dispatch]
  );

  const deleteContact = async (contactId: string): Promise<number> => {
    try {
      dispatch(showLoadingActionCreator());

      await contactsApi.delete(
        `${apiUrl}${paths.contacts}/${contactId}`,
        config
      );

      dispatch(hideLoadingActionCreator());
      toast.success(feedbacks.deleteSuccesful);

      return 200;
    } catch {
      dispatch(hideLoadingActionCreator());
      toast.error(feedbacks.errorDeletingContact);

      return 404;
    }
  };

  const addContact = async (contactData: Partial<ContactStructure>) => {
    try {
      const { data } = await contactsApi.post(
        `${apiUrl}${paths.contacts}`,
        contactData,
        config
      );
      toast.success(feedbacks.addSuccesful);

      return data.contact;
    } catch {
      toast.error(feedbacks.errorAddingContact);
    }
  };

  return {
    getContacts,
    deleteContact,
    addContact,
  };
};

export default useContacts;
