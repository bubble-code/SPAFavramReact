import { Outlet } from "react-router-dom";
import MiNavbar from "./components/Navbar";
const Layout = () => {
  return (
    <div className="main-app">
      <div className="header-app">
        <MiNavbar />
      </div>
      <div className="flex px-10 mx-auto">
        <Outlet />
      </div>
      <div className="footer-app"></div>
    </div>
  );
};

export default Layout;
