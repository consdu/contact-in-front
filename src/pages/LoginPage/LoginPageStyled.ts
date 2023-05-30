import styled from "styled-components";

const LoginPageStyled = styled.div`
  .main-title {
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: ${(props) => props.theme.fontSizes.large};
    font-weight: 300;
    text-align: center;
    margin-top: 70px;

    &__logo {
      font-weight: 600;
      background-color: ${(props) => props.theme.colors.primary300};
      padding: 0 5px;
      border-radius: 10px;
      margin-left: 5px;
    }
  }
`;

export default LoginPageStyled;
