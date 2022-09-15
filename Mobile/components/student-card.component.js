import { useContext } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";

import { ExamContext } from "../contexts/exam.context";

const screenWidth = Dimensions.get("window").width;
const numColumns = 3;
const gap = 5;
const tileSize = screenWidth / numColumns - gap * numColumns;

const StudentCard = ({ item }) => {
  const { currentExam, setCurrentExam } = useContext(ExamContext);

  const onNameTextChanged = (text) => {
    currentExam.students[item.id].name = text;
    setCurrentExam(currentExam);
  };

  const onMarkTextChanged = (text) => {
    currentExam.students[item.id].mark = text;
    setCurrentExam(currentExam);
  };

  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <TextInput onChangeText={onNameTextChanged} placeholder="John Doe" />
      <Text>Mark:</Text>
      <TextInput
        onChangeText={onMarkTextChanged}
        keyboardType="numeric"
        placeholder="3.5"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: tileSize,
    height: tileSize,
    margin: gap,
    padding: 5,
    textAlign: "center",
    backgroundColor: "rgb(255, 139, 0)",
  },
});

export default StudentCard;
