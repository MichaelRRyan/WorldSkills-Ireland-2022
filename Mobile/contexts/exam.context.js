import { createContext, useState } from "react";

const exam = {
  teacherName: "",
  subject: "",
  date: null,
  duration: null,
  timeStamp: null,
  students: [
    { id: 0, name: "", mark: 0 },
    { id: 1, name: "", mark: 0 },
    { id: 2, name: "", mark: 0 },
    { id: 3, name: "", mark: 0 },
    { id: 4, name: "", mark: 0 },
    { id: 5, name: "", mark: 0 },
    { id: 6, name: "", mark: 0 },
    { id: 7, name: "", mark: 0 },
    { id: 8, name: "", mark: 0 },
  ],
};

export const ExamContext = createContext({
  currentExam: null,
  setCurrentExam: () => null,
});

export const ExamProvider = ({ children }) => {
  const [currentExam, setCurrentExam] = useState(exam);
  const value = { currentExam, setCurrentExam };

  return <ExamContext.Provider value={value}>{children}</ExamContext.Provider>;
};
