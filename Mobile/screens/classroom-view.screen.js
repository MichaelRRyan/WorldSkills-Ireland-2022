import { useContext } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import StudentCard from "../components/student-card.component";
import { ExamContext } from "../contexts/exam.context";

const ClassroomViewScreen = ({ navigation }) => {
  const { currentExam } = useContext(ExamContext);

  const onConcludeExam = async () => {
    // Tries to retrieve previous exams.
    var exams = [];

    try {
      const jsonValue = await AsyncStorage.getItem("exams");
      if (jsonValue != null) {
        exams = JSON.parse(jsonValue);
      }
    } catch (e) {
      console.warn(e);
    }

    currentExam.timeStamp = new Date();
    exams.push(currentExam);

    try {
      const jsonValue = JSON.stringify(exams);
      await AsyncStorage.setItem("exams", jsonValue);
    } catch (e) {
      console.warn(e);
    }

    navigation.navigate("landing");
  };

  return (
    <View style={styles.container}>
      <Text>Subject: {currentExam.subject}</Text>
      <Text>Teacher: {currentExam.teacherName}</Text>
      <Text>Scheduled for: {currentExam.date.toLocaleString()}</Text>
      <Text>Duration: {currentExam.duration.toLocaleTimeString()}</Text>
      <FlatList
        data={currentExam.students}
        renderItem={(item) => <StudentCard {...item} />}
        keyExtractor={(item) => item.id}
        numColumns={3}
        style={styles.studentGrid}
      />
      <Button
        title="Conclude Exam"
        color="rgb(255, 139, 0)"
        onPress={onConcludeExam}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(255, 210, 0)",
    flex: 1,
  },
  studentGrid: {
    alignSelf: "center",
  },
});

export default ClassroomViewScreen;
