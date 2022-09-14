import { Outlet, Link } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => (
  <div>
    <Link to="/">Home</Link>
    <button onClick={signOutUser}>Sign Out</button>
    <Outlet />
  </div>
);

export default Navigation;
