import axios from "axios";
import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import { ContactStructure } from "../../types";
import { paths, feedbacks, responseErrors } from "../../constants";
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
      if (limit === 0) {
        return;
      }

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

  const addContact = async (
    contactData: Partial<ContactStructure>
  ): Promise<ContactStructure | undefined> => {
    try {
      const { data } = await contactsApi.post<{
        contact: ContactStructure;
      }>(`${apiUrl}${paths.contacts}`, contactData, config);
      toast.success(feedbacks.addSuccesful);

      return data.contact;
    } catch {
      toast.error(feedbacks.errorAddingContact);
    }
  };

  const searchContacts = async (
    name: string
  ): Promise<ContactStructure[] | undefined> => {
    try {
      const { data } = await contactsApi.get<{
        contacts: ContactStructure[];
      }>(`${apiUrl}${paths.contacts}${paths.search}?name=${name}`, config);

      return data.contacts;
    } catch {
      toast.error(responseErrors.serverError);
    }
  };

  const getContact = useCallback(
    async (contactId: string): Promise<ContactStructure | number> => {
      try {
        dispatch(showLoadingActionCreator());

        const { data } = await contactsApi.get<{
          contact: ContactStructure;
        }>(`${apiUrl}${paths.contacts}/id/${contactId}`, config);

        dispatch(hideLoadingActionCreator());

        return data.contact;
      } catch {
        dispatch(hideLoadingActionCreator());

        return 404;
      }
    },
    [config, dispatch]
  );

  const updateContact = async (
    contactData: ContactStructure
  ): Promise<ContactStructure | undefined> => {
    try {
      const { data } = await contactsApi.put<{
        contact: ContactStructure;
      }>(`${apiUrl}${paths.contacts}`, contactData, config);
      toast.success(feedbacks.updateSuccesful);

      return data.contact;
    } catch {
      toast.error(feedbacks.errorUpdatingContact);
    }
  };

  return {
    getContacts,
    deleteContact,
    addContact,
    searchContacts,
    getContact,
    updateContact,
  };
};

export default useContacts;
