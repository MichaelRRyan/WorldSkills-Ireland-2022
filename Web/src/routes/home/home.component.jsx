import React from "react";
import { Link } from "react-router-dom";

import "./home.styles.scss";

const Home = () => (
  <div className="home">
    <Link className="regular-button" to="/student-info">
      Student Info
    </Link>
    <Link className="regular-button" to="/class-summary">
      Class Summary
    </Link>
    <Link className="regular-button" to="/subject-info">
      Teacher Subject Info
    </Link>
    <Link className="regular-button" to="/external-results">
      External Examiner Results
    </Link>
  </div>
);

export default Home;
