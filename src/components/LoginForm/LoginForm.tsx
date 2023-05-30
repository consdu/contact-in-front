import { IoPersonCircleSharp } from "react-icons/io5";
import LoginFormStyled from "./LoginFormStyled";
import { useState } from "react";

const LoginForm = (): React.ReactElement => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((previousData) => ({
      ...previousData,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <LoginFormStyled className="login-form">
      <h2 className="login-form__title">Login to access your contacts</h2>
      <div className="login-form__group">
        <label htmlFor="username" hidden>
          Username:
        </label>
        <div className="username-wrapper">
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
          />
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
          onChange={handleInputChange}
        />
      </div>
      <button
        className="login-form__button"
        type="submit"
        value={formData.password}
      >
        Login
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
