import { Outlet } from "react-router-dom";

import header from "../../assets/images/Logo_WSG_School.PNG";

const Navigation = () => (
  <>
    <header>
      <img src={header} alt="" />
    </header>
    <Outlet />
  </>
);

export default Navigation;
