import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import Navigator from "./navigator";
import NavHeader from "./components/nav-header.component";

import { ExamProvider } from "./contexts/exam.context";

export default function App() {
  return (
    <NavigationContainer>
      <ExamProvider>
        <Navigator screenOptions={screenOptions} />
      </ExamProvider>
      <StatusBar />
    </NavigationContainer>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: "rgb(255, 139, 0)",
  },
  headerTintColor: "#fff",
  headerTitle: (props) => <NavHeader {...props} />,
};
