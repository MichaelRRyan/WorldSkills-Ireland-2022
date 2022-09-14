import { Outlet, Link } from "react-router-dom";

const Navigation = () => (
  <div>
    <Link to="/home">Home</Link>
    <Outlet />
  </div>
);

export default Navigation;
