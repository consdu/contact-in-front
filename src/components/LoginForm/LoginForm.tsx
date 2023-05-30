import { IoPersonCircleSharp } from "react-icons/io5";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): React.ReactElement => {
  return (
    <LoginFormStyled className="login-form">
      <h2 className="login-form__title">Login to access your contacts</h2>
      <div className="login-form__group">
        <label htmlFor="username" hidden>
          Username:
        </label>
        <div className="username-wrapper">
          <input type="text" id="username" placeholder="Username" />
          <span className="login-form__group-icon">
            <IoPersonCircleSharp />
          </span>
        </div>
      </div>
      <div className="login-form__group">
        <label htmlFor="password" hidden>
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="form-group__input"
        />
      </div>
      <button className="login-form__button" type="submit">
        Login
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
