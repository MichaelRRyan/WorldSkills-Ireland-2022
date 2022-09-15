import { useContext, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { ExamContext } from "../contexts/exam.context";

const TeacherDetailsScreen = ({ navigation }) => {
  const [teacherName, setTeacherName] = useState("");
  const { setCurrentExam } = useContext(ExamContext);

  const onChangeTextHandler = (text) => {
    setTeacherName(text);
  };

  const onSubmitHandler = () => {
    setCurrentExam({ teacherName });
    navigation.navigate("exam-details");
  };

  return (
    <View>
      <Text>Please enter your name:</Text>
      <TextInput placeholder="John Doe" onChangeText={onChangeTextHandler} />
      <Button title="Submit" onPress={onSubmitHandler} />
    </View>
  );
};

export default TeacherDetailsScreen;
