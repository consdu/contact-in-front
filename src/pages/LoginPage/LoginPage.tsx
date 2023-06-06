import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import ContainerStyled from "../../components/shared/ContainerStyled";
import useToken from "../../hooks/useToken/useToken";
import useUser from "../../hooks/useUser/useUser";
import { useAppDispatch, useAppSelector } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import { UserCredentials } from "../../types";
import LoginPageStyled from "./LoginPageStyled";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { paths } from "../../constants";

const LoginPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.user.token);
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const { setLocalStorageItem } = useLocalStorage();
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();

  useEffect(() => {
    if (token) {
      navigate(paths.contacts, { replace: true });
    }
  });

  const handleLoginFormSubmit = async (userCredentials: UserCredentials) => {
    const token = await getUserToken(userCredentials);

    if (token) {
      setLocalStorageItem("token", token);
      const userSessionData = getTokenData(token);
      dispatch(loginUserActionCreator({ ...userSessionData, token }));
      navigate(paths.contacts, { replace: true });
    }
  };

  return (
    <LoginPageStyled>
      <ContainerStyled>
        <header>
          <section className="main-title">
            <span>contact</span>
            <span className="main-title__logo">in</span>
          </section>
        </header>
        <main>
          <LoginForm
            onLoginFormSubmit={handleLoginFormSubmit}
            isLoading={isLoading}
          />
        </main>
      </ContainerStyled>
    </LoginPageStyled>
  );
};

export default LoginPage;
