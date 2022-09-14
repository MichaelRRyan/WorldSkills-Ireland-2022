import React from "react";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import logo from "../../logo.svg";

const Home = () => (
  <div className="App">
    <button onClick={signOutUser}>Sign Out</button>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </header>
  </div>
);

export default Home;
