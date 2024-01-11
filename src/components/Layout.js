import { NavLink, Outlet } from "react-router-dom";
import { Layout as AntLayout } from "antd";
import { Footer } from "antd/es/layout/layout";
export const Layout = () => {
  return (
    <>
      <AntLayout.Header>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <NavLink to="/">Home</NavLink>
          </div>
          <div>
            <NavLink to="Login" style={{ marginRight: "20px" }}>
              Login
            </NavLink>
            <NavLink to="Registration">Registration</NavLink>
          </div>
        </div>
      </AntLayout.Header>

      <Outlet />

      <Footer style={{ textAlign: 'center' }}>
         ©{new Date().getFullYear()} 
      </Footer>
    </>
  );
};

export default Layout;
