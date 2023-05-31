import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoginForm from "../../components/LoginForm/LoginForm";
import ContainerStyled from "../../components/shared/ContainerStyled";
import useToken from "../../hooks/useToken/useToken";
import useUser from "../../hooks/useUser/useUser";
import { useAppDispatch, useAppSelector } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import { UserCredentials } from "../../types";
import LoginPageStyled from "./LoginPageStyled";
import { feedbacks, paths } from "../../constants";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { useEffect } from "react";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.user.token);
  const { setLocalStorageItem } = useLocalStorage();
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();

  useEffect(() => {
    if (token) {
      navigate(paths.contacts, { replace: true });
    }
  });

  const handleLoginFormSubmit = async (userCredentials: UserCredentials) => {
    try {
      const token = await getUserToken(userCredentials);

      if (token) {
        setLocalStorageItem("token", token);
        const userSessionData = getTokenData(token);
        dispatch(loginUserActionCreator(userSessionData));
        navigate(paths.contacts, { replace: true });
      }
    } catch {
      toast.error(feedbacks.wrongCredentials);
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
          <LoginForm onLoginFormSubmit={handleLoginFormSubmit} />
        </main>
      </ContainerStyled>
    </LoginPageStyled>
  );
};

export default LoginPage;
