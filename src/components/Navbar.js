import React from "react";

import { Menu } from "antd";

export const Navbar=()=> {
  return <div>
    <Menu style={{fontSize: 20}}
    mode="horizontal"
    items={[
      {
        label:'Home',
        key: 'home'
      },
      {
        label:'Favorite',
        key: 'favorite'
      },
      {
        label:'History',
        key: 'history'
      },
      {
        label:'Login',
        key: 'login'
      },
    ]}
    ></Menu>
  </div>
}

export default Navbar;