import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Authentication from "./routes/authentication/authentication.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import StudentInfo from "./routes/student-info/student-info.component";
import ClassSummary from "./routes/class-summary/class-summary.component";
import SubjectInfo from "./routes/subject-info/subject-info.component";
import ExternalResults from "./routes/external-results/external-results.component";
import UploadData from "./routes/upload-data/upload-data.component.jsx";

import { UserContext } from "./contexts/user.context";

function App() {
  const { currentUser } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {currentUser ? (
          <>
            <Route index element={<Home />} />
            <Route path="student-info" element={<StudentInfo />} />
            <Route path="class-summary" element={<ClassSummary />} />
            <Route path="subject-info" element={<SubjectInfo />} />
            <Route path="external-results" element={<ExternalResults />} />
            <Route path="upload-data" element={<UploadData />} />
          </>
        ) : (
          <Route index element={<Authentication />} />
        )}
      </Route>
    </Routes>
  );
}

export default App;
