import axios from "axios";
import { UserCredentials } from "../../types";

const apiUrl = import.meta.env.VITE_API_URL;

const contactsApi = axios.create({
  baseURL: apiUrl,
});

const useUser = () => {
  const getUserToken = async (
    userCredentials: UserCredentials
  ): Promise<string> => {
    const { data } = await contactsApi.post<{ token: string }>("/user/login", {
      userCredentials,
    });

    return data.token;
  };

  return {
    getUserToken,
  };
};

export default useUser;
