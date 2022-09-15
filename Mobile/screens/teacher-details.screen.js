import { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
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
    <View style={styles.container}>
      <Text>Please enter your name:</Text>
      <TextInput placeholder="John Doe" onChangeText={onChangeTextHandler} />
      <Button
        title="Submit"
        color="rgb(255, 139, 0)"
        onPress={onSubmitHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(255, 210, 0)",
    flex: 1,
  },
});

export default TeacherDetailsScreen;
