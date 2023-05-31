import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = (): React.ReactElement => {
  const { pathname } = useLocation();

  return (
    <>
      <Outlet />
      <footer>{pathname === "/login" || <Navbar />}</footer>
    </>
  );
};

export default Layout;
