import axios from "axios";
import { toast } from "react-toastify";
import { paths, feedbacks } from "@/constants";
import { useAppDispatch } from "@/store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "@/store/ui/uiSlice";
import { UserCredentials } from "@/types";

const apiUrl = import.meta.env.VITE_API_URL;

const contactsApi = axios.create({
  baseURL: apiUrl,
});

const useUser = () => {
  const dispatch = useAppDispatch();

  const getUserToken = async (
    userCredentials: UserCredentials
  ): Promise<string | undefined> => {
    try {
      dispatch(showLoadingActionCreator());
      const { data } = await contactsApi.post<{ token: string }>(
        paths.userLogin,
        userCredentials
      );
      dispatch(hideLoadingActionCreator());
      return data.token;
    } catch {
      dispatch(hideLoadingActionCreator());

      toast.error(feedbacks.wrongCredentials);
    }
  };

  return {
    getUserToken,
  };
};

export default useUser;
