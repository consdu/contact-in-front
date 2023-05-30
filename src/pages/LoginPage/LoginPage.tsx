import LoginForm from "../../components/LoginForm/LoginForm";
import ContainerStyled from "../../components/shared/ContainerStyled";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = () => {
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
          <LoginForm onLoginFormSubmit={() => ({})} />
        </main>
      </ContainerStyled>
    </LoginPageStyled>
  );
};

export default LoginPage;
