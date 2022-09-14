import React from "react";
import Papa from "papaparse";
import {
  createAuthUserWithEmailAndPassword,
  createDocument,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const UploadData = () => {
  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        console.log(results.data);
        results.data.forEach(parseStudentInfo);
      },
    });
  };

  const parseStudentInfo = async (studentInfo) => {
    const { Forename, Surname, Password } = studentInfo;
    const startDate = studentInfo["Start-Date"];

    const forename = Forename.split(",")[0];
    const surname = Surname.split(",")[0];

    const email = forename[0] + surname + "@gmail.com";
    const displayName = forename + " " + surname;
    const role = 0;

    const studentKeys = ["Forename", "Surname", "Start-Date", "Password"];
    var grades = {};

    Object.keys(studentInfo).forEach((key) => {
      if (!studentKeys.includes(key)) {
        grades[key] = studentInfo[key];
      }
    });

    createDocument("students", {
      forename,
      surname,
      startDate,
      grades,
    });

    const { user } = await createAuthUserWithEmailAndPassword(email, Password);
    createUserDocumentFromAuth(user, { displayName, role });
  };

  return (
    <div>
      <input
        type="file"
        name="file"
        accept=".csv"
        onChange={changeHandler}
        style={{ display: "block", margin: "10px auto" }}
      />
    </div>
  );
};

export default UploadData;
