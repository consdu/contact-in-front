import { Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../Navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../store";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import { resetContactsStateActionCreator } from "../../store/contacts/contactsSlice";
import { feedbacks, paths } from "../../constants";

const Layout = (): React.ReactElement => {
  const { pathname } = useLocation();
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { removeLocalStorageItem } = useLocalStorage();

  const handleLogoutClick = () => {
    removeLocalStorageItem("token");
    dispatch(logoutUserActionCreator());
    dispatch(resetContactsStateActionCreator());
    navigate(paths.login);
    toast.success(feedbacks.logoutSuccesful);
  };

  return (
    <>
      <Outlet />
      <footer>
        {pathname === "/login" || !isLogged || (
          <Navbar onLogoutClick={handleLogoutClick} />
        )}
      </footer>
    </>
  );
};

export default Layout;
