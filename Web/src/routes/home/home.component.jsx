import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";

import "./home.styles.scss";

const NONE = -1;
const STUDENT = 0;
const TEACHER = 1;
const ADMIN = 2;

const Home = () => {
  const { currentUser } = useContext(UserContext);
  const { role } = currentUser;

  return (
    <div className="home">
      {currentUser.displayName && currentUser.displayName !== "" ? (
        <h3>Welcome, {currentUser.displayName}</h3>
      ) : (
        <></>
      )}

      {role === NONE ? (
        <p>
          No role found. Please contact your adminstrator to recieve a role.
        </p>
      ) : (
        <></>
      )}

      {role === STUDENT || role === ADMIN ? (
        <Link className="regular-button" to="/student-info">
          Student Info
        </Link>
      ) : (
        <></>
      )}

      {role === TEACHER || role === ADMIN ? (
        <>
          <Link className="regular-button" to="/class-summary">
            Class Summary
          </Link>
          <Link className="regular-button" to="/subject-info">
            Teacher Subject Info
          </Link>
          <Link className="regular-button" to="/external-results">
            External Examiner Results
          </Link>
        </>
      ) : (
        <></>
      )}

      {role === ADMIN ? (
        <Link className="regular-button" to="/upload-data">
          Upload Data
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
