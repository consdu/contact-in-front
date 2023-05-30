import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Outlet />
      <footer>{!(location.pathname === "/login") && <Navbar />}</footer>
    </>
  );
};

export default Layout;
