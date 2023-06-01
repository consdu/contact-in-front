import axios from "axios";
import { ContactStructure } from "../../types";
import { paths } from "../../constants";

const apiUrl = import.meta.env.VITE_API_URL;

const contactsApi = axios.create({
  baseURL: apiUrl,
});

const useContacts = () => {
  const getContacts = async (): Promise<ContactStructure[]> => {
    const { data } = await contactsApi.get<{ contacts: ContactStructure[] }>(
      `${apiUrl}${paths.contacts}`
    );

    return data.contacts;
  };

  return {
    getContacts,
  };
};

export default useContacts;
