import { NavLink } from "react-router-dom";
import { IoPeople, IoPersonAdd, IoExit } from "react-icons/io5";
import NavbarStyled from "./NavbarStyled";
import ContainerStyled from "../shared/ContainerStyled";

const Navbar = () => {
  return (
    <NavbarStyled>
      <ContainerStyled>
        <ul className="navbar_links">
          <li className="navbar_link">
            <NavLink to="/contacts" aria-label="contacts">
              <IoPeople />
            </NavLink>
          </li>
          <li className="navbar_link">
            <NavLink to="/add-contact" aria-label="add contact">
              <IoPersonAdd />
            </NavLink>
          </li>
          <li className="navbar_link">
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
