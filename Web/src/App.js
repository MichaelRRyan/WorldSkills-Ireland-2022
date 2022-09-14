import { Routes, Route, Outlet, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

const Navigation = () => (
  <div>
    <Link to="/home">Home</Link>
    <Outlet />
  </div>
);

const Home = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </header>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        {/* <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
