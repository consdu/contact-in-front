import styled from "styled-components";

const NavbarStyled = styled.nav`
  height: 100px;
  background-color: ${(props) => props.theme.colors.primary200};
  position: fixed;
  bottom: 0;
  width: 100%;

  .navbar-links {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__link a,
    &__link button {
      width: 60px;
      aspect-ratio: 1;
      background-color: ${(props) => props.theme.colors.primary400};
      color: ${(props) => props.theme.colors.primary900};
      font-size: 36px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 2px 2px 8px -1px ${(props) => props.theme.colors.gray400};

      &.active {
        background-color: ${(props) => props.theme.colors.accent};
      }
    }
  }
`;

export default NavbarStyled;
