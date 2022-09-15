import { useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { ExamContext } from "../contexts/exam.context";

const ClassViewChoiceScreen = ({ navigation }) => {
  const { currentExam } = useContext(ExamContext);

  console.log(currentExam);

  return (
    <View>
      <Button
        title="Classroom View"
        onPress={() => navigation.navigate("classroom-view")}
      />
      <Button
        title="Class List View"
        onPress={() => navigation.navigate("class-list-view")}
      />
    </View>
  );
};

export default ClassViewChoiceScreen;
