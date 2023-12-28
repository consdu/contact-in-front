import { useState } from "react";
import { IoKey, IoPersonCircleSharp } from "react-icons/io5";
import { UserCredentials } from "@/types";
import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

interface LoginFormProps {
  onLoginFormSubmit: (formData: UserCredentials) => void;
  isLoading: boolean;
}

const LoginForm = ({
  onLoginFormSubmit,
  isLoading,
}: LoginFormProps): React.ReactElement => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const isButtonDisabled =
    formData.username.length < 1 || formData.password.length < 1;

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
        <div className="input-wrapper">
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
        <div className="input-wrapper">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <span className="login-form__group-icon">
            <IoKey />
          </span>
        </div>
      </div>
      <Button
        text="Login"
        isLoading={isLoading}
        isButtonDisabled={isButtonDisabled}
        type="submit"
      />
    </LoginFormStyled>
  );
};

export default LoginForm;
