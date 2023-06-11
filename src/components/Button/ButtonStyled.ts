import styled from "styled-components";

const ButtonStyled = styled.button`
  position: relative;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary600};
  color: #fff;
  text-transform: uppercase;
  padding-block: 20px;
  border-radius: ${(props) => props.theme.radius.small};
  margin-top: 30px;
  box-shadow: 0px 2px 2px -1px ${(props) => props.theme.colors.gray500};
  transition: background-color 0.2s ease;
  border: 2px solid ${(props) => props.theme.colors.primary600};

  &:disabled {
    background-color: #f1f8f420;
    color: ${(props) => props.theme.colors.primary600};
  }

  &:disabled.button--loading {
    background-color: ${(props) => props.theme.colors.primary600};
    border: none;
  }

  &.button--hide-text {
    color: transparent;
  }

  &.button--loading::after {
    content: "";
    position: absolute;
    width: 32px;
    height: 32px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: button-loading-spinner 1s ease infinite;
  }

  @keyframes button-loading-spinner {
    from {
      transform: rotate(0turn);
    }

    to {
      transform: rotate(1turn);
    }
  }
`;

export default ButtonStyled;
