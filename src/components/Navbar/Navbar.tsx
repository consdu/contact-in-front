import { NavLink } from "react-router-dom";
import { IoPeople, IoPersonAdd, IoExit } from "react-icons/io5";
import NavbarStyled from "./NavbarStyled";
import ContainerStyled from "../shared/ContainerStyled";

const Navbar = (): React.ReactElement => {
  return (
    <NavbarStyled>
      <ContainerStyled>
        <ul className="navbar-links">
          <li className="navbar-links__link">
            <NavLink to="/contacts" aria-label="contacts">
              <IoPeople />
            </NavLink>
          </li>
          <li className="navbar-links__link">
            <NavLink to="/add-contact" aria-label="add contact">
              <IoPersonAdd />
            </NavLink>
          </li>
          <li className="navbar-links__link">
            <NavLink to="/update-contact" aria-label="logout">
              <IoExit />
            </NavLink>
          </li>
        </ul>
      </ContainerStyled>
    </NavbarStyled>
  );
};

export default Navbar;
