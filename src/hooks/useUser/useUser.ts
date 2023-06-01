import axios from "axios";
import { toast } from "react-toastify";
import { UserCredentials } from "../../types";
import { paths, feedbacks } from "../../constants";

const apiUrl = import.meta.env.VITE_API_URL;

const contactsApi = axios.create({
  baseURL: apiUrl,
});

const useUser = () => {
  const getUserToken = async (
    userCredentials: UserCredentials
  ): Promise<string | undefined> => {
    try {
      const { data } = await contactsApi.post<{ token: string }>(
        paths.userLogin,
        userCredentials
      );

      return data.token;
    } catch {
      toast.error(feedbacks.wrongCredentials);
    }
  };

  return {
    getUserToken,
  };
};

export default useUser;
