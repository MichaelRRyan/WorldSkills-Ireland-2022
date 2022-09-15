import { useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import StudentCard from "../components/student-card.component";
import { ExamContext } from "../contexts/exam.context";

const ClassroomViewScreen = ({ navigation }) => {
  const { currentExam } = useContext(ExamContext);

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
        onPress={() => navigation.navigate("landing")}
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
