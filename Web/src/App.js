import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { UserContext } from "./contexts/user.context";
import Authentication from "./routes/authentication/authentication.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

function App() {
  const { currentUser } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {currentUser ? (
          <Route index element={<Home />} />
        ) : (
          <Route index element={<Authentication />} />
        )}

        {/* <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
