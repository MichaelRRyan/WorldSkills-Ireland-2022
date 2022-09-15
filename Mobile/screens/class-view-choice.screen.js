import { useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { ExamContext } from "../contexts/exam.context";

const ClassViewChoiceScreen = ({ navigation }) => {
  const { currentExam } = useContext(ExamContext);

  console.log(currentExam);

  return (
    <View style={styles.container}>
      <Button
        title="Classroom View"
        color="rgb(255, 139, 0)"
        onPress={() => navigation.navigate("classroom-view")}
      />
      <Button
        title="Class List View"
        color="rgb(255, 139, 0)"
        onPress={() => navigation.navigate("class-list-view")}
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

export default ClassViewChoiceScreen;
