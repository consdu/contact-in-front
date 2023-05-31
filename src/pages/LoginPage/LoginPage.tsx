import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import ContainerStyled from "../../components/shared/ContainerStyled";
import useToken from "../../hooks/useToken/useToken";
import useUser from "../../hooks/useUser/useUser";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import { UserCredentials } from "../../types";
import LoginPageStyled from "./LoginPageStyled";
import { paths } from "../../constants";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();

  const handleLoginFormSubmit = async (userCredentials: UserCredentials) => {
    const token = await getUserToken(userCredentials);

    if (token) {
      const userSessionData = getTokenData(token);
      dispatch(loginUserActionCreator(userSessionData));
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
          <LoginForm onLoginFormSubmit={handleLoginFormSubmit} />
        </main>
      </ContainerStyled>
    </LoginPageStyled>
  );
};

export default LoginPage;
