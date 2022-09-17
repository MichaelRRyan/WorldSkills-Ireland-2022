import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LandingScreen from "./screens/landing.screen";
import TeacherDetailsScreen from "./screens/teacher-details.screen";
import ExamDetailsScreen from "./screens/exam-details.screen";
import ClassViewChoiceScreen from "./screens/class-view-choice.screen";
import ClassroomViewScreen from "./screens/classroom-view.screen";
import ClassListViewScreen from "./screens/class-list-view.screen";

const Stack = createNativeStackNavigator();

const Navigator = (props) => {
  return (
    <Stack.Navigator initialRouteName="landing" {...props}>
      <Stack.Screen
        name="landing"
        component={LandingScreen}
        options={{ title: "Launch Exam" }}
      />
      <Stack.Screen
        name="teacher-details"
        component={TeacherDetailsScreen}
        options={{ title: "Teacher Details" }}
      />
      <Stack.Screen
        name="exam-details"
        component={ExamDetailsScreen}
        options={{ title: "Exam Details" }}
      />
      <Stack.Screen
        name="class-view-choice"
        component={ClassViewChoiceScreen}
        options={{ title: "Class View Choice" }}
      />
      <Stack.Screen
        name="classroom-view"
        component={ClassroomViewScreen}
        options={{ title: "Classroom View" }}
      />
      <Stack.Screen
        name="class-list-view"
        component={ClassListViewScreen}
        options={{ title: "Class List View" }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
