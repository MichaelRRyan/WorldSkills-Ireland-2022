import { useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { ExamContext } from "../contexts/exam.context";

const ExamDetailsScreen = ({ navigation }) => {
  const { currentExam } = useContext(ExamContext);

  console.log(currentExam);

  return (
    <View>
      <Button
        title="Submit"
        onPress={() => navigation.navigate("class-view-choice")}
      />
    </View>
  );
};

export default ExamDetailsScreen;
