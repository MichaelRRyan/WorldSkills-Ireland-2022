import { createContext, useState } from "react";

export const ExamContext = createContext({
  currentExam: null,
  setCurrentExam: () => null,
});

export const ExamProvider = ({ children }) => {
  const [currentExam, setCurrentExam] = useState(null);
  const value = { currentExam, setCurrentExam };

  return <ExamContext.Provider value={value}>{children}</ExamContext.Provider>;
};
