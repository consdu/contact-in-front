import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.medium};
  padding-top: 50px;

  .username-wrapper {
    position: relative;
  }

  .login-form {
    &__title {
      font-size: 1.2rem;
      color: ${(props) => props.theme.colors.gray500};
      text-align: center;
      margin-bottom: ${(props) => props.theme.spacing.large};
    }

    &__group {
      display: flex;
      flex-direction: column;

      &__username {
        position: relative;
      }

      & input {
        background-color: transparent;
        width: 100%;
        font-size: 1.5rem;
        padding: 15px;
        border: 1px solid ${(props) => props.theme.colors.gray400};
        outline: none;
        border-radius: 5px;
      }

      &__icon {
        position: absolute;
        color: ${(props) => props.theme.colors.gray400};
        font-size: 2rem;
        right: 10px;
        top: 15px;
      }
    }

    &__group-icon {
      position: absolute;
      color: ${(props) => props.theme.colors.gray400};
      font-size: 2rem;
      right: 10px;
      top: 15px;
    }

    &__button {
      background-color: ${(props) => props.theme.colors.primary600};
      color: #fff;
      text-transform: uppercase;
      font-size: 1.5rem;
      padding-block: 20px;
      border-radius: 5px;
      margin-top: 30px;
      box-shadow: 0px 3px 5px -1px ${(props) => props.theme.colors.gray500};

      &:disabled {
        background-color: ${(props) => props.theme.colors.primary400};
      }
    }
  }
`;

export default LoginFormStyled;
