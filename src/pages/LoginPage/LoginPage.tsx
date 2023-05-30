import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <header>
        <section className="main-title">
          <span>contact</span>
          <span className="main-title__logo">in</span>
        </section>
      </header>
      <main>
        <LoginForm />
      </main>
    </LoginPageStyled>
  );
};

export default LoginPage;
