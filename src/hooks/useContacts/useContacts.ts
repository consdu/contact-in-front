import axios from "axios";
import { ContactStructure } from "../../types";
import { paths } from "../../constants";
import { useCallback } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

const contactsApi = axios.create({
  baseURL: apiUrl,
});

const useContacts = () => {
  const getContacts = useCallback(async (): Promise<ContactStructure[]> => {
    const { data } = await contactsApi.get<{ contacts: ContactStructure[] }>(
      `${apiUrl}${paths.contacts}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    return data.contacts;
  }, []);

  return {
    getContacts,
  };
};

export default useContacts;
