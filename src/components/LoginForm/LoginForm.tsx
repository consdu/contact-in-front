import { IoPersonCircleSharp } from "react-icons/io5";
import LoginFormStyled from "./LoginFormStyled";
import { useState } from "react";
import { UserCredentials } from "../../types";

interface LoginFormProps {
  onLoginFormSubmit: (formData: UserCredentials) => void;
}

const LoginForm = ({
  onLoginFormSubmit,
}: LoginFormProps): React.ReactElement => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((previousFormData) => ({
      ...previousFormData,
      [event.target.id]: event.target.value,
    }));
  };

  const handleLoginFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLoginFormSubmit(formData);
  };

  return (
    <LoginFormStyled className="login-form" onSubmit={handleLoginFormSubmit}>
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
            autoComplete="off"
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
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <button className="login-form__button" type="submit">
        Login
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
