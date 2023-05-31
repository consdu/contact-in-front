import { Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../Navbar/Navbar";
import { useAppDispatch } from "../../store";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import { feedbacks, paths } from "../../constants";

const Layout = (): React.ReactElement => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { removeLocalStorageItem } = useLocalStorage();

  const handleLogoutClick = () => {
    removeLocalStorageItem("token");
    dispatch(logoutUserActionCreator());
    navigate(paths.login);
    toast.success(feedbacks.logoutSuccesful);
  };

  return (
    <>
      <Outlet />
      <footer>
        {pathname === "/login" || <Navbar onLogoutClick={handleLogoutClick} />}
      </footer>
    </>
  );
};

export default Layout;
