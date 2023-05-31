import { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import useToken from "../../hooks/useToken/useToken";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import Layout from "../Layout/Layout";

const App = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getLocalStorageItem } = useLocalStorage();
  const { getTokenData } = useToken();

  useEffect(() => {
    if (getLocalStorageItem("token")) {
      const token = getLocalStorageItem("token") as string;
      const tokenData = getTokenData(token);
      dispatch(loginUserActionCreator(tokenData));
    }
  }, [dispatch, getLocalStorageItem, getTokenData]);

  return <Layout />;
};

export default App;
