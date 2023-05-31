import { NavLink } from "react-router-dom";
import { IoPeople, IoPersonAdd, IoExit } from "react-icons/io5";
import NavbarStyled from "./NavbarStyled";
import ContainerStyled from "../shared/ContainerStyled";
import { paths } from "../../constants";

interface NavbarProps {
  onLogoutClick: () => void;
}

const Navbar = ({ onLogoutClick }: NavbarProps): React.ReactElement => {
  return (
    <NavbarStyled>
      <ContainerStyled>
        <ul className="navbar-links">
          <li className="navbar-links__link">
            <NavLink to={paths.contacts} aria-label="contacts">
              <IoPeople />
            </NavLink>
          </li>
          <li className="navbar-links__link">
            <NavLink to={paths.addContact} aria-label="add contact">
              <IoPersonAdd />
            </NavLink>
          </li>
          <li className="navbar-links__link">
            <button aria-label="logout" onClick={onLogoutClick}>
              <IoExit />
            </button>
          </li>
        </ul>
      </ContainerStyled>
    </NavbarStyled>
  );
};

export default Navbar;
