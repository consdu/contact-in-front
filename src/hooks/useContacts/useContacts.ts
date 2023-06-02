import axios from "axios";
import { ContactStructure } from "../../types";
import { paths } from "../../constants";
import { useCallback, useMemo } from "react";
import { useAppSelector } from "../../store";

const apiUrl = import.meta.env.VITE_API_URL;

const contactsApi = axios.create({
  baseURL: apiUrl,
});

const useContacts = () => {
  const token = useAppSelector((state) => state.user.token);

  const config = useMemo(
    () => ({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    [token]
  );

  const getContacts = useCallback(async (): Promise<ContactStructure[]> => {
    const { data } = await contactsApi.get<{ contacts: ContactStructure[] }>(
      `${apiUrl}${paths.contacts}`,
      config
    );

    return data.contacts;
  }, [config]);

  return {
    getContacts,
  };
};

export default useContacts;
