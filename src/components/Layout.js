import { Link, Outlet } from "react-router-dom";
import { Layout as AntLayout } from 'antd';
export const Layout = () => {
  return (
    <>
      <AntLayout.Header>
        <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
        <Link to="Login">Login</Link>
      </AntLayout.Header>

      <Outlet/>

      <AntLayout.Footer>2024</AntLayout.Footer>
    </>
  )
}

export default Layout