import { IoPersonCircleSharp } from "react-icons/io5";
import LoginFormStyled from "./LoginFormStyled";
import ContainerStyled from "../shared/ContainerStyled";

const LoginForm = (): React.ReactElement => {
  return (
    <ContainerStyled>
      <LoginFormStyled>
        <div className="form-group">
          <label htmlFor="username" hidden>
            Username:
          </label>
          <div className="form-group__username">
            <input type="text" id="username" placeholder="Username" />
            <span className="form-group__icon">
              <IoPersonCircleSharp />
            </span>
          </div>
        </div>
      </LoginFormStyled>
    </ContainerStyled>
  );
};

export default LoginForm;
