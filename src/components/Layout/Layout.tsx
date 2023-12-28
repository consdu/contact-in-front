import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { feedbacks, paths } from "../../constants";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { useAppDispatch, useAppSelector } from "../../store";
import { resetContactsStateActionCreator } from "../../store/contacts/contactsSlice";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import Navbar from "../Navbar/Navbar";

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
