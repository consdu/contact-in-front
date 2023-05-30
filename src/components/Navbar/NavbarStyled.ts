import styled from "styled-components";

const NavbarStyled = styled.nav`
  height: 90px;
  background-color: ${(props) => props.theme.colors.primary200};
  position: fixed;
  bottom: 0;
  width: 100%;

  .navbar_links {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar_link a {
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
  }

  .navbar_link a.active {
    background-color: ${(props) => props.theme.colors.accent};
  }
`;

export default NavbarStyled;
